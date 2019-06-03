import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MAIN_MENU } from '../assets/menu/menu';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'rewiser-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private breakpointObserver: BreakpointObserver,
    public platform: Platform
  ) {}
  closeInMobile: boolean;

  title: string;
  menuList: any[];
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  ngOnInit() {
    this.closeInMobile = false;
    this.title = 'Rewiser';
    this.menuList = MAIN_MENU;
    if (this.platform.ANDROID || this.platform.IOS) {
      this.closeInMobile = true;
    }
  }
}
