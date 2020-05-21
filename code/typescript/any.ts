export {}

function stringify(obj: any) {
    return JSON.stringify(obj)
}

// any会取消验证，是不安全
// 有时候确实无法避免
// 尽量少用