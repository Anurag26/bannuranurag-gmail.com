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

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
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
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
