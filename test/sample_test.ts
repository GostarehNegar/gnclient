/*
 * Copyright 2019 Nazmul Idris. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { HubConnectionState, LogLevel } from '@microsoft/signalr';
import { Car } from '../src/Car';
import {GnClient} from '../src/GnClient'
import Users from '../src/Users';

describe('gnclient', () => {
  it("can connect", async ()=>{
    const client:GnClient = new GnClient();
    client.config.url = "http://172.16.6.158/chathub";
    client.config.logLevel = LogLevel.Information;
    await client.connect();
    client.getLogger("test1").warn("hi there", client.config);
    var logger = client.getLogger("test");
    logger.info(client.Utils.convert("kk"));
    client.Vue.$on("hi",(xx)=>{
      debugger
      logger.info("hi event",xx);
    });
    client.Vue.$emit("hi","lll");
    expect(client.state).toEqual(HubConnectionState.Connected);
    //expect(ret).toEqual("jjj");

  });
  it ("store works", async()=>{
    const client:GnClient = new GnClient();
    //Users.getUsers();
    Users.addUser("babak");
    //var ff = await Users.refreshUsers();
    console.info(Users.Users);

  });

});

describe('Car', () => {
  it('can create', () => {
    const car: Car = new Car();
    expect(car).not.toBe(null);
  });

  it('go() works', () => {
    const car: Car = new Car();
    const returnValue = car.go('vroom');
    //expect(1).toEqual(2);
    expect(returnValue).toEqual('vroom');
  });

});
