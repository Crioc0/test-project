import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUsersData, User } from "@/api/user";

type TInitialsState = {
    data: User[],
    error: undefined | string,
    loading: boolean,
}

const initialState : TInitialsState = {
 data: [],
 error: undefined,
 loading: false,
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
 const response = await getAllUsersData();
 return response;
});

const usersSlice = createSlice({
 name: "users",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
   builder
     .addCase(fetchUsers.pending, (state) => {
       state.loading = true;
       state.error = undefined;
     })
     .addCase(fetchUsers.fulfilled, (state, action) => {
       state.loading = false;
       state.data = action.payload;
     })
     .addCase(fetchUsers.rejected, (state, action) => {
       state.loading = false;
       state.error = action.error.message;
     });
 },
});

export default usersSlice.reducer;