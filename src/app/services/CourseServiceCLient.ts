import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findAllCourses = () => fetch('https://wbdv-generic-server.herokuapp.com/api/bannur/courses')
      .then(response => response.json())

  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/bannur/courses/${courseId}`)
      .then(response => response.json())

}



