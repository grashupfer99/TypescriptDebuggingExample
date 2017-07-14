export class Log{
    public write(message: string) : void{
        console.log(`${new Date().toDateString()} : ${message}`)
    }
}