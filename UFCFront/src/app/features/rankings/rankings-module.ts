import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Rankings } from '../../pages/rankings/rankings';

@NgModule({
  imports: [CommonModule, RouterModule, Rankings],
})
export class RankingsModule { }
