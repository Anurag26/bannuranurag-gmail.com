import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceCLient';
import {ModuleServiceClient} from './services/ModuleServiceClient';
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import {LessonServiceClient} from './services/LessonServiceClient';
import {RouterModule} from '@angular/router';
import { QuizzesComponent } from './quizzes-component/quizzes.component';
import {QuizServiceClient} from './services/QuizServiceClient';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';
import {QuestionServiceClient} from './services/QuestionServiceClient';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    QuizzesComponent,
    QuizComponentComponent,
    MultipleChoiceQuestionComponent,
    TrueFalseQuestionComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule
    ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    QuizServiceClient,
    QuestionServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
