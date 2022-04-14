import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Adduce } from '../adduce';

@Component({
  selector: 'app-adduce-form',
  templateUrl: './adduce-form.component.html',
  styleUrls: ['./adduce-form.component.css']
})
export class AdduceFormComponent implements OnInit {
  anotherTask=new Adduce("","","",new Date(),0,0);
  @Output() addGoal = new EventEmitter<Adduce>();
    submitGoal(){
     this.addGoal.emit(this.anotherTask);
    }
  constructor() { }

  ngOnInit(): void {
  }

}
