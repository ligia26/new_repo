import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './features/not-found/not-found.component';
import {UserRolesGuard} from "./shared/_services/user-roles.guard";
import {NewsletterComponent} from "./features/newsletter/newsletter.component";
import { DefaultUrlSerializer, UrlSerializer } from '@angular/router';
import { LowercaseUrlSerializer } from './lowercase-url-serializer';


export const routes: Routes = [

    {
        path: '',
        loadChildren: () => import('./features/public-homepage/public-homepage.module').then(m => m.PublicHomepageModule)
    },
    {   path: 'private', loadChildren: () => import('./features/private/private.module').then(m => m.PrivateModule)
    },
    {
        path: 'client',
        loadChildren: () => import('./features/role-client/role-client.module').then(m => m.RoleClientModule),
        canActivate: [UserRolesGuard],
        data: {
            allowedRoles: ['ROLE_CLIENT', 'ROLE_SUPER_ADMIN', 'ROLE_PROVIDER', 'ROLE_STAFF']
        }
    },
    {
        path: 'newsletter-old',
        loadChildren: () => import('./features/newsletter/newsletter.module').then(m => m.NewsletterModule)
    },
    {
        path: 'provideroffer',
        loadChildren: () => import('./features/landing-channel-manager/landing-channel-manager.module').then(m => m.LandingChannelManagerModule)
    },
    {
        path: 'newsletter',
        loadChildren: () => import('./features/landing-bestinform/landing-bestinform.module').then(m => m.LandingBestinformModule)
    },
    {
        path: 'parteneri',
        loadChildren: () => import('./features/landing-partner/landing-partner.module').then(m => m.LandingPartnerModule)
    },
    {
        path: 'content',
        loadChildren: () => import('./features/secondary-pages/secondary-pages.module').then(m => m.SecondaryPagesModule)
    },
    // {path: '', loadChildren: () => import('./features/coming-soon/coming-soon.module').then(m => m.ComingSoonModule)},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            // linia urmatoarea fiind comentata, lazy module loading este activat
            // preloadingStrategy: PreloadAllModules,
            initialNavigation: 'enabledBlocking'}),
    ],
    exports: [
        RouterModule
    ],
    providers: [
        { provide: UrlSerializer, useClass: LowercaseUrlSerializer }
    ]
})
export class AppRoutingModule {
}
