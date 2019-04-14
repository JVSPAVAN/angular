import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource,MatPaginator,MatFormField} from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormGroup,FormControl,Validator } from  '@angular/forms';

export interface PeriodicElement {
  Loginname: string;
  position: number;
  SubscriptionStatus: number;
  AAAStatus: string;
}
export interface AnalyticsPeriodicElement {
  position: number;
   Loginname: string ;
   SessionStatus:string;
   SessionStarttime:string;
   SessionEndtime:string;
   LastUpdate:string;
   Duration:string;
   Upload:string;
   Download:string;
    BNG: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, Loginname: 'Sazbo.gabirella', SubscriptionStatus: 315781234, AAAStatus: 'H'},
  {position: 2, Loginname: 'balgo.Adam', SubscriptionStatus: 315781236, AAAStatus: 'He'},
  {position: 3, Loginname: 'Sazbo.gabirella', SubscriptionStatus: 315781238, AAAStatus: 'Li'},
  {position: 4, Loginname: 'balgo.Adam', SubscriptionStatus: 315781230, AAAStatus: 'Be'},
  {position: 5, Loginname: 'Sazbo.gabirella', SubscriptionStatus: 315781234, AAAStatus: 'B'},
  
  
];

const AnalyticsELEMENT_DATA: AnalyticsPeriodicElement[] = [
  {position: 1, Loginname: 'Sazbo.gabirella', SessionStatus:'31578123',SessionStarttime:'2017.12.24',SessionEndtime:'2017.12.24',LastUpdate:'2017.12.24',Duration:'50',Upload:'2GB',Download:'2GB', BNG: 'dplxlns1'},
  {position: 2, Loginname: 'balgo.Adam', SessionStatus:'315781234',SessionStarttime:'2017.12.24',SessionEndtime:'2017.12.24',LastUpdate:'2017.12.24',Duration:'50',Upload:'2GB',Download:'2GB', BNG: 'dplxlns1'},
  {position: 3, Loginname: 'Sazbo.gabirella', SessionStatus:'315781238',SessionStarttime:'2017.12.24',SessionEndtime:'2017.12.24',LastUpdate:'2017.12.24',Duration:'50',Upload:'2GB',Download:'2GB', BNG: 'dplxlns1'},
  {position: 4, Loginname: 'balgo.Adam', SessionStatus:'315781234',SessionStarttime:'2017.12.24',SessionEndtime:'2017.12.24',LastUpdate:'2017.12.24',Duration:'50',Upload:'2GB',Download:'2GB', BNG: 'dplxlns1'},
  {position: 5, Loginname: 'Sazbo.gabirella', SessionStatus:'315781235',SessionStarttime:'2017.12.24',SessionEndtime:'2017.12.24',LastUpdate:'2017.12.24',Duration:'50',Upload:'2GB',Download:'2GB', BNG: 'dplxlns1'},
  
  
];


@Component({
  selector: 'app-searchandlist',
  templateUrl: './searchandlist.component.html',
  styleUrls: ['./searchandlist.component.css'],
  animations: [
    trigger('detailExpand', [
      state('void', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('*', style({ height: '*', visibility: 'visible' })),
      transition('void <=> *', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SearchandlistComponent implements OnInit {

  viewMode="Customer";


  constructor() { }

  displayedColumns: string[] = ['position', 'Loginname', 'SubscriptionStatus', 'AAAStatus'];
  AnalyticsdisplayedColumns: string[] = ['position', 'Loginname','SessionStatus', 'SessionStarttime','SessionEndtime','LastUpdate','Duration','Upload','Download','BNG'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  AnalyticsdataSource = new MatTableDataSource(AnalyticsELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatPaginator) Analyticspaginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) Analyticssort: MatSort;
  
  isExpansionDetailRow = (index, row) => row.hasOwnProperty('detailRow');

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.AnalyticsdataSource.paginator = this.Analyticspaginator;
    this.dataSource.sort = this.sort;
    this.AnalyticsdataSource.sort = this.Analyticssort;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  Searchcustomerlistform = new FormGroup({});

  SearchCustomerform()
  {
    console.log("form-submitted");

  }
}
