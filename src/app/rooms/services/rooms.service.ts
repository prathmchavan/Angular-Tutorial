import { Injectable, Inject } from '@angular/core';
import { RoomsList } from '../rooms';
import { app_service_config } from '../../../AppConfig/appconfig.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsService  {



    //Add 'implements OnInit' to the class.
  // commenting this roomlist because now we are going to fetch the data from the backedn server api using the http client module

    roomsList  : RoomsList [] = [
    //   {

    //   roomtype: 'delux',

    //   //i have commented amenities to show that it is optional so we can ignore this value but if i do  comment to price variable it will show me the error

    //   amenities: 'ac , free wifi , tv',
    //   price: 398,

    // }
    //   ,
    // {
    //   roomtype: 'pc',

    //   //i have commented amenities to show that it is optional so we can ignore this value but if i do  comment to price variable it will show me the error

    //   amenities: 'ac , free wifi , tv',
    //   price: 39852,
    // }
  ]
    constructor(@Inject(app_service_config)private config:any , private http :HttpClient){  
      // we are created the value provider as injection token rather than accessing from it enviroment file
      
      console.log(this.config.apiUrl)
      console.log('this is using value provider in dependency injection ')
    }


      // to set up the http client first add http client module in app module and then make a folder name proxy.conf.json , check more about it on documentation
  
    getRooms() {
      return this.http.get<RoomsList[]>('/api/rooms');
      //we don't have to give the hole path because we are setuped the proxy config file which will redirect it 
    }

    addRooms(room:RoomsList)
    {
      return this.http.post('/api/rooms',room)
    }
    editRoom(room:RoomsList)
    {
      return this.http.post('/api/rooms',room)
    }
    
    delete (id:string)
    {
      return this.http.delete<RoomsList[]>(`/api/room/${id}`)    }

    // deleteRooms(room:RoomsList)
    // {
    //   return this.http.post('/api/rooms)
    // }
}
// rxjs works on push based architecture ( getdata -> continuous stream of data - > add datat ( in this rxjs will automatically serve the updated data

// check more about it  on angular .io  and on Rxjs website

// Observables provide support for passing messages between parts of your application. They are used frequently in Angular and are a technique for event handling, asynchronous programming, and handling multiple values.