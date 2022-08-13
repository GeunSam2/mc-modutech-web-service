import * as React from 'react';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import logoImg from '../img/yyassang.png';

function TopHeader() {
  return (
    <TopNavigation
      identity={{
        href: '#',
        title: '즐기자 야 쌩!!',
        logo: {
          src: logoImg,
          alt: 'Service',
        },
      }}
      utilities={[
        {
          type: 'button',
          text: 'Link',
          href: 'https://example.com/',
          external: true,
          externalIconAriaLabel: ' (opens in a new tab)',
        },
        {
          type: 'button',
          iconName: 'notification',
          title: 'Notifications',
          ariaLabel: 'Notifications (unread)',
          badge: true,
          disableUtilityCollapse: false,
        },
        {
          type: 'menu-dropdown',
          iconName: 'settings',
          ariaLabel: 'Settings',
          title: 'Settings',
          items: [
            {
              id: 'settings-org',
              text: 'Organizational settings',
            },
            {
              id: 'settings-project',
              text: 'Project settings',
            },
          ],
        },
        {
          type: 'menu-dropdown',
          text: 'User Information',
          description: 'email@example.com',
          iconName: 'user-profile',
          items: [
            { id: 'profile', text: 'Profile' },
            { id: 'preferences', text: 'Preferences' },
            { id: 'security', text: 'Security' },
            {
              id: 'support-group',
              text: 'Support',
              items: [
                {
                  id: 'documentation',
                  text: 'Documentation',
                  href: '#',
                  external: true,
                  externalIconAriaLabel:
                        ' (opens in new tab)',
                },
                { id: 'support', text: 'Support' },
                {
                  id: 'feedback',
                  text: 'Feedback',
                  href: '#',
                  external: true,
                  externalIconAriaLabel:
                        ' (opens in new tab)',
                },
              ],
            },
            { id: 'signout', text: 'Sign out' },
          ],
        },
      ]}
      i18nStrings={{
        searchIconAriaLabel: 'Search',
        searchDismissIconAriaLabel: 'Close search',
        overflowMenuTriggerText: 'More',
        overflowMenuTitleText: 'All',
        overflowMenuBackIconAriaLabel: 'Back',
        overflowMenuDismissIconAriaLabel: 'Close menu',
      }}
    />
  );
}

export default TopHeader;
