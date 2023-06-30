import { Component } from '@angular/core';
import { Rooms, RoomsList } from './rooms';;

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelname = 'kdf hotel';

  number = 10;

  hiderooms = false;

  toggle() {

    this.hiderooms = !this.hiderooms;
  }


  rooms: Rooms = {
    totalRooms: 20,
    roomsAvail: 10,
    bookedRooms: 15,


  };

  roomsList: RoomsList[] = [{

    roomtype: 'delux',

    //i have commented amenities to show that it is optional so we can ignore this value but if i do  comment to price variable it will show me the error

    amenities: 'ac , free wifi , tv',
    price: 398,

  }
,
{
  roomtype: 'pc',

    //i have commented amenities to show that it is optional so we can ignore this value but if i do  comment to price variable it will show me the error

    amenities: 'ac , free wifi , tv',
    price: 39852,
}]

}

