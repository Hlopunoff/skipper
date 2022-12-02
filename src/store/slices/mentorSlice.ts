import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { IMentor } from '../../models/IMentor';

interface IInitialMentor {
    isLoading: boolean;
    isError: boolean;
    mentor: IMentor | null;
}

const initialState: IInitialMentor = {
    isLoading: true,
    isError: false,
    mentor: null,
};

export const getMentor = createAsyncThunk(
    'mentor/getMentor',
    async (id: string | undefined) => {
        try {
            if(!id) {
                throw new Error(`There isn't any mentor with such id`);
            }
            const res = await fetch(`https://45.12.4.230/api/mentor/${id}`);

            if(!res.ok) {
                throw new Error(`Could not fetch mentor info on this id ${id}`);
            }

            return await res.json();
        } catch (error) {
            console.error((error as Error).message);
        }
    }
);

const mentorSlice = createSlice({
    name: 'mentor',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMentor.pending, state => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getMentor.fulfilled, (state, action) => {
            state.isLoading = false;
            state.mentor = action.payload;
        })
        .addCase(getMentor.rejected, state => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default mentorSlice.reducer;
export const {} = mentorSlice.actions;