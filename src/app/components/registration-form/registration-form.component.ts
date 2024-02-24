import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ProxyService } from '../../services/proxy.service';
import { Client, ConversionRate, Gender, MotorType } from '../../model/model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent implements OnInit,OnDestroy{

  isSubmitted = false;

  minDate!: Date;
  startDate!: Date;
  conversionRate!:ConversionRate;

  firstFormGroup = this.formBuilder.group({
    fullName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required],
  });
  secondFormGroup = this.formBuilder.group({
    address: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
  });
  thirdFormGroup = this.formBuilder.group({
      hobbies: this.formBuilder.array([this.formBuilder.group({ hobby: ['', Validators.required] })]),
      favoriteColor: ['', Validators.required],
      seats: [2, Validators.required],
      motorType: ['', Validators.required]
  });

  registrationForm = this.formBuilder.group({
    firstFormGroup:this.firstFormGroup,
    secondFormGroup:this.secondFormGroup,
    thirdFormGroup:this.thirdFormGroup
  });

  constructor(private formBuilder: FormBuilder,private proxyService:ProxyService,private router: Router) { }

  ngOnInit(): void {
    const today = new Date();
    this.minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    this.startDate = this.minDate;
    this.conversionRate = this.proxyService.getFormConversionRate();

    this.router.events.subscribe(
      event => {
        if (!this.isSubmitted) {
          this.conversionRate.formViews++;
          this.proxyService.setFormConversionRate(this.conversionRate);
        }
      });
  }
  
  ngOnDestroy(): void {
    if (!this.isSubmitted) {
      this.conversionRate.formViews++;
      this.proxyService.setFormConversionRate(this.conversionRate);
    }
  }

  get fullName() { return this.firstFormGroup.get('fullName'); }
  get gender() { return this.firstFormGroup.get('gender'); }
  get email() { return this.firstFormGroup.get('email'); }
  get birthdate() { return this.firstFormGroup.get('birthdate'); }
  get address() { return this.secondFormGroup.get('address'); }
  get city() { return this.secondFormGroup.get('city'); }
  get country() { return this.secondFormGroup.get('country'); }
  get hobbies() { return this.thirdFormGroup.get('hobbies') as FormArray; }
  get favoriteColor() { return this.thirdFormGroup.get('favoriteColor'); }
  get seats() { return this.thirdFormGroup.get('seats'); }
  get motorType() { return this.thirdFormGroup.get('motorType'); }

  validateDate(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    if (selectedDate && selectedDate >= this.minDate) {
      // Reset to minimum date if the selected date is after the minimum date
      event.target.value = this.minDate;
      //@ts-ignore
      event.target._elementRef.nativeElement.value = '';
      this.birthdate?.setValue(null);
      alert('You must be at least 18 years old to register');
    }
  }
  
  addHobby() {
    this.hobbies.push(this.formBuilder.group({ hobby: ['', Validators.required] }));
  }

  removeHobby(index: number) {
    this.hobbies.removeAt(index);
  }

  onSubmit() {
    if (this.thirdFormGroup.valid && this.hobbies.length > 0) {
      this.proxyService.saveFormData(this.generateData());
      this.registrationForm.reset();
      this.isSubmitted = true;
      this.conversionRate.formSubmissions++;
      this.proxyService.setFormConversionRate(this.conversionRate);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }

  private generateData():Client {
    return {
      fullName: this.fullName?.value || '',
      gender: (this.gender?.value || '') as Gender, 
      email: this.email?.value || '',
      birthdate: this.birthdate?.value as unknown as Date || new Date(),
      address: this.address?.value || '',
      city: this.city?.value || '',
      country: this.country?.value || '',
      hobbies: this.hobbies?.value.map((item: any) => item.hobby) || [],
      favoriteColor: this.favoriteColor?.value ||  'black',
      seats: this.seats?.value as number || 2,
      motorType: ( this.motorType?.value || 'Fuel') as MotorType
    }
  }
}
