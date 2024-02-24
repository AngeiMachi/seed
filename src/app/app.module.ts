import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatStepperModule} from '@angular/material/stepper';
import { ProxyService } from './services/proxy.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MostPickedColorsComponent } from './components/dashboard/most-picked-colors/most-picked-colors.component';
import { MostPickedEngineComponent } from './components/dashboard/most-picked-engine/most-picked-engine.component';
import { MostCommonHobbiesComponent } from './components/dashboard/most-common-hobbies/most-common-hobbies.component';
import { MostPickedCityComponent } from './components/dashboard/most-picked-city/most-picked-city.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationFormComponent,
    DashboardComponent,
    MostPickedColorsComponent,
    MostPickedEngineComponent,
    MostCommonHobbiesComponent,
    MostPickedCityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatTabsModule,
    NgxChartsModule
  ],
  providers: [
    provideAnimationsAsync(),
    ProxyService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
