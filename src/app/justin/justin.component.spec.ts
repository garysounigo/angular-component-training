import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustinComponent } from './justin.component';

describe('JustinComponent', () => {
  let component: JustinComponent;
  let fixture: ComponentFixture<JustinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JustinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
