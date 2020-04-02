import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IsLoggedIn } from './shared/services/isLogged.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/viewSite/services.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProjectsComponent } from './admin/projects/projects.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ContactsComponent,
    PortfolioComponent,
    ServicesComponent,
    AdminComponent,
    AuthComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    Ng2PageScrollModule
  ],
  providers: [IsLoggedIn],
  bootstrap: [AppComponent]
})
export class AppModule { }
