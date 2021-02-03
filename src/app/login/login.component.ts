import { Component, OnInit } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import * as firebase from'firebase/app';
import { RoomDataService } from '../Service/room-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private afAuth:AngularFireAuth , private roomSvc: RoomDataService) { }

  ngOnInit(): void {
  }

signInWithGoogle(){

let provider = new firebase.auth.GoogleAuthProvider()

this.afAuth.signInWithPopup(provider).then(res=>{
  console.log(res)

  this.roomSvc.publishUserData(res.user)

})


}

}
