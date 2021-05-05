import {
    Module,
    VuexModule,
    getModule,
    Mutation,
    Action,
    MutationAction,
  } from 'vuex-module-decorators';
  import store from './GnStore';
  import { User } from './Modles';
  //import * as api from '@/store/api';
  type FeedType = 'global' | 'user';
  
  @Module({
    dynamic: true,
    namespaced: true,
    name: 'articles',
    store,
  })
  class UsersModule extends VuexModule {
    users: User[] = [];
  
    get Users(){
        return this.users;
    }
    @Mutation
    addUser(name:string){
        this.users.push({name:name,email:''});
    }
    @MutationAction
    async refreshUsers() {
        var self = this;
        return new Promise((resolve,faile)=>{
            setTimeout(()=>{
                resolve("self.users")
            },1000);

        });
      //await setTimeout
      //const globalFeed = await api.getGlobalFeed();
      return {
        users: [{name:"babak"}]
      };
    }
  }
  
  export default getModule( UsersModule);
  