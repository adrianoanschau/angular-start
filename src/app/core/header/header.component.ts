import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  drawer: MatSidenav;

  @Input()
  isHandset: Observable<boolean>;

  constructor() {
  }
}
