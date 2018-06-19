import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingletonServiceAngular2Page } from './singleton-service-angular2';

@NgModule({
  declarations: [
    SingletonServiceAngular2Page,
  ],
  imports: [
    IonicPageModule.forChild(SingletonServiceAngular2Page),
  ],
})
export class SingletonServiceAngular2PageModule {}
