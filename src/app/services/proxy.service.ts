import { Inject, Injectable } from '@angular/core';
import { Client, ConversionRate } from '../model/model'; // Import the 'Client' type from the appropriate module
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root' // This specifies that Angular should provide this service at the root level
})
export class ProxyService {

  constructor() {

  }

  saveFormData( formData: Client) {
    const formId =  'form_' + uuidv4(); 
    localStorage.setItem(formId,JSON.stringify(formData));
  }

  getAllClients(): Client[] {
    const clientList: { [key: string]: any }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      // Check if the key corresponds to a form ID
      if (key.startsWith('form_')) {
        const formDataJson = localStorage.getItem(key) as string;
        const formData = JSON.parse(formDataJson);
        clientList.push({ formId: key, data: formData });
      }
    }
    return clientList.map((client) => client['data']);
  }


  clearAllFormData() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string;
      // Check if the key corresponds to a form ID
      if (key.startsWith('form_')) {
        localStorage.removeItem(key);
      }
    }
  }

 getFormConversionRate(): ConversionRate {
    const conversionRate = localStorage.getItem('formConversionRate');
    return conversionRate ? JSON.parse(conversionRate) : {formViews:0,formSubmissions:0};
 }
 setFormConversionRate(conversionRate: ConversionRate) {
    localStorage.setItem('formConversionRate', JSON.stringify(conversionRate));
 }




}
