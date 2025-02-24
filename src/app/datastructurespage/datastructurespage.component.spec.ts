import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatastructurespageComponent } from './datastructurespage.component';

describe('DatastructurespageComponent', () => {
  let component: DatastructurespageComponent;
  let fixture: ComponentFixture<DatastructurespageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatastructurespageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatastructurespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
