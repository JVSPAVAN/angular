import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { PasswordmngtComponent } from './passwordmngt/passwordmngt.component';
import { MatTabsModule, MatNativeDateModule, MatTableModule, MatToolbarModule, MatTooltipModule, MatPaginatorModule,
         MatSortModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { SearchandlistComponent } from './searchandlist/searchandlist.component';
import { CdkDetailRowDirective } from './cdk-detail-row.directive';
import { UserServiceService } from './Services/user-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    CreateCustomerComponent,
    SearchComponent,
    SearchListComponent,
    PasswordmngtComponent,
    LoginComponent,
    SearchandlistComponent,
    CdkDetailRowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatNativeDateModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
