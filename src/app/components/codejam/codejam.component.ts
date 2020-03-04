import { Component, OnInit } from '@angular/core';
import { CodejamService } from 'src/app/services/codejam.service';

@Component({
  selector: 'app-codejam',
  templateUrl: './codejam.component.html',
  styleUrls: ['./codejam.component.scss']
})
export class CodejamComponent implements OnInit {
  
  constructor(private codejamService:CodejamService) { }

  ngOnInit(): void {
    this.getQuestionsData();
  }

  isPanelExpanded = false;


  getQuestionsData(){
    this.codejamService.codejamData.questions.forEach(id => {
      this.codejamService.getQuestionData(id).subscribe(
        res=>{
          console.log(res);
          this.codejamService.questionsData.push(res);
        },
        err=>{
          console.error(err);
        }
      );
    });
  
  }

}
