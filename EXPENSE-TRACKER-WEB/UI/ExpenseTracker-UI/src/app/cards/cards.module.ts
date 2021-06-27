import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCardComponent } from './add-card/add-card.component';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AddCardComponent, DisplayCardsComponent],
  imports: [CommonModule, RouterModule],
})
export class CardsModule {}
