import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  onCreatedServer = 'not created';
  serverName = '';
  userName = '';
  isHidden = false;
  logs = [];

  constructor() { 
    setTimeout(() => {this.allowNewServer = true;}, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.onCreatedServer = this.serverName + ' was created successfuly !';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName() {
    this.userName;
  }

  resetUserName() {
    this.userName = '';
  }

  displayDetails() {
    this.isHidden = !this.isHidden;
    this.logs.push(new Date());
  }

  getBackgroundColor() {
    return this.logs.length >= 5 ? 'blue' : 'transparant';
  }
}
