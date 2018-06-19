import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RouteParametersPage } from './route-parameters';

@NgModule({
  declarations: [
    RouteParametersPage,
  ],
  imports: [
    IonicPageModule.forChild(RouteParametersPage),
  ],
})
export class RouteParametersPageModule {}
