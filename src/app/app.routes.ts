import { Routes } from '@angular/router';
export const routes: Routes = [

    {
        path:'',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path: 'busqueda cirugias',
                loadComponent: () => import('./business/busqueda-cirugias/busqueda-cirugias.component')
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch:'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo:'dashboard'
    }

   
];