import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account:{name: string, status: string};
  @Input() id: number;
 

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status : string){
    this.accountsService.updateStatus(this.id, status)
    // this.loggingService.logStatusChanged(status);
    this.accountsService.statusUpdated.emit(status);
  }  

}
