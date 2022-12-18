import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import mentor from './slices/mentorSlice';
import mentorList from './slices/mentorListSlice';
import user from './slices/userSlice';
import mentee from './slices/menteeSlice';
import filter from './slices/filterSlice';
import booking from './slices/bookingSlice';

const rootReducer = combineReducers({mentor, mentorList, mentee, user, filter, booking});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV === 'development' ? true : false,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;