import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/do';

import { LessonsService } from 'app/share/model/lessons.service';
import { Lesson } from '../share/model/lesson';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lessons: Lesson[];

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.findAllLessons()
      .do(console.log)
      .subscribe(
      lessons => this.lessons = lessons
      );
  }

}
