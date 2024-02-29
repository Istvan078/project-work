import { Component, Input, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-files-modal',
  templateUrl: './files-modal.component.html',
  styleUrls: ['./files-modal.component.scss'],
})
export class FilesModalComponent {
  activeModal = inject(NgbActiveModal);
  @Input() img: string = '';
  @Input() uploadTrue: boolean = false;
  @Input() viewIndex: number = 0;
  @Input() picturesArr: any[] = [];
  fadeIn: boolean = false;
  // @Output() passViewIndex: EventEmitter<any> = new EventEmitter()

  left() {
    console.log('bal');
    if (this.viewIndex > 0) {
      this.viewIndex = this.viewIndex - 1;
      this.fadeIn = true;
      setTimeout(() => {
        this.fadeIn = false;
      }, 1000);
    }
  }

  right() {
    if (this.viewIndex < this.picturesArr.length - 1) {
      this.viewIndex = this.viewIndex + 1;
      this.fadeIn = true;
      setTimeout(() => {
        this.fadeIn = false;
      }, 1000);
    }
  }
}
