import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TarjetaUsuarioDependenciaComponent } from './tarjeta-usuario-dependencia.component';

describe('TarjetaUsuarioDependenciaComponent', () => {
  let component: TarjetaUsuarioDependenciaComponent;
  let fixture: ComponentFixture<TarjetaUsuarioDependenciaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaUsuarioDependenciaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaUsuarioDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
