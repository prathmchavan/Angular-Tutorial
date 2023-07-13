import { ChangeDetectionStrategy, Component, OnChanges, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
  //using change detection strategy for change detection 
})
export class RoomsListComponent implements  OnChanges {

  @Input() rooms : RoomsList[] | null=[]
  //@input decorator use for importing the data from parent component and render in this child component

  @Input () title : string =''

  @Output() selectedRoom = new EventEmitter <RoomsList>();
  //@output is opposite of it , use for exporting the data from child to parent components

  selectRoom(room:RoomsList)
  {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes)
  }
}
