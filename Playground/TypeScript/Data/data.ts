export class Data {
    public method: string;
    public uri: string
    public version: string
    public message: string
    public response: string
    public fulfilled: boolean

    constructor(method: string, uri: string, version: string, message: string) {
        this.method = method
        this.uri = uri
        this.version = version
        this.message = message
        this.response = ''
        this.fulfilled = false
    }
}

const myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
