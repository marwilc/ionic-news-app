import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab4Page } from './tab4.page';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    Tab4PageRoutingModule,
  ],
  declarations: [Tab4Page],
})
export class Tab4PageModule {}
