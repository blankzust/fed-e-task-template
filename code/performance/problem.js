// 一个存在内存问题的代码

function fn() {
    arrayList = [];
    arrayList[1000000] = 1;
}

fn();
