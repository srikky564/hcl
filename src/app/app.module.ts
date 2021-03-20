import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import { PagerService } from 'src/core/services/pagination.service';

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
