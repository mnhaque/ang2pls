import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No servers created';
  serverName = 'abcd';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server was created. and the name is' + this.serverName;
    this.servers.push(this.serverName);
  }
  OnUpdateServerName($e: Event) {
    this.serverName = (<HTMLInputElement>$e.target).value;
  }
}
