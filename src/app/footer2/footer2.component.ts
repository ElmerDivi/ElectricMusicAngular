import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  formdata;
  formdata2;

  sMsg = [ false, false ];

  msgDisplay(x) {
    this.sMsg[x] = true;
  }

  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
	  name: new FormControl(""),
	  email: new FormControl("", Validators.compose([
	    Validators.required,
	    Validators.pattern("[^ @]*@[^ @]*")
	  ])),
	  //number: new FormControl("", this.passVal)
	  number: new FormControl("")
	});

	this.formdata2 = new FormGroup({
	  subscr: new FormControl("", Validators.compose([
	    Validators.required,
	    Validators.pattern("[^ @]*@[^ @]*")
	  ])),
	});

  }

  /*
  passVal(formcontrol) {
    if(formcontrol.value.length < 10) {
	  return { "number" : true };
	}
  }
  */

}
