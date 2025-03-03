import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturedpComponent } from './lecturedp.component';

describe('LecturedpComponent', () => {
  let component: LecturedpComponent;
  let fixture: ComponentFixture<LecturedpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LecturedpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturedpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
