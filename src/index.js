//項目入口，從這裡開始運行

//React必要的核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import stores from './store';
import { // React Router 
  RouterProvider 
} from 'react-router-dom';
import router from './router'//引入router檔案

import App from './App';//導入項目組件

//把APP根結點渲染到id為root的dom節點上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={stores}> 
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

