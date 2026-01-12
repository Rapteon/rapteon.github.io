import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exhibit } from './exhibit';

describe('Exhibit', () => {
  let component: Exhibit;
  let fixture: ComponentFixture<Exhibit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exhibit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exhibit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
