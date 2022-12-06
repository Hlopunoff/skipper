import { IStats } from "./IStats";

export interface IMentor {
    username: string;
    userPicture: string | null;
    description: string | null;
    studentNumber: number | null;
    stats: IStats;
    reviews: string | null;
    lessonTemplates: string | null;
    timezone: number | null;
    speciality: string | null;
    rating: number | string | undefined | null;
    registrationDate: string;
    id: number;
}