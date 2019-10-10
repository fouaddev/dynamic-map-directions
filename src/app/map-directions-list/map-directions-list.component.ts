import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map-directions-list',
  templateUrl: './map-directions-list.component.html',
  styleUrls: ['./map-directions-list.component.scss']
})
export class MapDirectionsListComponent implements OnInit {

  @Input()
  itemsList: any;

  constructor() {
  }

  ngOnInit() {
  }

}
