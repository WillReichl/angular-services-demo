// A service is just a normal Typescript class -- no decorator!
export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}
