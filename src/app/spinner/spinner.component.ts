import { Component, ChangeDetectorRef, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerService } from './spinner.service';

@Component({
  standalone: true,
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  imports: [CommonModule]
})
export class SpinnerComponent implements OnInit {
  showSpinner = false;
  private spinnerService = inject(SpinnerService);
  private cdRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = status === 'start';
      this.cdRef.detectChanges();
    });
  }
}
