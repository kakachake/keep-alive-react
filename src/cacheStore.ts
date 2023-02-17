export default class CacheStore<T> {
  cache: Map<string, T> = new Map();
  max: number = 0;

  constructor(max: number = 10) {
    this.cache = new Map();
    this.max = max;
  }

  get(key: string): T | null {
    if (!this.cache.has(key)) {
      return null;
    }
    const res = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, res!);
    return this.cache.get(key) || null;
  }

  set(key: string, value: T) {
    if (this.cache.has(key)) {
      this.cache.set(key, value);
      return;
    }
    if (this.cache.size >= this.max) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }

  delete(key: string) {
    this.cache.delete(key);
  }

  destroy() {
    this.cache.clear();
  }

  map(cb: (value: T, key: string) => void) {
    const cache = this.cache;
    return [...cache.keys()].map((key) => cb(cache.get(key)!, key));
  }
}
