import { Component } from '@angular/core';
import { RoomDataService } from './Service/room-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Whatsap';

  userSignedIn: boolean = false

  constructor(private roomData: RoomDataService) {

    if (this.roomData.user$) {

      this.roomData.user$.subscribe(data => {

        this.userSignedIn = true
      })
    }

  }
}
