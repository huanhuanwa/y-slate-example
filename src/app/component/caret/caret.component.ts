import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'demo-caret',
  templateUrl: './caret.component.html',
  styleUrls: ['./caret.component.scss']
})
export class CaretComponent implements OnInit {

  @Input() decorate: any;

  @Input() isForward: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
