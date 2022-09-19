import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableComponent } from './observable/observable.component';
import { HomeComponent } from './home/home.component';
import { OperatorsModule } from './operators/operators.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { HttpClientModule } from '@angular/common/http';
import { SubjectComponent } from './subject/subject.component';
import { SubjectExampleComponent } from './subject/subject-demo/subject-example/subject-example.component';
import { App1Component } from './subject/subject-demo/app1/app1.component';
import { App2Component } from './subject/subject-demo/app2/app2.component';
import { App3Component } from './subject/subject-demo/app3/app3.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableComponent,
    HomeComponent,
    SubscriptionComponent,
    SubjectComponent,
    SubjectExampleComponent,
    App1Component,
    App2Component,
    App3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OperatorsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
