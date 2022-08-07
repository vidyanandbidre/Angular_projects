import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular13Crud';

  displayedColumns: string[] = ['ProductName', 'category', 'date','UesdTime', 'Price','comment','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog, private api : ApiService){}
  ngOnInit(): void {
    this.getAllProducts();
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllProducts();
      }
    })
}
getAllProducts(){
  this.api.getProduct()
  .subscribe({
    next : (res)=>{
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },
    error:(err)=>{
      alert("Error while fetching the records..!!");

    }
  })
}
editProduct(row : any){
  this.dialog.open(DialogComponent,{
  width:'500px',
  data:row
  } ) .afterClosed().subscribe(val=>{
    if(val === 'update'){
      this.getAllProducts();
    }
    error :() =>{
      alert("Error while deleting Product !!");
    }
    
  })
}
deleteProduct(id : number){
  this.api.deleteProduct(id)
  .subscribe({
    next :(res) =>{
      alert("Product Deleted Successfully");
      this.getAllProducts();
    }
  })
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
function afterClosed() {
  throw new Error('Function not implemented.');
}

