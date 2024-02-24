import { Component } from '@angular/core';
import { ProxyService } from '../../services/proxy.service';
import { Client, ConversionRate } from '../../model/model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  data:Client[]=[]
  conversionRate!:ConversionRate;
  conversionRatePercentage!:number;
  constructor(private proxyService:ProxyService) { 
    this.data = this.proxyService.getAllClients() as Client[];
    this.conversionRate = this.proxyService.getFormConversionRate();
    this.conversionRatePercentage = +this.calculateConversionRate(this.conversionRate).toFixed(2);
  }
  private calculateConversionRate(conversionRate: ConversionRate): number {
    return (conversionRate.formSubmissions / conversionRate.formViews) * 100;
  }

}
