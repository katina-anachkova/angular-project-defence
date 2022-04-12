import { IUser } from "./user";

export interface IBook {
    title: string,
    author: string,
    description: string,
    imageUrl: string,
    objectId: string,
    ownerId: IUser,
    userEmail: string
  }