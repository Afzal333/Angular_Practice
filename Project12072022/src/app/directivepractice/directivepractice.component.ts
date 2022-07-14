import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivepractice',
  templateUrl: './directivepractice.component.html',
  styleUrls: ['./directivepractice.component.css']
})
export class DirectivepracticeComponent implements OnInit {

  showSecret = false;
  log: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onToggleDetail(){
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }

 

}
