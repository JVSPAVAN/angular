import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent} from './app.component';
import { HomeComponent} from './home/home.component';
import { CreateComponent} from './create/create.component';
import { CreateCustomerComponent} from './create-customer/create-customer.component';
import { SearchComponent} from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { PasswordmngtComponent } from './passwordmngt/passwordmngt.component';
import { LoginComponent } from './login/login.component';
import { SearchandlistComponent} from './searchandlist/searchandlist.component';

const routes: Routes = [
  { path: '' , component: LoginComponent , pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreateComponent, children: [
    {path: 'customer', component: CreateCustomerComponent},
    {path: 'search', component: SearchComponent},
    {path: 'search/List' , component: SearchandlistComponent},
    {path: 'passwordmngt', component: PasswordmngtComponent}
  ]},
 { path: 'logout', redirectTo: 'login'},
 { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
