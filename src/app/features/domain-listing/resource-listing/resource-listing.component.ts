import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {forkJoin, Subject, switchMap, take} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {takeUntil} from "rxjs/operators";
import {ResourceFilterService} from "../../../shared/_services/resource-filter.service";
import {ResourceType} from "../../../shared/_models/resource-type.model";
import {TranslateService} from "@ngx-translate/core";
import {ResourceTemplate} from "../../../shared/_models/resource-template.model";
import {MatDialog} from '@angular/material/dialog';
import {ResourceListMapComponent} from '../_components/resource-list-map/resource-list-map.component';

import {Feature} from "ol";
import {Point} from "ol/geom";
import {fromLonLat} from 'ol/proj';

import {BlockScrollStrategy, Overlay} from '@angular/cdk/overlay';

export function scrollFactory(overlay: Overlay): () => BlockScrollStrategy {
    return () => overlay.scrollStrategies.block();
  }
@Component({
    selector: 'app-resource-listing',
    templateUrl: './resource-listing.component.html',
    styleUrls: ['./resource-listing.component.scss'],
    
})
export class ResourceListingComponent implements OnInit, OnDestroy {
    @ViewChild('resourcesList') resourcesListRef: ElementRef;

    private ngUnsubscribe = new Subject<void>();
    selectedCity:any;
    points=[];
    coordinatesData=[];
    resourceListObs$ = this.resourceFilterService.resourceListObs$
  .pipe(takeUntil(this.ngUnsubscribe))
  .subscribe({
    next:(myList:any)=>{
        this.points=[];
        this.selectedCity = this.resourceFilterService.getSavedFilters();
        console.log('aciaciaci', this.selectedCity);

        this.coordinatesData=myList?.content;
        console.log('Lista mea din listing', this.coordinatesData);
        if(this.coordinatesData !== undefined){
        this.coordinatesData.forEach(element => {
            if(element.geographicalCoordinates !== null){
    
              const point=new Feature({
                geometry: new Point(fromLonLat([element.geographicalCoordinates.longitude, element.geographicalCoordinates.latitude])),
                type: 'Point',
                desc: '<div class="resource-card-map d-flex flex-column justify-content-start align-items-start"><a style="text-decoration:none; color:inherit" href="/client/domain/'+element.domain+'/category/'+element.categoryId+'/resource-type/'+element.resourceTypeId+'/view/'+element.id+'"><img width="300px" height="192px" src="'+element?.featuredImage?.filePath+'"/> ' 
                + ' <h3>' 
                + element?.title +' </h3> <h4>' 
                + element?.resourceCategoryName +' </h4>  <p> <i class="fas fa-map-marker" style="margin-right:5px"></i>'
                + element?.address +'</p>  <p>'
                + (element?.shortDescription !==null ? element?.shortDescription : 'Nu există descriere!') + 
                '</p> </a></div>'
            })
            this.points.push(point);
    
            }});
       }
        
        }
      });   
      
    //   selectedCity = this.resourceFilterService.getSavedFilters();
  

    domainId: string = null;
    categoryId: string = null;
    resourceTypeId: string = null;

    currentLanguage: string = null;

    resourceTypeData: ResourceType = null;

    resourceTemplate: ResourceTemplate = null;


    // private ngUnsubscribe = new Subject<void>();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private resourceFilterService: ResourceFilterService,
                private translate: TranslateService,
                private matDialog: MatDialog,
                private overlay: Overlay
                ) {
    }

    ngOnInit(): void {
        this.initResourceFilterService();
        this.checkForLanguage();
        this.checkRouteForResourceId();

    }

    initResourceFilterService() {
        this.resourceFilterService.initServiceStates();
    }

    checkForLanguage() {
        this.currentLanguage = this.translate.currentLang;
        this.translate.onLangChange
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe({
                next: res => {
                    this.currentLanguage = res.lang;
                }
            });
    }

    checkRouteForResourceId() {
        this.route.paramMap
            .pipe(
                switchMap(params => {
                    if (params.has('domainId')) {
                        this.domainId = params.get('domainId');
                    }
                    if (params.has('categoryId')) {
                        this.categoryId = params.get('categoryId');
                    }

                    if (params.has('resourceTypeId')) {
                        this.resourceTypeId = params.get('resourceTypeId');
                        return forkJoin([
                            this.resourceFilterService.getResourceTypeById(this.resourceTypeId).pipe(take(1)),
                            this.resourceFilterService.getResourceTemplateByResourceTypeId(this.resourceTypeId).pipe(take(1))
                        ]);
                    }
                }),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe({
                next: res => {
                    [this.resourceTypeData, this.resourceTemplate] = res;
                },
                error: () => {
                    void this.router.navigate(['/client/domain', this.domainId]);
                }
            });
    }

    scrollResourcesListIntoView() {
        this.resourcesListRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

 

    openMap() {
        this.matDialog.open(ResourceListMapComponent,
            {width: "100%", 
            height: "90%", 
            panelClass: 'map-dialog',
            scrollStrategy: this.overlay.scrollStrategies.noop(),
            data: {
            coordinate: this.points,
            resourceCoordinatesData:this.coordinatesData,
            filterData: this.selectedCity
        } })
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }


}
