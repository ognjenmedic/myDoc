import { Doctor } from './../models/doctor';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  public doctor: BehaviorSubject<Doctor> | any;

  constructor() {
    this.doctor = new BehaviorSubject(null);
  }

  // setDoctor(clickedDoctor: Doctor) {
  //   this.doctor = clickedDoctor;
  // }
  setDoctor(clickedDoctor: Doctor) {
    this.doctor.next(clickedDoctor);
  }

  // getDoctor() {
  //   return this.doctor;
  // }
  getDoctor(): Observable<Doctor> {
    return this.doctor.asObservable();
  }
}
