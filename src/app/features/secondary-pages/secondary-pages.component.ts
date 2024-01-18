import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-secondary-pages',
    templateUrl: './secondary-pages.component.html',
    styleUrls: ['./secondary-pages.component.scss']
})
export class SecondaryPagesComponent implements OnInit {


    selectedValue = "ro";
    public langName = '';
    currentApplicationVersion = environment.appVersion;

    constructor(public translateService: TranslateService) { }

    ngOnInit(): void {
    }

    public changeLang(lang:string){
        this.translateService.use(lang);
        this.langName = this.getLangName(lang);
    }

    public getLangName(lang:string){
        if(lang == 'en'){
            return 'English';
        }
        else if(lang == 'ro'){
            return 'Romanian';
        }
        else{
            return 'English';
        }
    }

}
