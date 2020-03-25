import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceCLient';
import { CourseViewerComponentComponent } from './course-viewer-component/course-viewer-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponentComponent,
    ModuleListComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
    CourseServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
