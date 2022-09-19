import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { OperatorExampleComponent } from './operator-example/operator-example.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { CombinationComponent } from './combination/combination.component';
import { MathemeticalComponent } from './mathemetical/mathemetical.component';
import { UtilityComponent } from './utility/utility.component';
import { FilterComponent } from './filter/filter.component';
import { TransformationComponent } from './transformation/transformation.component';


@NgModule({
  declarations: [
    OperatorExampleComponent,
    ConditionalComponent,
    CombinationComponent,
    MathemeticalComponent,
    UtilityComponent,
    FilterComponent,
    TransformationComponent
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule
  ]
})
export class OperatorsModule { }
