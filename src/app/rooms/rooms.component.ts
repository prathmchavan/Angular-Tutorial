import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms'; import { RoomsService } from './services/rooms.service';
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

  constructor(private roomsService: RoomsService) { }


  // Observables are lazy Push collections of multiple values
  stream = new Observable(observer => {
    // What is an Observer? An Observer is a consumer of values delivered by an Observable. Observers are simply a set of callbacks, one for each type of notification delivered by the Observable: next, error, and complete. The following is an example of a typical Observer object:

    observer.next('user1')
    observer.next('user2')
    observer.next('user3')
    observer.complete()

    //rxjs works on push based architecture ( getdata -> continuous stream of data - > add datat ( in this rxjs will automatically serve the updated data

    // RxJS is a library for composing asynchronous and event-based programs by using observable sequences. It provides one core type, the Observable, satellite types (Observer, Schedulers, Subjects) and operators inspired by Array methods (map, filter, reduce, every, etc) to allow handling asynchronous events as collections.

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
    //you have to run the backedn api for this CRUD operation to be execute 





    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    })

    // NEW VALUE IS PUSHED YOUR OBSERVER WILL SEE IT AND CALL NEXT METHOD WHOEVER SUBSCRIBE TO IT WILL GET THE VALUE  





  }

  // Type 'Observable<Object>' is missing the following properties from type 'RoomsList[]': length, pop, push, concat, and 28 more.

  //this is the CRUD operation 


  addRoom() {
    const room: RoomsList = {
      roomtype: 'delux',



      amenities: 'ac , free wifi , tv',
      price: 398,
    }


    this.roomsService.addRooms(room).subscribe((data) => {
        this.roomsList = data as RoomsList[];
    })
    

  }
  
  editRoom(){
    //this operation perform the update operation 
    const room: RoomsList = {
      roomtype: 'delux',

      amenities: 'ac , free wifi , tv',
      price: 398,
   
    }


    this.roomsService.editRoom(room).subscribe((data) => {
        this.roomsList = data as RoomsList[];
    })
  }

  deleteRoom()
  {//this operation performs the delete operation 
    this.roomsService.delete('3').subscribe((data)=>
    {
      // this.roomsService.delete('3')

      //this won't because i have't included the id in my html component so it won't see the roomlist with the id 3 as it is set in the backed
    })
  }
  toggle() {

    this.hiderooms = !this.hiderooms;

  }
  title = ' this is pc '

} 
