import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fooService from "./fooService";

const initialState = {
  foo: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createFoo = createAsyncThunk(
  "foo/create",
  async (fooData, thunkAPI) => {
    try {
      return await fooService.createFoo(fooData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getFoo = createAsyncThunk("foo/getAll", async (_, thunkAPI) => {
  try {
    return await fooService.getFoo();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});
export const deleteFoo = createAsyncThunk(
  "foo/delete",
  async (id, thunkAPI) => {
    try {
      return await fooService.deleteFoo(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fooSlice = createSlice({
  name: "foo",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFoo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFoo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.foo = action.payload;
      })
      .addCase(getFoo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createFoo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFoo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createFoo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.foo.push(action.payload);
      })
      .addCase(deleteFoo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFoo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteFoo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.foo = state.foo.filter((foo) => foo._id !== action.payload.id);
      });
  },
});

export const { reset } = fooSlice.actions;
export default fooSlice.reducer;
