import { Component } from '@angular/core';
import {Card}from './card';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = []; 
  get Sorted(): Card[]{
    console.log('acess');
    return this.cards.sort((a,b)=> b.votes-a.votes);
  }
  onclick(firstName: HTMLInputElement,lastName:HTMLInputElement){
    new Card(firstName.value, lastName.value, 0);
    const card =new Card(firstName.value,lastName.value,0);
    this.cards.push(card);
    console.log(this.cards);
    firstName.value = '';
    lastName.value = '';
    
  }
    
  }

