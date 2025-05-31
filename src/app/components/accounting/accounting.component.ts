import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accounting',
  imports: [CommonModule],
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.css'
})
export class AccountingComponent {

  isNewSchemaVisible: boolean = false;

  // Toggle the visibility of the wallet creation form
  toggleSchemaForm(): void {
    console.log(this.isNewSchemaVisible)
    this.isNewSchemaVisible = true;
  }
  // Optional: Method to close the form (e.g., when clicking "Cancel")
  closeSchemaForm(): void {
    console.log(this.isNewSchemaVisible)
    this.isNewSchemaVisible = false;
  }

  showTab(tabId: string): void {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Reset all buttons and contents
    /* tabButtons.forEach(btn => {
      btn.classList.remove('active', 'text-primary', 'font-medium');
      btn.classList.add('text-gray-500');
    }); */

    tabContents.forEach(content => content.classList.add('hidden'));

    // Activate the clicked button and show its tab content
   /*  const activeButton = document.getElementById(tabId);
    activeButton?.classList.add('active', 'text-primary', 'font-medium');
    activeButton?.classList.remove('text-gray-500'); */

    const activeContent = document.getElementById(`tab-${tabId}`);
    activeContent?.classList.remove('hidden');
  }



}
