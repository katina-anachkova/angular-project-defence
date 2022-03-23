import { IUser } from "./user";

export interface IBook {
    title: string;
    description: string;
    imageUrl: string;
    userId: IUser
  }