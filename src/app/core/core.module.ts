import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import {LayoutService} from './layout/layout.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  exports: [],
  providers: [
    LayoutService,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
