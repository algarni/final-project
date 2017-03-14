import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Course } from './course';

@Injectable()
export class CoursesService {

  constructor(private af: AngularFire) { }

  findAllCourses(): Observable<Course[]>{
    return this.af.database.list('courses').map(Course.fromJsonArray);
  }

}
