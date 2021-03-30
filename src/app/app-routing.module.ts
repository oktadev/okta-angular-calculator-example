import { Injector, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { OktaAuthGuard, OktaAuthService, OktaCallbackComponent } from '@okta/okta-angular';

export function onAuthRequired(oktaAuth: OktaAuthService, injector: Injector): void {
  const router = injector.get(Router);
  router.navigate(['/login']);
}

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'calculator',
    component: CalculatorComponent,
    canActivate: [OktaAuthGuard],
    data: { onAuthRequired }
  },
  { path: 'callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
