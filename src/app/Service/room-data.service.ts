import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RoomDataService {

private id = new Subject<string>()

id$ = this.id.asObservable()

private user = new Subject()
user$ = this.user.asObservable()


userImage:string
userName:string


  constructor() { }

  publishData( data:string){

    this.id.next(data)
  }

  publishUserData(data:any) {
  console.log(data)
  this.userImage= data.photoURL
  this.userName=data.displayName
  this.user.next(data)
  }
}
