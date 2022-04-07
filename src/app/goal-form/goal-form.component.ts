// import { Component, OnInit } from '@angular/core';
// import { Goal } from '../goal';
// @Component({
//   selector: 'app-goal-form',
//   templateUrl: './goal-form.component.html',
//   styleUrls: ['./goal-form.component.css']
// })
// export class GoalFormComponent implements OnInit {
//   newGoal = new Goal(0,"","",new Date());
//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {
form =NgForm
  newGoal = new Goal(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}