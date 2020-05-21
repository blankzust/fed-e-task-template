// 枚举
export {}

enum PostStatus {
    LOADING=1,
    LOADED=2,
    LOADFAIL=3
}

PostStatus

// 常量枚举
const enum Constant {
    LOADING=2,
    LOADED,
    LOADFAIL
}

PostStatus[0]
// Constant[0]

const res = {
    status: PostStatus.LOADING,
    nextStatus: Constant.LOADFAIL
}