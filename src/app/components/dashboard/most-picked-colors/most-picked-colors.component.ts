import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../model/model';

@Component({
  selector: 'app-most-picked-colors',
  templateUrl: './most-picked-colors.component.html',
  styleUrl: './most-picked-colors.component.scss'
})


export class MostPickedColorsComponent implements OnInit{

  @Input({required:true}) clients!:Client[];

  clientByAge: Map<number, Client[]> = new Map();
  ages: number[] = [];

  view: [number, number] = [300, 300];
  showLegend = false;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Color';
  yAxisLabel = 'Count';
  showYAxisLabel = true;
  


  colorScheme = {
    domain: [
    ]
  };
  colorScemeSet= new Set<string>();


  data:any[] = [];
  colorCounts: { name: string, value: number }[] = [];


  ngOnInit(): void {
    this.groupPeopleByAge();
    this.ages = Array.from(this.clientByAge.keys());
    if (this.ages.length > 0) {
      this.calculateColorCounts(this.ages[0]);
    }

  }
  
  private groupPeopleByAge(): void {
    const currentDate = new Date(); 

    this.clients.forEach(client => {
      const birthDate = new Date(client.birthdate);
      const age = currentDate.getFullYear() - birthDate.getFullYear(); 
      const monthDiff = currentDate.getMonth() - birthDate.getMonth();

      const calculatedAge = (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) ? age - 1 : age;

      const peopleWithSameAge = this.clientByAge.get(calculatedAge) || []; 
      peopleWithSameAge.push(client);
      this.clientByAge.set(calculatedAge, peopleWithSameAge); 
    });
    
  }

  private calculateColorCounts(age:number): void {
    const colorCountsMap = new Map<string, number>();
    this.colorScemeSet.clear();
    this.clientByAge.get(age)?.forEach(client => {
      const color = client.favoriteColor;
      colorCountsMap.set(color, (colorCountsMap.get(color) || 0) + 1);
    });

    this.colorCounts = Array.from(colorCountsMap.entries()).map(([color, count]) => 
     { 
      this.colorScemeSet.add(color);
      return {
        name: color,
        value: count
      }
    });

    this.colorScheme.domain = Array.from(this.colorScemeSet) as never[];
  }

  onSelectAge(age: string) {
    this.calculateColorCounts(+age);
  }

}
  


