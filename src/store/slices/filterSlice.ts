import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { IFilter } from '../../models/IFilter';
import { IFilterReq } from '../../models/IFilterReq';

interface IInitialFilter {
    isLoading: boolean;
    isError: string;
    filter: IFilter;
}

const initialState:IInitialFilter = {
    isLoading: true,
    isError: '',
    filter: {
        body: {
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
        },
        filters: {
            category: '',
            tags: [],
        },
    }
};

export const setFilters = createAsyncThunk(
    'filter/set',
    async (body: IFilterReq, {rejectWithValue}) => {
        try {
            const res = await fetch(`http://45.12.4.230/api/search/${body.filters.category}?size=${body.pageable.size}&page=${body.pageable.page}&sort=price`, {
                method: 'POST',
                body: JSON.stringify(body.filters),
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

export const getTags = createAsyncThunk(
    'filter/tags',
    async (category: string, {rejectWithValue}) => {
        try {
            const res = await fetch(`http://45.12.4.230/api/search/${category}`);

            if(!res.ok) {
                throw new Error(`Не получилось получить теги по этой категории: ${category}`);
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
    reducers: {
        setCategory: (state, action) => {
            state.filter.filters.category = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(setFilters.pending, state => {
            state.isError = '';
            state.isLoading = true;
        })
        .addCase(setFilters.fulfilled, (state, action) => {
            state.filter.body = action.payload;
            state.isLoading = false;
        })
        .addCase(setFilters.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        })
        .addCase(getTags.pending, state => {
            state.isError = '';
            state.isLoading = true;
        })
        .addCase(getTags.fulfilled, (state, action) => {
            state.filter.filters.tags = action.payload;
            state.isLoading = false;
        })
        .addCase(getTags.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload as string;
        });
    }
});

export default filterSlice.reducer;
export const {setCategory} = filterSlice.actions;