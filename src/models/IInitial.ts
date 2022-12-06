export interface IInitial<T> {
    isLoading: boolean;
    isError: string;
    user: T | undefined;
}