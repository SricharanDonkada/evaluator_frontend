import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelcetCodejamComponent } from './selcet-codejam.component';

describe('SelcetCodejamComponent', () => {
  let component: SelcetCodejamComponent;
  let fixture: ComponentFixture<SelcetCodejamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelcetCodejamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelcetCodejamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
