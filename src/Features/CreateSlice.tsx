import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//perform action
export const CreateUser = createAsyncThunk( //ayncThunk retun promise like fullfill pendind reject
  "Created User",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://655b193eab37729791a88bbd.mockapi.io/NEEL-CURD",
        {
          method: "POST",
          headers: { //this send data on mock api server
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const counterSlice = createSlice({
  name: "page1",
  initialState: {
    isLoading: false,
    data: [], // Initialize as an empty array
    isError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CreateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(CreateUser.fulfilled, (state, action: { payload:any }) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(CreateUser.rejected, (state, action) => {
        console.log("error", action.payload);
        state.isError = true;
      });
  },
});

export default counterSlice.reducer;