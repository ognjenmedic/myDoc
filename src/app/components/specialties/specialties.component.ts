import { Component, OnInit } from '@angular/core';
import { ToggleComponentsService } from 'src/app/services/toggle-components.service';
import { SPECIALTIES } from 'src/db-data';

@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.css'],
})
export class SpecialtiesComponent implements OnInit {
  specialties = SPECIALTIES;
  constructor(public toggleComponent: ToggleComponentsService) {}

  ngOnInit(): void {}
}
