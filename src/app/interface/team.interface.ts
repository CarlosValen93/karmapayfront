type category = 'Comida' | 'Ocio' | 'Transporte' | 'Compras';

export interface ITeam {
    Id: number;
    Name: string;
    Description: string;
    Img: string | null;
    Category: category;
    CreationDate: Date;
    UpdatedDate: Date;
}
