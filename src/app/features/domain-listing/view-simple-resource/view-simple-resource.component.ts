import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {of, Subject, switchMap, tap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ResourceFilterService} from "../../../shared/_services/resource-filter.service";
import {takeUntil} from "rxjs/operators";
import {Resource} from "../../../shared/_models/resource.model";
import {ToastService} from "../../../shared/_services/toast.service";
import {TranslateService} from "@ngx-translate/core";
import {ResourcesService} from "../../../shared/_services/resources.service";

@Component({
    selector: 'app-view-simple-resource',
    templateUrl: './view-simple-resource.component.html',
    styleUrls: ['./view-simple-resource.component.scss']
})
export class ViewSimpleResourceComponent implements OnInit, OnDestroy {

    @ViewChild('resourceTabs') resourceTabs: ElementRef;

    domainId: string;
    categoryId: string;
    resourceTypeId: string;
    resourceId: string;

    allowedToClickBtn = true;

    resourceData: Resource = null;
    roundedReviewPercentage: number;

    resourceTypeName: string;

    activeResourceTabId = 1;

    isItineraryModal = false;

    private ngUnsubscribe = new Subject<void>();

    constructor(private route: ActivatedRoute,
                private resourceFilterService: ResourceFilterService,
                private resourcesService: ResourcesService,
                private router: Router,
                private translate: TranslateService,
                private toastService: ToastService) {
    }

    ngOnInit(): void {
        this.checkIfItineraryModal();
        this.checkRoute();
    }

    checkIfItineraryModal() {
        this.isItineraryModal = this.resourceFilterService.checkIfItineraryModal();
    }

    checkRoute() {
        this.route.paramMap
            .pipe(
                tap( params => {
                    if (params.has('domainId')) {
                        this.domainId = params.get('domainId');
                    }
                    if (params.has('categoryId')) {
                        this.categoryId = params.get('categoryId');
                    }
                    if (params.has('resourceTypeId')) {
                        this.resourceTypeId = params.get('resourceTypeId');
                    }
                    if (params.has('resourceId')) {
                        this.resourceId = params.get('resourceId');
                    }
                }),
                switchMap( () => {
                    return this.resourceFilterService.getResourceById(this.resourceId);
                }),
                takeUntil(this.ngUnsubscribe)
            )
            .subscribe({
                next: res => {
                    this.resourceData = {...res};
                    this.roundedReviewPercentage = Math.ceil(this.resourceData.proReviewsPercentage / 20) * 20;

                    // doar pt afisarea numelui tipului de resursa
                    this.resourceFilterService.resourceTypeObs$
                        .pipe(
                            switchMap( resourceType => {
                                if (!resourceType) {
                                    return this.resourcesService.getResourceTypeById(res.resourceTypeId)
                                        .pipe(tap(resourceType => this.resourceFilterService.setResourceType(resourceType)));
                                }
                                return of(resourceType);
                            }),
                            takeUntil(this.ngUnsubscribe)
                        )
                        .subscribe(resourceType => {
                            console.log('call for resource type');
                        this.resourceTypeName = resourceType.nameEn;
                            this.route.queryParams.subscribe({
                                next: queryParams => {
                                    console.log('qp', queryParams);
                                    if(queryParams.book === 'ticket'){
                                        this.navigateToBookingTypeTab();
                                    }
                                }
                            })
                    })
                },
                error: () => {
                    this.toastService.showToast(
                        this.translate.instant("TOAST.ERROR"),
                        this.translate.instant("TOAST.SERVER-ERROR"),
                        "error");
                    void this.router.navigate([`/client/domain/${this.domainId}`]);
                }
            });



    }

    toggleFavorite() {
        if (!this.allowedToClickBtn) return;

        this.allowedToClickBtn = false;

        if (!this.resourceData.favorite) {
            this.resourcesService.addResourceToFavorite(this.resourceData.id)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe({
                    next: () => {
                        this.resourceData.favorite = true;
                        this.allowedToClickBtn = true;
                        this.toastService.showToast(
                            this.translate.instant("TOAST.SUCCESS"),
                            `Added ${this.resourceData.title} to favorites`,
                            'success'
                        );
                    },
                    error: () => {
                        this.allowedToClickBtn = true;
                        this.toastService.showToast(
                            this.translate.instant("TOAST.ERROR"),
                            this.translate.instant('TOAST.SERVER-ERROR'),
                            'error'
                        );
                    }
                });
        } else {
            this.resourcesService.deleteResourceFromFavorite(this.resourceData.id)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe({
                    next: () => {
                        this.resourceData.favorite = false;
                        this.allowedToClickBtn = true;
                        this.toastService.showToast(
                            this.translate.instant("TOAST.SUCCESS"),
                            `Removed ${this.resourceData.title} from favorites`,
                            'success'
                        );
                    },
                    error: () => {
                        this.allowedToClickBtn = true;
                        this.toastService.showToast(
                            this.translate.instant("TOAST.ERROR"),
                            this.translate.instant('TOAST.SERVER-ERROR'),
                            'error'
                        );
                    }
                });
        }

    }

    navigateToBookingTypeTab() {
        this.activeResourceTabId = this.resourceData.bookingType === 'menu' && this.resourceData.bookingTimePickerId ? 4 : 2;
        this.resourceTabs.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
