import { createSlice } from '@reduxjs/toolkit';// src/store.js


// 使用 createSlice 定義初始狀態和 reducer
const counterStore = createSlice({
  name: 'counter',
  //初始化state
  initialState: { count: 0 },
  //狀態方法
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


//獲取reducer
const counterReducer = counterStore.reducer

//以按需導出actions
export const { increment, decrement, reset } = counterStore.actions;

//默認導出reducer
export default counterReducer
