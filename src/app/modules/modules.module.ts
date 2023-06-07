import { QuickUiModule } from 'quick-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';


@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ,	QuickUiModule,
]
})
export class ModulesModule { }
