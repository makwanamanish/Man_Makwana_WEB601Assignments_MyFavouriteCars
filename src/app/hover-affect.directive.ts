import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input('appHoverAffect') styleProperty: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle(this.styleProperty, true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyStyle(this.styleProperty, false);
  }

  private applyStyle(property: string, value: boolean) {
    this.renderer.setStyle(this.elementRef.nativeElement, property, value ? this.getStyleValue(property) : null);
  }

  private getStyleValue(property: string): string {
    switch (property) {
      case 'text-decoration':
        return 'underline';
      case 'font-weight':
        return 'bold';
      case 'border':
        return '2px solid blue';
      default:
        return '';
    }
  }

}
