export interface IFilterReq {
    filters: {
        category: string;
        minPrice: number;
        maxPrice: number;
        minRating: number;
        maxRating: number;
        tags: string[];
    };
    pageable: {
        page: number;
        size: number;
        sort: string[];
    };
}