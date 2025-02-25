import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmspageComponent } from './algorithmspage.component';

describe('AlgorithmspageComponent', () => {
  let component: AlgorithmspageComponent;
  let fixture: ComponentFixture<AlgorithmspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlgorithmspageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
