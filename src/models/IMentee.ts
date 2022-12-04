import { IStats } from "./IStats";

export interface IMentee {
    username: string;
    userPicture: string | null;
    description: string | null;
    interests: string | null;
    timezone: number | null;
    registrationDate: string;
    speciality: string | null;
    stats: IStats;
    exp: number;
    roles: 'USER' | 'ADMIN' | 'MODERATOR';
    userId: number;
}