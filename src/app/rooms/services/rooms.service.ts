import { Injectable, Inject } from '@angular/core';
import { RoomsList } from '../rooms';
import { app_service_config } from '../../../AppConfig/appconfig.service';
@Injectable({
  providedIn: 'root'
})
export class RoomsService  {



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
    constructor(@Inject(app_service_config)private config:any){ 
      // we are created the value provider as injection token rather than accessing from it enviroment file
      console.log(this.config.apiUrl)
      console.log('this is using value provider in dependency injection')
    }
      
  
    getRooms() {
      return this.roomsList;
    }
}
