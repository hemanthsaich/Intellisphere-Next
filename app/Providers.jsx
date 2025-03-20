'use client';

import { Theme } from '@carbon/react';

export function Providers({ children }) {
  return (
    <Theme theme="g100">
      {children}
    </Theme>
  );
}