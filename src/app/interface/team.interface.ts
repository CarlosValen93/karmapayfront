//type category = 'Comida' | 'Ocio' | 'Transporte' | 'Compras';

export enum category {
    Comida = 'Comida',
    Ocio = 'Ocio',
    Transporte = 'Transporte',
    Compras = 'Compras'
}
export interface ITeam {
    Id: number;
    Name: string;
    Description: string;
    Img: string | null;
    Category: category;
    CreationDate: Date;
    UpdatedDate: Date;
}
