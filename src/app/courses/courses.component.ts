import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CoursesService } from '../share/model/courses.service';
import { Course } from '../share/model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses$ = this.coursesService.findAllCourses()
  }

}
