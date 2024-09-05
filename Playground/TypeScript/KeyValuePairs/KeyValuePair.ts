export class KeyValuePair<K, V> {

    private key: K;
    private value: V;

    setKeyValue(key: K, value: V): void {
        this.key = key;
        this.value = value;
    }

    display(): void {
        console.log(`key: ${this.key}, value: ${this.value}`);
    }
}
