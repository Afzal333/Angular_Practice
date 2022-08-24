import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { Post } from "./post.model";

@Injectable({providedIn:'root'})

export class PostService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content:string){
    const postData: Post = {title: title, content: content};
    this.http
    .post<{ name: string }>(
      'https://ng-complete-guide-d53b7-default-rtdb.firebaseio.com/posts.json', 
       postData,
       {
        observe:'response'
       }
      ).subscribe(responseData => {
        console.log(responseData);
      },error => {
        this.error.next(error.message)
      });
  }

  fetchPosts(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');
    return this.http
    .get<{ [key: string] : Post}>('https://ng-complete-guide-d53b7-default-rtdb.firebaseio.com/posts.json',
    {
      headers: new HttpHeaders({'Custom-Header': 'Hello'}),
      // params: new HttpParams().set('print','pretty')
      params: searchParams,
      responseType:'json'
    })
     .pipe(map((responseData) => {
       const postsArray: Post[] = [];
         for (const key in responseData) {
          if(responseData.hasOwnProperty(key)){
           postsArray.push({...responseData[key],id: key})
        }
       }
      return postsArray;
     }),
     catchError(errorRes => {
      return throwError(errorRes);
     })
    );  
  }

  deletePosts(){
    return this.http.delete('https://ng-complete-guide-d53b7-default-rtdb.firebaseio.com/posts.json',
    {
      observe: 'events',
      responseType:'text'
    }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent){

      }
      if (event.type === HttpEventType.Response){
        console.log(event.body);
      }
    }));
  }
}