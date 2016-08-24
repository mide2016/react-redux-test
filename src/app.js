import React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
//路由
import routes from './routes';

//ant的样式引入
import 'antd/lib/icon/style/css';
import 'antd/lib/message/style/css';
import 'antd/lib/checkbox/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/rate/style/css';
import 'antd/lib/progress/style/css';

import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

module.exports = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)