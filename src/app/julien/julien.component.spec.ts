import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JulienComponent } from './julien.component';

describe('JulienComponent', () => {
  let component: JulienComponent;
  let fixture: ComponentFixture<JulienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JulienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JulienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
