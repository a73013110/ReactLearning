export enum EAuditState {
    "temp" = 0,         // 未審核(暫存)
    "auditing" = 1,     // 審核中
    "pass" = 2,         // 已通過
    "reject" = 3        // 未通過
}