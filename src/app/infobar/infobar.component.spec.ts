import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobarComponent } from './infobar.component';

describe('InfobarComponent', () => {
  let component: InfobarComponent;
  let fixture: ComponentFixture<InfobarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfobarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
