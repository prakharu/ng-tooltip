import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipService } from './tooltip.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TooltipComponent, TooltipDirective],
  providers: [TooltipService],
  exports: [TooltipComponent, TooltipDirective]
})
export class NgTooltipModule { }
