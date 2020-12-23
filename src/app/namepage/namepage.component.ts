import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';
import { Name } from '../models/name'

@Component({
  selector: 'app-namepage',
  templateUrl: './namepage.component.html',
  styleUrls: ['./namepage.component.css']
})
export class NamepageComponent implements OnInit {

  names: Name[];

  constructor(private connectorService: ConnectorService) { }

  ngOnInit(): void {
    this.fetchNames();
  }

  public fetchNames(){
    this.connectorService.getAllNames().subscribe((results: Name[]) => {
      if (results != undefined || results != null){
        this.names = results
        this.organizeByAmounts();
        console.log(this.names);
      }
    });
  }

  public organizeByAmounts(){
    this.names.sort(this.compareAmounts);
  }

  public organizeAlphabetically(){
    this.names.sort(this.compareNames);
  }

  //reversed
  private compareAmounts(a, b){
    if(a.amount > b.amount){
      return -1;
    }else if(a.amount < b.amount){
      return 1;
    }else{
      return 0;
    }
  }

  private compareNames(a,b){
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA > nameB){
      return 1;
    }else if(nameA < nameB){
      return -1;
    }else{
      return 0;
    }
  }

}
