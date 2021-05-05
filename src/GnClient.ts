
/*
 * https://xkonti.tech/blog/quasar-framework-with-typescript/
 * https://medium.com/@RupaniChirag/vuex-with-typescript-b83a62aa48a8
 *
*/
//const signalR = require('@microsoft/signalr')
import { HubConnectionBuilder, HttpTransportType, LogLevel, HubConnection, HubConnectionState } from '@microsoft/signalr'
import Vue from 'vue';
import Vuex from 'vuex'

class GnConfig {

  public url: string;
  public logLevel: LogLevel;
  constructor() {
    this.logLevel = LogLevel.Information;
  }

}
Vue.use(Vuex);
//const store = new Vuex.Store<GnVue>({});

class GnClientLogger {

  private logLevel: LogLevel;
  private _name: string;
  constructor(name: string, logLevel: LogLevel) {
    this.logLevel = logLevel;
    this._name = name || "";
  }
  private format(message?: any): string {

    return '[' + this._name + "]:" + message;
  }
  public info(message?: any, ...args: any[]) {
    if (this.logLevel <= LogLevel.Information) {
      console.info(this.format(message), args)
    }
  }
  public trace(message?: any, ...args: any[]) {
    if (this.logLevel <= LogLevel.Trace) {
      console.info(this.format(message), args);
    }
  }
  public warn(message?: any, ...args: any[]) {
    if (this.logLevel <= LogLevel.Warning) {
      console.warn(this.format(message), args);
    }
  }
  public error(message?: any, ...args: any[]) {
    if (this.logLevel <= LogLevel.Error) {
      console.error(this.format(message), args);
    }
  }
  public debug(message?: any, ...args: any[]) {
    if (this.logLevel <= LogLevel.Debug) {
      console.debug(this.format(message), args);
    }
  }
}

class GnVue extends Vue {

}
const VUE: GnVue = new GnVue();
class GnUtils {

  private _config: GnConfig;
  constructor(config: GnConfig) {
  }
  public convert(d: string): string {
    var vue = new Vue();

    return Vue.version

    return d;
  }
}
class GnClient {
  private _connection: HubConnection = null;
  private _config: GnConfig = new GnConfig();
  private _logger: GnClientLogger;
  private _utils: GnUtils;
  constructor() {
    this._config = new GnConfig();
    this._utils = new GnUtils(this._config);
  }
  
  public get Vue(): GnVue {
    return VUE;
  }
  public get Utils(): GnUtils {
    return this._utils;
  }
  public getLogger(name: string = ""): GnClientLogger {
    return new GnClientLogger(name, this.config.logLevel);
  }
  private getConnection(refresh: boolean = false) {
    if (this._connection == null || refresh) {
      this._connection = new HubConnectionBuilder()
        .configureLogging(LogLevel.Error)
        .withUrl(this.config.url, {
          skipNegotiation: true,
          transport: HttpTransportType.WebSockets
        })
        .build();
    }
    return this._connection;
  }
  public get config(): GnConfig {
    return this._config
  }
  public get state(): HubConnectionState {
    return this.getConnection().state;
  }
  public connect(callback: (cfg: GnConfig) => void = null): Promise<void> {
    callback && callback(this.config);
    var connection = this.getConnection(true);
    return connection.start();
  }
}

export { GnClient };