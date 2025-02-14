export interface IUser {
    Id: number;
    Username: string;
    Mail: string;
    Password: string;
    Img: string | null;
    Token: string | null;
    CreationDate: Date;
    UpdatedDate: Date;
}
