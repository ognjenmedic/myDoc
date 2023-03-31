import { DOCTORS } from './../../../db-data';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ToggleComponentsService } from 'src/app/services/toggle-components.service';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css'],
})
export class DoctorCardComponent implements OnInit, OnDestroy {
  // @Output()
  // doctor!: Doctor;
  selectedDoctor!: Doctor;
  doctors: any;
  isHomePage: boolean;
  isDoctorCardPage: boolean;
  constructor(
    public toggleComponent: ToggleComponentsService,
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {
    this.isHomePage = false;
    this.isDoctorCardPage = true;
    this.doctors = DOCTORS;
  }

  ngOnInit(): void {
    this.toggleComponent.hideHeader();
    this.toggleComponent.hideSpecialties();
    this.toggleComponent.showNavbar();
    this.isHomePage = this.route.snapshot.routeConfig?.path === '';
    this.isDoctorCardPage =
      this.route.snapshot.routeConfig?.path === 'doctor-card';
  }

  ngOnDestroy(): void {
    this.toggleComponent.hideHeader();
    this.toggleComponent.hideSpecialties();
    this.toggleComponent.hideNavbar();
  }

  onClickDoctor(clickedDoctor: Doctor) {
    this.doctorService.setDoctor(clickedDoctor);
  }

  onClickToConsult(doctor: Doctor) {
    this.doctorService.setDoctor(doctor);
    console.log(doctor);
  }
}
