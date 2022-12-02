import st from './loader.module.scss';
import Skeleton from '@mui/material/Skeleton';

export const LoaderCard = () => {
    return (
        <>
            <div className={st['loader__header']}>
                <div className={st['loader__img-wrap']}>
                    <Skeleton variant='circular' width="100%" height="120px"/>
                </div>
                <div className={st['loader__info']}>
                    <Skeleton variant='text'/>
                    <Skeleton variant='rounded' height="10px"/>
                    <Skeleton variant='text'/>
                </div>
            </div>
            <Skeleton variant='text'/>
            <Skeleton variant='rounded' width="100%" height="107px"/>
        </>
    );
};