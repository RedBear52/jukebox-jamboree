import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JukeboxOverlayComponent } from './jukebox-overlay.component';

describe('JukeboxOverlayComponent', () => {
  let component: JukeboxOverlayComponent;
  let fixture: ComponentFixture<JukeboxOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JukeboxOverlayComponent]
    });
    fixture = TestBed.createComponent(JukeboxOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
