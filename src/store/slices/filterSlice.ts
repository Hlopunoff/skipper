import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { IFilter } from '../../models/IFilter';
import { IFilterReq } from '../../models/IFilterReq';
import { IInitial } from '../../models/IInitial';

const initialState:IInitial<IFilter> = {
    isLoading: true,
    isError: '',
    user: {
        totalPages: 0,
        totalElements: 0,
        numberOfElements: 0,
        size: 0,
        last: false,
        first: false,
        empty: false,
        content: [],
        sort: {
            empty: false,
            sorted: false,
            unsorted: false
        },
        pageable: {
            offset: 0,
            pageNumber: 0,
            paged: false,
            unpaged: false,
            pageSize: 0,
            sort: {
                empty: false,
                sorted: false,
                unsorted: false
            },
        },
    }
};

export const setFilters = createAsyncThunk(
    'filter/set',
    async (body: IFilterReq, {rejectWithValue}) => {
        try {
            const res = await fetch(`http://45.12.4.230/api/search/${body.filters.category}`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if(!res.ok) {
                throw new Error(`Не получилось отправить фильтры`);
            }

            return await res.json();
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(setFilters.pending, state => {
            state.isError = '';
            state.isLoading = true;
        })
        .addCase(setFilters.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        })
        .addCase(setFilters.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        });
    }
});

export default filterSlice.reducer;
export const {} = filterSlice.actions;