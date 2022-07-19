import { Component, OnInit,Input, ViewEncapsulation, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string };
  @ContentChild('contentparagrapg') paragraph: ElementRef;

  constructor() { }

  ngOnInit(){
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentInit(){
    console.log('Text content of paragraph' + this.paragraph.nativeElement.textContent)
  }

}
