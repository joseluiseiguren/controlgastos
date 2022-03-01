export interface User {
    id: string| null;
    email: string;
    name: string;
    bornDate: Date;
    entryDate: Date | null;
    statusId: number | null;
    password: string | null;
    currency: string;
    language: string;
}
