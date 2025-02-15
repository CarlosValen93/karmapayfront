import { IUserExpense } from './../interface/user-expense.interface';
import { IUserTeam } from './../interface/user-team.interface';
import { ITeam } from './../interface/team.interface';
import { IExpense } from './../interface/expense.interface';
import { IUser } from './../interface/user.interface';

export const USERS: IUser[] = [
    {
		"Id" : 1,
		"Username" : "AlexCastet",
		"Mail" : "alex.castet@email.com",
		"Password" : "hashed_password_1",
		"Img" : null,
		"Token" : null,
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	},
	{
		"Id" : 2,
		"Username" : "Lucrecia",
		"Mail" : "lucrecia.88@email.com",
		"Password" : "hashed_password_2",
		"Img" : null,
		"Token" : null,
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	},
	{
		"Id" : 3,
		"Username" : "carlos_valenzuela",
		"Mail" : "carlos.valenzuela@email.com",
		"Password" : "hashed_password_3",
		"Img" : null,
		"Token" : null,
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	},
	{
		"Id" : 4,
		"Username" : "Cristina",
		"Mail" : "cristina@email.com",
		"Password" : "hashed_password_4",
		"Img" : null,
		"Token" : null,
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	},
	{
		"Id" : 5,
		"Username" : "Gonzalo123",
		"Mail" : "gonzalo.123@email.com",
		"Password" : "hashed_password_5",
		"Img" : null,
		"Token" : null,
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	}
];


export const TEAMS: ITeam[] = [
    {
		"Id" : 1,
		"Name" : "Viaje a Cancún",
		"Description" : "Grupo para compartir gastos del viaje a Cancún.",
		"Img" : null,
		"Category" : "Comida",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	},
	{
		"Id" : 2,
		"Name" : "Departamento Compartido",
		"Description" : "Gastos mensuales del departamento entre roomies.",
		"Img" : null,
		"Category" : "Ocio",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	},
	{
		"Id" : 3,
		"Name" : "Amigos del Gym",
		"Description" : "Para dividir costos de suplementos y equipo de ejercicio.",
		"Img" : null,
		"Category" : "Transporte",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11")
	}
];


export const EXPENSES: IExpense[] = [
    {
		"Id" : 1,
		"Name" : "Cena en restaurante",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11"),
		"Amount" : 45.99,
		"UserIDCreator" : 1,
		"TeamID" : 1
	},
	{
		"Id" : 2,
		"Name" : "Suscripción Netflix",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11"),
		"Amount" : 15.99,
		"UserIDCreator" : 2,
		"TeamID" : 1
	},
	{
		"Id" : 3,
		"Name" : "Gasolina coche",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11"),
		"Amount" : 60.00,
		"UserIDCreator" : 3,
		"TeamID" : 2
	},
	{
		"Id" : 4,
		"Name" : "Compra supermercado",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11"),
		"Amount" : 120.50,
		"UserIDCreator" : 4,
		"TeamID" : 3
	},
	{
		"Id" : 5,
		"Name" : "Regalo cumpleaños",
		"CreationDate" : new Date("2025-02-14 12:32:11"),
		"UpdatedDate" : new Date("2025-02-14 12:32:11"),
		"Amount" : 35.75,
		"UserIDCreator" : 5,
		"TeamID" : 2
	}
];


export const USERSTEAMS: IUserTeam[] = [
    {
		"UserID" : 1,
		"TeamID" : 1,
		"Owner" : true,
		"Active" : true
	},
	{
		"UserID" : 2,
		"TeamID" : 1,
		"Owner" : false,
		"Active" : true
	},
	{
		"UserID" : 2,
		"TeamID" : 3,
		"Owner" : true,
		"Active" : true
	},
	{
		"UserID" : 3,
		"TeamID" : 1,
		"Owner" : false,
		"Active" : true
	},
	{
		"UserID" : 3,
		"TeamID" : 2,
		"Owner" : true,
		"Active" : true
	},
	{
		"UserID" : 4,
		"TeamID" : 2,
		"Owner" : false,
		"Active" : true
	},
	{
		"UserID" : 4,
		"TeamID" : 3,
		"Owner" : true,
		"Active" : true
	},
	{
		"UserID" : 5,
		"TeamID" : 2,
		"Owner" : false,
		"Active" : true
	},
	{
		"UserID" : 5,
		"TeamID" : 3,
		"Owner" : true,
		"Active" : true
	}
];


export const USEREXPENSES: IUserExpense[] = [
    {
		"UserID" : 1,
		"ExpenseID" : 1,
		"Assignation" : 22.99
	},
	{
		"UserID" : 2,
		"ExpenseID" : 1,
		"Assignation" : 23.00
	},
	{
		"UserID" : 2,
		"ExpenseID" : 2,
		"Assignation" : 15.99
	},
	{
		"UserID" : 3,
		"ExpenseID" : 3,
		"Assignation" : 60.00
	},
	{
		"UserID" : 4,
		"ExpenseID" : 4,
		"Assignation" : 60.25
	},
	{
		"UserID" : 5,
		"ExpenseID" : 4,
		"Assignation" : 60.25
	},
	{
		"UserID" : 5,
		"ExpenseID" : 5,
		"Assignation" : 35.75
	}
];
