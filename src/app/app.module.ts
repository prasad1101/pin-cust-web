import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSelectModule } from 'ngx-select-ex';
import { FileUploadModule } from 'ng2-file-upload';
import { RouterLink, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './modules/shared/shared.module';
@NgModule({
  declarations: [AppComponent, LandingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSelectModule,
    FileUploadModule,
    RouterLink,
    RouterModule,
    ModalModule.forRoot(),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
