import {Component, OnInit} from '@angular/core';
import {StepperService} from "../../../../_services/stepper.service";
import {FormGroup} from "@angular/forms";
import {ResourcesService} from "../../../../_services/resources.service";
import {RentalBookingService} from "../../../../_services/rental-booking.service";
import {BehaviorSubject, forkJoin, Observable, Subscription} from "rxjs";
import {ToastService} from "../../../../../../shared/_services/toast.service";
import {type} from "os";
import {Router} from "@angular/router";
import {UserDataService} from "../../../../../../shared/_services/userData.service";
import {TicketsBookingService} from "../../../../_services/tickets-booking.service";
import {TimepickerService} from "../../../../_services/timepicker.service";
import {ProductListService} from "../../../../_services/product-list.service";
import {BookingTimeslotsService} from "../../../../_services/booking-timeslots.service";
import {CreateResourceService} from "../../../../../../shared/_services/createResource.service";
import {MenuService} from "../../../../_services/menu.service";
import {User} from "../../../../../../shared/_models/user.model";
import {CulturalBookingService} from "../../../../_services/cultural-booking.service";
import moment from "moment";

@Component({
    selector: 'app-payment',
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

    isStaff: boolean;
    isAdmin: boolean;
    isProvider: boolean;

    currentResourceId: string;
    roomsArray: any;
    currentBookingType: string;


    commission = 0;

    isSubmitLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    isSubmitLoading: boolean;
    private unsubscribe: Subscription[] = [];

    constructor(private resourceService: ResourcesService,
                private stepperService: StepperService,
                private roomService: RentalBookingService,
                private ticketService: TicketsBookingService,
                private toastService: ToastService,
                private router: Router,
                private userService: UserDataService,
                private timepickerService: TimepickerService,
                private productService: ProductListService,
                private timeslotService: BookingTimeslotsService,
                private createResourceService: CreateResourceService,
                private menuService: MenuService,
                private culturalBookingService: CulturalBookingService) {

        const loadingSubscr = this.isSubmitLoading$
            .asObservable()
            .subscribe((res) => (this.isSubmitLoading = res));
        this.unsubscribe.push(loadingSubscr);

    }

    $fileObservables: Observable<object>[] = [];

    ngOnInit() {

        this.roomsArray = this.roomService.roomList$.getValue();

        this.userService.getCurrentUser().subscribe((response: any) => {
            if (response.roles.includes('ROLE_PROVIDER')) {
                this.isProvider = true;
                this.commission = response?.percentageCommission;
            }

            if (response.roles.includes('ROLE_STAFF')) {
                this.isStaff = true;
                this.getCommission();
            }

            if (response.roles.includes('ROLE_SUPER_ADMIN')) {
                this.isAdmin = true;
                this.getCommission();
            }
        })

        if (this.resourceService.resourceId$.getValue()) {
            this.currentResourceId = this.resourceService.resourceId$.getValue();
        }

        this.currentBookingType = this.resourceService.resourceTemplateData$.getValue().bookingType;

    }


    getCommission() {
        if (this.isStaff || this.isAdmin) {
            if (this.createResourceService.providerData$.getValue()) {
                const providerId = this.createResourceService.providerData$.getValue().providerId;
                console.log('prov id', providerId);
                this.userService.getUserById(providerId).subscribe({
                    next: (provider: User) => {
                        this.commission = provider?.percentageCommission;
                    }
                })
            }

        }
    }


    /** Go to next step*/
    nextStep() {
        this.isSubmitLoading$.next(true);

        console.log('LAST STEP');

        // // Mark as touched
        // this.form.markAllAsTouched()
        //
        // // Check form validation
        // if (this.form.invalid) {
        //     return
        // }


        const combineForms: any = new FormGroup({
            ...this.resourceService.generalInformationForm$.getValue().controls,
            ...this.resourceService.facilitiesForm$.getValue().controls,
            ...this.resourceService.filesForm$.getValue().controls
        })

        console.log('Form-uri combinate', combineForms.value)
        console.log('Form-uri combinate 2', this.resourceService.resourceTemplateData$.getValue());
        console.log('Form-uri combinate 3', this.resourceService.resourceTemplateType$.getValue());


        // Empty array
        const formData = [];

        // Sort form inputs by tabName
        for (const control in combineForms.controls) {
            this.resourceService.attributesFromResourceTemplate$.getValue().forEach((section) => {
                section.tabAttributes.forEach(attribute => {
                    if (attribute.name === control) {
                        if(attribute.valueType === 'multiple-select'){
                            console.log('ATTR SENT',attribute, combineForms.get(control).value)
                            formData.push({
                                tabName: section.tabName,
                                attributeName: control,
                                attributeId: attribute.id,
                                attributeValue: Array.isArray(combineForms.get(control).value) ? combineForms.get(control).value.join() : combineForms.get(control).value ,
                                attributeIconPath: attribute.icon.filePath
                            });
                        }else{
                            formData.push({
                                tabName: section.tabName,
                                attributeName: control,
                                attributeId: attribute.id,
                                attributeValue: combineForms.get(control).value,
                                attributeIconPath: attribute.icon.filePath
                            });
                        }

                    }
                });
            });
        }

        console.log('FORM DATA', formData);


        const attributes = formData.reduce((acc, item) => {
            const index = acc.findIndex(x => x.tabName === item.tabName);
            if (index !== -1) {
                acc[index].tabAttributes.push({
                    attributeId: item.attributeId,
                    attributeValue: item.attributeValue
                });
            } else {
                acc.push({
                    tabName: item.tabName,
                    tabAttributes: [{
                        attributeId: item.attributeId,
                        attributeValue: item.attributeValue
                    }]
                });
            }
            return acc;
        }, []);

        const accomodationPolicy = {
            accommodationPolicy: this.resourceService.accommodationPolicy$.getValue()
        }

        console.log('payment end date', combineForms.value?.startDate);

        // Formatted Form Object
        const formObject = {
            title: combineForms.value.title,
            description: combineForms.value.description,
            address: combineForms.value.address,
            country: combineForms.value.country,
            city: combineForms.value.city,
            slug: this.resourceService.resourceId$.getValue() ? '' : combineForms.value.title,
            featuredImage: combineForms.value.thumbnail ? combineForms.value.thumbnail : {filePath: null, fileName: null},
            images: this.resourceService.resourceData.getValue().images,
            videos: this.resourceService.resourceData.getValue().videos !== null ? this.resourceService.resourceData.getValue().videos : [],
            geographicalCoordinates: {
                latitude: combineForms.value.latitude,
                longitude: combineForms.value.longitude
            },
            attributes: attributes,
            categoryId: this.resourceService.resourceTemplateType$.getValue().categoryId,
            bookingPolicies: combineForms.value?.bookingPolicies
                ? {
                    depositRequiredPercentage: combineForms.value.bookingPolicies?.depositRequiredPercentage || 0,
                    depositRequiredAmount: combineForms.value.bookingPolicies?.depositRequiredAmount || 0,
                    advancePartialPaymentPercentage: combineForms.value.bookingPolicies?.advancePartialPaymentPercentage || 0,
                    advanceFullPayment: combineForms.value.bookingPolicies?.advanceFullPayment || false,
                }
                : null,
                startDate:  (combineForms.value?.startDate !== 'Invalid date' && this.currentBookingType === 'culturalBooking') ? moment(combineForms.value?.startDate)?.format('YYYY-MM-DDTHH:mm') : null,
                endDate: (combineForms.value?.endDate !== 'Invalid date' &&  this.currentBookingType === 'culturalBooking') ? moment(combineForms.value?.endDate)?.format('YYYY-MM-DDTHH:mm') : null,
            domain: this.resourceService.resourceTemplateType$.getValue().domain,
            resourceTypeId: this.resourceService.resourceTemplateType$.getValue().resourceTypeId,
            bookingType: this.resourceService.resourceTemplateData$.getValue().bookingType,
            timetable: this.timepickerService.timetableList$.getValue(),
            policy: accomodationPolicy,
            externalUrl: this.resourceService.externalUrl$.getValue(),
            sharedExperience: combineForms.value.sharedExperience,
            forItinerary: combineForms.value.forItinerary
        }


        console.log(formObject)

        // Check if you are on edit or create
        if (this.resourceService.resourceId$.getValue()) {
            // this.currentResourceId =  this.resourceService.resourceId$.getValue();
            console.log('id-ul resursei curente', this.resourceService.resourceId$.getValue());
            this.resourceService.updateResource(this.resourceService.resourceId$.getValue(), formObject).subscribe({
                next: (data: any) => {
                    console.log(data)

                        const currentRelatedRes = this.resourceService.relatedResources$.getValue();
                        const resourceRelatedRes = this.resourceService.resourceTemplateData$.getValue()?.relatedResources;
                        if(resourceRelatedRes?.length > 0 && currentRelatedRes?.length > 0 && currentRelatedRes[0]?.id === resourceRelatedRes[0]){
                            // nu fac nimic
                        }else if(resourceRelatedRes?.length > 0 && currentRelatedRes?.length > 0 && currentRelatedRes[0]?.id !== resourceRelatedRes[0]){
                            this.$fileObservables.push(this.resourceService.removeRelatedResource(resourceRelatedRes[0], this.resourceService.resourceId$.getValue()));
                            this.$fileObservables.push(this.resourceService.addRelatedresources(this.resourceService.resourceId$.getValue(), currentRelatedRes[0].id));
                        }else if((resourceRelatedRes?.length === 0 || !resourceRelatedRes) && currentRelatedRes?.length > 0){
                            this.$fileObservables.push(this.resourceService.addRelatedresources(this.resourceService.resourceId$.getValue(), currentRelatedRes[0].id));
                        }else if(resourceRelatedRes?.length > 0 && currentRelatedRes?.length === 0){
                            this.$fileObservables.push(this.resourceService.removeRelatedResource(resourceRelatedRes[0], this.resourceService.resourceId$.getValue()));
                        }

                    if (combineForms.value.thumbnail && (combineForms.value.thumbnail !== this.resourceService.resourceData.getValue().featuredImage)) {
                        const thumbnailData = new FormData();
                        thumbnailData.append('file', combineForms.value.thumbnail);
                        this.$fileObservables.push(this.resourceService.uploadResourceImage(this.resourceService.resourceId$.getValue(), thumbnailData));
                    }

                    if (combineForms.value.images?.length > 0) {
                        const newImages = combineForms.value.images.filter(x => this.resourceService.resourceData.getValue().images.indexOf(x) === -1);
                        console.log('Diferenta arrays', newImages);

                        if (newImages?.length > 0) {
                            const imagesData = new FormData();
                            newImages.forEach(galleryFile => {
                                imagesData.append('files', galleryFile);
                            });
                            this.$fileObservables.push(this.resourceService.uploadDocAttachements(this.resourceService.resourceId$.getValue(), 'image', imagesData));
                        }
                    }

                    if (combineForms.value.videos?.length > 0) {
                        const newVideos = combineForms.value.videos.filter(x => this.resourceService.resourceData.getValue().videos.indexOf(x) === -1);
                        console.log('Diferenta arrays', newVideos);


                        if (newVideos?.length > 0) {
                            const videosData = new FormData();
                            newVideos.forEach(videoFile => {
                                videosData.append('files', videoFile);
                            });
                            this.$fileObservables.push(this.resourceService.uploadDocAttachements(this.resourceService.resourceId$.getValue(), 'video', videosData));
                        }
                    }
                    if (data.success) {
                        // console.log('TICKETs');
                        // console.log('CREATE ARRAY', this.ticketService.createArray$.getValue());
                        // console.log('current res id', this.currentResourceId);

                        // this.timepickerService.timetableList$.next([]);
                        //ticket-booking
                        // this.ticketService.ticketsList$.next([]);

                        // menu
                        if (this.currentBookingType === 'menu') {
                            if (this.menuService.menuId$.getValue() && this.menuService.menuList$.getValue()?.length > 0) {
                                console.log('menuList', this.menuService.menuList$.getValue());
                                this.$fileObservables.push(this.menuService.updateMenu(this.menuService.menuId$.getValue(), this.menuService.menuList$.getValue()));
                            } else {
                                if (this.menuService.menuList$.getValue()?.length > 0) {
                                    this.$fileObservables.push(this.menuService.createMenu(this.resourceService.resourceId$.getValue(), this.menuService.menuList$.getValue()));
                                }

                            }

                        }


                        if (this.ticketService.createArray$.getValue()?.length > 0) {
                            // Create new tickets
                            this.$fileObservables.push(this.ticketService.createTickets(this.currentResourceId, this.ticketService.createArray$.getValue()));
                            // this.ticketService.createTickets(this.currentResourceId, this.ticketService.createArray$.getValue()).subscribe({
                            //     next: (tickets: { success: boolean, reason: string }) => {
                            //         if (tickets.success) {
                            //             // console.log('SE ADAUGA TICKETELE PUSE PE UPDATE', tickets);
                            //             this.ticketService.createArray$.next([]);
                            //             console.log(this.ticketService.createArray$.getValue());
                            //         }
                            //     }
                            // })
                        } else {
                            console.log('n-am in create');
                        }


                        if (this.ticketService.updateArray$.getValue()?.length > 0) {
                            console.log('am in update');
                            //Update tickets
                            const updateArray = this.ticketService.updateArray$.getValue();
                            updateArray.forEach(ticket => {
                                this.$fileObservables.push(this.ticketService.updateTicket(ticket.id, ticket));
                                // this.ticketService.updateTicket(ticket.id, ticket).subscribe({
                                //     next: (tickets: { success: boolean, reason: string }) => {
                                //         if (tickets.success) {
                                //             // console.log('SE FACE UPDATE LA TICKETS PE UPDATE', tickets);
                                //             this.ticketService.updateArray$.next([]);
                                //         }
                                //     }
                                // })
                            })
                        } else {
                            console.log('n-am in update');
                        }


                        if (this.ticketService.deleteArray$.getValue()?.length > 0) {
                            //Delete tickets
                            const deleteArray = this.ticketService.deleteArray$.getValue();
                            deleteArray.forEach(ticket => {
                                // console.log('ticket de sters', ticket)
                                this.$fileObservables.push(this.ticketService.deleteTicket(ticket.id));
                                // this.ticketService.deleteTicket(ticket.id).subscribe({
                                //     next: (tickets: { success: boolean, reason: string }) => {
                                //         if (tickets.success) {
                                //             console.log('SE FACE DELETE LA TICKETS PE UPDATE', tickets);
                                //             this.ticketService.deleteArray$.next([]);
                                //         }
                                //     },
                                //     error: err => {
                                //         console.log(err);
                                //     }
                                //
                                // })
                            })

                        }

                        if (this.productService.productsList$.getValue().length > 0) {
                            const prodArray = this.productService.productsList$.getValue();
                            prodArray.forEach(product => {
                                if (product.state === 'add') {
                                    this.productService.createProduct(this.currentResourceId, product).subscribe({
                                        next: (respAdd: { success: boolean, reason: string }) => {
                                            if (respAdd) {
                                                const imagArray = this.productService.imagesArray$.getValue();
                                                console.log('array', imagArray);
                                                imagArray.forEach(imageObj => {
                                                    if (product.id === imageObj.id) {
                                                        console.log('imaginea cu id-ul ' + product.id + ' va avea astea', imageObj);
                                                        if (imageObj.imageFile !== undefined) {
                                                            const thumbnailData = new FormData();
                                                            thumbnailData.append('images', imageObj.imageFile);
                                                            console.log('thumb data', thumbnailData);

                                                            // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                            this.productService.uploadImageForProduct(respAdd.reason, thumbnailData).subscribe({
                                                                next: thumb => {
                                                                    console.log('thumbnail uploadat', thumb);
                                                                },error: (error)=>{
                                                                    if(error.error.reason === 'fileSizeTooBig'){
                                                                        this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                    } else if(error.error.reason === 'wrongExtension'){
                                                                        this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                    }else{
                                                                        this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                                    }
                                                                }


                                                            })
                                                        }

                                                        this.productService.imagesArray$.next([]);
                                                    }
                                                })

                                                const attachArray = this.productService.attachmentArray$.getValue();
                                                attachArray.forEach(attach => {
                                                    console.log('ATTACHMENT', attach)
                                                    if (product.id === attach.id) {
                                                        console.log('imaginea cu id-ul ' + product.id + ' va avea astea', attach);
                                                        if (attach.attachmentFile !== undefined) {
                                                            const thumbnailData = new FormData();
                                                            thumbnailData.append('file', attach.attachmentFile);
                                                            console.log('thumb data', thumbnailData);

                                                            // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                            this.productService.uploadAttachmentForProduct(respAdd.reason, thumbnailData).subscribe({
                                                                next: thumb => {
                                                                    console.log('attachment uploadat', thumb);
                                                                },error: (error)=>{
                                                                    if(error.error.reason === 'fileSizeTooBig'){
                                                                        this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                    } else if(error.error.reason === 'wrongExtension'){
                                                                        this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                    }else{
                                                                        this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                                    }
                                                                }


                                                            })
                                                        }

                                                        this.productService.attachmentArray$.next([]);
                                                    }
                                                })
                                            }
                                        }
                                    })
                                } else if (product.state === 'update') {
                                    this.productService.updateProduct(product.id, product).subscribe({
                                        next: (respUpdate: { success: boolean, reason: string }) => {
                                            console.log('update prod', respUpdate);
                                            if (respUpdate) {
                                                const imagArray = this.productService.imagesArray$.getValue();
                                                console.log('array', imagArray);
                                                imagArray.forEach(imageObj => {
                                                    if (product.id === imageObj.id) {
                                                        console.log('imaginea cu id-ul ' + product.id + ' va avea astea', imageObj);
                                                        if (imageObj.imageFile !== undefined) {
                                                            const thumbnailData = new FormData();
                                                            thumbnailData.append('images', imageObj.imageFile);
                                                            console.log('thumb data', thumbnailData);

                                                            // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                            this.productService.uploadImageForProduct(product.id, thumbnailData).subscribe({
                                                                next: thumb => {
                                                                    console.log('thumbnail uploadat', thumb);
                                                                },error: (error)=>{
                                                                    if(error.error.reason === 'fileSizeTooBig'){
                                                                        this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                    } else if(error.error.reason === 'wrongExtension'){
                                                                        this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                    }else{
                                                                        this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                                    }
                                                                }
                                                            })
                                                        }

                                                        this.productService.imagesArray$.next([]);
                                                    }
                                                })

                                                const attachArray = this.productService.attachmentArray$.getValue();
                                                attachArray.forEach(attach => {
                                                    console.log('ATTACHMENT', attach)
                                                    if (product.id === attach.id) {
                                                        console.log('imaginea cu id-ul ' + product.id + ' va avea astea', attach);
                                                        if (attach.attachmentFile !== undefined) {
                                                            const thumbnailData = new FormData();
                                                            thumbnailData.append('file', attach.attachmentFile);
                                                            console.log('thumb data', thumbnailData);

                                                            // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                            this.productService.uploadAttachmentForProduct(product.id, thumbnailData).subscribe({
                                                                next: thumb => {
                                                                    console.log('attachment uploadat', thumb);
                                                                },error: (error)=>{
                                                                    if(error.error.reason === 'fileSizeTooBig'){
                                                                        this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                    } else if(error.error.reason === 'wrongExtension'){
                                                                        this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                    }else{
                                                                        this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea atasamentului!", "error");
                                                                    }
                                                                }


                                                            })
                                                        }

                                                        this.productService.attachmentArray$.next([]);
                                                    }
                                                })
                                            }
                                        }
                                    })
                                }
                            })
                        }

                        //product list
                        if (this.productService.deleteProdList$.getValue().length > 0) {
                            const deleteProdArray = this.productService.deleteProdList$.getValue();
                            deleteProdArray.forEach(product => {
                                this.productService.deleteProduct(product.id).subscribe({
                                    next: (respAdd: { success: boolean, reason: string }) => {
                                        if (respAdd) {
                                            const imagArray = this.productService.imagesArray$.getValue();
                                            console.log('array', imagArray);
                                            imagArray.forEach(imageObj => {
                                                if (product.id === imageObj.id) {
                                                    console.log('imaginea cu id-ul ' + product.id + ' va avea astea', imageObj);
                                                    if (imageObj.imageFile !== undefined) {
                                                        const thumbnailData = new FormData();
                                                        thumbnailData.append('images', imageObj.imageFile);
                                                        console.log('thumb data', thumbnailData);

                                                        // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                        this.productService.uploadImageForProduct(respAdd.reason, thumbnailData).subscribe({
                                                            next: thumb => {
                                                                console.log('thumbnail uploadat', thumb);
                                                            },error: (error)=>{
                                                                if(error.error.reason === 'fileSizeTooBig'){
                                                                    this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                } else if(error.error.reason === 'wrongExtension'){
                                                                    this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                }else{
                                                                    this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                                }
                                                            }
                                                        })
                                                    }

                                                    this.productService.imagesArray$.next([]);
                                                }
                                            })
                                        }
                                    }
                                });
                            })
                        }


                        //service time slot
                        if (this.timeslotService.serviceList$.getValue().length > 0) {
                            const serviceArray = this.timeslotService.serviceList$.getValue();
                            serviceArray.forEach(service => {
                                if (service.state === 'add') {
                                    this.$fileObservables.push(this.timeslotService.createService(this.currentResourceId, service))
                                } else if (service.state === 'update') {
                                    this.$fileObservables.push(this.timeslotService.updateServiceByServiceId(service.id, service));
                                }
                            })
                        }

                        if (this.timeslotService.deleteServiceList$.getValue().length > 0) {
                            const deleteServArray = this.timeslotService.deleteServiceList$.getValue();
                            deleteServArray.forEach(service => {
                                this.$fileObservables.push(this.timeslotService.deleteService(service.id));
                            })
                        }

                        //rental-booking
                        if (this.roomsArray.length > 0) {
                            this.roomsArray.forEach(room => {
                                if (room.state === 'add') {
                                    this.roomService.createRoom(this.currentResourceId, room).subscribe({
                                        next: (resp: { success: boolean, reason: string }) => {
                                            // console.log('adaugare camera pe edit resursa', resp);
                                            if (resp.success) {
                                                const imagArray = this.roomService.imagesArray$.getValue();
                                                console.log('array', imagArray);
                                                imagArray.forEach(imageObj => {
                                                    if (room.id === imageObj.id) {
                                                        console.log('imaginea cu id-ul ' + room.id + ' va avea astea', imageObj);
                                                        if (imageObj.featuredImage !== undefined) {
                                                            const thumbnailData = new FormData();
                                                            thumbnailData.append('file', imageObj.featuredImage);
                                                            console.log('thumb data', thumbnailData);

                                                            // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                            this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData).subscribe({
                                                                next: thumb => {
                                                                    console.log('thumbnail uploadat', thumb);
                                                                }
                                                            })
                                                        }

                                                        if (imageObj.gallery.length > 0) {
                                                            const imagesData = new FormData();
                                                            imageObj.gallery.forEach(galleryFile => {
                                                                if (galleryFile.state === 'upload') {
                                                                    imagesData.append('images', galleryFile.file);
                                                                }

                                                            });

                                                            // this.$fileObservables.push(this.roomService.uploadRoomGallery(resp.reason, imagesData));
                                                            this.roomService.uploadRoomGallery(resp.reason, imagesData).subscribe({
                                                                next: gallery => {
                                                                    console.log('galerie uploadata', gallery);
                                                                }, error: (error)=>{
                                                                    if(error.error.reason === 'fileSizeTooBig'){
                                                                        this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                    } else if(error.error.reason === 'wrongExtension'){
                                                                        this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                    }else{
                                                                        this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                                    }
                                                                }
                                                            })
                                                        }

                                                        this.roomService.imagesArray$.next([]);
                                                    }
                                                })
                                            }
                                        }
                                    })
                                } else if (room.state === 'update') {
                                    this.roomService.updateRoom(room.id, room).subscribe({
                                        next: (resp: { success: boolean, reason: string }) => {
                                            // console.log('editare camera pe edit resursa', resp);
                                            const imagArray = this.roomService.imagesArray$.getValue();
                                            console.log('array', imagArray);
                                            imagArray.forEach(imageObj => {
                                                if (room.id === imageObj.id) {
                                                    console.log('imaginea cu id-ul ' + room.id + ' va avea astea', imageObj);
                                                    if (imageObj.featuredImage !== undefined) {
                                                        const thumbnailData = new FormData();
                                                        thumbnailData.append('file', imageObj.featuredImage);
                                                        console.log('thumb data', thumbnailData);

                                                        // this.$fileObservables.push(this.roomService.uploadRoomThumbnail(room.id, thumbnailData));
                                                        this.roomService.uploadRoomThumbnail(room.id, thumbnailData).subscribe({
                                                            next: thumb => {
                                                                console.log('thumbnail uploadat', thumb);
                                                            }, error: (error)=>{
                                                                if(error.error.reason === 'fileSizeTooBig'){
                                                                    this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                } else if(error.error.reason === 'wrongExtension'){
                                                                    this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                }else{
                                                                    this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                                }
                                                            }
                                                        })
                                                    }

                                                    if (imageObj.gallery.length > 0) {
                                                        console.log('inainte de gall', imageObj.gallery);
                                                        const imagesData = new FormData();
                                                        imageObj.gallery.forEach(galleryFile => {
                                                            if (galleryFile.state === 'upload') {
                                                                imagesData.append('images', galleryFile.file);
                                                            }

                                                        });

                                                        // this.$fileObservables.push( this.roomService.uploadRoomGallery(room.id, imagesData));
                                                        this.roomService.uploadRoomGallery(room.id, imagesData).subscribe({
                                                            next: gallery => {
                                                                console.log('galerie uploadata', gallery);
                                                            }, error: (error)=>{
                                                                if(error.error.reason === 'fileSizeTooBig'){
                                                                    this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                                } else if(error.error.reason === 'wrongExtension'){
                                                                    this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                                }else{
                                                                    this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                                }
                                                            }
                                                        })
                                                    }

                                                    this.roomService.imagesArray$.next([]);
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }

                        if (this.roomService.deleteArray$.getValue().length > 0) {
                            const deleteRooms = this.roomService.deleteArray$.getValue();
                            deleteRooms.forEach(room => {
                                this.$fileObservables.push(this.roomService.deleteRoom(room.id));
                                // this.roomService.deleteRoom(room.id).subscribe({
                                //     next: (resp: { success: boolean, reason: string }) => {
                                //         console.log('stergere camera', resp);
                                //         if (resp.success) {
                                //             this.roomService.deleteArray$.next([]);
                                //         }
                                //     }
                                // })
                            })
                        }

                        // cultural booking
                        if (this.currentBookingType === 'culturalBooking' && this.culturalBookingService.culturalRoom$.getValue()) {
                            const modifiedCulturalRoom = this.culturalBookingService.culturalRoom$.getValue();
                            this.$fileObservables.push(this.culturalBookingService.updateCulturalRoom(modifiedCulturalRoom.id, modifiedCulturalRoom));
                        }

                        //menu-booking
                        if (this.timepickerService.timepickerId$.getValue()) {
                            const timepicker = {
                                timetables: this.timepickerService.getFreeEntry() ? [] : this.timepickerService.timePicker$.getValue().timetables,
                                bookingPolicies: this.timepickerService.bookingPolicies$.getValue(),
                                changePolicies: this.timepickerService.changePolicies$.getValue(),
                                ignoreAvailability: this.timepickerService.getFreeEntry()
                            }
                            console.log('TIMEPICKER AICI', timepicker);
                            this.$fileObservables.push(this.timepickerService.updateTimepicker(this.timepickerService.timepickerId$.getValue(), timepicker));
                            // this.timepickerService.updateTimepicker(this.timepickerService.timepickerId$.getValue(), timepicker).subscribe({
                            //     next: (resp: { success: boolean, reason: string }) => {
                            //         if(resp.success){
                            //             this.timepickerService.timepickerId$.next(undefined);
                            //             this.timepickerService.timepickerList$.next([]);
                            //         }
                            //     }
                            // })
                        }


                    }

                    if (this.$fileObservables.length > 0) {
                        forkJoin(...this.$fileObservables).subscribe((forkRes: any) => {
                            this.toastService.showToast('succes', 'Resursa a fost actualizată cu succes', 'success');
                            setTimeout(() => {
                                if (this.isProvider) {
                                    this.isSubmitLoading$.next(false);
                                    this.router.navigate(['/private/provider/resources/my-list'], {state: {submit: true}});
                                } else if (this.isStaff) {
                                    this.isSubmitLoading$.next(false);
                                    this.router.navigate(['/private/staff/resources/list'], {state: {submit: true}});
                                } else if (this.isAdmin) {
                                    this.isSubmitLoading$.next(false);
                                    this.router.navigate(['/private/admin/resources/list'], {state: {submit: true}});
                                }
                            }, 3000);
                        });
                    } else {
                        this.toastService.showToast('succes', 'Resursa a fost actualizată cu succes', 'success');
                        setTimeout(() => {
                            if (this.isProvider) {
                                this.isSubmitLoading$.next(false);
                                this.router.navigate(['/private/provider/resources/my-list'], {state: {submit: true}});
                            } else if (this.isStaff) {
                                this.isSubmitLoading$.next(false);
                                this.router.navigate(['/private/staff/resources/list'], {state: {submit: true}});
                            } else if (this.isAdmin) {
                                this.isSubmitLoading$.next(false);
                                this.router.navigate(['/private/admin/resources/list'], {state: {submit: true}});
                            }
                        }, 3000);
                    }


                }


            })

        } else {
            const providerId = this.createResourceService.providerData$.getValue()?.providerId ? this.createResourceService.providerData$.getValue().providerId : null;
            this.resourceService.addResource(formObject, providerId).subscribe({
                next: (data: any) => {
                    console.log(data)

                    if(this.resourceService.relatedResources$.getValue()?.length > 0){
                        this.$fileObservables.push(this.resourceService.addRelatedresources(data.reason, this.resourceService.relatedResources$.getValue()[0].id));
                    }

                    if (combineForms.value.thumbnail) {
                        const thumbnailData = new FormData();
                        thumbnailData.append('file', combineForms.value.thumbnail);
                        this.$fileObservables.push(this.resourceService.uploadResourceImage(data.reason, thumbnailData));
                    }

                    // const newImages = combineForms.value.images.filter(x => this.resourceService.resourceData.getValue().images.indexOf(x) === -1);
                    // console.log('Diferenta arrays', newImages);

                    console.log('IMAGE', combineForms.value.images?.length)

                    if (combineForms.value.images?.length > 0) {
                        const imagesData = new FormData();
                        combineForms.value.images.forEach(galleryFile => {
                            imagesData.append('files', galleryFile);
                        });
                        this.$fileObservables.push(this.resourceService.uploadDocAttachements(data.reason, 'image', imagesData));
                    }
                    if (combineForms.value?.videos?.length > 0) {
                        const videosData = new FormData();
                        combineForms.value.videos.forEach(galleryFile => {
                            videosData.append('files', galleryFile);
                        });
                        this.$fileObservables.push(this.resourceService.uploadDocAttachements(data.reason, 'video', videosData));
                    }

                    // if (this.timepickerService.timepickerList$.getValue().length > 0) {
                    //     const timepicker = {
                    //         timetables: this.timepickerService.timepickerList$.getValue()
                    //     }
                    //
                    //     this.$fileObservables.push( this.timepickerService.createTimepicker(data.reason, timepicker));
                    //
                    // }

                    // if(this.timepickerService.timePicker$.getValue()){
                    //     this.$fileObservables.push( this.timepickerService.createTimepicker(data.reason, this.timepickerService.timePicker$.getValue()));
                    // }

                    if (this.resourceService.resourceTemplateData$.getValue().bookingType === 'menu') {
                        const timepicker = {
                            timetables: this.timepickerService.getFreeEntry() ? [] : this.timepickerService.timePicker$.getValue().timetables,
                            bookingPolicies: this.timepickerService.bookingPolicies$.getValue(),
                            changePolicies: this.timepickerService.changePolicies$.getValue(),
                            ignoreAvailability: this.timepickerService.getFreeEntry()
                        }
                        this.$fileObservables.push(this.timepickerService.createTimepicker(data.reason, timepicker));
                        console.log('TIMEPICKER AICI', timepicker);
                    }


                    if (this.roomsArray.length > 0) {
                        this.roomsArray.forEach(room => {
                            this.roomService.createRoom(data.reason, room).subscribe({
                                next: (res: { success: boolean, reason: string }) => {
                                    if (res.success) {
                                        console.log('SE ADAUGA O CAMERA', res.success);

                                        const imagArray = this.roomService.imagesArray$.getValue();
                                        console.log('array', imagArray);
                                        imagArray.forEach(imageObj => {
                                            if (room.id === imageObj.id) {
                                                console.log('imaginea cu id-ul ' + room.id + ' va avea astea', imageObj);
                                                if (imageObj.featuredImage !== undefined) {
                                                    const thumbnailData = new FormData();
                                                    thumbnailData.append('file', imageObj.featuredImage);
                                                    console.log('thumb data', thumbnailData);

                                                    // this.$fileObservables.push(this.roomService.uploadRoomThumbnail(res.reason, thumbnailData));
                                                    this.roomService.uploadRoomThumbnail(res.reason, thumbnailData).subscribe({
                                                        next: thumb => {
                                                            console.log('thumbnail uploadat', thumb);
                                                        }, error: (error)=>{
                                                            if(error.error.reason === 'fileSizeTooBig'){
                                                                this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                            } else if(error.error.reason === 'wrongExtension'){
                                                                this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                            }else{
                                                                this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                            }
                                                        }
                                                    })
                                                }

                                                if (imageObj.gallery.length > 0) {
                                                    const imagesData = new FormData();
                                                    imageObj.gallery.forEach(galleryFile => {
                                                        imagesData.append('images', galleryFile);
                                                    });

                                                    // this.$fileObservables.push(this.roomService.uploadRoomGallery(res.reason, imagesData));
                                                    this.roomService.uploadRoomGallery(res.reason, imagesData).subscribe({
                                                        next: gallery => {
                                                            console.log('galerie uploadata', gallery);
                                                        }, error: (error)=>{
                                                            if(error.error.reason === 'fileSizeTooBig'){
                                                                this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                            } else if(error.error.reason === 'wrongExtension'){
                                                                this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                            }else{
                                                                this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                            }
                                                        }
                                                    })
                                                }


                                                this.roomService.imagesArray$.next([]);
                                            }
                                        })
                                    }
                                }
                            })
                        })


                    }

                    if (this.productService.productsList$.getValue().length > 0) {
                        console.log('exista in product list')
                        this.productService.productsList$.getValue().forEach(product => {
                            this.productService.createProduct(data.reason, product).subscribe({
                                next: (respAdd: { success: boolean, reason: string }) => {
                                    if (respAdd) {
                                        const imagArray = this.productService.imagesArray$.getValue();
                                        console.log('array', imagArray);
                                        imagArray.forEach(imageObj => {
                                            if (product.id === imageObj.id) {
                                                console.log('imaginea cu id-ul ' + product.id + ' va avea astea', imageObj);
                                                if (imageObj.imageFile !== undefined) {
                                                    const thumbnailData = new FormData();
                                                    thumbnailData.append('images', imageObj.imageFile);
                                                    console.log('thumb data', thumbnailData);

                                                    // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                    this.productService.uploadImageForProduct(respAdd.reason, thumbnailData).subscribe({
                                                        next: thumb => {
                                                            console.log('thumbnail uploadat', thumb);
                                                        },error: (error)=>{
                                                            if(error.error.reason === 'fileSizeTooBig'){
                                                                this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                            } else if(error.error.reason === 'wrongExtension'){
                                                                this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                            }else{
                                                                this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                            }
                                                        }


                                                    })
                                                }

                                                this.productService.imagesArray$.next([]);
                                            }
                                        })

                                        const attachArray = this.productService.attachmentArray$.getValue();
                                        attachArray.forEach(attach => {
                                            console.log('ATTACHMENT', attach)
                                            if (product.id === attach.id) {
                                                console.log('imaginea cu id-ul ' + product.id + ' va avea astea', attach);
                                                if (attach.attachmentFile !== undefined) {
                                                    const thumbnailData = new FormData();
                                                    thumbnailData.append('file', attach.attachmentFile);
                                                    console.log('thumb data', thumbnailData);

                                                    // this.$fileObservables.push( this.roomService.uploadRoomThumbnail(resp.reason, thumbnailData));
                                                    this.productService.uploadAttachmentForProduct(respAdd.reason, thumbnailData).subscribe({
                                                        next: thumb => {
                                                            console.log('attachment uploadat', thumb);
                                                        },error: (error)=>{
                                                            if(error.error.reason === 'fileSizeTooBig'){
                                                                this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                                                            } else if(error.error.reason === 'wrongExtension'){
                                                                this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");
                                                            }else{
                                                                this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                                                            }
                                                        }


                                                    })
                                                }

                                                this.productService.attachmentArray$.next([]);
                                            }
                                        })
                                    }
                                }
                            })

                        })
                    }


                    // Create tickets
                    this.ticketService.ticketListData().subscribe(
                        {
                            next: ticketList => {
                                if (ticketList.length > 0) {
                                    this.$fileObservables.push(this.ticketService.createTickets(data.reason, this.ticketService.ticketsList$.getValue()));

                                }
                            }
                        }
                    )

                    if (this.timeslotService.serviceList$.getValue().length > 0) {
                        this.timeslotService.serviceList$.getValue().forEach(service => {
                            this.$fileObservables.push(this.timeslotService.createService(data.reason, service));
                        })

                    }

                    // create cultural room
                    if (this.culturalBookingService.culturalRoom$.getValue()) {
                        const newCulturalRoom = this.culturalBookingService.culturalRoom$.getValue();
                        this.$fileObservables.push(this.culturalBookingService.createCulturalRoom(data.reason, newCulturalRoom));
                    }

                    if (this.menuService.menuList$.getValue().length > 0) {
                        this.$fileObservables.push(this.menuService.createMenu(data.reason, this.menuService.menuList$.getValue()));
                    }

                    if (this.$fileObservables.length > 0) {
                        forkJoin(...this.$fileObservables).subscribe((forkRes: any) => {
                            this.toastService.showToast('succes', 'Resursa a fost adăugată cu succes', 'success');
                            setTimeout(() => {
                                if (this.isProvider) {
                                    this.isSubmitLoading$.next(false);
                                    this.router.navigate(['/private/provider/resources/my-list'], {state: {submit: true}});
                                } else if (this.isStaff) {
                                    this.isSubmitLoading$.next(false);
                                    this.router.navigate(['/private/staff/resources/list'], {state: {submit: true}});
                                } else if (this.isAdmin) {
                                    this.isSubmitLoading$.next(false);
                                    this.router.navigate(['/private/admin/resources/list'], {state: {submit: true}});
                                }
                            }, 3000);

                        });
                    } else {
                        this.toastService.showToast('succes', 'Resursa a fost adăugată cu succes', 'success');
                        setTimeout(() => {
                            if (this.isProvider) {
                                this.isSubmitLoading$.next(false);
                                this.router.navigate(['/private/provider/resources/my-list'], {state: {submit: true}});
                            } else if (this.isStaff) {
                                this.isSubmitLoading$.next(false);
                                this.router.navigate(['/private/staff/resources/list'], {state: {submit: true}});
                            } else if (this.isAdmin) {
                                this.isSubmitLoading$.next(false);
                                this.router.navigate(['/private/admin/resources/list'], {state: {submit: true}});
                            }
                        }, 3000);
                    }


                },
                error: (error) => {
                    this.toastService.showToast('Eroare', 'A aparut o problema tehnica!', 'error');
                    this.isSubmitLoading$.next(false);
                    console.log(error)
                }
            })

        }
    }

    /** Go to previous step*/
    prevStep() {
        this.stepperService.prevStep()
    }

}
