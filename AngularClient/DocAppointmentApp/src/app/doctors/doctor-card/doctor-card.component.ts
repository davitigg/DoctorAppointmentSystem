import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DoctorDto } from 'src/app/_interfaces/user/doctorDto';

@Component({
  selector: 'app-doctor-card',
  templateUrl: './doctor-card.component.html',
  styleUrls: ['./doctor-card.component.css'],
})
export class DoctorCardComponent {
  @Input() doctor!: any;
  @Output() togglePin: EventEmitter<any> = new EventEmitter();
}
