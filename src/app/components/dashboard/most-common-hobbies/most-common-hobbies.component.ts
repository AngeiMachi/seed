import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../../../model/model';

@Component({
  selector: 'app-most-common-hobbies',
  templateUrl: './most-common-hobbies.component.html',
  styleUrl: './most-common-hobbies.component.scss'
})
export class MostCommonHobbiesComponent implements OnInit{
  
  @Input({required:true}) clients!:Client[];
  
  topHobbies: { name: string, value: number }[] = [];

  view: [number, number] = [300, 300];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Hobby';
  yAxisLabel = 'Count';
  showYAxisLabel = true;

  colorScheme = {
    domain: [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
    ]
  };

  ngOnInit(): void {
    this.calculateMostCommonHobbies(this.clients);
  }
  calculateMostCommonHobbies(clients: Client[]) {
    const hobbyMap: Map<string, number> = new Map();

    // Count occurrences of each hobby
    clients.forEach(client => {
        client.hobbies.forEach(hobby => {
            const lowerCaseHobby = hobby?.toLowerCase() || 'unknown';
            const count = hobbyMap.get(lowerCaseHobby) || 0;
            hobbyMap.set(lowerCaseHobby, count + 1);
        });
    });

    const mostCommonHobies = Array.from(hobbyMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5); // Take the top 5

    this.topHobbies = mostCommonHobies.map(([name, value]) => ({ name, value }));
}

}
