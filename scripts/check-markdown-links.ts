import { sh } from './utils';
import path from 'node:path';
import fs, { WriteFileOptions } from 'node:fs';
import fetch from 'node-fetch';
interface FilesAndLinks {
  [key: string]: Array<string>;
}

const appDir = path.resolve(__dirname, '..');
const fileExtensions = ['.md', '.mdx'];
const outputFileName = `${appDir}/brokenLinkReport.html`;
let foundFiles: string | undefined;
const urlsToCheck: FilesAndLinks = {};
const githubPrefix = 'https://github.com/CMSgov/design-system/blob/main/';
const docSitePrefix = 'https://design.cms.gov/';
const tableHeaders = [
  'Where on the web?',
  'Where on my computer?',
  "Link that's broken",
  'Priority',
];

// Construct our find command:
const findCommand = (): string => {
  const commandBase = `find ${appDir} `;
  const commandArgs = fileExtensions
    .map((ext) => {
      return `-type f -name '*${ext}' -not -path '*/node_modules/*' -not -path '*/.github/*'`;
    })
    .join(` -or `);

  return commandBase.concat(commandArgs);
};

// Create a table:
const table = (header: string, body: string): string => {
  const classes = ['ds-c-table', 'ds-c-table--stacked', 'ds-u-margin-x--auto', 'ds-u-margin-y-2'];
  return `<table class="${classes.join(' ')}">${header}${body}</table`;
};

// Create a table header:
const tableHeader = () => {
  const columnNames = tableHeaders.map((header) => `<th scope="col">${header}</th>`).join('\n');
  return `<thead><tr>${columnNames}</tr></thead>`;
};

const tableBodyContainer: Array<string> = [];

const createExternalLink = (linkUrl: string): string => {
  const githubUrlSuffix = linkUrl
    .split('/')
    .splice(linkUrl.split('/').indexOf('design-system') + 1)
    .join('/');
  const gHubUrl = githubPrefix + githubUrlSuffix;
  let externalLink = `<td data-title="${tableHeaders[0]}"><strong>Github: </strong>\n<a href="${gHubUrl}" target="_blank">${gHubUrl}</a></td>`;
  if (linkUrl.includes('/content/')) {
    const spliceFrom = linkUrl.split('/').indexOf('content');
    const docSiteUrlSuffix = linkUrl
      .split('/')
      .splice(spliceFrom + 1)
      .join('/');
    const dSiteUrlSansExt = docSiteUrlSuffix.split('.md')[0];
    const dSiteUrl = docSitePrefix + dSiteUrlSansExt;
    externalLink = `<td data-title="${tableHeaders[0]}"><strong>Github: </strong>\n<a href="${gHubUrl}" target="_blank">${gHubUrl}</a><br/><strong>Doc Site: </strong><a href="${dSiteUrl}" target="_blank">${dSiteUrl}</a></td>`;
  }
  return externalLink;
};

const tableBodyContent = (file: string, filePath: string, status: number, url: string) => {
  const externalLink = createExternalLink(filePath);
  const internalLink = `<td data-title="${tableHeaders[1]}"><a href="${file}" target="_blank">${filePath}</a></td>`;
  const brokenLink = `<td data-title="${tableHeaders[2]}"><a href="${url}" target="_blank">${url}</a></td>`;
  const priority = `<td data-title="${tableHeaders[3]}">${
    status === 404
      ? `<strong>High:</strong> 404 broken link.`
      : `<strong>Investigate status:</strong> ${status}`
  }</td>`;
  const content = `<tr> ${externalLink + internalLink + brokenLink + priority}</tr>`;
  return content;
};

// Prevents us trying to call localhost urls.
const isValidUrl = (url: string): boolean => {
  let urlHolder: URL;
  try {
    urlHolder = new URL(url);
  } catch (error) {
    console.log(
      `${url} could not be turned into a proper URL. Maybe explicitly exclude this type of thing?`
    );
    return false;
  }
  if (urlHolder.hostname.includes('localhost')) {
    return false;
  }
  return true;
};

// Wrapper function for Synchronous file writing.
const writeToFile = (
  outputFileName: string,
  content = '',
  flag: WriteFileOptions,
  errorMessage = 'Error!',
  successMessage?: string
) => {
  const baseCSS = `<link rel="stylesheet" href="https://design.cms.gov/cdn/design-system/10.1.1/css/index.css" />`;
  const coreCSS = `<link rel="stylesheet" href="https://design.cms.gov/cdn/design-system/10.1.1/css/core-theme.css" />`;
  const htmlOutput = `<!DOCTYPE html><html><head>${baseCSS}${coreCSS}</head><body>${content}</body></html>`;
  try {
    fs.writeFileSync(outputFileName, htmlOutput, flag);
    successMessage && console.log(successMessage);
  } catch (err) {
    console.error(errorMessage.concat(` ${err}`));
  }
};

// Extract links from a particular md/mdx file and place into predefined object:
const findLinks = (filePath: string, regex: RegExp): void => {
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const matches: RegExpMatchArray | null = fileContent.match(regex);
    if (matches) {
      (urlsToCheck as FilesAndLinks)[filePath] = matches.filter((match) => {
        if (isValidUrl(match)) {
          return match;
        }
      });
    }
  } catch (error) {
    console.log(
      `An error occurred when parsing this file: ${filePath}. \nHere's the error:\n ${error}`
    );
  }
};

// Use node-fetch to query urls and return a status code:
const curl = async (file: string, url: string): Promise<void> => {
  const spliceFrom = file.split('/').indexOf('design-system');
  const filePath: string = file.split('/').splice(spliceFrom).join('/');
  const content = '';
  fetch(url).then((res) => {
    if (res.status !== 200) {
      const rowContent = tableBodyContent(file, filePath, res.status, url);
      tableBodyContainer.push(rowContent);
    }
    const outputTable = table(tableHeader(), tableBodyContainer.join(''));
    writeToFile(
      outputFileName,
      outputTable,
      {},
      `Could not write line to file.\nContent: ${content}. Error: `
    );
  });
};

// Run our command and plop string output into a variable:
try {
  foundFiles = sh(findCommand());
} catch (error) {
  console.log('Your find command failed with the following error:', error);
}

if (!foundFiles) {
  console.log(`No files found with the extensions ${fileExtensions.join(', ')} in ${appDir}.`);
  process.exit(0);
} else {
  const allFiles = foundFiles.split('\n');
  const searchExpression = /https?:\/\/[\S]*?[^\)\]\(\"' \n]*/g;
  allFiles.forEach((file) => findLinks(file, searchExpression));
}

// Create our file/blow away existing content so we can overwrite:
writeToFile(outputFileName, '', {}, 'File not cleaned:', 'Cleaned file. Preparing to write.');

// Loop over all files and links and write the broken links into an HTML file:
for (const [file, links] of Object.entries(urlsToCheck)) {
  links.forEach((link) => {
    curl(file, link);
  });
}
