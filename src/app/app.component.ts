import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from './common/interface';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class  AppComponent implements OnInit{
  
  constructor(
    private api: ApiService
  ){}
   
  ngOnInit(){ 
    this.api.getLista().subscribe(datos => this.datos = datos)
  }
  datos: User[] = []

  page_size: number =5
  page_number : number= 1
  pageSizeOptions = [5, 10, 15, 20 ]

  handlePage(e: PageEvent){
    this.page_size =e.pageSize
    this.page_number = e.pageIndex + 1
  }
}
