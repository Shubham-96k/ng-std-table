import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StdtableComponent } from './shared/components/stdtable/stdtable.component';
import { StdformComponent } from './shared/components/stdform/stdform.component';

@NgModule({
  declarations: [
    AppComponent,
    StdtableComponent,
    StdformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
