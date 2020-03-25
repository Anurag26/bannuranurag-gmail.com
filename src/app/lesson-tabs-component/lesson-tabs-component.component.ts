import { Component, OnInit } from '@angular/core';
import {LessonServiceClient} from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs-component.component.html',
  styleUrls: ['./lesson-tabs-component.component.css']
})
export class LessonTabsComponentComponent implements OnInit {

  constructor(private service: LessonServiceClient, private route: ActivatedRoute) {}
  moduleId = '';
  courseId = '';
  lessons = [];
  lessonId = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.courseId;
      this.lessonId = params.lid;
      this.service.findLessonsForModule(this.moduleId).then(lessons => this.lessons = lessons);
    });
    // this.service.findLessonsForModule(this.moduleId).then(lessons => this.lessons = lessons);
  }

}
