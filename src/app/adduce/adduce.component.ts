import { Component, OnInit } from '@angular/core';
import { Adduce } from '../adduce';

@Component({
  selector: 'app-adduce',
  templateUrl: './adduce.component.html',
  styleUrls: ['./adduce.component.css']
})
export class AdduceComponent implements OnInit {
  adduces:Adduce[]=[
    new Adduce("LetterPile","Angie","It is not the mountain we conquer,but ourselves",new Date(2022,3,14),0,0),
    new Adduce("Mindful life","Cerra","Be you Do you For you",new Date(2022,3,14),0,0),
    new Adduce("Thomas Carlyle","Omondi","No pressure,no diamonds",new Date(2022,3,14),0,0),
  ]
  increment(index:number){
    this.adduces[index].like++;
  }
  decrement(index:number){
    this.adduces[index].dislike++;
  }
  toggleDetails(index:number){
    this.adduces[index].showDescription=!this.adduces[index].showDescription;
  }
  deleteGoal(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.adduces[index].name}?`)
      if (toDelete){
        this.adduces.splice(index,1)
      }
    }
  }
  addNewAdduce(adduce:any){
    // let adduceLength = this.adduces.length;
    // adduce.id = adduceLength+1;
    // adduce.completeDate = new Date(adduce.completeDate)
    this.adduces.push(adduce)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
