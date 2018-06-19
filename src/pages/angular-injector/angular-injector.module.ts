import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AngularInjectorPage } from './angular-injector';

@NgModule({
  declarations: [
    AngularInjectorPage,
  ],
  imports: [
    IonicPageModule.forChild(AngularInjectorPage),
  ],
})
export class AngularInjectorPageModule {}
