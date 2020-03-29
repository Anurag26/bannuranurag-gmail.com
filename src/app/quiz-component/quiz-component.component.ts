import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionServiceClient} from '../services/QuestionServiceClient';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
  styleUrls: ['./quiz-component.component.css']
})
export class QuizComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: QuestionServiceClient) { }
  quizId = '';
  courseId = '';
  questions = [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.quizId = params.quizId;
      this.courseId = params.courseId;
      this.service.findAllQuestionForQuiz(this.quizId).then(questions => this.questions = questions);
    });
  }

}
