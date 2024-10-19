import counterReducer from './modules/counterStore'
import { configureStore } from '@reduxjs/toolkit';// src/store.js

// 配置 store，並將 slice 的 reducer 傳入
const stores = configureStore({
  reducer: {
    counter: counterReducer
  }
});




export default stores;