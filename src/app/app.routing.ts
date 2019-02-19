import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
    { path: 'panel', component: PanelComponent },
	{ path: 'panel/:id', component: PanelComponent },
	{ path: '**', redirectTo: '/panel' }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
