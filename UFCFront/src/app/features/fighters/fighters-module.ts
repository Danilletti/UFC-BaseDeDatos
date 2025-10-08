import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Fighters } from '../../pages/fighters/fighters';
import { FighterDetail } from '../../pages/fighter-detail/fighter-detail';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Fighters,
    FighterDetail
  ],
})
export class FightersModule { }
