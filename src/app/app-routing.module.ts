import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './pages/auth/auth.component';
import { IsLoggedIn } from './pages/auth/isLogged.guard';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  { path: 'main', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contacts', component: ContactsComponent },
  {
    path: 'admin', component: AdminComponent, canActivate: [IsLoggedIn], children: [
      // { path: '', redirectTo: 'products', pathMatch: 'full' },

      // { path: 'products', component: ProductsComponent },
      // { path: 'category', component: CategoryComponent },
      // { path: 'category/edit/:id', component: CategoryEditComponent },
      // { path: 'brends', component: BrendsComponent },
      // { path: 'products', component: ProductsComponent },
      // { path: 'products/add', component: ProdAddComponent },
      // { path: 'products/edit/:id', component: ProdEditComponent },
      // { path: 'category', component: CategoryComponent },
      // { path: 'category/edit/:id', component: CategoryEditComponent },
      // { path: 'brends', component: BrendsComponent },
      // { path: 'preference', component: PreferenceComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
