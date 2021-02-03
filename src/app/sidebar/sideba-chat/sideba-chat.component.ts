import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sideba-chat',
  templateUrl: './sideba-chat.component.html',
  styleUrls: ['./sideba-chat.component.scss']
})
export class SidebaChatComponent implements OnInit {

@Input() addNew

@Input() imageUrl = "https://www.iconfinder.com/data/icons/man-user-human-profile-avatar-business-person/100/09B-1User-512.png"
@Input() lastMessage = "This is the last Message"
@Input() roomName = "My Room"

  constructor() { }

  ngOnInit(): void {
  }

}
