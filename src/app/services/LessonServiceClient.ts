import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient{
  findLessonsForModule = (mid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bannur/modules/${mid}/lessons`)
      .then(response => response.json())
}
