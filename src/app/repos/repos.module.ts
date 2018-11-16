import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReposComponent } from './repos.component';

@NgModule({
  declarations: [
    ReposComponent,
  ],
  imports: [
    CommonModule,
    ScrollingModule,
  ],
})
export class ReposModule { }
