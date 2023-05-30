import type { ReactElement } from 'react';
import { Result } from 'antd';

// Replace with your own auth logic
const ValidUser = true;

export function AuthGuard({ children }: { readonly children: ReactElement }) {
  if (!ValidUser) {
    return <Result status="403" title="403" subTitle="Sorry, you are not authorized to access this page." />;
  }
  return children;
}
