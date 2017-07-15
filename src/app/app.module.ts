import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component'
import { CalculaterComponent } from './calculater/calculater.component'
import { NewCalculatorComponent } from './calculater/newCalculater.component'
import { BugtrackerComponent } from './bugtracker/bugtracker.component'
import { BugOperationsService} from './bugtracker/services/bugOperations.service';
import {TrimTextPipe} from './bugtracker/pipes/trimText.pipe';
import {BugStatsComponent} from './bugtracker/bug-stats/bug-stats.component';



@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculaterComponent,
    NewCalculatorComponent,
    BugtrackerComponent,
    TrimTextPipe,
    BugStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BugOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
