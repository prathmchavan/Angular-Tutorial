import { Injectable } from '@angular/core';
import { RoomsList } from '../rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

    //Add 'implements OnInit' to the class.
  
    roomsList  : RoomsList [] = [{

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

    getRooms() {
      return this.roomsList;
    }
}
