import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RootInjectorPage } from './root-injector';

@NgModule({
  declarations: [
    RootInjectorPage,
  ],
  imports: [
    IonicPageModule.forChild(RootInjectorPage),
  ],
})
export class RootInjectorPageModule {}
