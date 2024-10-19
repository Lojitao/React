//項目入口，從這裡開始運行

//React必要的核心包
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import stores from './store/index';
//導入項目組件
import App from './App';

//把APP根結點渲染到id為root的dom節點上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//包裹 App，傳入 store
<Provider store={stores}> 
  <App />
</Provider>);

