import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Adduce } from '../adduce';

@Component({
  selector: 'app-adduce-details',
  templateUrl: './adduce-details.component.html',
  styleUrls: ['./adduce-details.component.css']
})
export class AdduceDetailsComponent implements OnInit {
  @Input() adduce:Adduce | undefined;
  @Output() isComplete = new EventEmitter<boolean>();
goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
