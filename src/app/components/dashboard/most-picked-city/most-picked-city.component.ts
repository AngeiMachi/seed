import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../model/model';

@Component({
  selector: 'app-most-picked-city',
  templateUrl: './most-picked-city.component.html',
  styleUrl: './most-picked-city.component.scss'
})
export class MostPickedCityComponent implements OnInit{
  @Input({required:true}) clients!:Client[];
  mostPickedCity= '';

  ngOnInit(): void {
    this.calculateMostPickedCity(this.clients);
  }
  calculateMostPickedCity(clients: Client[]) {
    const cityMap: Map<string, number> = new Map();

    // Count occurrences of each city
    clients.forEach(client => {
        const city =  `${client.city},${client.country}.`.toLocaleLowerCase() || 'unknown';
        const count = cityMap.get(city) || 0;
        cityMap.set(city, count + 1);
    });

    const city = Array.from(cityMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 1)
        .map(([name, value]) => ({ name, value }));   
    this.mostPickedCity = city[0].name;   
  } 
}
