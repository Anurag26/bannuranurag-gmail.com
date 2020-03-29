import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient{
  findAllQuestionForQuiz = (qid) =>
    fetch(`https://cs5610-wbdv-ass8-server.herokuapp.com/api/quizzes/${qid}/questions`).then(response => response.json())
}
