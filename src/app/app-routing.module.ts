import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponentComponent} from './course-viewer-component/course-viewer-component.component';
import {ModuleListComponentComponent} from './module-list-component/module-list-component.component';
import {LessonTabsComponentComponent} from './lesson-tabs-component/lesson-tabs-component.component';
import {QuizzesComponent} from './quizzes-component/quizzes.component';
import {QuizComponentComponent} from './quiz-component/quiz-component.component';


const routes: Routes = [
  {path: 'table/courses', component: CourseListComponent},
  {path: 'table/courses/:courseId/modules', component: CourseViewerComponentComponent},
  {path: 'table/courses/:courseId/modules/:mid/lessons', component: CourseViewerComponentComponent},
  {path: 'table/courses/:courseId/modules/:mid/lessons/:lid', component: CourseViewerComponentComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  {path: 'courses/:courseId/quizzes/:quizId', component: QuizComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
