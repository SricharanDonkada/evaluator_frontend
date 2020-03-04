import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuestionServiceService } from 'src/app/services/question-service.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-code-area',
  templateUrl: './code-area.component.html',
  styleUrls: ['./code-area.component.scss']
})
export class CodeAreaComponent implements OnInit {

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.codeForm.get('language').valueChanges.subscribe(d=>{
      this.codemirrorConfig.mode = this.languageModes[this.codeForm.get('language').value];
      console.log(this.codeForm.get('language').value);
    });
  }




  showQuestion(): void {
    const dialogRef = this.dialog.open(QuestionDialouge);
  }

  codeForm = this.fb.group({
    language:['c',Validators.required],
    code:['',Validators.required]
  });

  selectedLanguage = "c";

  languages = [{name:"C",value:"c"},{name:"C++",value:"cpp"},{name:"Python",value:"python"}];
  languageModes = {c:"text/x-csrc",cpp:"text/x-csrc",python:"text/x-python"};
  codemirrorConfig = {
    lineNumbers: true,
    theme: 'material',
    mode: this.languageModes[this.codeForm.value.language],
    height: 'auto',
    cursorBlinkRate:500,
    smartIndent:true,
    fullScreen:false,
    autoCloseBrackets:true
  };
  test = "\n*\n*  *\n*  *  *";
}


// ############## DIALOUGE BOX FOR QUESTION ##################

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './question-dialougebox.html',
  styleUrls: ['./question-dialougebox.scss']
})
export class QuestionDialouge {

  constructor(
    public dialogRef: MatDialogRef<QuestionDialouge>,
    private questionService: QuestionServiceService) { }

  question = this.questionService.currentQuestion;
  onNoClick(): void {
    this.dialogRef.close();
  }


}