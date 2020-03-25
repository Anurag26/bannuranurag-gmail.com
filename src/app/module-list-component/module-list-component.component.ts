import { Component, OnInit } from '@angular/core';
import {ModuleServiceClient} from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor(private service: ModuleServiceClient, private route: ActivatedRoute) { }
  modules = [];
  courseId = '';
  moduleId = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.moduleId = params.mid;
      this.courseId = params.courseId;
      this.service.findModulesForCourse(this.courseId).then(modules => this.modules = modules);
    });
  }
}
