import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('disableShadow') disableShadow: boolean = false;
  @Input('disabled') disabled: boolean = false;
  text: string = '';
  variant: string = 'default';
  color: string = 'default';

  constructor() { }

  ngOnInit(): void {
    const btn = document.querySelector('button');
    if (this.disableShadow) {
      btn.style.boxShadow = 'none';
    }
    btn.disabled = this.disabled;
  }

  getClasses() {
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
    }
    return classList;
  }

}
