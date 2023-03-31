import { Component, Input, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css'],
})
export class DoctorDetailsComponent implements OnInit {
  linkText: string;
  doctor!: Doctor;
  @Output()
  moreInfoClicked = new EventEmitter<void>();

  showMoreInfo: boolean;

  // howItWorksEnabled = true;

  constructor(private doctorService: DoctorService) {
    this.showMoreInfo = false;
    this.linkText = 'Know More';
  }

  ngOnInit(): void {
    this.doctorService.getDoctor().subscribe((doctor) => {
      this.doctor = doctor;
    });
  }
  // enabledHowItWorks() {
  //   this.howItWorksEnabled = false;
  // }

  onMoreInfoClicked() {
    this.moreInfoClicked.emit();
    // this.showMoreInfo = !this.showMoreInfo;
    this.linkText === 'Know More'
      ? (this.linkText = 'How It Works')
      : (this.linkText = 'Know More');
  }
}
