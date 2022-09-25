import { IRole } from '../role/IRole'

export interface IUser {
    default: boolean,
    id: number,
    password: number,
    region: string,
    roleId: number,
    role: IRole
    roleState: boolean,
    username: string
}