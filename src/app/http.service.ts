import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class HttpService {

  constructor(private _httpClient : HttpClient) { }

  getElements(){
    return this._httpClient.get('https://my-json-server.typicode.com/typicode/demo/posts');
  }
}
