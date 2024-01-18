import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../../../shared/_models/user.model";
import {OwlOptions} from "ngx-owl-carousel-o";
import {Editorial} from "../../../../shared/_models/editorial.model";
import { Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/shared/_models/category.model';
import { ResourcesService } from 'src/app/shared/_services/resources.service';
import { EditorialsService } from 'src/app/features/editorials/_services/editorials.service';
import { EditorialCategoryModel } from 'src/app/features/editorials/_models/editorialCategories.model';

@Component({
  selector: 'app-editorials-carousel',
  templateUrl: './editorials-carousel.component.html',
  styleUrls: ['./editorials-carousel.component.scss']
})
export class EditorialsCarouselComponent {
  @Input() currentUser: User;
  @Input() editorialsList: Editorial[];

  @Output() editorialTypeEvent = new EventEmitter<string>();

  isDragging: any;

  private ngUnsubscribe = new Subject<void>();

  categoryList: EditorialCategoryModel[] =[];

  constructor(    
    private editorialsService:EditorialsService
    ){}

  // carousel config
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplay: true,
    dots: false,
    navSpeed: 700,
    center: false,
    margin: 24,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 3
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  }

  ngOnInit(): void {
    this.getEditorialCategories();
    console.log('merge');
  }

  getEditorialCategories(){
    this.editorialsService.getEditorialCategories()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe({
      next: (categories:Array<EditorialCategoryModel>)=>{
        this.categoryList= categories;
    }
  })
}

  sendCategoryType(value: string) {
    this.editorialTypeEvent.emit(value);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}