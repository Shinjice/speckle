import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeckleViewerComponent } from './speckle-viewer.component';

describe('SpeckleViewerComponent', () => {
  let component: SpeckleViewerComponent;
  let fixture: ComponentFixture<SpeckleViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpeckleViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeckleViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
