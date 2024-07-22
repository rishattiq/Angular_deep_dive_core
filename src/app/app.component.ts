// import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Inject, Injector, NgModule, OnInit} from '@angular/core';
// import {Course} from './model/course';
// import {observable, Observable} from 'rxjs';
// import {AppConfig, CONFIG_TOKEN} from './config';
// import {COURSES} from '../db-data';
// import {CoursesService} from './courses/courses.service';
// import {createCustomElement} from '@angular/elements';
// import {CourseTitleComponent} from './course-title/course-title.component';
// import {CourseCardComponent} from './courses/course-card/course-card.component';
// import {CourseImageComponent} from './courses/course-image/course-image.component';
// import {NgForOf} from '@angular/common';
// import { HttpClient, HttpParams } from '@angular/common/http';
// import { Pipe } from '@angular/core';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   imports: [
//     CourseCardComponent,
//     CourseImageComponent,
//     NgForOf
//   ],
//   standalone: true
// })
// export class AppComponent implements OnInit {

//     // courses: Course[] = COURSES;

//     // coursesTotal = this.courses.length;

//     // constructor(
//     //     private coursesService: CoursesService,
//     //     @Inject(CONFIG_TOKEN) private config: AppConfig,
//     //     private injector: Injector) {

//     // }

//     // ngOnInit() {

//     //     //const htmlElement = createCustomElement(CourseTitleComponent, {injector:this.injector});

//     //     //customElements.define('course-title', htmlElement);

//     // }

//     // onEditCourse() {

//     //         this.courses[1].category = 'ADVANCED';

//     // }

    

//     courses$ : Observable<Course[]>
//     constructor(private courseService: CoursesService ){

//     }

//     ngOnInit(){



//       this.courses$ =  this.courseService.loadCourses();
        
//     }

//     save(course: Course) {
//         this.courseService.saveCourse(course)
//             .subscribe(
//                 () => console.log('Course Saved!')
//             );
//     }


// }

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';
import { CoursesService } from './courses/courses.service';
import { CourseCardComponent } from './courses/course-card/course-card.component';
import { CourseImageComponent } from './courses/course-image/course-image.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    CommonModule
    // No need to include NgForOf here, it's used directly in the template
  ],
  standalone: true
})
export class AppComponent implements OnInit {

    courses$: Observable<Course[]>;

    constructor(private coursesService: CoursesService) {}

    ngOnInit() {
        this.courses$ = this.coursesService.loadCourses();
    }

    save(course: Course) {
        this.coursesService.saveCourse(course)
            .subscribe(
                () => console.log('Course Saved!')
            );
    }

    
    onEditCourse() {

            this.courses$[1].category = 'ADVANCED';

    }

}

