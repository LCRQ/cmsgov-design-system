import Logo from './Logo';
import { Logo as HCgovLogo } from '../Logo';
import { getLanguage } from '@cmsgov/design-system';
import { t } from '../i18n';

interface LogosRowProps {
  logoClassName?: string;
}

const LogosRow = function (props: LogosRowProps) {
  return (
    <div className="ds-l-container">
      <div className="hc-c-footer__logo-row">
        <Logo
          href={
            getLanguage() === 'es' ? 'https://www.cuidadodesalud.gov' : 'https://www.healthcare.gov'
          }
        >
          <HCgovLogo titleId="hc-c-footer__logo-title" className={props.logoClassName ?? ''} />
        </Logo>
        <div className="hc-c-footer__disclaimer">
          {/* Trademark language is only for the English translation of footer */}
          {getLanguage() === 'en' && (
            <p>
              Health Insurance Marketplace<sup>&#174;</sup> is a registered trademark of the
              Department of Health &amp; Human Services.
            </p>
          )}
          {/* eslint-disable-next-line react/no-danger -- Known-safe source */}
          <p dangerouslySetInnerHTML={{ __html: t('footer.disclaimer') }} />
        </div>
      </div>
    </div>
  );
};

export default LogosRow;
