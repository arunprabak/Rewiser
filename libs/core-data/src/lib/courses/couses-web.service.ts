import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/playlists';
const apiKey = 'AIzaSyDC68yKBwbmMSwr4F9y8R39Knq4zi36fMs';

@Injectable({
  providedIn: 'root'
})
export class CousesWebService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    const endPoint = BASE_URL;
    const getHeader = {
      headers: new HttpHeaders({
        part: 'snippet,contentDetails',
        channelId: 'UCLv7Gzc3VTO6ggFlXY0sOyw',
        maxResults: '25',
        key: apiKey
      })
    };
    return this.http.get(endPoint, getHeader);
  }

  // Observable<any> {
  //   const getHeader = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     })
  //   };
  //   const endPoint = this.urlEndPoint + url;
  //   return this.http.get(endPoint, getHeader);
  // }
}
