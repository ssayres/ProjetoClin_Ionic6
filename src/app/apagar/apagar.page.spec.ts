import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApagarPage } from './apagar.page';

describe('ApagarPage', () => {
  let component: ApagarPage;
  let fixture: ComponentFixture<ApagarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
