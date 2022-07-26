import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'transparent';

   @HostBinding('style.backgroundColor') backgroundColor: string ;

  constructor(private elRef: ElementRef, private renderer: Renderer2 ) { 

  }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue'); 
    // this.backgroundColor='blue';
    this.backgroundColor=this.highlightColor; 
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    // this.backgroundColor='transparent';
    this.backgroundColor=this.defaultColor;    
  }

}
