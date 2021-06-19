import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TeamFormComponent } from './components/team-form/team-form.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { MapcomponentComponent } from './map/mapcomponent/mapcomponent.component';


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
    path: 'profile/:workerID',
    loadChildren: () => import('./pages/GeneralUser/profile/profile.module').then( m => m.ProfilePageModule)
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
    path: 'admin-desk/:companyName',
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
    path: 'requests/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/requests/requests.module').then( m => m.RequestsPageModule)
  },
  {
    path: 'teams/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'users/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'chat/:workerID',
    loadChildren: () => import('./pages/GeneralUser/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'calendar/:workerID',
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
    path: 'user-desk/:workerID',
    loadChildren: () => import('./pages/GeneralUser/user-desk/user-desk.module').then( m => m.UserDeskPageModule)
  },
  { path: 'team-form/:companyName', component: TeamFormComponent},
  { path: 'user-form/:companyName', component: UserFormComponent},
  {
    path: 'user-to-team/:companyName/:teamName',
    loadChildren: () => import('./pages/GeneralAdmin/user-to-team/user-to-team.module').then( m => m.UserToTeamPageModule)
  },
  {
    path: 'contacts/:workerID',
    loadChildren: () => import('./pages/GeneralUser/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'faq-admin/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/faq-admin/faq-admin.module').then( m => m.FaqAdminPageModule)
  },
  {
    path: 'faq-user/:workerID',
    loadChildren: () => import('./pages/GeneralUser/faq-user/faq-user.module').then( m => m.FaqUserPageModule)},
  { path: 'map/:companyName', component: MapcomponentComponent},
  {
    path: 'tarea',
    loadChildren: () => import('./pages/GeneralUser/tarea/tarea.module').then( m => m.TareaPageModule)
  },
  {
    path: 'configuration/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/configuration/configuration.module').then( m => m.ConfigurationPageModule)
  },
  {
    path: 'comment/:workerID',
    loadChildren: () => import('./pages/GeneralUser/comment/comment.module').then( m => m.CommentPageModule)
  },
  {
    path: 'get-comment/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/get-comment/get-comment.module').then( m => m.GetCommentPageModule)
  },
  {
    path: 'new-chat',
    loadChildren: () => import('./pages/GeneralUser/chat/new-chat/new-chat.module').then( m => m.NewChatPageModule)
  },
  {
    path: 'information-chat',
    loadChildren: () => import('./pages/GeneralUser/chat/information-chat/information-chat.module').then( m => m.InformationChatPageModule)
  },
  {
    path: 'registration-request/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/registration-request/registration-request.module').then( m => m.RegistrationRequestPageModule)
  },
  {
    path: 'holiday-request/:workerID',
    loadChildren: () => import('./pages/GeneralUser/holiday-request/holiday-request.module').then( m => m.HolidayRequestPageModule)
  },
  {
    path: 'calendar-admin/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/calendar-admin/calendar-admin.module').then( m => m.CalendarAdminPageModule)
  },
  {
    path: 'tasks-by-admin/:companyName/:workerID',
    loadChildren: () => import('./pages/GeneralAdmin/tasks-by-admin/tasks-by-admin.module').then( m => m.TasksByAdminPageModule)
  },
  {
    path: 'holiday-pending/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/holiday-pending/holiday-pending.module').then( m => m.HolidayPendingPageModule)
  },
  {
    path: 'update-task-by-admin/:companyName',
    loadChildren: () => import('./pages/GeneralAdmin/update-task-by-admin/update-task-by-admin.module').then( m => m.UpdateTaskByAdminPageModule)
  },
  {
    path: 'update-profile/:workerID',
    loadChildren: () => import('./pages/GeneralUser/update-profile/update-profile.module').then( m => m.UpdateProfilePageModule)
  },
  {
    path: 'forgot-password-admin',
    loadChildren: () => import('./pages/GeneralAdmin/forgot-password-admin/forgot-password-admin.module').then( m => m.ForgotPasswordAdminPageModule)
  },
  {
    path: 'forgot-password-user',
    loadChildren: () => import('./pages/GeneralUser/forgot-password-user/forgot-password-user.module').then( m => m.ForgotPasswordUserPageModule)
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
