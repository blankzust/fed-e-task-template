// 接口
export {}
// 用法1：给函数定义入参约束
interface Post {
    title: string
    content: string
    subtitle?: string,
    readonly summary: string
}

function printPost(post: Post) {
    console.log(post.title);
    // post.summary = "ss"
}

// 用法2：定义键值的类型
interface Cache {
    [key: string]: string
}

const obj: Cache = {}
obj["1"] = "asdasd"
