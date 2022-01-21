import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DarkModeService } from 'angular-dark-mode';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  template: `<input
    type="checkbox"
    [checked]="darkMode$ | async"
    (change)="onToggle()"
  />`,
})
export class HeaderComponent implements OnInit {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  showSun: boolean = false;
  showMoon: boolean = true;

  constructor(private darkModeService: DarkModeService, private authService: AuthService) { }

  ngOnInit(): void {
  }
  onToggle(): void {
    this.darkModeService.toggle();
  }

  //**SERVE A NASCONDERE LA LUNA E A MOSTRARE IL SOLE */
showLightMode(){
    if(this.showSun == false) {
      this.showSun = true
      this.showMoon = false
    }
    else {
      this.showSun = false
    }
  }
//**SERVE A NASCONDERE Il SOLE E A MOSTRARE LA LUNA */
  showDarkMode(){
    if(this.showMoon == false) {
      this.showMoon = true
      this.showSun = false
    }
    else {
      this.showMoon = false
    }
  }

  logOut() {
    this.authService.logout();
  }
}


