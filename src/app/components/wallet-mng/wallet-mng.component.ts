import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-wallet-mng',
  imports: [CommonModule],
  templateUrl: './wallet-mng.component.html',
  styleUrl: './wallet-mng.component.css'
})
export class WalletMngComponent {

  isWalletFormVisible: boolean = false;

  // Toggle the visibility of the wallet creation form
  toggleWalletForm(): void {
    this.isWalletFormVisible = !this.isWalletFormVisible;
  }

  // Optional: Method to close the form (e.g., when clicking "Cancel")
  closeWalletForm(): void {
    this.isWalletFormVisible = false;
  }

  isWalletDetailsVisible: boolean = false;

  // Toggle the visibility of the wallet creation form
  toggleWalletDetails(): void {
    this.isWalletDetailsVisible = !this.isWalletDetailsVisible;
  }

  // Optional: Method to close the form (e.g., when clicking "Cancel")
  closeWalletDetails(): void {
    this.isWalletDetailsVisible = false;
  }

}