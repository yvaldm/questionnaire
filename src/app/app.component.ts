import {Component} from '@angular/core';

import * as questions from './questions.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  showResult: boolean;
  success: boolean;
  answer: any;
  value: any;
  questionCnt = 0;

  constructor() {
    this.value = questions.default[0];
    this.success = false;
    this.showResult = false;
  }

  checkAnswer() {
    this.showResult = true;

    let givenAnswer = 0;
    for (const entry of this.value.answers) {
      if (entry === this.answer) {
        break;
      }
      givenAnswer++;
    }

    this.success = this.value.correct_answer === givenAnswer;
  }

  nextQuestion() {
    this.showResult = false;

    this.questionCnt++;
    if (this.questionCnt >= questions.default.length) {
      return;
    }

    this.value = questions.default[this.questionCnt];
  }
}
