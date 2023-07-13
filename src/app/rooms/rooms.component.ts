import { Component, OnInit } from '@angular/core';
import { Rooms, RoomsList } from './rooms'; import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, lastValueFrom, of, shareReplay } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
;

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelname = 'kdf hotel';

  number = 10;

  hiderooms = true;
  http: any;


  selectRoom(room: RoomsList) {
    console.log(room)
  }


  rooms: Rooms = {
    totalRooms: 20,
    roomsAvail: 10,
    bookedRooms: 15,


  };

  roomsList: RoomsList[] = [];



  //RxJS is mostly useful for its operators, even though the Observable is the foundation. Operators are the essential pieces that allow complex asynchronous code to be easily composed in a declarative manner.











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

  totalBytes = 0;


  subscription!: Subscription
  //subject is base class
  error$ = new Subject<string>()



  // for error handling don't do this in component file do the error handling in service file  because change detection will run because we are subscribing to it

  getError$ = this.error$.asObservable();


  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      // console.log(err)
      this.error$.next(err.messages)
      return of([])
    })
  )


  ngOnInit(): void {



    //http request example
    //so this was not response it was a event so i treated this event which has property (event property)
    this.roomsService.getphotos().subscribe((event) => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('request has been made')
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('request success')
          break;

        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;

        }
        case HttpEventType.Response: {
          console.log(event.body)
        }
      }
    })




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

    // this.subscription = this.roomsService.getRooms$.subscribe((rooms: RoomsList[]) => {
    //   this.roomsList = rooms; 


    //we have used the async pipe to unwrape the data and show it in json formate  while in above line we are doing that manually subscribing to the stream but async will handle it from us


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

  editRoom() {
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

  deleteRoom() {//this operation performs the delete operation 
    this.roomsService.delete('3').subscribe((data) => {
      // this.roomsService.delete('3')

      //this won't because i have't included the id in my html component so it won't see the roomlist with the id 3 as it is set in the backed
    })
  }
  toggle() {

    this.hiderooms = !this.hiderooms;

  }
  title = ' this is pc '
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.subscription) {
      this.subscription.unsubscribe;
    }
  }
} 
