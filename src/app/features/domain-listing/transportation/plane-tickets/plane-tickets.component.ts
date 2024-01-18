import {DatePipe, TitleCasePipe} from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { Subject, takeUntil } from 'rxjs';
import { TicketService } from 'src/app/shared/_services/tickets.service';



@Component({
  selector: 'app-plane-tickets',
  templateUrl: './plane-tickets.component.html',
  styleUrls: ['./plane-tickets.component.scss'],
  providers: [TitleCasePipe, DatePipe]
})
export class PlaneTicketsComponent {

  @ViewChild('acc') accordionRef: NgbAccordion;

  private ngUnsubscribe = new Subject<void>();

  airplaneTicketForm:FormGroup;

  roundTrip=false;

  minDate = new Date();


  adultsNumber=0;
  childrenNumber=0;

  cityToSearch:string=null;
  recommendedDepartureAirport:Array<any>= null;
  recommendedArrivalAirport:Array<any>= null;

  // filter names
  filterSelection = {
    departure: true,
    return: false,
  }
  accIsOpen = false;
  activeFilter = '';

  //check travelCLass buttons
  invalidFields:Array<any>=[];
  travelClass:boolean;
  showDepartureList: boolean;

  initialDeparture: string;
  initialArrival: string;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private ticketService:TicketService,
      public titleCasePipe: TitleCasePipe,
      private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup(){
    this.airplaneTicketForm=this.formBuilder.group({
      departureAirport: ['',Validators.required],
      arrivalAirport: ['',[Validators.required , Validators.min]],
      departureDate: ['',Validators.required],
      returnDate: [null],
      travelClass: ['',Validators.required],
      passengersAdults: [0, Validators.min(0)], //de verificat sa nu permita numere negative
      passengersChildren: [0, Validators.min(0)],
    })
  }

  //when you change the toggle for round or one way trips
  changeTab(event){
    if(event){
      this.adultsNumber=0;
      this.childrenNumber=0;

      this.airplaneTicketForm.reset();
      this.airplaneTicketForm.markAsUntouched();
    }
    this.roundTrip= event === 'roundTrips' ? true :false;

    if(this.roundTrip===true){
      this.airplaneTicketForm.get('returnDate').addValidators(Validators.required);
    } else {
      this.airplaneTicketForm.get('returnDate').clearValidators();
    }
  }

  //set the number of person
  incrementNumberAdults() {

    this.airplaneTicketForm.patchValue({
      passengersAdults:(this.airplaneTicketForm.get('passengersAdults').value)+1
    });
  }
  //set the number of person
  decrementNumberAdults() {
    this.airplaneTicketForm.patchValue({
      passengersAdults:(this.airplaneTicketForm.get('passengersAdults').value)-1
    });

  }

  //set the number of children
  incrementNumberChildren() {

    this.airplaneTicketForm.patchValue({
      passengersChildren: (this.airplaneTicketForm.get('passengersChildren').value)+1
    });

  }
  //set the number of children
  decrementNumberChildren() {
    this.airplaneTicketForm.patchValue({
      passengersChildren: (this.airplaneTicketForm.get('passengersChildren').value)-1
    });
  }

  findInvalidControls(){
    this.invalidFields = [];
    const controls = this.airplaneTicketForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        this.invalidFields.push(name);
      }
    }
    this.travelClass=this.invalidFields.includes('travelClass')
    // console.log('INVALIDE', this.invalidFields);
  }



  updateFormValue(formControlName: string, value: unknown) {
    this.initialDeparture = this.airplaneTicketForm.value.departureAirport;
    this.initialArrival = this.airplaneTicketForm.value.arrivalAirport;
    this.airplaneTicketForm.get(formControlName).patchValue(value);
    this.recommendedDepartureAirport = null;
    this.recommendedArrivalAirport = null;

  }

  getCityCodeDeparture(){

    if(!this.airplaneTicketForm.value.departureAirport || this.airplaneTicketForm.value.departureAirport.length < 3){
      this.recommendedDepartureAirport = null;
      return;
    }else if (this.airplaneTicketForm.value.departureAirport !== this.initialDeparture){
      this.ticketService.getCityCode(this.airplaneTicketForm.value.departureAirport)
          .subscribe((cityCode:any)=>{

            const filteredAirports = cityCode.filter(item => item.type === "AIRPORT");

            this.recommendedDepartureAirport = filteredAirports.map(({ name, cityName, countryName, iataCode }) => ({
              airportName: name,
              cityName,
              countryName,
              airportIataCode: iataCode
            }));
          })
    }

  }

  getCityCodeArrival(){

    if(!this.airplaneTicketForm.value.arrivalAirport || this.airplaneTicketForm.value.arrivalAirport.length < 3){
      this.recommendedArrivalAirport = null;
      return;
    }else if (this.airplaneTicketForm.value.arrivalAirport !== this.initialArrival){
      this.ticketService.getCityCode(this.airplaneTicketForm.value.arrivalAirport)
          .subscribe((cityCode:any)=>{

            const filteredAirports = cityCode.filter(item => item.type === "AIRPORT");

            this.recommendedArrivalAirport = filteredAirports.map(({ name, cityName, countryName, iataCode }) => ({
              airportName: name,
              cityName,
              countryName,
              airportIataCode: iataCode
            }));
          })
    }

  }

  //submit form
  checkAvilability(){
    // const objToSend=this.airplaneTicketForm.value;
    this.airplaneTicketForm.get('departureAirport').value;
    const objToSend={
      originLocationCode:this.airplaneTicketForm.get('departureAirport').value,
      destinationLocationCode: this.airplaneTicketForm.get('arrivalAirport').value,
      departureDate: this.datePipe.transform(this.airplaneTicketForm.get('departureDate').value, 'yyyy-MM-dd'),
      returnDate: this.datePipe.transform(this.airplaneTicketForm.get('returnDate').value, 'yyyy-MM-dd'),
      adults: this.airplaneTicketForm.get('passengersAdults').value,
      children: this.airplaneTicketForm.get('passengersChildren').value,
      travelClass: this.airplaneTicketForm.get('travelClass').value,
      maxResultsNumber: 50

    }
    console.log(objToSend);
    this.airplaneTicketForm.markAllAsTouched();
    // this.ticketService.setTrainFormData(this.airplaneTicketForm);
    //is form valid
    if(this.airplaneTicketForm.valid){
      if((this.airplaneTicketForm.get('passengersChildren').value !== 0) || (this.airplaneTicketForm.get('passengersAdults').value !== 0)){
        this.router.navigate([`/client/domain/63bfcca765dc3f3863af755c/category/63dbb1a4df393f7372161842/available-plane-tickets`],
            { queryParams: objToSend
            });
      }

    }else{
      this.findInvalidControls();
      // Mark all inputs as touched
    }
    // console.log("formular trimis");

    // console.log(objToSend);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();

  }

}
