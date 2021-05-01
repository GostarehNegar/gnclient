//const signalR = require('@microsoft/signalr')
import { HubConnectionBuilder, HttpTransportType, LogLevel } from '@microsoft/signalr'
let connection = new HubConnectionBuilder()
  .configureLogging(LogLevel.Trace)
  .withUrl("http://172.16.6.158/:80/chathub", {
    skipNegotiation: false,
    transport: HttpTransportType.WebSockets
  })
  .build();
class GnClient {
  public connect(url: string): string {
    connection.start()
      .then(() => connection.invoke("send", "Hello"))
      .catch(err => {
        console.log(err)
      })
    return url;
  }
}

export { GnClient };