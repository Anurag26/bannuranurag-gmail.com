import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceCLient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }

  courseTitle = '';
  courses = [];
  courseId = '';
  createNewCourse = (title) => this.courses.push({ name: title});

  deleteThisCourse = (delCourse) => {
    this.courses = this.courses.filter(course => course !== delCourse);
  }


  ngOnInit(): void {
    this.service.findAllCourses().then(courses => this.courses = courses);
  }

}
