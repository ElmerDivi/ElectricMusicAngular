import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/*
//Gmap Stuff
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
*/

@Component({
  selector: 'app-contact7',
  templateUrl: './contact7.component.html',
  styleUrls: ['./contact7.component.css']
})
export class Contact7Component implements OnInit {

  formdata3;

  sMsg2 = false;

  sMsgForm() {
    this.sMsg2 = true;
  }

  /*
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  */

  //Another Gmap Approach
  lat: number = 28.691472;
  lng: number = 77.151151;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
    this.formdata3 = new FormGroup({
	  name: new FormControl(""),
	  email: new FormControl("", Validators.compose([
	    Validators.required,
	    Validators.pattern("[^ @]*@[^ @]*")
	  ])),
	  //desc: new FormControl(""),
	  contact: new FormControl("")
	});

	/*
	var mapProp = {
	  center: new google.maps.LatLng(28.691472,77.151151),
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
	*/

  }

}
