import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recipies: Recipe[] =[
    new Recipe("Ice Cream", "Vanila Ice Cream","C:\Users\SaismaranHota\Pictures\ibm-think-03.jpg"),
    new Recipe("Cake", "Choclate Ice Cream","C:\Users\SaismaranHota\Pictures\ibm-think-03.jpg")
  ];
  constructor() { 

  }

  ngOnInit(): void {
  }

}
