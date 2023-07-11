import { Component, OnInit  } from '@angular/core';
import { Rooms, RoomsList } from './rooms';import { RoomsService } from './services/rooms.service';
import { Observable, lastValueFrom } from 'rxjs';
;

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelname = 'kdf hotel';

  number = 10;

  hiderooms = false;


  selectRoom(room: RoomsList) {
    console.log(room)
  }


  rooms: Rooms = {
    totalRooms: 20,
    roomsAvail: 10,
    bookedRooms: 15,


  };

  roomsList: RoomsList[] = [];
  constructor (private roomsService : RoomsService){}


  // Observables are lazy Push collections of multiple values
  stream = new  Observable (observer =>{
    // What is an Observer? An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete. The following is an example of a typical Observer object:

    observer.next('user1')
    observer.next('user2')
    observer.next('user3')
    observer.complete()
  })

  

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.roomsList = [{

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
    // }]

    this.roomsService.getRooms().subscribe((rooms: RoomsList[]) => {
      this.roomsList = rooms;
    });


    // this won't work because the data i have made is in different format from the tutorial one


    this.stream.subscribe({
      next:(value) => console.log(value),
      complete : () => console.log('complete'),
      error:(err) => console.log(err)
    })

// NEW VALUE IS PUSHED YOUR OBSERVER WILL SEE IT AND CALL NEXT METHOD WHOEVER SUBSCRIBE TO IT WILL GET THE VALUE  





  }

    // Type 'Observable<Object>' is missing the following properties from type 'RoomsList[]': length, pop, push, concat, and 28 more.

  

  addRoom() {
    const room: RoomsList = {
      roomtype: 'delux',

      //writing a fucntion to add room then we can se  how to detect the changes 


      amenities: 'ac , free wifi , tv',
      price: 398,
      // for change detection go to the web browser where the project is running locally press f12 to open developer mode and at the bottom of the tab choose rendering and click on printing then you can see the green border when you do and action on web page or any changes
    }
    this.roomsList = [...this.roomsList, room] //using spread operator for applying new instance while passing the data to te child components  
  }
  toggle() {

    this.hiderooms = !this.hiderooms;
  }
  title =' this is pc '

} 
