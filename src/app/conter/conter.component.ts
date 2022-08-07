import { Component, OnInit } from '@angular/core';
import { MessageService } from '../Services/message.service';


@Component({
  selector: 'app-conter',
  templateUrl: './conter.component.html',
  styleUrls: ['./conter.component.css']
})
export class ConterComponent implements OnInit {

  constructor(
    private service:MessageService
  ) { }

  ngOnInit(): void {
  }


  title = 'Counter App';

  btnClick(){
 
    this.service.messageAlert()
  }

  count:number=0;

  handleIncrese = () => {

     if(this.count===10){
      this.count = this.count + 2 ;
    }
    this.count = this.count + 1 ;
    this.service.messageAlert()
  }

  handleDecrease = () =>{
    
    if(this.count<=0){
      this.count=0;
      
    }
    else{

      this.count = this.count - 1;
      alert("Decersed");
    }
  }

  handleReset = () =>{
    this.count=0;
    
  }




}
