import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNoticiasComponent } from './panel-noticias.component';

describe('PanelNoticiasComponent', () => {
  let component: PanelNoticiasComponent;
  let fixture: ComponentFixture<PanelNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelNoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
