import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnOffAdBlockComponent } from './turn-off-ad-block.component';

describe('TurnOffAdBlockComponent', () => {
  let component: TurnOffAdBlockComponent;
  let fixture: ComponentFixture<TurnOffAdBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurnOffAdBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnOffAdBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
