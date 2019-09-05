import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutService} from '../core/layout/layout.service';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  LayoutService.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouting { }
