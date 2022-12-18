export interface IBookingInfo extends Object{
    lessonType: string;
    lessonLength: number;
    lessonCost: number;
    lessonDateTime: string;
    contactInfo: string;
    menteeId: number | undefined;
    mentorId: number | undefined;
}