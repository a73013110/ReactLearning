import { EAuditState } from "../../enum/news/EAuditState";
import { EPublishState } from "../../enum/news/EPublishState";
import { IRole } from "../role/IRole";
import { ICategory } from "./ICategory";

export interface INews {
    title: string,
    categoryId: number,
    category?: ICategory,
    content: string,
    region: string,
    author: string,
    roleId: number,
    role: IRole,
    auditState: EAuditState,
    publishState: EPublishState,
    createTime: number,
    star: number,
    view: number,
    id: number
}