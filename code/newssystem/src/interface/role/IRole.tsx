import { ERole } from '../../enum/role/ERole'

export interface IRole {
    id: ERole,
    rights: React.Key[],
    roleName: string,
    roleType: number,
}