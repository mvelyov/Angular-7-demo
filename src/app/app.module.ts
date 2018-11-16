import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { ReposModule } from './repos/repos.module';
import { UsersModule } from './users';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UsersModule,
    ReposModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent],
})
export class AppModule { }
