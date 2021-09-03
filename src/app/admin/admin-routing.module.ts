import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';


// @ts-ignore
const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {path: '', redirectTo: 'pages', pathMatch: 'prefix'},

            {
                path: 'pages',
                // @ts-ignore
                loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
