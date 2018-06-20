import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ObservableUnsubscribePage } from './observable-unsubscribe';

@NgModule({
  declarations: [
    ObservableUnsubscribePage,
  ],
  imports: [
    IonicPageModule.forChild(ObservableUnsubscribePage),
  ],
})
export class ObservableUnsubscribePageModule {}
