export interface IExpense {
    Id: number;
    Name: string;
    Amount: number;
    Category: string;
    UserIDCreator: number;
    TeamID: number;
    CreationDate: Date;
    UpdatedDate: Date;
}
