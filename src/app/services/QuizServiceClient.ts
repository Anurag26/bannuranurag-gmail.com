import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzesForCourse = (cid) =>
    fetch(`https://cs5610-wbdv-ass8-server.herokuapp.com/api/quizzes/${cid}`).then(response => response.json())
}
