import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DependenciaDirectorioPage } from './dependencia-directorio.page';

describe('DependenciaDirectorioPage', () => {
  let component: DependenciaDirectorioPage;
  let fixture: ComponentFixture<DependenciaDirectorioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DependenciaDirectorioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DependenciaDirectorioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
