import {Component} from '@angular/core';
import * as questions from './questions.json';
import {Router} from '@angular/router';

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
  router: Router;

  constructor(private rt: Router) {
    this.value = questions.default[0];
    this.success = false;
    this.showResult = false;
    this.router = rt;
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
    this.answer = '';

    this.questionCnt++;
    if (this.questionCnt >= questions.default.length) {
      this.router.navigate(['/finished']);
      return;
    }

    this.value = questions.default[this.questionCnt];
  }
}
