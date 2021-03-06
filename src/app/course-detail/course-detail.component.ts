import { Component, OnInit } from '@angular/core';
import { AngularFire } from "angularfire2";
import { CoursesService } from "app/share/model/courses.service";
import { Observable } from "rxjs/Observable";
import { Lesson } from "app/share/model/lesson";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  lessons$: Observable<Lesson[]>;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService) { }

  ngOnInit() {
    const courseUrl = this.route.snapshot.params['id'];
    this.coursesService.findAllessonsForCourse(courseUrl);
  }

}
