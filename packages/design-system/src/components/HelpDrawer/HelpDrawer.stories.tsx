import { useState } from 'react';
import { HelpDrawer } from './HelpDrawer';
import { Button } from '../Button';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HelpDrawer> = {
  title: 'Components/HelpDrawer',
  component: HelpDrawer,
  argTypes: {
    backdropClickExits: {
      // Until this pattern has solidified, we're not going to advertize this feature.
      table: {
        disable: true,
      },
    },
  },
  args: {
    footerTitle: 'Footer Title',
    footerBody: 'Footer content',
    heading: 'HelpDrawer Heading',
  },
};
export default meta;

type Story = StoryObj<typeof HelpDrawer>;

const drawerContent = (
  <>
    <strong>An Explanation</strong>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
      consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
      officia deserunt mollit anim id est laborum.
    </p>
  </>
);

export const Default: Story = {
  render: function Component(args) {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const showDrawer = () => setIsDrawerVisible(true);
    const hideDrawer = (...params) => {
      action('onCloseClick')(...params);
      setIsDrawerVisible(false);
    };

    return (
      <>
        <HelpDrawer {...args} onCloseClick={hideDrawer} isOpen={isDrawerVisible}>
          {drawerContent}
        </HelpDrawer>
        <Button className="ds-c-drawer__toggle" variation="ghost" onClick={showDrawer}>
          Toggle
        </Button>
      </>
    );
  },
};
