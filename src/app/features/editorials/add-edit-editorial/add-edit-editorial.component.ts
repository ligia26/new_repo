import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {EditorialsService} from '../_services/editorials.service';
import {DatePipe} from '@angular/common';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatLegacyChipInputEvent as MatChipInputEvent} from '@angular/material/legacy-chips';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
import {ToastService} from 'src/app/shared/_services/toast.service';
import {Domains} from 'src/app/shared/_domains';
import {Resource} from "../../../shared/_models/resource.model";
import {User} from "../../../shared/_models/user.model";
import {EditorialCategoryModel} from "../_models/editorialCategories.model";
import {Editorial} from "../../../shared/_models/editorial.model";

@Component({
    selector: 'app-add-edit-editorial',
    templateUrl: './add-edit-editorial.component.html',
    styleUrls: ['./add-edit-editorial.component.scss'],
    providers: [NgbModal, NgbActiveModal, DatePipe, Domains]
})
export class AddEditEditorialComponent implements OnInit {

    //acorderon state
    panelOpenPublish = true;
    panelOpenSEO = true;
    panelOpenImage = true;


    //form
    addEditorialForm: FormGroup;
    formIsLoaded = false;

    //img
    imgMessage: string;
    imagePath: string;
    urlfeaturedImg: string | ArrayBuffer = '/assets/images/others/Showcase.jpg';
    uploadedImageEvent: Blob
    nameFeaturedImg: Blob;
    selectedFile = Blob;

    //tags chips
    addedTags: Array<string> = [];

    // id/slug/data editorial
    editorialId = '';
    editorialSlug = '';
    editEditorialData: Editorial;
    editorialStatus = '';
    slugSuggestion = '';

    isEditMode: boolean;    

    isAdmin:boolean;
    isStaff:boolean;

    //domains of activity
    domains: Array<object> = this.domainsList.domainsList;

    //categories & subcategories
    categories: Array<EditorialCategoryModel>;
    subcategories: Array<object>;


    constructor(private editorialForm: FormBuilder,
                private editorialsService: EditorialsService,
                private translate: TranslateService,
                private route: ActivatedRoute,
                private toastService: ToastService,
                private router: Router,
                private datepipe: DatePipe,
                private cdr: ChangeDetectorRef,
                private domainsList: Domains) {
    }

    ngOnInit(): void {
        this.getCurrentUser();
        this.initForm();
        this.getPathSlug();
        this.getEditorialCategories();
    }

    initForm() {
        //Form
        this.addEditorialForm = this.editorialForm.group({
            title: ['', Validators.required],
            category: ['', Validators.required],
            subcategory: ['', Validators.required],
            shortDescription: [''],
            metaDescription: [''],
            metaTitle: ['', Validators.required],
            tags: [['']],
            content: [''],
            featuredImage: [''],
            slug: ['', Validators.required],
            status: ['Draft'],
            authors: [['']],
            date: ['']
        });


        this.formIsLoaded = true;
        this.addEditorialForm.get('date').disable();
    }

    getEditorialCategories(){
        this.editorialsService.getEditorialCategories().subscribe((categories:Array<EditorialCategoryModel>)=>{
            this.categories= categories;
            if(this.isEditMode){
                const findCateg = categories.find(categ => categ.name === this.editEditorialData.category);
                console.log('if i find categ', findCateg);
                if(findCateg){
                    this.addEditorialForm.get('category').patchValue(findCateg.id);
                    this.getSubcategory(findCateg.id);
                }
            }
        })
    }

    onCategoryChange(event){
        console.log(event);
      this.getSubcategory(event.value);
    }

    getSubcategory(categoryId: string){
        this.editorialsService.getEditorialSubcategoriesByCategoryId(categoryId).subscribe((subcategories: Array<object>)=>{
            this.subcategories = subcategories;
            console.log(this.subcategories);
        })
    }

//wyziwyg
    htmlContent: string;
    editorConfig: AngularEditorConfig = {
        editable: true,
        height: '300',
        minHeight: '200px',
        maxHeight: 'auto',
        width: 'auto',
        minWidth: '0',
        enableToolbar: true,
        showToolbar: true,
        defaultParagraphSeparator: 'p',
        defaultFontName: 'Roboto',
        defaultFontSize: '',
        fonts: [
            {class: 'arial', name: 'Arial'},
            {class: 'times-new-roman', name: 'Times New Roman'},
        ],
        customClasses: [
            {
                name: 'Title',
                class: 'format-title'
            },
            {
                name: 'Paragraph',
                class: 'format-paragraph'
            }

        ],
        sanitize: true,
        toolbarPosition: 'top',
        toolbarHiddenButtons: [
            ['subscript'],
            ['superscript'],
            ['backgroundColor']
        ]
    };

    //get the editorial slug from url
    getPathSlug() {
        this.route.params.subscribe(params => {
            this.editorialSlug = params['slug'];
            console.log('SLUG',this.editorialSlug);
            //get editorial by slug
            if (this.editorialSlug !== undefined) {
                this.isEditMode = true;
                this.getEditorialBySlug(this.editorialSlug);
                // this.addEditorialForm.get('slug').disable();
            }else{
                console.log('NU AM SLUG');
            }
        });
    }

    //add tags
    addOnBlur = true;
    readonly separatorKeysCodes = [ENTER, COMMA] as const;

    addTag(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        // Add our tag
        if (value) {
            this.addedTags.push(value);
        }

        // Clear the input value
        event.chipInput.clear();
    }

    //remove tag
    remove(tag: string): void {
        const index = this.addedTags.indexOf(tag);

        if (index >= 0) {
            this.addedTags.splice(index, 1);
        }
    }

    //create editorial
    addEditorial() {

        const editorialObj = {
            title: this.addEditorialForm.value.title,
            category: this.addEditorialForm.value.category,
            subcategory: this.addEditorialForm.value.subcategory,
            shortDescription: this.addEditorialForm.value.shortDescription,
            metaDescription: this.addEditorialForm.value.metaDescription,
            metaTitle: this.addEditorialForm.value.metaTitle,
            tags: this.addedTags,
            content: this.addEditorialForm.value.content,
            featuredImage: {fileName: this.nameFeaturedImg, filePath: this.urlfeaturedImg},
            slug: this.addEditorialForm.value.slug,
            status: this.addEditorialForm.value.status,
            authors: [''],
            // publishedDate: this.datepipe.transform(this.addEditorialForm.value.publishedDate, 'yyyy-MM-dd')
            publishedDate:''
        };

        console.log(editorialObj);
        //add new editorial
        this.editorialsService.addEditorial(editorialObj).subscribe((data: { reason: string, success: boolean }) => {

            //upload image by the new id "data.reason"
            this.editorialsService.uploadEditorialImage(data.reason, this.uploadedImageEvent).subscribe();

            //show message
            this.toastService.showToast("Succes", "Editorialul a fost adăugat!", "success");
            //navigate to list
            if(this.isAdmin){
                this.router.navigate(['/private/admin/editorials/list']);

            }else if(this.isStaff){
                this.router.navigate(['/private/staff/editorials/list']);
            }else{
                return;
            }
        }, (error) => {
            console.log("Eroare:");
            console.log(error.error.reason);
            this.toastService.showToast("Eroare", "A apărut o problemă!", "error");

            // Show specific error feedback message
            if (error.error.reason === 'youAreNotLoggedIn') {
                this.toastService.showToast("Eroare", "Nu sunteti logat!", "error");
            }


        });

    }


    //publish editorial
    publishEditorial() {
        const editorialObj = {
            title: this.addEditorialForm.value.title,
            category: this.addEditorialForm.value.category,
            subcategory: this.addEditorialForm.value.subcategory,
            shortDescription: this.addEditorialForm.value.shortDescription,
            metaDescription: this.addEditorialForm.value.metaDescription,
            metaTitle: this.addEditorialForm.value.metaTitle,
            tags: this.addedTags,
            content: this.addEditorialForm.value.content,
            featuredImage: {fileName: this.nameFeaturedImg, filePath: this.urlfeaturedImg},
            slug: this.addEditorialForm.value.slug,
            status: 'Active',
            authors: [''],
            publishedDate: this.datepipe.transform(this.addEditorialForm.value.publishedDate, 'yyyy-MM-dd'),
        };

        //add new editorial
        this.editorialsService.addEditorial(editorialObj).subscribe((data: { reason: string, success: boolean }) => {

            //upload image by the new id "data.reason"
            this.editorialsService.uploadEditorialImage(data.reason, this.uploadedImageEvent)
            .subscribe((dataAdd) => {
                    console.log(dataAdd);
                }
            ), (error)=>{
                console.log(error);
            };

            //show message
            this.toastService.showToast("Succes", "Editorialul a fost publicat cu succes!", "success");
            //navigate to list
            this.router.navigate(['/dashboard/editorials/list']);

        }, (error) => {
            console.log(error.error.name);
            this.toastService.showToast("Eroare", "A apărut o problemă!", "error");


        });

    }

    getCurrentUser() {
        this.editorialsService.getCurrentUser().subscribe((currentUser: User) => {
            if (currentUser === null) {
                this.toastService.showToast("Eroare", "Nu sunteti logat!", "error");
            }
            if(currentUser.roles.includes('ROLE_SUPER_ADMIN')){
                this.isAdmin=true;
                this.isStaff=false;
            }else if(currentUser.roles.includes('ROLE_STAFF')){
                this.isAdmin=false;
                this.isStaff=true;
            }else{
                return;
            }
        });
    }


    getEditorialBySlug(slug: string) {
        this.editorialsService.getEditorialBySlug(slug).subscribe((editorial2Edit: Editorial) => {
            //console.log('Editorial', editorial2Edit)
            this.editEditorialData = editorial2Edit;
            this.editorialId = editorial2Edit.id;
            this.addEditorialForm.patchValue(editorial2Edit);
            console.log('CATEGORIE EDITORIAL', editorial2Edit.category);
            // this.getSubcategory(editorial2Edit.category);
            this.addedTags = editorial2Edit.tags;
            this.urlfeaturedImg = editorial2Edit.featuredImage?.filePath === '' ? this.urlfeaturedImg : editorial2Edit.featuredImage?.filePath;
        });
    }

    updateEditorial() {
        const editorialObj = {
            ...this.addEditorialForm.getRawValue(),
            title: this.addEditorialForm.value.title,
            category: this.addEditorialForm.value.category,
            subcategory: this.addEditorialForm.value.subcategory,
            shortDescription: this.addEditorialForm.value.shortDescription,
            metaDescription: this.addEditorialForm.value.metaDescription,
            metaTitle: this.addEditorialForm.value.metaTitle,
            tags: this.addedTags,
            content: this.addEditorialForm.value.content,
            slug: this.addEditorialForm.value.slug,
            status: this.addEditorialForm.value.status,
            authors: [''],
            featuredImage: {fileName: this.nameFeaturedImg, filePath: this.urlfeaturedImg},
            publishedDate: this.datepipe.transform(this.addEditorialForm.value.publishedDate, 'yyyy-MM-dd'),
        }

        // Update document
        this.editEditorial(this.editorialId, editorialObj);
        //  console.log(this.editorialId);
        //  console.log(editorialObj);
    }

    //create slug suggestion
    createSlug(title: string) {
        const insertedTitle = title.toLocaleLowerCase();
        this.slugSuggestion = insertedTitle.split(' ').join('-');
        console.log(this.slugSuggestion);
        this.addEditorialForm.get("slug").patchValue(this.slugSuggestion);
        this.cdr.detectChanges();
    }

    //update editorial
    editEditorial(id: string, editorialObj: Resource) {
        this.editorialsService.updateEditorial(id, editorialObj).subscribe(() => {
            //show message
            this.toastService.showToast("Succes", "Editorialul a fost modificat cu succes!", "success");
            this.cdr.detectChanges();
            // this.router.navigate(['/dashboard/editorials/list'])
        }, error => {
            console.log(error);
            this.toastService.showToast("Eroare", "A apărut o problemă!", "error");
        });
    }

    //change featured image
    onImgChanged($event: any) {
        const files = $event.target.files;
        if (files.length === 0)
            return;
        const maxSize = 2 * 1024 * 1024;
        //read the image
        const reader = new FileReader();
        this.imagePath = files;

        //get image
        if ($event.target.files[0].size < maxSize) {
            this.uploadedImageEvent = $event.target.files[0];
        }else{
            this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
            return;
        }

        //if update editorial
        if (this.editorialSlug) {
            this.editorialsService.uploadEditorialImage(this.editorialId, $event.target.files[0])
            .subscribe(() => {
                // console.log(data);
                reader.readAsDataURL(files[0]);
                this.nameFeaturedImg = files[0].name;
                reader.onload = () => {
                    //new image link
                    this.urlfeaturedImg = reader.result;
                    this.cdr.detectChanges();
                }
            }), (error) => {
                console.log(error);
                if(error.error.reason === 'fileSizeTooBig'){
                    this.toastService.showToast("Eroare", "Fisierul incărcat este prea mare! Încărcați o imagine mai mica de 2 MB!", "error");
                } else if(error.error.reason === 'wrongExtension'){
                    this.toastService.showToast("Eroare", "Formatul fisierului nu este permis!", "error");

                }else{
                    this.toastService.showToast("Eroare", "A aparut o problemă la încărcarea imaginii!", "error");
                }

            };
        }
        //if add new wditorial
        else {
            reader.readAsDataURL(files[0]);
            this.nameFeaturedImg = files[0].name;
            reader.onload = () => {
                //new image link
                this.urlfeaturedImg = reader.result;
                this.cdr.detectChanges();
            }
        }
    }

    // clearTitle(){
    //   this.addEditorialForm.get("title").patchValue('');
    // }
    // clearMetaTitle(){
    //   this.addEditorialForm.get("metaTitle").patchValue('');
    // }
    // clearMetaDescription(){
    //   this.addEditorialForm.get("metaDescription").patchValue('');
    // }
    // clearSlug(){
    //   this.addEditorialForm.get("slug").patchValue('');
    // }

    clearFormControlAddEditorial(formControl) {
        this.addEditorialForm.get(formControl).patchValue(null);
    }


    // Create / Edit
    saveHandler() {
        // Check if the form is valid
        if (this.addEditorialForm.valid) {
            // Check if you have a user ID
            if (this.editorialSlug !== undefined) {
                // Edit user
                console.log("EDIT", this.editorialSlug);
                this.updateEditorial();
            } else {
                // Create user
                console.log("ADD", this.editorialSlug);
                console.log(this.addEditorialForm.value)
                this.addEditorial();
            }
        } else {
            // Mark all inputs as touched
            this.addEditorialForm.markAllAsTouched();
        }
    }


}
