import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  constructor() { }

  public currentQuestion = {
    id:'id_adsf23j94bl',
    name:'n Primes',
    question : "Print the first n prime numbers",
    testcases:{
      public:[{input:3,output:"2 3 5"},{input:2,output:"2 3"}],
      private:[{input:3,output:"2 3 5"},{input:2,output:"2 3"}]
    }
  };
}
