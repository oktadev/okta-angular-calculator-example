import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('AppComponent', () => {
  const oktaConfig = {
    issuer: 'https://not-real.okta.com',
    clientId: 'fake-client-id',
    redirectUri: 'http://localhost:4200'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        RouterTestingModule,
        OktaAuthModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: OKTA_CONFIG, useValue: oktaConfig}]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularCalculator'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularCalculator');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('AngularCalculator');
  });
});
