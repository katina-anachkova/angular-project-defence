import { IUser } from "./user";

export interface IBook {
    title: string,
    author: string,
    description: string,
    imageUrl: string,
    _id: string,
    ownerId: IUser
  }