import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, switchMap} from "rxjs";
import {ResourceType} from "../_models/resource-type.model";
import {Resource} from "../_models/resource.model";
import {PaginationResponse} from "../_models/pagination-response.model";
import {ResourceFilters} from "../_models/resource-filters.model";
import {TemplatePagination} from "../_models/template-pagination.model";
import {ResourceTemplate} from "../_models/resource-template.model";
import * as moment from "moment";
import {Attribute} from "../_models/attribute.model";
import {CityRecommendation} from "../_models/city-recommendation.model";

export type SavedFilters = {
    location?: string;
    geographicalCoordinates?: {
        longitude: number;
        latitude: number;
    };
    dateAsDay: moment.Moment;
    dateAsHour: moment.Moment;
    startDate: moment.Moment;
    endDate: moment.Moment;
    startHour: moment.Moment;
    endHour: moment.Moment;
    adultsNumber: number;
    childrenNumber: number;
    roomsNumber: number;
};

@Injectable({
    providedIn: 'root'
})
export class ResourceFilterService {

    // resource type state
    private resourceTypeState = new BehaviorSubject<ResourceType>(null);
    public resourceTypeObs$ = this.resourceTypeState.asObservable();

    // resources pagination and filters state
    private resourceListState = new BehaviorSubject<PaginationResponse>(null);
    public resourceListObs$ = this.resourceListState.asObservable();

    // resource template state
    private resourceTemplateState = new BehaviorSubject<ResourceTemplate>(null);
    public resourceTemplateObs$ = this.resourceTemplateState.asObservable();

    // selected resource state
    private resourceState = new BehaviorSubject<Resource>(null);
    public resourceObs$ = this.resourceState.asObservable();


    // filters
    private filtersObj: ResourceFilters = null;

    // data we save from filter-bar component, but don't use to filter resources
    private savedFilters: SavedFilters = null;

    // pagination
    pageNr = 0;
    pageSize = 10;
    sortBy: string;
    sortDirection: string;


    // used for the modal in the itineraries
    private resourceFromItinerary: Resource = null;

    constructor(private http: HttpClient) {
    }

    checkIfItineraryModal() {
        return !!this.resourceFromItinerary;
    }

    setResourceFromItinerary(resource: Resource) {
        this.resourceFromItinerary = resource;
    }

    getResourceFromItinerary() {
        return structuredClone(this.resourceFromItinerary);
    }

    initServiceStates() {
        this.resourceTypeState.next(null);
        this.resourceListState.next(null);
        this.resourceTemplateState.next(null);
        this.resourceState.next(null);
        this.filtersObj = null;
        this.savedFilters = null;
        this.resourceFromItinerary = null;
    }

    getResourceTypeById(resourceTypeId: string) {
        this.filtersObj = {
            resourceTypeId: resourceTypeId,
            status: 'active'
        }
        this.savedFilters = null;

        return this.http.get<ResourceType>('/bestinform/getResourceTypeById?resourceTypeId=' + resourceTypeId)
            .pipe(
                switchMap(res => {
                    if (res) {
                        this.resourceTypeState.next(res);
                        return this.resourceTypeObs$;
                    }
                })
            );
    }

    setResourceType(resourceType: ResourceType) {
        this.resourceTypeState.next(resourceType);
    }

    getAllCitiesRecommended(city: string) {
        return this.http.get<CityRecommendation[]>('/bestinform/getAllCitiesRecommended?city=' + city);
    }

    listResourceFiltered(page: number, size: number, sort?: string, dir?: string) {
        this.pageNr = page;
        this.pageSize = size;
        this.sortBy = sort;
        this.sortDirection = dir;

        return this.http.post<PaginationResponse>('/bestinform/listResourceFiltered?page=' + page + '&size=' + size + '&sort=' + sort + '&dir=' + dir, this.filtersObj)
            .pipe(
                switchMap(res => {
                    if (res) {
                        this.resourceListState.next(res);
                        return this.resourceListObs$;
                    }
                })
            );
    }

    updateFilters(newFilters: ResourceFilters) {
        this.filtersObj = {...this.filtersObj, ...newFilters};

        return this.http.post<PaginationResponse>('/bestinform/listResourceFiltered?page=' + this.pageNr + '&size=' + this.pageSize + '&sort=' + this.sortBy + '&dir=' + this.sortDirection, this.filtersObj)
            .pipe(
                switchMap(res => {
                    if (res) {
                        this.resourceListState.next(res);
                        return this.resourceListObs$;
                    }
                })
            );
    }

    getResourceTemplateByResourceTypeId(resourceTypeId: string) {
        return this.http.post<TemplatePagination>('/bestinform/listResourceTemplateFiltered?page=0&size=1', {resourceTypeId: resourceTypeId})
            .pipe(
                switchMap( res => {
                    if (res?.content?.length > 0) {
                        this.resourceTemplateState.next(res.content[0]);
                        return this.resourceTemplateObs$;
                    } else {
                        this.resourceTemplateState.next(null);
                        return this.resourceTemplateObs$;
                    }
                })
            );
    }

    updateSavedFilters(newFilters: SavedFilters) {
        this.savedFilters = {...newFilters};
    }

    getSavedFilters(): SavedFilters {
        return this.savedFilters;
    }

    private isValidResource(resource: object): resource is Resource {
        return 'domain' in resource && 'categoryId' in resource && 'resourceTypeId' in resource;
    }

    getResourceById(resourceId: string) {
        // const resourceFromHistory = history.state;
        // if (this.isValidResource(resourceFromHistory) && resourceFromHistory.id === resourceId) {
        //     this.resourceState.next(resourceFromHistory);
        //     return this.resourceObs$;
        // }
        if (this.checkIfItineraryModal()) {
            this.resourceState.next(this.resourceFromItinerary);
            return this.resourceObs$;
        }

        return this.http.get<Resource>('/bestinform/getResourceById?resourceId=' + resourceId)
            .pipe(
                switchMap( res => {
                    if (res) {
                        this.resourceState.next(res);
                    }
                    return this.resourceObs$;
                })
            );
    }

    getFilterAttributeFromTemplate(templateId: string) {
        return this.http.get<Attribute[]>('/bestinform/getFilterAttributeFromTemplate?templateId=' + templateId);
    }

}
