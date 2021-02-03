import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { timestamp } from 'rxjs/operators';
import { RoomDataService } from '../Service/room-data.service';

import * as firebase from 'firebase'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

imageUrl = ""

message:string

roomName:string

arrChatData:any[]

userName:string

lastSeen

roomId
  constructor( private roomSvc: RoomDataService , private db : AngularFirestore) {

   if(this.roomSvc.id$){
    this.roomSvc.id$.subscribe(data =>{
    console.log(data)
    this.roomId=data
    this.loadRoomData(data)
    })
   }
   }

  ngOnInit(): void {
  }



  loadRoomData(id){

    this.db.collection('rooms').doc(id).snapshotChanges().subscribe(element=>{

    this.roomName = element.payload.data()['name']

    })

    this.loadRoomMessages(id)
  }

  loadRoomMessages(id){

    this.db.collection('rooms').doc(id).collection('messages', ref=>{
      return ref.orderBy('timeStamp','asc')
    }).snapshotChanges().subscribe(element=>{
      this.arrChatData= []
      element.forEach(a=>{
      const Data = a.payload.doc.data()
      this.arrChatData.push(Data)

      })
      console.log(this.arrChatData)
      this.userName= this.roomSvc.userName
    })
  }

  pushMessage(e:Event){

    e.preventDefault()
    console.log(this.message)

    this.db.collection('rooms').doc(this.roomId).collection('messages').add({
      name:this.userName,
      message: this.message,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    this.message="";
  }

}
