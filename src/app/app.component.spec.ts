import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './shared/components/header/header.component';

import exp from 'node:constants';
import { MockHeaderComponent } from '../tests/mocks/mock-header.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  TestBed.overrideComponent(AppComponent, {
    remove: {
      imports: [HeaderComponent],
    },
    add: {
      imports: [MockHeaderComponent],
    },
  });

  it('Deve renderizar o componente Header', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const headerDebugEl = fixture.debugElement.query(By.css('app-header'));

    expect(headerDebugEl).toBeTruthy();
  });

  it('Deve renderizar o componente router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const routerOutletDebugEl = fixture.debugElement.query(
      By.css('router-outlet')
    );

    expect(routerOutletDebugEl).toBeTruthy();
  });
});
