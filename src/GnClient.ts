//const signalR = require('@microsoft/signalr')
import { HubConnectionBuilder, HttpTransportType, LogLevel } from '@microsoft/signalr'
let connection = new HubConnectionBuilder()
  .configureLogging(LogLevel.Trace)
  .withUrl("http://172.16.6.158/chathub", {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets
  })
  .build();
class GnClient {
  public async connect(url: string) {
    await connection.start()
    .then(()=>{connection.invoke('signIn', {
      userName : 'paria',
      passWord : "uggk"
    })})
    return url;
  }
}

export { GnClient };