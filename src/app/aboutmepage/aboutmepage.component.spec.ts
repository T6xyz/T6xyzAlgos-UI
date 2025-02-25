import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmepageComponent } from './aboutmepage.component';

describe('AboutmepageComponent', () => {
  let component: AboutmepageComponent;
  let fixture: ComponentFixture<AboutmepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutmepageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutmepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
