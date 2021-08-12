import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CursoComprobanteFacturaPage } from './curso-comprobante-factura.page';

describe('CursoComprobanteFacturaPage', () => {
  let component: CursoComprobanteFacturaPage;
  let fixture: ComponentFixture<CursoComprobanteFacturaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoComprobanteFacturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CursoComprobanteFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
