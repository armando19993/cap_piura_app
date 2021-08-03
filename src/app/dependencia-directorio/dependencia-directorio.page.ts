import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-dependencia-directorio',
  templateUrl: './dependencia-directorio.page.html',
  styleUrls: ['./dependencia-directorio.page.scss'],
})


export class DependenciaDirectorioPage implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit() {
  }

}
