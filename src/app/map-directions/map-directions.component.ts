import { Component, OnInit, Input } from '@angular/core';
import { GetDirectionsService } from '../services/get-directions.service';

import { Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-map-directions',
  templateUrl: './map-directions.component.html',
  styleUrls: ['./map-directions.component.scss']
})
export class MapDirectionsComponent implements OnInit {

  fromLocation: string;
  toLocation: string;
  KEY: string;
  url: string;
  data: any;

  // a subject to publish search terms
  private searchKeywords: Subject<string>;

  constructor(private directionsAPI: GetDirectionsService) {
    this.fromLocation = 'revere, ma';
    this.toLocation = 'allston, ma';
    this.KEY = 'hILK0iUiqKMl8fwW1xQb7NDx1uB7P75H';
  }

  // Push a search term into the observable stream.
	dynamicDirections(from: string, to: string): void {
    let term: any = {from: from, to: to};
	  this.searchKeywords.next(term);
	}
  
  ngOnInit() {

    // Assigns a new Subject Observable instance to searchKeywords property
    this.searchKeywords = new Subject<string>();

    // Initializes the Subject Observable searchKeywords
  	this.searchKeywords.pipe(
  			// wait 1000ms after each keystroke before considering the term
  			debounceTime(1000),
  			// ignore new term if same as previous term
      	distinctUntilChanged(),
      	switchMap((term: any): any => {
          this.fromLocation = term.from;
          this.toLocation = term.to;
          this.url = `http://open.mapquestapi.com/directions/v2/route?key=${this.KEY}&from=${this.fromLocation}&to=${this.toLocation}`;
          return this.directionsAPI.getDirections(this.url)
      	})
  		)
  	  .subscribe((APIdata: any) => {
        console.log(APIdata);
				this.data = APIdata;
      });
    
    // Searches for default input keywords when the app starts
    this.dynamicDirections(this.fromLocation, this.toLocation);
  }
  
  // Searches for input keywords only when button is clicked
  clickedToSearch(fromLocation?: string, toLocation?: string): any {
    this.url = `http://open.mapquestapi.com/directions/v2/route?key=${this.KEY}&from=${this.fromLocation}&to=${this.toLocation}`;
    return this.directionsAPI.getDirections(this.url)
    .subscribe(APIdata => {
      console.log(APIdata);
      this.data = APIdata;
    });
  }

}
