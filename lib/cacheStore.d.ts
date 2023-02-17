export default class CacheStore<T> {
    cache: Map<string, T>;
    max: number;
    constructor(max?: number);
    get(key: string): T | null;
    set(key: string, value: T): void;
    delete(key: string): void;
    destroy(): void;
    map(cb: (value: T, key: string) => void): void[];
}
