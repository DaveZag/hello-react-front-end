import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// action string
const GET_MSG = 'messages/fetchMessages';

// async action
export const fetchMessages = createAsyncThunk(GET_MSG, async () => {
  const response = await fetch('http://127.0.0.1:3000/api/message');
  const data = await response.json();
  return data;
});

// reducer
const messagesSlice = createSlice({
  name: 'message',
  initialState: { value: '' },
  extraReducers: (builder) => {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      const newState = state;
      newState.value = action.payload;
    });
  },
});

export default messagesSlice.reducer;
