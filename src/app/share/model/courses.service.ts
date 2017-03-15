import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, AngularFireDatabase } from 'angularfire2';
import 'rxjs/Rx'


import { Course } from './course';
import { Lesson } from './lesson';
;

@Injectable()
export class CoursesService {

  constructor(private db: AngularFireDatabase) { }

  findAllCourses(): Observable<Course[]>{
    return this.db.list('courses').map(Course.fromJsonArray);
  }

  findCourseByUrl(courseUrl: string): Observable<Course>{
    return this.db.list('courses', {
      query: {
        orderByChild: 'url',
        equalTo: courseUrl
      }
    })
      .map(results => results[0]);
  }

  findAllessonsForCourse(courseUrl: string): Observable<Lesson[]>{
    const course$ = this.findCourseByUrl(courseUrl);
    
    const lessonsPerCourse$ = course$
      .switchMap(course => this.db.list('lessonsPerCourse/' + course.$key));
    
    const courseLessons$ = lessonsPerCourse$
      .map(lspc => lspc.map(lpc => this.db.object('lessons/' + lpc.$key)))
      .flatMap(fbObj => Observable.combineLatest(fbObj))
      .do(console.log);

    
    
    courseLessons$.subscribe();

    return Observable.of([]);
  }


}
