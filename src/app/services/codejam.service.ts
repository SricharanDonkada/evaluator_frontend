import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { serverUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CodejamService {

  constructor(private http:HttpClient) { }

  public codejamData:any;
  public questionsData = [];
  public getCodejamData(id){
    return this.http.get<any>(serverUrl + '/codejam/' + id);
  }

  public getQuestionData(id){
    return this.http.get<any>(serverUrl + '/question-detail/' + id);
  }
}
