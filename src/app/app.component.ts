import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatMenuModule, MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  source = '../assets/img.jpg'
  action = '';
  url = '';
  number: number = 0;

  update(src: string, history: string){
    this.source = src;
    this.url = `https://app.gtowizard.com/solutions?solution_type=gwiz&gmfs_solution_tab=ai_sols&gametype=Cash6m50zGeneral25Open&depth=100&gmfft_sort_key=0&gmfft_sort_order=desc&preflop_actions=${history}&history_spot=7&dialogs=cards-dialog`
    this.action = this.source.replace('../assets/', '').replace('.png','').replace('/',' pot: ');
    this.getRandomNumber();
  }

  getRandomNumber() {
    this.number = Math.floor(Math.random() * 100);
  }
}
