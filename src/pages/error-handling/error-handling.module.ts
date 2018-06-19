import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ErrorHandlingPage } from './error-handling';

@NgModule({
  declarations: [
    ErrorHandlingPage,
  ],
  imports: [
    IonicPageModule.forChild(ErrorHandlingPage),
  ],
})
export class ErrorHandlingPageModule {}
