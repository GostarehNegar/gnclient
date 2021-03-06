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

import { Car } from '../src/Car';
import {GnClient} from '../src/GnClient'

describe('gnclient', () => {
  it("can connect", async ()=>{
    const client:GnClient = new GnClient();
    await client.connect("jjj");
    // expect(ret).toEqual("jjj");

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
