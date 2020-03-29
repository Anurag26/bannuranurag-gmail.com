import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzesForCourse = (cid) =>
    fetch(`http://localhost:5000/api/quizzes/${cid}`).then(response => response.json())
}
