import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.modal';
import { EMPTY_STRING } from '../../constants/common.const';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  user!: User;

  constructor() {}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.user = {
      firstName: EMPTY_STRING,
      lastName: EMPTY_STRING,
      email: EMPTY_STRING,
      phone: null,
      gender: null,
      age: null,
      address: {
        street: EMPTY_STRING,
        city: EMPTY_STRING,
        state: EMPTY_STRING,
        zip: EMPTY_STRING,
        country: EMPTY_STRING,
      },
    };
  }

  onSubmit() {
    console.log(this.user);
  }
}
