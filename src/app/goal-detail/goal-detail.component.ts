// import { Component, OnInit,Input } from '@angular/core';
// import { Goal } from '../goal';

// @Component({
//   selector: 'app-goal-detail',
//   templateUrl: './goal-detail.component.html',
//   styleUrls: ['./goal-detail.component.css']
// })
// export class GoalDetailComponent implements OnInit {
//   @Input() goal!:
//    Goal;

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() goal!: Goal;
  // constructor() { }

  @Output() isComplete = new EventEmitter<boolean>();

  // goalComplete(complete:boolean){
    // this.isComplete.emit(complete);

  goalDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  }

  // ngOnInit() :void{}



function goalDelete(complete: boolean, boolean: any): void {
  throw new Error('Function not implemented.');
}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

