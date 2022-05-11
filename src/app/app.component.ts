import { Component } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  title = 'angular2-assignment';
  username = 'test';
  showSecret = false;
  log = [];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  
  onReset() {
    this.username = '';
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }

  onIntervalFired(firedNuember: number) {
    if (firedNuember % 2 === 0) {
      this.evenNumbers.push(firedNuember);
    } else {
      this.oddNumbers.push(firedNuember);
    }
  }
}
