export enum EAuditState {
    "temp" = 0,         // 未審核(暫存)
    "auditing" = 1,     // 審核中
    "pass" = 2,         // 已通過
    "reject" = 3        // 未通過
}

export enum EAuditStateName {
    "未審核" = 0,
    "審核中" = 1,
    "已通過" = 2,
    "未通過" = 3
}

export enum EAuditStateColor {
    "black" = 0,
    "orange" = 1,
    "green" = 2,
    "red" = 3
}