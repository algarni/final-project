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
  AllLessons: Lesson[];
  filtered: Lesson[];

  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.findAllLessons()
      .do(console.log)
      .subscribe(
      lessons => this.AllLessons = this.filtered = lessons
      );
  }

  search(search: string){
    this.filtered = this.AllLessons.filter(lesson => lesson.description.includes(search));
  }

}
