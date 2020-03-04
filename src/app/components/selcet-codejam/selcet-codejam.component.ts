import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CodejamService } from 'src/app/services/codejam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selcet-codejam',
  templateUrl: './selcet-codejam.component.html',
  styleUrls: ['./selcet-codejam.component.scss']
})
export class SelcetCodejamComponent implements OnInit {

  constructor(private fb:FormBuilder, private codejamService:CodejamService, private router:Router) { }

  ngOnInit(): void {
  }

  codejamIdForm = this.fb.group({
    id:['',[Validators.required, Validators.minLength(6),Validators.maxLength(6)]]
  });

  getIdErrorMessage() {
    if (this.codejamIdForm.get('id').hasError('required')) {
      return 'ID is required';
    }

    return "ID must be 6 characters long";
  }

  joinCodejam(){
    this.codejamService.getCodejamData(this.codejamIdForm.value.id).subscribe(
      res=>{
        console.log(res);
        this.codejamService.codejamData = res;
        this.router.navigate(['/codejam']);
      },
      err=>{
        console.error(err);
      }
    );
  }

}
