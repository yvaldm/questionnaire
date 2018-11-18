import {Component} from '@angular/core';
import * as questions from './questions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  answer: int;
  value: any;
  questionCnt = 0;

  constructor() {
    this.value = questions.default[0];
  }

  nextQuestion() {

    this.value = questions.default[this.questionCnt];
    this.questionCnt++;
  }
}
