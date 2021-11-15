import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesandServicesComponent } from './pipesand-services.component';

describe('PipesandServicesComponent', () => {
  let component: PipesandServicesComponent;
  let fixture: ComponentFixture<PipesandServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesandServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesandServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
