import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const CreateUser = createAsyncThunk(
  "showUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://655b193eab37729791a88bbd.mockapi.io/NEEL-CURD");
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const ReadSlice = createSlice({
  name: "page1",
  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload as any);
      })
      .addCase(CreateUser.rejected, (state, action) => {
        console.log("error", action.payload);
        state.isError = true;
      });
  },
});

export default ReadSlice.reducer;