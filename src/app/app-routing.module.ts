import { LoadExternalDataComponent } from './components/load-external-data/load-external-data.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';
import { BindingDataComponent } from './components/binding-data/binding-data.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TestD3Component } from './components/test-d3/test-d3.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'test-d3', component: TestD3Component },
  { path: 'binding-data', component: BindingDataComponent },
  { path: 'display-data', component: DisplayDataComponent },
  { path: 'load-external-data', component: LoadExternalDataComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })
  ]
})

export class AppRoutingModule { }
