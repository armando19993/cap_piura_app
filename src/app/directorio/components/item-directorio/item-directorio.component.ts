import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-directorio',
  templateUrl: './item-directorio.component.html',
  styleUrls: ['./item-directorio.component.scss'],
})
export class ItemDirectorioComponent implements OnInit {

  @Input() itemDirectorio: any;

  constructor() { }

  ngOnInit() {}

}
