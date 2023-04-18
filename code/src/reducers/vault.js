import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedItems: [
    {
      id: '3ttq45',
      name: 'Saved1',
      isDone: false
    }
  ]
}
const vault = createSlice({
  name: 'vault',
  initialState,
  reducers: {
    addToVault: (store, action) => {
      const savedTodo = store.savedItems.find((item) => item.id === action.payload.id)
      if (!savedTodo) {
        store.savedItems = [...store.savedItems, action.payload]
      }
      console.log(savedTodo)
    }
  }
})

export default vault;