import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    data: {
      routes: {
        name: '::Menu:Home',
      } as ABP.Route,
    },
  },
  {
    path: 'identity',
    loadChildren: () => import('./lazy-libs/identity-wrapper.module').then(m => m.IdentityWrapperModule),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('./lazy-libs/tenant-management-wrapper.module').then(m => m.TenantManagementWrapperModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./lazy-libs/account-wrapper.module').then(m => m.AccountWrapperModule),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('./lazy-libs/setting-management-wrapper.module').then(m => m.SettingManagementWrapperModule),
  },
  {
    path: 'my-project',
    loadChildren: () => import('./lazy-libs/my-project-wrapper.module').then(m => mAbpSettingManagementMvcUIWrapperModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}