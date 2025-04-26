import { Gender } from "../enum/gender.enum";
import { Address } from "./address.modal";

export interface User {
    id?: number;
    firstName: string;
    lastName: string;
    age: number | null;
    email: string;
    phone: number | null;
    address: Address;
    gender: Gender | null;
}