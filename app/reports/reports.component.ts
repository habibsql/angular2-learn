import {Component, OnInit} from '@angular/core';
import {Report} from './report.model';
import {ReportService} from './report.service';

@Component({
    moduleId: module.id,
    selector:"report-view",
     templateUrl:"reports.component.html",
     styleUrls:["reports.component.css"] ,
     providers:[ReportService]
})
export class ReportsComponent implements OnInit  {    
    reports: Report[] =[];
    reportSource: Report[] =[];
    selectAll:boolean = false;
    reportIds: number[] = [];

    constructor(private reportService: ReportService){                 
    }  

    ngOnInit(){
        this.reportSource = this.reportService.getAllReports();
        this.reports = this.reportSource;
        this.reportSource.map(r=> this.reportIds.push(r.reportId) );
    }
    
    onSort(columnName:string, sortDirection:string):void{               
        this.reports.sort( function (x, y) {
            return ((x[columnName] === y[columnName] ? 0 : ((x[columnName] > y[columnName]) ? 1 : -1)))
            });    
    }

    onSelectAll():void{
        this.selectAll = !this.selectAll;       
         this.reports.map(r=> r.isSelected =this.selectAll);        
    }

    onSearch(searchText:string):void{    
        if (searchText === ""){
            this.reports = this.reportSource;
            return;
        }
        this.reports = this.reportSource.filter(r=> r.reportId.toString() == searchText 
                        || r.reportTitle == searchText );        
    }

    onExport(){
      var reports =   this.reports.filter(r=> r.isSelected);      
      var dataList: Array<string> = [];
      reports.map(function (r){
          dataList.push(r.reportId + " - " + r.reportTitle);
      });
      alert("You are selected: " + dataList.join(" | "))
    }

    onDelete(reportId:number){
        var success = confirm("Are you sure want to delete this report: " + reportId);  
        if(success){     
            var index= this.reports.findIndex(r => r.reportId === reportId);
            this.reports.splice(index,1);
        }
    }

    onFilter(reportId:number){     
      
        if (reportId.toString() === "Select All..."){
            this.reports = this.reportSource;
            return;
        }
       this.reports =  this.reportSource.filter(r=> r.reportId === reportId);        
    }
}

