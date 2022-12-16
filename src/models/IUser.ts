import { IMentee } from "./IMentee";
import { IMentor } from "./IMentor";

export interface IUser {
    accessToken: string | null;
    refreshToken?: string;
    isMentor: boolean;
    mentor?: IMentor;
    mentee?: IMentee;
}