import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllThemesComponent } from './all-themes/all-themes.component';
import { AddThemeComponent } from './add-theme/add-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      { path: '', pathMatch: 'full', component: AllThemesComponent },
      { path: 'add-theme', component: AddThemeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
