import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationComponent } from './combination/combination.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { FilterComponent } from './filter/filter.component';
import { MathemeticalComponent } from './mathemetical/mathemetical.component';
import { OperatorExampleComponent } from './operator-example/operator-example.component';
import { TransformationComponent } from './transformation/transformation.component';
import { UtilityComponent } from './utility/utility.component';

const routes: Routes = [
  {
    path :'operator-example',
    component:OperatorExampleComponent
  },
  {
    path :'conditional',
    component:ConditionalComponent
  },
  {
    path :'combination',
    component : CombinationComponent
  },
  {
    path :'mathemetical',
    component : MathemeticalComponent
  },
  {
    path :'utility',
    component : UtilityComponent
  },
  {
    path :'filter',
    component : FilterComponent

  },
  {
    path :'transformation',
    component : TransformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
