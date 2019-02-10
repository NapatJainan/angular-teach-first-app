import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card:Card;
  constructor() { }

  ngOnInit() {
  }
  UPVOTE(){
    this.card.votes++;
    }
    DOWNVOTE(){
      this.card.votes--;
      // if(this.card.votes >=0){
      // this.card.votes=0;
      
    }   
  }
  

