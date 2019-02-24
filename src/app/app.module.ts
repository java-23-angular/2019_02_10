import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactRowComponent } from './contact-row/contact-row.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {StoreProvider} from './store.provider';
import {AuthGuardService} from './auth.guard.service';

const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'contacts', component:ContactsComponent, children:[
      {path:':index',component:ContactInfoComponent}
    ]},
  {path:'add', component:ContactFormComponent, canActivate:[AuthGuardService]},
  {path:'**', redirectTo:''}
];
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactsComponent,
    ContactRowComponent,
    ContactFormComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StoreProvider,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
