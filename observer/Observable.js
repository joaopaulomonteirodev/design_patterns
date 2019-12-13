class Observable{

  constructor(){
    this._listeners = [];
  }

  subscribe(subscriber){
    this._listeners.push(subscriber);
  }

  unsubscribe(unsubscriber){
    this._listeners = this._listeners.filter((listener) => listener !== unsubscriber);
  }

  notify(data){
    this._listeners.forEach(listener => listener.update(data));
  }
}

export default Observable;