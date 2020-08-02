import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  text: string = '';
  variant: string = 'default';

  constructor() { }

  ngOnInit(): void {
  }

}
