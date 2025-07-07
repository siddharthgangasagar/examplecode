import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app/app.routes'; // if you defined routes separately

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
    )
  ]
}).catch(err => console.error(err));
