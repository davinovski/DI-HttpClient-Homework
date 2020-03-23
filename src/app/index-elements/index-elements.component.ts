import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-index-elements',
  templateUrl: './index-elements.component.html',
  styleUrls: ['./index-elements.component.css']
})
export class IndexElementsComponent implements OnInit {

  elements: Object;

  constructor(private _httpService : HttpService) { }

  ngOnInit(): void {
    this._httpService.getElements().subscribe(data=>{
      this.elements = data;
    })
  }

}
