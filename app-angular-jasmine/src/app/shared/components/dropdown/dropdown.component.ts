import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() items = ['Item 1', 'Item 2', 'Item 3']
  @Input() selected = 'Item 1';
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
