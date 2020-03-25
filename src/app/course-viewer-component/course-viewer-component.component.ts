import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../services/CourseServiceCLient';

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer-component.component.html',
  styleUrls: ['./course-viewer-component.component.css']
})
export class CourseViewerComponentComponent implements OnInit {

  constructor( private service: CourseServiceClient, private route: ActivatedRoute) { }
  courseId: '';
  course = {
    courseName: ''
  };
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findCourseById(this.courseId).then(course => {
        this.course.courseName = course.courseName;
        this.courseId = course._id;
      });
    });
  }

}
