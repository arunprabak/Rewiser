import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { HttpClientModule } from '@angular/common/http';
// import { CousesWebService } from './course.service';

@NgModule({
  declarations: [CoursesComponent],
  imports: [CommonModule, HttpClientModule, CoursesRoutingModule]
})
export class CoursesModule {}
