export interface IExpense {
    Id: number;
    Name: string;
    Amount: number;
    Category: category;
    UserIDCreator: number;
    TeamID: number;
    CreationDate: Date;
    UpdatedDate: Date;
}

enum category {
    Alquiler = 'Alquiler',
    Comida = 'Comida',
    Compras = 'Compras',
    Ocio = 'Ocio',
    Transporte = 'Transporte',
    Otros = 'Otros',
}
