import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from '../../module/interface';

@Component({
  selector: 'app-stdform',
  templateUrl: './stdform.component.html',
  styleUrls: ['./stdform.component.scss']
})
export class StdformComponent implements OnInit {
  @Output() stdTable : EventEmitter<Istd> = new EventEmitter<Istd>();

  @ViewChild("stdfname") stdfname !: ElementRef;
  @ViewChild("stdlname") stdlname !: ElementRef;
  @ViewChild("stdemail") stdemail !: ElementRef;
  @ViewChild("stdcontact") stdcontact !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    // eve.preventDefault();
    event?.preventDefault();
    console.log('hello world');
    let stdobj : Istd = {
      fname : this.stdfname.nativeElement.value,
      lname : this.stdlname.nativeElement.value,
      email : this.stdemail.nativeElement.value,
      contact : this.stdcontact.nativeElement.value,
    }
    console.log(stdobj);
    
    this.stdTable.emit(stdobj);

    this.stdfname.nativeElement.value = "";
    this.stdlname.nativeElement.value = "";
    this.stdemail.nativeElement.value = "";
    this.stdcontact.nativeElement.value = "";
  }
}
