import { Injectable } from '@angular/core';
import {Route, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';

@Injectable()
export class LayoutService {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: LayoutComponent,
      children: routes,
      canActivate: [],
      data: { reuse: true }
    };
  }
}
