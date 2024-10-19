import { configureStore, createSlice } from '@reduxjs/toolkit';// src/store.js


// 使用 createSlice 定義初始狀態和 reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      state.count += 1;  // 使用 immer 處理不可變數據
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    }
  }
});

// 將 actions 導出以供組件調用
export const { increment, decrement, reset } = counterSlice.actions;

// 配置 store，並將 slice 的 reducer 傳入
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

export default store;