import { EAuditState } from "../../enum/news/EAuditState";
import { EPublishState } from "../../enum/news/EPublishState";

export interface INews {
    title: string,
    categoryId: number,
    content: string,
    region: string,
    author: string,
    roleId: number,
    auditState: EAuditState,
    publishState: EPublishState,
    createTime: number,
    star: number,
    view: number,
    id: number
}