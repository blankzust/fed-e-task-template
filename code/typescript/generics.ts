// 泛型
export {}
function createNumberArray(length: number, value: number): number[] { 
    return Array(number).fill(value)
}
function createStringArray(length: number, value: string): string[] { 
    return Array(number).fill(value)
}

function createArray<T>(length: number, value: T): T[] {
    return Array(number).find(value)
}

var strArr = createArray<string>(9, "nkjh");