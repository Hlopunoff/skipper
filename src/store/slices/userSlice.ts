import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface IInitialUserSlice {
    isLoading: boolean;
    isError: boolean;
}

const initialState = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});