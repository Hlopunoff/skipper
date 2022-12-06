import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { IInitial } from '../../models/IInitial';
import { IMentee } from '../../models/IMentee';

interface IMenteeCredentials {
    id: number | string | undefined;
    accessToken: string;
}

const initialState: IInitial<IMentee> = {
    isLoading: true,
    isError: '',
    user: undefined,
};

export const getMentee = createAsyncThunk(
    'mentee/getMentee',
    async ({id, accessToken}: IMenteeCredentials, {rejectWithValue}) => {
        try {
            const res = await fetch(`http://45.12.4.230/api/users/${id}/mentee_profile`, {
                method: 'POST',
                headers: {
                    "AUTHORIZATION": `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                }
            });

            if(!res.ok) {
                throw new Error(`Не удалось получить менти с таким id: ${id}`);
            }

            return await res.json();
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

const menteeSlice = createSlice({
    name: 'mentee',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMentee.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(getMentee.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        })
        .addCase(getMentee.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        });
    }
});

export default menteeSlice.reducer;
export const {} = menteeSlice.actions;