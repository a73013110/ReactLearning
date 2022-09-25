import { IRole } from '../role/IRole'
import { ERole } from '../../enum/role/ERole'

export interface IUser {
    default: boolean,
    id: number,
    password: number,
    region: string,
    roleId: ERole,
    role: IRole
    roleState: boolean,
    username: string
}