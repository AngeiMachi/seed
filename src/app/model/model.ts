export enum MotorType {
    Electric="Electric",
    Fuel="Fuel",
}
export enum Gender {
    Male="Male",
    Female="Female",
    Other="Other"
}
export interface Client {
    fullName: string;
    gender:Gender;
    email: string;
    birthdate: Date;
    address: string;
    city: string;
    country: string;
    hobbies: string[];
    favoriteColor: string;
    seats: number;
    motorType: MotorType;
}

export interface ConversionRate {
    formViews: number;
    formSubmissions: number;
}