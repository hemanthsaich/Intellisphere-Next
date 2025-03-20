'use client';

import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavLink,
} from '@carbon/react';
import {
  UserAvatar,
  Settings,
  Notification,
  Dashboard,
  Archive,
  Document,
} from '@carbon/icons-react';
import styles from './dashboard.module.scss';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM IntelliSphere® Optim™ ">
              <HeaderName prefix="IBM IntelliSphere®">Optim™ </HeaderName>
              <HeaderNavigation aria-label="IBM IntelliSphere® Optim™ ">
                <HeaderMenuItem href="/dashboard">Dashboard</HeaderMenuItem>
                <HeaderMenuItem href="/dashboard/archive">Archive</HeaderMenuItem>
              </HeaderNavigation>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Notifications">
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Settings">
                  <Settings size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="User">
                  <UserAvatar size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
              <SideNav
                aria-label="Side navigation"
                expanded={isSideNavExpanded}
                isPersistent={false}
              >
                <SideNavItems>
                  <SideNavLink renderIcon={Dashboard} href="/dashboard">
                    Dashboard
                  </SideNavLink>
                  <SideNavLink renderIcon={Archive} href="/dashboard/archive">
                    Archive
                  </SideNavLink>
                  <SideNavLink renderIcon={Document} href="/dashboard/documents">
                    Documents
                  </SideNavLink>
                </SideNavItems>
              </SideNav>
            </Header>
          </>
        )}
      />
      <div className={styles.content}>{children}</div>
    </div>
  );
}