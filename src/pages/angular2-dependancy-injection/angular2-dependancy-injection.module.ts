import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Angular2DependancyInjectionPage } from './angular2-dependancy-injection';

@NgModule({
  declarations: [
    Angular2DependancyInjectionPage,
  ],
  imports: [
    IonicPageModule.forChild(Angular2DependancyInjectionPage),
  ],
})
export class Angular2DependancyInjectionPageModule {}
