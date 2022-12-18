import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IBookingInfo } from "../../models/IBookingInfo";
import { RootState } from "..";

interface IBookingInitial {
    isLoading: boolean;
    isError: string | undefined;
    bookingInfo: IBookingInfo;
}

const initialState: IBookingInitial = {
    isLoading: true,
    isError: '',
    bookingInfo: {
        lessonCost: 0,
        lessonType: '',
        contactInfo: '',
        menteeId: undefined,
        mentorId: undefined,
        lessonDateTime: '',
        lessonLength: 0
    }
};

export const sendBookInfo = createAsyncThunk<unknown, string, { state: RootState, rejectValue: string}>(
    'booking/reserve',
    async (id, {getState, rejectWithValue}) => {
        const res = await fetch(`http://45.12.4.230/api/reserve/${id}`, {
            method: 'POST',
            body: JSON.stringify(getState().booking.bookingInfo),
            headers: {
                "Content-Type": "application/json",
                "AUTHORIZATION": `Bearer ${getState().user.user?.accessToken}`,
            }
        });

        if(!res.ok) {
            return rejectWithValue('Не получилось забронировать занятие');
        }

        const data = await res.json();
        console.log(data);
    }
);

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setBookingInfo: (state, action) => {
            if(action.payload.fieldType === 'lessonType') {
                state.bookingInfo.lessonType = action.payload.data;
            } else if(action.payload.fieldType === 'lessonDetails') {
                state.bookingInfo.lessonCost = action.payload.data.cost;
                state.bookingInfo.lessonLength = action.payload.data.duration;
            } else if(action.payload.fieldType === 'time') {
                state.bookingInfo.lessonDateTime = action.payload.data;
            } else if(action.payload.fieldType === 'communication') {
                state.bookingInfo.contactInfo = action.payload.data;
            } else if(action.payload.fieldType === 'id') {
                state.bookingInfo.menteeId = +action.payload.data.menteeId;
                state.bookingInfo.mentorId = +action.payload.data.mentorId;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(sendBookInfo.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(sendBookInfo.rejected, (state, action) => {
            state.isError = action.payload;
            state.isLoading = false;
        });
    }
});

export default bookingSlice.reducer;
export const {setBookingInfo} = bookingSlice.actions;