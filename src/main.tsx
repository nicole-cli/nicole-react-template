import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import { initAxios } from '@/utils/axiosConfig';
import * as ReactDOM from 'react-dom';
import './polyfill';
import './index.scss';

import { RoutesRootComponent } from './routes';

// 初始化axios
initAxios();

ReactDOM.render(
  <ConfigProvider
    locale={zhCN}
    pageHeader={{
      ghost: false,
    }}
  >
    <RoutesRootComponent />,
  </ConfigProvider>,
  document.getElementById('root')
);
