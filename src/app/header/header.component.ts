import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output helps us listen this event emmiter from the parent component
 @Output() featureSelected = new EventEmitter<String>();
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
