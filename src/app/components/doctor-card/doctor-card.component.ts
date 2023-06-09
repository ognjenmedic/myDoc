import { DOCTORS } from './../../../db-data';
import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { ToggleComponentsService } from 'src/app/services/toggle-components.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css'],
})
export class DoctorCardComponent implements OnInit, OnDestroy {
  // @Output()
  // doctor!: Doctor;
  selectedDoctor!: Doctor;
  doctors: Doctor[];

  constructor(
    public toggleComponent: ToggleComponentsService,
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    public specialtyService: SpecialtyService,
    public router: Router
  ) {
    this.doctors = DOCTORS;
  }

  ngOnInit(): void {
    this.toggleComponent.hideHeader();
    this.toggleComponent.hideSpecialties();
    this.toggleComponent.showNavbar();

    const specialty = this.route.snapshot.paramMap.get('specialty');
    if (specialty) {
      this.specialtyService.updateSelectedSpecialty(specialty);
    }
  }

  ngOnDestroy(): void {
    this.toggleComponent.hideHeader();
    this.toggleComponent.hideSpecialties();
    this.toggleComponent.hideNavbar();
  }

  onClickDoctor(clickedDoctor: Doctor) {
    this.doctorService.setDoctor(clickedDoctor);
    this.router.navigate(['know-more', clickedDoctor.id]);
  }

  onClickToConsult(doctor: Doctor) {
    this.doctorService.setDoctor(doctor);
  }
}
