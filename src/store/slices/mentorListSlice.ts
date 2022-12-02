import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { IMentor } from '../../models/IMentor';

interface IInitialMentorList {
    isLoading: boolean;
    isError: boolean;
    mentorList: IMentor[];
}

const initialState: IInitialMentorList = {
    isLoading: true,
    isError: false,
    mentorList: [],
};

export const getMentorList = createAsyncThunk(
    'mentorList/getMentors',
    async () => {
        try {
            //TODO Дописать endpoint в ссылке
            const res = await fetch(`http://45.12.4.230/api/`);

            if(!res.ok) {
                throw new Error(`Could not fetch list of mentors`);
            }

            return await res.json();
        } catch (error) {
            console.error((error as Error).message);
        }
    }
);

const mentorListSlice = createSlice({
    name: 'mentorList',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getMentorList.pending, state => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(getMentorList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.mentorList = action.payload;
        })
        .addCase(getMentorList.rejected, state => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default mentorListSlice.reducer;
export const {} = mentorListSlice.actions;