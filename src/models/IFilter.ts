import { IFilterContent } from "./IFilterContent";
import { ISort } from "./ISort";
export interface IFilter {
    totalPages: number,
    totalElements: number;
    size: number;
    content: IFilterContent[];
    sort: ISort;
    numberOfElements: number;
    pageable: {
        offset: number;
        sort: ISort;
        paged: boolean;
        pageNumber: number;
        pageSize: number;
        unpaged: boolean;
    };
    first: boolean;
    last: boolean;
    empty: boolean;
}