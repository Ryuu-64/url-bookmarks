export function deepClone<T>(objectToClone: T): T {
    return JSON.parse(JSON.stringify(objectToClone));
}
