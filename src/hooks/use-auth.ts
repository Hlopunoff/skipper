import {useAppSelector} from './redux';

export const useAuth = () => {
    const user = useAppSelector(state => state.user.user);

    return {
        isAuth: !!user?.accessToken,
        ...user,
    };
};