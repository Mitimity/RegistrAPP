import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListadoAsisProfePage } from './listado-asis-profe.page';

describe('ListadoAsisProfePage', () => {
  let component: ListadoAsisProfePage;
  let fixture: ComponentFixture<ListadoAsisProfePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoAsisProfePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoAsisProfePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
