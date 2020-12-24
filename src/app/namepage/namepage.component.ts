import { Component, OnInit } from '@angular/core';
import { ConnectorService } from '../connector.service';
import { Nameinfo } from '../models/nameinfo'

@Component({
  selector: 'app-namepage',
  templateUrl: './namepage.component.html',
  styleUrls: ['./namepage.component.css']
})
export class NamepageComponent implements OnInit {

  nameinfos: Nameinfo[];
  nameToFind = "";
  searchResult = "" ;//for printing the results of search
  totalAmount = 0;

  constructor(private connectorService: ConnectorService) { }

  ngOnInit(): void {
    this.fetchNames();
  }

  public fetchNames() {
    this.connectorService.getAllNames().subscribe((results: Nameinfo[]) => {
      if (results != undefined || results != null) {
        this.nameinfos = results
        this.organizeByAmounts();
        this.totalAmount = this.calculateTotalAmount();
        console.log(this.nameinfos);
      }
    });
  }

  public calculateTotalAmount(){
    let sum = 0;
    for(let i = 0; i < this.nameinfos.length; ++i){
      sum += this.nameinfos[i].amount;
    }
    return sum;
  }

  public showNameInfo() {
    console.log('clicked');
    let result: Nameinfo = null;

    if (this.nameToFind.length > 0) {
      for (let i = 0; i < this.nameinfos.length; ++i) {
        if (this.nameinfos[i].name === this.nameToFind) {
          result = this.nameinfos[i];
          break;
        }
      }
      if(result == null){
        this.searchResult = 'Name doesn\'t exist in the list';
      }else{
        this.searchResult =`${result.name}: ${result.amount}`;
      }
    }else{
      this.searchResult = '';
    }
  }


  public organizeByAmounts() {
    this.nameinfos.sort(this.compareAmounts);
  }

  public organizeAlphabetically() {
    console.log('alphabetically');
    this.nameinfos.sort(this.compareNames);
  }

  //reversed
  private compareAmounts(a, b) {
    if (a.amount > b.amount) {
      return -1;
    } else if (a.amount < b.amount) {
      return 1;
    } else {
      return 0;
    }
  }

  private compareNames(a, b) {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA > nameB) {
      return 1;
    } else if (nameA < nameB) {
      return -1;
    } else {
      return 0;
    }
  }

}
