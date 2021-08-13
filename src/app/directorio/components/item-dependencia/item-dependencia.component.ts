import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-dependencia',
  templateUrl: './item-dependencia.component.html',
  styleUrls: ['./item-dependencia.component.scss'],
})
export class ItemDependenciaComponent implements OnInit {

  @Input() itemDependencia: any;

  dependencia: any;

  constructor() {}

  ngOnInit() {
    this.itemDependencia.abierto = false;
  }

  clickDependencia(event){
    this.itemDependencia.abierto = !event;
  }

}
