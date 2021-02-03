import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import {RoomDataService} from '../Service/room-data.service'

export interface Room {
  name: string
  id: string
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  showAddnew: boolean = true

  lm: string = "This is it !"
  rn: string = "This is Room"


  room$: Observable<Room[]>
  arrRoomData: any[];
  roomName: string;

  userImage
  constructor(private db: AngularFirestore , private roomSvc:RoomDataService) {

  }

  ngOnInit(): void {
    this.loadRoomData();
    this.userImage = this.roomSvc.userImage
  }

  addNewRoom() {
    this.roomName = prompt("Please Enter Room Name")

    if (this.roomName) {

      this.db.collection('rooms').add({ name: this.roomName })

    }

  }

  loadRoomData() {


    this.room$ = this.db.collection<Room>('rooms').snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Room;

      const id = a.payload.doc.id;

      return { id, ...data };
    })))

    this.room$.subscribe(data => {
      this.arrRoomData = data
      console.log(this.arrRoomData)
    })
  }

  setRoomId(id) {

    console.log(id)

    this.roomSvc.publishData(id)

  }
}
