import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component'; // ✅ Standalone component
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
     // ✅ Regular component declared here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent // ✅ Standalone component imported here
  ],
  providers: [],
  bootstrap: [] // ✅ Bootstrap the standalone root component
})
export class AppModule { }
