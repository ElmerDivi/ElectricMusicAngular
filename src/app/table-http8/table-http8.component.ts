import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs';
//For Error Handling
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
//^ of Used with handleError()

@Component({
  selector: 'app-table-http8',
  templateUrl: './table-http8.component.html',
  styleUrls: ['./table-http8.component.css']
})
export class TableHttp8Component implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

	this.getHttpData();
	this.storeHttpData2(1);
  }

  //dataFetch;
  private dataURL = 'http://jsonplaceholder.typicode.com/posts';
  postData;
  //^ For length of database
  postData2;
  //Selective database
  some = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //For pagination ^
  selectedP = 3;
  //For pagination ^
  pageNo = 1;
  testSort = false;
  ordArr = [];
  //The sorted array order
  thSelect = [ false,false,false ];

  clickCountTh(id2: number) {
	let x;
	if ( id2 != 0 ) {
	  if ( this.testSort == true ) {
		this.testSort = false;
		this.thSelect[id2] = false;
		for ( x in this.thSelect) {
		  this.thSelect[x] = false;
		}
	  } else {
		this.testSort = true;
		this.thSelect[id2] = true;
		/*
		for ( x in this.thSelect) {
		  if ( x == id2 ) {
			continue;
		  } else {
			this.thSelect[x] = false;
		  }
		}
		 */
	  }
	  //console.log(this.ordArr);
	} else {
	  this.testSort = false;
	  for ( x in this.thSelect) {
		this.thSelect[x] = false;
	  }
	}
	//console.log(this.thSelect);
  }

  setPageFn(ind2) {
	this.selectedP = ind2;
	//console.log(ind2);
  }

  pageRigid(ind3: number) {
	if ( ind3 == 0 ) {
	  this.pageNo = 1;
	  this.selectedP = 3;
	} else {
	  this.pageNo = (this.postData.length/5) - 4;
	  this.selectedP = 7;
	}
  }

  pageNext() {
	if ( (this.pageNo + 5 ) <= (this.postData.length/5) ) {
	  this.pageNo += 1;
	  //this.storeHttpData2(pageNo+4);
	  //this.setPageFn();
	  this.selectedP -= 1;
	}
  }

  pagePrev() {
	if ( this.pageNo != 1 ) {
	  this.pageNo -= 1;
	  this.selectedP += 1;
	}
  }

  pageForw() {
	let index2;
	if ( this.selectedP < 6 && this.selectedP > 2 ) {
	  this.selectedP += 1;
	  index2 = this.pageNo + (this.selectedP-3);
	  //console.log(this.selectedP);
	  //console.log(index2);
	  this.storeHttpData2(index2);
	} else if ( this.selectedP == 6 ) {
	  this.selectedP += 1;
	  //console.log('Before\n'+this.pageNo);
	  this.pageNext();
	  //console.log('After\n'+this.pageNo);
	  index2 = this.pageNo + (this.selectedP-3);
	  //console.log('Index\n'+index2);
	  this.storeHttpData2(index2);
	}
  }

  pageBack() {
	let index2;
	if ( this.selectedP > 3 && this.selectedP < 8 ) {
	  this.selectedP -= 1;
	  index2 = this.pageNo + (this.selectedP-3);
	  this.storeHttpData2(index2);
	} else if ( this.selectedP == 3 ) {
	  if (this.pageNo != 1 ) {
		this.selectedP -= 1;
	  }
	  this.pagePrev();
	  index2 = this.pageNo + (this.selectedP-3);
	  this.storeHttpData2(index2);
	}
  }

  getHttpData (): Observable<any> {
	return this.http.get(this.dataURL)
	  .pipe(
		catchError(this.handleError('getData', []))
	  );
  }

  storeHttpData2(ind: number): void {
	let cInd = (ind - 1)*5;
	this.getHttpData()
	  .subscribe(postData2 => this.postData2 = postData2.slice(cInd,cInd+5));
	this.getHttpData()
	  .subscribe(postData => this.postData = postData);
  }

  /**
   *  Handle Http operation that failed.
   *  Let the app continue.
   *  @param operation - name of the operation that failed
   *  @param result - optional value to return as the observable result
   *  Taken from Ang tutorial 'Heroes'
   */
  private handleError<T> (operation = 'operation', result?: T) {
	return (error: any): Observable<T> => {

	  // TODO2: send the error to remote logging infrastructure
	  console.error(error); // log to console instead

	  // TODO2: better job of transforming error for user consumption
	  //this.log(`${operation} failed: ${error.message}`);

	  // Let the app keep running by returning an empty result.
	  return of(result as T);
	};
  }

  sortBody(Me: number) {
	//this.testSort = true;
	this.ordArr = [];
	let i, arr3 = [], arr4 = [0,1,2,3,4];
	for(i=0;i<5;i++) {
	  //arr2.push(this.postData2[i].body[0]);
	  if ( Me == 0 ) {
		arr3.push(this.postData2[i].title[0]);
	  } else {
		arr3.push(this.postData2[i].body[0]);
	  }
	  //arr4.push(this.postData2[i].id);
	}
	let srtT= [], arr3_2 = [];
	for(i = 0; i < arr3.length; i++) {
	  srtT.push(arr3[i]);
	  arr3_2.push(arr3[i]);
	}
	srtT.sort();
	let j=0, k;
	while ( j < 5 ) {
	  for ( k = 0; k < 5 ; k++ ) {
		if ( arr3[k] == srtT[j] ) {
		  //Verify unique insertion
		  let l, c_2 = 1;
		  for ( l = 0; l < this.ordArr.length; l++) {
			if ( arr4[k] == this.ordArr[l]) {
			  c_2 = 12;
			}
		  }
		  if ( c_2 != 12) {
			this.ordArr.push(arr4[k]);
		  }
		}
	  }
	  j += 1;
	}
	//Insert the currect index for loop if necessary
  }

  TestButton() {
	this.testSort = true;
	//console.log(this.postData2);
	//console.log(this.postData2.length);
	//console.log(this.postData.length/5);
	//console.log(this.postData2[1].body.sort());
	//console.log(this.postData2[1].body[0]);
	let i, arr2 = [], arr3 = [], arr4 = [];
	for(i=0;i<5;i++) {
	  arr2.push(this.postData2[i].body[0]);
	  arr3.push(this.postData2[i].title[0]);
	  arr4.push(this.postData2[i].id);
	}
	/*
	console.log('1');
	console.log(arr2);
	console.log(arr3);
	console.log(arr2.sort());
	 */
	let srtT= [], arr3_2 = [];
	for(i = 0; i < arr3.length; i++) {
	  srtT.push(arr3[i]);
	  arr3_2.push(arr3[i]);
	}
	//srtT.push(arr3);
	srtT.sort();
	/*
	console.log('2');
	console.log(srtT);
	console.log(srtT.length);
	console.log(arr3);
	 */
	let j=0, k, ordArr = [];
	//while length != 0 inside
	while ( j < 5 ) {
	  //Use while here
	  //k = 0
	  //while ( srtT.length != 0 ) {
	  for ( k = 0; k < 5 ; k++ ) {
		if ( arr3[k] == srtT[j] ) {
		  //console.log(i + ':' + arr3[k])
		  //To check for unique
		  let l, c_2 = 1;
		  for ( l = 0; l < ordArr.length; l++) {
			if ( arr4[k] == ordArr[l]) {
			  c_2 = 12;
			}
		  }
		  if ( c_2 != 12) {
			ordArr.push(arr4[k]);
		  }
		  /*
		  arr3.splice(k,1);
		  srtT.splice(j,1);
		   */
		  //arr4.pop(k);
		}
	  }
	  j += 1;
	}
	console.log('3');
	console.log(arr4);
	console.log('arr3\n'+arr3);
	console.log('arr3_sort\n'+srtT);
	console.log('Order:\n'+ordArr);
	//console.log(arr3.sort());
  }


}
