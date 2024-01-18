import {AfterViewInit, ChangeDetectorRef, Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {Player} from '@vime/angular';
import {PublicHomepageService} from '../../services/public-homepage.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../../../auth/login/login.component";
import {LocalStorageService} from 'src/app/shared/_services/localStorage.service';
import {Homepage} from "../../../../shared/_models/homepage.model";
import {LanguageStorageService} from 'src/app/shared/_services/languageStorage.service';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {AppSettings} from "../../../../app.settings";
import {RegisterComponent} from 'src/app/features/auth/register/register.component';
import {ProviderRegisterComponent} from 'src/app/features/auth/provider-register/provider-register.component';


@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.scss'],
    // providers: [MatDialog ,  { provide: MAT_DIALOG_DATA, useValue: {} }, ]
})
export class HomepageComponent implements OnInit, AfterViewInit {

    // public settings: Settings;
    @ViewChild('player') player!: Player;
    languageFromStorage: string;
    language: string;
    app: string;
    pageId: string;
    publicHomePage: object;
    benefits: Array<any> | undefined | null = [];
    hero: any;
    gallery: Homepage['gallery'] = null;
    trialSection: any | undefined | null;
    //call to action title
    callToAction: any | undefined | null;

    @Input() redirectUrl: string;
    @Input() userConnected: boolean;

    c2a = [];
    stringTitle: string;

    public playedVideo: string;
    public gotVideo = false;
    afterViewInitialized = false;

    constructor(private publicHomepageService: PublicHomepageService,
                private cdr: ChangeDetectorRef,
                public modalService: MatDialog,
                public localStorage: LocalStorageService,
                public languageService: LanguageStorageService,
                public settings: AppSettings,) {
        //this.setLanguage();
    }

    ngOnInit(): void {
        // this.languageFromStorage=this.localStorage.get('langFromStorage');
        console.log("language from storage", this.localStorage.get('langFromStorage'));
        this.setLanguage();
        this.getHomepageByLanguageAndApp();
        console.log('user connected 3', this.userConnected)
    }

    setLanguage() {

        //console.log("language from storage",this.localStorage.get('langFromStorage'));


        this.languageService.languageChangedObs.subscribe((data: boolean) => {
            // If the response is true
            if (data) {
                console.log("S-a selectat limba", data);
                this.languageFromStorage = this.localStorage.get('langFromStorage');

                // Get Documents List
                this.getHomepageByLanguageAndApp();

                // Reset Obs Trigger
                this.languageService.triggerUserLanguageChanges(false);
                this.cdr.detectChanges();
            }
        })


    }

    openAuthModal() {
        this.modalService.open(LoginComponent, {width: "90%", maxWidth: 1000});
    }


    getHomepageByLanguageAndApp() {
        this.languageFromStorage = this.localStorage.get('langFromStorage');
        if (this.languageFromStorage !== 'ro' && this.languageFromStorage !== 'en') {
            this.languageFromStorage = 'ro';
            this.localStorage.set('langFromStorage', 'ro');

            this.languageService.triggerUserLanguageChanges(true);
        }
        this.publicHomepageService.getHomepageByLanguageAndApp(this.languageFromStorage, "web").subscribe((hp: Homepage) => {

            //this.languageService.triggerUserLanguageChanges(true);
            console.log('hp din gethomepageby language', hp);
            this.pageId = hp.id;
            this.language = hp.language;
            this.app = hp.app;
            this.publicHomePage = hp;

            this.benefits = hp.benefits;
            this.hero = hp.hero;
            this.gallery = hp.gallery;
            this.trialSection = hp.trialSection;
            this.callToAction = hp.callToAction;

            this.playedVideo = hp.gallery?.videos[1].filePath;
            this.gotVideo = true;
            this.cdr.detectChanges();

            //provider title
            this.stringTitle = this.callToAction["title"];
            this.c2a = this.stringTitle.split("#");

            console.log(hp);
        })
    }

    playVideo(filePath: string) {
        this.playedVideo = filePath;
        console.log(this.playedVideo);
        this.cdr.detectChanges();
    }

    openRegister() {
        console.log('open register');
        this.modalService.open(RegisterComponent, {
            width: "100%", maxWidth: 1000, height: "90%", data: {
                role: 'ROLE_PROVIDER'
            }
        })
    }

    openProviderRegister() {
        console.log('open provider register');
        this.modalService.open(ProviderRegisterComponent, {width: "100%", maxWidth: 1000, height: "90%"})
    }

    ngAfterViewInit(): void {
        this.afterViewInitialized = true;
    }


}

