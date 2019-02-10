export class Card {
    firstName: String;
    lastName: String;
    votes: number;
    constructor(
        firstName: String,
        lastName: String,
        votes: number){
            this.firstName=firstName;
            this.lastName=lastName;
            this.votes = votes;

    }
    get name():string{
        return this.firstName +''+this.lastName
    }
}
