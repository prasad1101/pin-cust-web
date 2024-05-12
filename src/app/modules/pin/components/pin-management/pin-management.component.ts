import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FileItem, FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-pin-management',
  templateUrl: './pin-management.component.html',
  styleUrls: ['./pin-management.component.scss'],
})
export class PinManagementComponent implements OnInit {
  public pinRegistrationForm = new FormGroup({
    title: new FormControl(''),
    image: new FormControl(''),
    collaboratory: new FormControl(''),
    privacy: new FormControl(''),
  });
  public uploader: FileUploader = new FileUploader({
    itemAlias: 'file',
    url: '',
  });
  public hasBaseDropZoneOver: boolean = false;
  public fileData!: string;
  public imageUrl: string | null | undefined;
  public selectedCollaboratory!: string;

  public collaboratory = ['Prasad', 'Ankita'];

  public constructor(private fb: FormBuilder) {
    this.uploader.onAfterAddingFile = (fileItem: FileItem) => {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
        console.log('imageUrl', this.imageUrl); // This is the base64 string of the file
      };
      reader.readAsDataURL(fileItem._file);
    };
  }

  public ngOnInit(): void {
    this.pinRegistrationForm = this.fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      collaboratory: ['', Validators.required],
      privacy: ['', Validators.required],
    });
    if (localStorage.getItem('fileData') !== '') {
      this.imageUrl = localStorage.getItem('fileData');
      console.log('image url oninit', this.imageUrl);
    } else {
      this.imageUrl = undefined;
    }
  }

  public onSubmit(): void {
    console.log('submit', this.pinRegistrationForm);

    if (this.pinRegistrationForm.valid) {
      // Process registration logic here
      if (this.uploader.queue.length > 0) {
        const fileItem = this.uploader.queue[0]._file;
        console.log('this.uploader.queue', this.uploader);
        const reader = new FileReader();
        reader.onload = () => {
          const fileData = reader.result as string;
          localStorage.removeItem('fileData');
          localStorage.setItem('fileData', fileData);
          console.log('File saved to localStorage');
        };
        reader.readAsDataURL(fileItem);
      } else {
        console.log('No file selected');
      }

      console.log(this.pinRegistrationForm.value);
    } else {
      // Mark form fields as touched to display validation errors

      this.markFormGroupTouched(this.pinRegistrationForm);
    }
  }

  // Helper function to mark all form fields as touched markFormGroup Touched (formGroup: FormGroup) {
  public markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  fileOverBase(event: any): void {
    this.hasBaseDropZoneOver = event;
  }

  onFileSelected(event: any): void {
    console.log(event); // This is the file object
  }
}
