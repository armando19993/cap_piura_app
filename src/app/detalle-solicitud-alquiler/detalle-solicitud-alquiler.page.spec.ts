import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleSolicitudAlquilerPage } from './detalle-solicitud-alquiler.page';

describe('DetalleSolicitudAlquilerPage', () => {
  let component: DetalleSolicitudAlquilerPage;
  let fixture: ComponentFixture<DetalleSolicitudAlquilerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSolicitudAlquilerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleSolicitudAlquilerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
