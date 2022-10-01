export enum EPublishState {
    "temp" = 0,         // 未發布(暫存)
    "waiting" = 1,      // 待發布
    "published" = 2,    // 以發布
    "offline" = 3       // 已下線
}

export enum EPublishStateName {
    "未發布" = 0,
    "待發布" = 1,
    "已上線" = 2,
    "已下線" = 3
}

export enum EPublishStateColor {
    "black" = 0,
    "orange" = 1,
    "green" = 2,
    "red" = 3
}