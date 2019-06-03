import { Component, OnInit } from '@angular/core';
import { CousesWebService } from '@rewiser/core-data';
@Component({
  selector: 'rewiser-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [CousesWebService]
})
export class CoursesComponent implements OnInit {
  constructor(private courseWebService: CousesWebService) {}

  ngOnInit() {
    const value = this.courseWebService.get().subscribe(data => data);
    console.log(value);
  }
}
