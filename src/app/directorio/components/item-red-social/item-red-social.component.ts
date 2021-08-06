import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-red-social',
  templateUrl: './item-red-social.component.html',
  styleUrls: ['./item-red-social.component.scss'],
})
export class ItemRedSocialComponent implements OnInit {

  @Input() redSocial: any;

  constructor() { }

  ngOnInit() {}

}
