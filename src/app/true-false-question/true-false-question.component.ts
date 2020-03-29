import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  constructor() { }
  @Input()
  question;
  choices = ['True', 'False'];
  answer = 'None Selected';
  grading = false;
  selected = '';
  public grade(flag, selected) {
    this.grading = flag;
    this.selected = selected;
  }
  ngOnInit(): void {
  }

}
