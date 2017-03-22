import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import Post from './post';
@Injectable()
export class PostServiceService {

  constructor(private http: Http) { }
  postUrl = "http://localhost:64084/api/post";
  getAll(): Observable<any[]> {
    let url = this.postUrl + '/GetAllPosts';
    return this.http.get(url, { headers: this.getHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }
  getPostById(id: number): Observable<any[]> {
    let url = this.postUrl + '/'+id;
    return this.http.get(url, { headers: this.getHeaders() })
      .map(this.extractData)
      .catch(this.handleError);
  }
  addPost(body) {
    let url = this.postUrl;
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(url, body, options)
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch(this.handleError); //...errors if any
  }
  private extractData(res: Response) {
    return res.json();
  }
  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

}

