import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel3',
  templateUrl: './carousel3.component.html',
  styleUrls: ['./carousel3.component.css']
})
export class Carousel3Component implements OnInit {

  //Make a loop to set the values
  //Instead of doinf manually
  //If we can fetch
  //the number of images from somewhere
  public imgSel = [ true, false, false ]
  public imgSel5 = [ 0, 1, 2 ]
  cntr = 0;
  cnterX = 0;

  nextClk() {
    if ( this.cntr != 2 ) {
	  //console.log('Check');
	  //console.log(this.cntr);
	  this.imgSel[this.cntr] = false;
	  this.cntr += 1;
	  this.imgSel[this.cntr] = true;
	} else {
	  this.imgSel[this.cntr] = false;
	  this.cntr = 0;
	  this.imgSel[this.cntr] = true;
	}
  }

  prevClk() {
    if ( this.cntr != 0 ) {
	  //console.log('Prev');
	  this.imgSel[this.cntr] = false;
	  this.cntr -= 1;
	  this.imgSel[this.cntr] = true;
	} else {
	  this.imgSel[this.cntr] = false;
	  this.cntr = 2;
	  this.imgSel[this.cntr] = true;
	}
  }

  ringClk(index: number) {
    //console.log('Ring');
	//console.log(index);
	//console.log(this.imgSel.length);
	let i;
	for(i=0; i < this.imgSel.length;i++) {
	  if ( i == index ) {
	    continue;
	  }
	  this.imgSel[i] = false;
	}
	this.imgSel[index] = true;
	this.cntr = index;
  }

  cnterSet() {
    this.cnterX = this.cntr;
  }

  /*
  nextClkX() {
    if ( this.cntr == 2 ) {
	  //console.log('Check 3 !');
	  this.imgSel[this.cntr] = false;
	  this.cntr = 0;
	  this.imgSel[this.cntr] = true;
	} else {
	  //console.log('Check');
	  //console.log(this.cntr);
	  this.imgSel[this.cntr] = false;
	  this.cntr += 1;
	  this.imgSel[this.cntr] = true;
	}
  }

  nextClk2() {
    if ( this.cntr == 3 ) {
	  this.cntr = 0;
	} else {
	//console.log(this.cntr);
	  this.cntr += 1;
	}
  }
  */

  //Observable.interval(10000).takeWhile(() => true).subscribe(() => this.nextClk());


  constructor() {

	/*
    setTimeout(() => {
	  let j = 1;
	  console.log(j);
	}, 5000);
	*/

	/*
	//Slideshow
	setInterval(() => {
	  if ( this.cnterX < 3 ) {
	    this.nextClk();
	  } else {
	  //console.log('Second Condition');
		this.prevClk();
	  }
	  //console.log('WordX:\n'+this.cnterX);
	  this.cnterX += 1;
	  if (this.cnterX == 6) {
	    this.cnterX = 0;
	  }
	  //console.log('Word:\n'+this.cnterX);
	}, 12000);
	*/

  }

  ngOnInit() {

    /*
    someFunc(): void {
      this.imgSel = true;
	  setTimeout(function() {
	    this.imgSel = false;
	    console.log('Feel a change');
    }.bind(this), 3000);

	*/

  }

}
