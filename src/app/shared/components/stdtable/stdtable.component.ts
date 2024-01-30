import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../module/interface';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss']
})
export class StdtableComponent implements OnInit {
  @Input() stdTable !: Array<Istd>;
  constructor() { }

  ngOnInit(): void {
  }

}
