import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, MahasiswaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
