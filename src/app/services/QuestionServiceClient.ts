import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient{
  findAllQuestionForQuiz = (qid) =>
    fetch(`http://localhost:5000/api/quizzes/${qid}/questions`).then(response => response.json())
}
