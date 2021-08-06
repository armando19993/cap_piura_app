import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarjetaInformacionBasicaComponent } from './tarjeta-informacion-basica.component';

describe('TarjetaInformacionBasicaComponent', () => {
  let component: TarjetaInformacionBasicaComponent;
  let fixture: ComponentFixture<TarjetaInformacionBasicaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaInformacionBasicaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaInformacionBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
