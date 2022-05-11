import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2-assignment';
  username = 'test';
  showSecret = false;
  log = [];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  
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

  
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  
}
