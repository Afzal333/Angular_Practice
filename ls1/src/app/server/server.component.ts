import { Component } from "@angular/core";
import { withLatestFrom } from "rxjs";

@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    server: string = 'Afzal';
    serverId: number =10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline';
    }

 getServerStatus() {
    return this.serverStatus;
    }

 getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}