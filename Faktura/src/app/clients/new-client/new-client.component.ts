import { ClientModel } from './../models/client.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.scss']
})
export class NewClientComponent implements OnInit {
  newClient = new ClientModel();
// Form Control - jedna kontrolka jedno pole formularza
// FormArray - tablica elementow (jak nw ile bedzie elementow)
// FormGroup -

// Validator - wbudowane validatory
  nameFormControl =  new FormControl ('', Validators.minLength(1));
  nipFormControl =  new FormControl ();
  cityFormControl =  new FormControl ('', Validators.minLength(3));
  constructor() { }

  ngOnInit(): void {
  }
  // onFieldChange(e: any, field: string): void {
    // this.newClient[field] = e.target.value;

  // }
}
