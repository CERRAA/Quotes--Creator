import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduceComponent } from './adduce/adduce.component';
import { AdduceDetailsComponent } from './adduce-details/adduce-details.component';
import { AdduceFormComponent } from './adduce-form/adduce-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdduceComponent,
    AdduceDetailsComponent,
    AdduceFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
