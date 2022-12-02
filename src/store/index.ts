import {configureStore} from '@reduxjs/toolkit';
import mentor from './slices/mentorSlice';
import mentorList from './slices/mentorListSlice';

const store = configureStore({
    reducer: {
        mentor,
        mentorList,
    },
    devTools: process.env.NODE_ENV === 'development' ? true : false,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;