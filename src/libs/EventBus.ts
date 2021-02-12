import { Subject } from "rxjs";

class EventBus {
 private  _eventpool: Map<string, Subject<any>>;
  constructor() {
    this._eventpool = new Map<string, Subject<any>>();
  }
  on(eventname: string, fn: Function) {
    let sub: Subject<any>;
    if (this._eventpool.has(eventname)) {
      sub = this._eventpool.get(eventname) as Subject<any>;
    } else {
      sub = new Subject<any>();
    }
    sub.subscribe((data?: any) => {
      fn(data);
    });
    this._eventpool.set(eventname, sub);
  }
  emmit(eventname: string, data?: any): void {
    if (this._eventpool.has(eventname)) {
      let sub = this._eventpool.get(eventname);
      sub?.next(data);
    }
  }
  off(eventname: string) {
    if (this._eventpool.has(eventname)) {
      let sub = this._eventpool.get(eventname);
      sub?.unsubscribe();
      this._eventpool.delete(eventname);
    }
  }
}

export default new EventBus();
