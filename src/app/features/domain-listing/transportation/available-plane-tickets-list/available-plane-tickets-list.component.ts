import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { TicketService } from 'src/app/shared/_services/tickets.service';
import {ActivatedRoute} from "@angular/router";
import {FormGroup} from "@angular/forms";

export interface IPlaneTicket {
  arrivalDate?: string;
  companyName?: string;
  currency?:string;
  departureDate?: string;
  from?: string;
  iconPath?: string;
  price?: 0;
  to?: string;
  transportDuration?: number;
  transportNumber?: string;
  travelClass?:string;
  stops?:number;
  image?: {
    filePath: string;
    fileName: string;
  };
  name?: string;
  description?: string;
  transmission?: string;
  consumption?: string;
  seats?: number;
  doors?: number;
  id?: number;
}

@Component({
  selector: 'app-available-plane-tickets-list',
  templateUrl: './available-plane-tickets-list.component.html',
  styleUrls: ['./available-plane-tickets-list.component.scss']
})
export class AvailablePlaneTicketsListComponent {

  ticketList:Array<IPlaneTicket>=[];
  flights: any;
  flightReqBody: any;

  filterForm: FormGroup;


  private ngUnsubscribe = new Subject<void>();


  constructor(private ticketsService:TicketService, private route: ActivatedRoute){
  }

  ngOnInit():void{
    // this.getTicketsList();
    this.route.queryParams
        .subscribe(params => {
              console.log('params flights', params);
              const lowerCaseFlightObject: Record<string, string> = {};

              Object.keys(params).forEach(key => {
                lowerCaseFlightObject[key.toLowerCase()] = params[key];
              });

              console.log('lower', lowerCaseFlightObject);

              this.flightReqBody = {
                originLocationCode: lowerCaseFlightObject.originlocationcode.toUpperCase(),
                destinationLocationCode: lowerCaseFlightObject.destinationlocationcode.toUpperCase(),
                departureDate: lowerCaseFlightObject.departuredate,
                returnDate: lowerCaseFlightObject.returndate ? lowerCaseFlightObject.returndate : null,
                adults: (+lowerCaseFlightObject.adults),
                children: (+lowerCaseFlightObject.children),
                travelClass: lowerCaseFlightObject.travelclass.toUpperCase(),
                maxResultsNumber:lowerCaseFlightObject.maxresultsnumber
              }

              console.log('flightReqBody', this.flightReqBody);

              this.ticketsService.getFlightOffer(this.flightReqBody).subscribe((flights: any) => {
                console.log('flights: ', flights);
                this.flights = flights;
              })

            }
        );
  }


  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
