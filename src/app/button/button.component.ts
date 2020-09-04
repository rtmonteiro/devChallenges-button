import { Component, OnInit, Input } from '@angular/core';

interface Props {
  text: string;
  variant: string;
  color: string;
  disableShadow: boolean;
  disabled: boolean;
}

@Component({
  selector: 'dev-button',
  template: '<button>{{text}}</button>',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('disableShadow') disableShadow: boolean = false;
  @Input('disabled') disabled: boolean = false;
  text: string;
  variant: string = 'default';
  color: string = 'default';
  size: string = 'md';

  constructor() { }

  ngOnInit(): void {
    const btn = document.querySelector('button');
    if (this.disableShadow) {
      btn.style.boxShadow = 'none';
    }
    if (this.disabled) {
      btn.disabled = this.disabled;
    }
    this.getClasses().forEach(cssClass => btn.classList.add(cssClass))
  }

  getClasses(): string[] {
    let classList = [];
    switch (this.variant){
      case 'outline':
        classList.push('variant-outline');
        break;
      case 'text':
        classList.push('variant-text');
        break;
      default:
        classList.push('variant-default');
        break;
    }
    switch (this.color){
      case 'primary':
        classList.push('color-primary');
        break;
      case 'secondary':
        classList.push('color-secondary');
        break;
      case 'danger':
        classList.push('color-danger');
        break;
      default:
        classList.push('color-default');
        break;
    }
    switch (this.size) {
      case 'sm':
        classList.push('size-sm');
        break;
      case 'lg':
        classList.push('size-lg');
        break;
      default:
        classList.push('size-md');
        break;
    }
    return classList;
  }

}
