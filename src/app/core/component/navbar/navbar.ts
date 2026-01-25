import { Component } from '@angular/core';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconButton,
    MatToolbar,
    MatIcon,
    MatButton,
    RouterLink,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
