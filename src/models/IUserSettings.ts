import { IMentor } from "./IMentor";
import { IRole } from "./IRole";

export interface IUserSettings {
    id?: number | string;
    phoneNumber?: string;
    username: string;
    description?: string 
    userPicture?: string;
    email?: string;
    balance?: number;
    isActive?: boolean;
    timeZone?: string;
    speciality?: string;
    interests?: string;
    birthdate?: string;
    roles?: IRole[];
    lessons?: [];
    mentorInfo?: IMentor;
    createdAt?: string;
}