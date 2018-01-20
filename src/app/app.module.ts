import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgTooltipModule } from './ng-tooltip/ng-tooltip.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
