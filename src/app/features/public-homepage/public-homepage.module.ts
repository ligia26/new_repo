import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomepageComponent} from "./components/homepage/homepage.component";
import {PublicHomepageComponent} from "./public-homepage.component";
import {RouterModule, Routes} from "@angular/router";
import {AdminDasboardComponent} from "../role-admin/admin-dasboard/admin-dasboard.component";
import {VimeModule} from "@vime/angular";
import {MatIconModule} from "@angular/material/icon";
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PublicFooterComponent } from './components/public-footer/public-footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {SharedModule} from "../../shared/shared.module";
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";
import { RegisterComponent } from '../auth/register/register.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {ActivateUsersComponent} from "./activate-users/activate-users.component";

export const routes: Routes = [
    { path: '', component: PublicHomepageComponent},
    { path: 'activate-user', component: ActivateUsersComponent},

];

@NgModule({
    declarations: [
        HomepageComponent,
        PublicHomepageComponent,
        PublicHeaderComponent,
        PublicFooterComponent,
        HeroSectionComponent,
        ActivateUsersComponent
    ],
    exports: [
        PublicFooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatIconModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        AuthModule,
        TranslateModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        LazyLoadImageModule]
})
export class PublicHomepageModule { }
