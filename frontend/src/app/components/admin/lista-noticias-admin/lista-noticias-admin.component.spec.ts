import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNoticiasAdminComponent } from './lista-noticias-admin.component';

describe('ListaNoticiasAdminComponent', () => {
  let component: ListaNoticiasAdminComponent;
  let fixture: ComponentFixture<ListaNoticiasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaNoticiasAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaNoticiasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
