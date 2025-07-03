import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaIconLabelComponent } from './social-media-icon-label.component';

describe('SocialMediaIconLabelComponent', () => {
  let component: SocialMediaIconLabelComponent;
  let fixture: ComponentFixture<SocialMediaIconLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialMediaIconLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaIconLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
