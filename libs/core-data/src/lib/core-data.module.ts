import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CousesWebService } from './courses/couses-web.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CousesWebService],
  exports: [CousesWebService]
})
export class CoreDataModule {}
