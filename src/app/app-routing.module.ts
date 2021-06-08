import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { UpdateFormComponent } from './components/update-form/update-form.component';

import { UserFormComponent } from './components/user-form/user-form.component';
import { MapcomponentComponent } from './map/mapcomponent/mapcomponent.component';

//import { HomeComponent } from './pages/home/home.component';
//import { ChatPageModule } from './pages/chat/chat.page';
//import { CalendarPageModule } from './pages/calendar/calendar.page';

const routes: Routes = [
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'get-license',
    loadChildren: () => import('./pages/GeneralAdmin/get-license/get-license.module').then( m => m.GetLicensePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/GeneralAdmin/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'admin-desk',
    loadChildren: () => import('./pages/GeneralAdmin/admin-desk/admin-desk.module').then( m => m.AdminDeskPageModule)
  },
  {
    path: 'license',
    loadChildren: () => import('./pages/GeneralAdmin/license/license.module').then( m => m.LicensePageModule)
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./pages/GeneralAdmin/login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'register-admin',
    loadChildren: () => import('./pages/GeneralAdmin/register-admin/register-admin.module').then( m => m.RegisterAdminPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./pages/GeneralAdmin/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/GeneralAdmin/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/GeneralAdmin/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/GeneralUser/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/GeneralUser/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'login-user',
    loadChildren: () => import('./pages/GeneralUser/login-user/login-user.module').then( m => m.LoginUserPageModule)
  },
  {
    path: 'register-user',
    loadChildren: () => import('./pages/GeneralUser/register-user/register-user.module').then( m => m.RegisterUserPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/GeneralUser/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/GeneralUser/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'user-company',
    loadChildren: () => import('./pages/GeneralUser/user-company/user-company.module').then( m => m.UserCompanyPageModule)
  },
  {
    path: 'user-desk',
    loadChildren: () => import('./pages/GeneralUser/user-desk/user-desk.module').then( m => m.UserDeskPageModule)
  },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'team-form', component: TeamFormComponent},
  { path: 'user-form', component: UserFormComponent},
  {
    path: 'user-to-team/:teamName',
    loadChildren: () => import('./pages/GeneralAdmin/user-to-team/user-to-team.module').then( m => m.UserToTeamPageModule)
  },

  { path: 'update-form', component: UpdateFormComponent},
  {
    path: 'contacts',
    loadChildren: () => import('./pages/GeneralUser/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  { path: 'map', component: MapcomponentComponent},
  {
    path: 'tarea',
    loadChildren: () => import('./pages/GeneralUser/tarea/tarea.module').then( m => m.TareaPageModule)
  },  {
    path: 'configuration',
    loadChildren: () => import('./pages/GeneralAdmin/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },



];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes,
     { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
