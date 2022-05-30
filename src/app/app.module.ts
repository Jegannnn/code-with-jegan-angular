import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BootstrapDemoComponent } from './bootstrap-demo/bootstrap-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
