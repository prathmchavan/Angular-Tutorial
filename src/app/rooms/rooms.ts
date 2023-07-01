

//this is export example with both using the class and the interface 
// don't use interface use class instead




export class Rooms {
    roomsAvail: number;
    totalRooms: number;
    bookedRooms: number;

    constructor(roomsAvail:number , totalRooms:number , bookedRooms:number)
    {
        this.bookedRooms= bookedRooms
        this.roomsAvail= roomsAvail
        this.totalRooms = totalRooms
    }
}

export interface RoomsList {

    roomtype: string;
    amenities?: string;
    price: number;

}
