import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';
import jwtDecode from 'jwt-decode';
import { IInitial } from '../../models/IInitial';
import { IUserSettings } from '../../models/IUserSettings';
interface IUserRegInfo {
    phoneNumber: string;
    password: string;
}

interface IUserAuthInfo {
    email?: string;
    password: string;
    phoneNumber?: string;
}

interface IMenteeGetInfo {
    id: string | number | undefined;
    accessToken: string | null;
    refreshToken: string | undefined;
}

interface IChangeUser {
    id: string | number | undefined;
    accessToken: string | undefined | null;
    refreshToken: string | undefined;
    body: IUserSettings | undefined;
}

const initialState: IInitial<IUser> = {
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
            console.log(jwtDecode<any>(data.accessToken));
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

export const getMenteeInfo = createAsyncThunk(
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

export const changeUserInfo = createAsyncThunk(
    'user/changeUser',
    async ({id, accessToken, body} : IChangeUser, {rejectWithValue}) => {
        try {
            const res = await fetch(`http://45.12.4.230/api/users/${id}/settings`, {
                method: 'PUT',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                    "AUTHORIZATION": `Bearer ${accessToken}`,
                }
            });

            if(!res.ok) {
                throw new Error(`Не получилось изменить настройки у этого пользователя ${id}`);
            }

        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

export const getMentorInfo = createAsyncThunk(
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
    reducers: {
        userLogout: (state) => {
            if(state.user) {
                state.user.accessToken = '';
                state.user.refreshToken = '';
                state.user.mentee = undefined;
                state.user.mentor = undefined;
            }
        },
    },
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
        .addCase(getMenteeInfo.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(getMenteeInfo.fulfilled, (state, action) => {
            state.user!.mentee = {...state.user!.mentee, ...action.payload};
            state.isLoading = false;
        })
        .addCase(getMenteeInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        })
        .addCase(getMentorInfo.pending, state => {
            state.isLoading = true;
            state.isError = '';
        })
        .addCase(getMentorInfo.fulfilled, (state, action) => {
            state.user!.mentor = action.payload;
            state.isLoading = false;
        })
        .addCase(getMentorInfo.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        });
    }
});

export default userSlice.reducer;
export const {userLogout} = userSlice.actions;