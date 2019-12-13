import Observable from './Observable';
class User extends Observable{

  constructor(){
    super();
  }

  doSomething(data){
    console.log(`I'm ${data}`);
    this.notify(data);
  }
}
export default User;