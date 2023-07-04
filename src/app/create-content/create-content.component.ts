import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {
  @Output() createContentEvent = new EventEmitter<Content>();
  newContent: Content = {
    id: 0,
    title: '',
    description: '',
    creator: ''
  };
  errorMessage: string = '';

  createContent() {
    const promise = new Promise<Content>((resolve, reject) => {
      if (this.validateRequiredFields()) {
        resolve(this.newContent);
      } else {
        reject(new Error('All the fields are required.'));
      }
    });

    promise
      .then((createdContent: Content) => {
        console.log('Content addition successful:', createdContent.title);
        this.clearInputFields();
        this.clearErrorMessage();
        this.createContentEvent.emit(createdContent);
      })
      .catch((error: Error) => {
        console.error('Content addition failed:', error.message);
        this.displayErrorMessage(error.message);
      });
  }

  displayErrorMessage(message: string) {
    this.errorMessage = message;
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  validateRequiredFields(): boolean {
    return (
      this.newContent.title.trim().length > 0 &&
      this.newContent.description.trim().length > 0 &&
      this.newContent.creator.trim().length > 0
    );
  }

  clearInputFields() {
    this.newContent = {
      id: 0,
      title: '',
      description: '',
      creator: ''
    };
  }
}