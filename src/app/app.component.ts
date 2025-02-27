import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_SERVER_INFO } from './graphql.operations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  data: any[] = [];
  error: any;
  title = 'speckle';

  constructor(private apollo: Apollo){}
  
  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_SERVER_INFO
    }).valueChanges.subscribe(({data, error}: any) =>{
      this.data = data;
      this.error = error;
    });
  }

}
