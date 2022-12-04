import { IMentee } from "./IMentee";
import { IMentor } from "./IMentor";

export interface IUser {
    accessToken: string | null;
    refreshToken?: string;
    mentor?: IMentor;
    mentee?: IMentee;
}