import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import jwtDecode from 'jwt-decode';

interface IUserInitial {
    isLoading: boolean;
    isError: string;
    user: IUser;
}

interface IUserRegInfo {
    phoneNumber: string;
    password: string;
}

interface IUserAuthInfo {
    email?: string;
    password: string;
    phoneNumber?: string;
    username: string;
}

interface IMenteeGetInfo {
    id: string | number | undefined;
    accessToken: string | null;
}

const initialState: IUserInitial = {
    isLoading: true,
    isError: '',
    user: {
        accessToken: ''
    },
};

export const registerUser = createAsyncThunk(
    'user/register',
    async (userRegInfo: IUserRegInfo, {rejectWithValue}) => {
        try {
            const res = await fetch('http://45.12.4.230/api/users/register', {
                method: 'POST',
                body: JSON.stringify(userRegInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!res.ok) {
                throw new Error('Не получилось зарегистрировать нового пользователя');
            }
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const authUser = createAsyncThunk(
    'user/auth',
    async (userAuthInfo: IUserAuthInfo, {rejectWithValue}) => {
        try {
            const res = await fetch('http://45.12.4.230/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(userAuthInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(!res.ok) {
                throw new Error('Не получилось авторизоваться');
            }

            const data = await res.json();
            const result = {
                accessToken: data.accessToken,
                refreshToken: data.refreshToken,
                mentee: jwtDecode<any>(data.accessToken),
            };

            return result;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const getMentee = createAsyncThunk(
    'user/mentee',
    async ({id, accessToken} : IMenteeGetInfo, {rejectWithValue}) => {
        try {
            const res = await fetch(`http://45.12.4.230/api/users/${id}/mentee_profile`, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "AUTHORIZATION": `Bearer ${accessToken}`,
                }
            });

            if(!res.ok) {
                throw new Error("Не удалось получить пользователя");
            }

            return await res.json();
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const getMentor = createAsyncThunk(
    'user/mentor',
    async (id: number | string | undefined, {rejectWithValue}) => {
        try {
            const res = await fetch(`http://45.12.4.230/api/mentor/${id}`);

            if(!res.ok) {
                throw new Error(`Не получилось получить ментора по данному id ${id}`);
            }

            return await res.json();
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(registerUser.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        })
        .addCase(authUser.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(authUser.fulfilled, (state, action) => {
            if(state.user) {
                state.user = action.payload;
            }
            state.isLoading = false;
        })
        .addCase(authUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        })
        .addCase(getMentee.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(getMentee.fulfilled, (state, action) => {
            state.user.mentee = {...state.user.mentee, ...action.payload};
            state.isLoading = false;
        })
        .addCase(getMentee.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        })
        .addCase(getMentor.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(getMentor.fulfilled, (state, action) => {
            state.user.mentor = action.payload;
            state.isLoading = false;
        })
        .addCase(getMentor.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        });
    }
});

export default userSlice.reducer;
export const {} = userSlice.actions;