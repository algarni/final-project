import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import 'rxjs/add/operator/map';


import { Course } from './course';
import { Lesson } from './lesson';
;

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]>{
    return this.db.list('courses').map(Course.fromJsonArray);
  }

  findAllessonsForCourse(courseUrl: string): Observable<Lesson[]>{
    const course$ = this.db.list('courses', {
      query:{
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
    .do(console.log);

    course$.subscribe();

    return course$;
  }


}
