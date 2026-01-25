import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    MatCardHeader,
    MatCardTitle,
    MatCard,
    MatCardSubtitle,
    MatButton,
    MatCardActions
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
