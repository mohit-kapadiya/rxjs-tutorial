import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservableComponent } from './observable/observable.component';
import { SubjectExampleComponent } from './subject/subject-demo/subject-example/subject-example.component';
import { SubjectComponent } from './subject/subject.component';
import { SubscriptionComponent } from './subscription/subscription.component';

const routes: Routes = [
  {
    path :'home',
    component : HomeComponent
  },
  {
    path :'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path :'observable',
    component : ObservableComponent
  },
  {
    path :'operators',
    loadChildren: () => import('./operators/operators.module').then(m => m.OperatorsModule),
  },
  {
    path :'subscription',
    component : SubscriptionComponent
  },
  {
    path :'subjects',
    component : SubjectComponent
  },
  {
    path :'subject-demo',
    component : SubjectExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
