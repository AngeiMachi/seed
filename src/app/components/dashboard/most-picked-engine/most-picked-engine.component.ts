import { Component, Input, OnInit } from '@angular/core';
import { Client, Gender } from '../../../model/model';

@Component({
  selector: 'app-most-picked-engine',
  templateUrl: './most-picked-engine.component.html',
  styleUrl: './most-picked-engine.component.scss'
})
export class MostPickedEngineComponent implements OnInit {
  @Input({required:true}) clients!:Client[];

  genders = Object.values(Gender);
  EngineTypeCount: { name: string, value: number }[] = [];

  engineTypeMap: Map<string, number> = new Map();

  view: [number, number] = [300, 300];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  xAxisLabel = 'Engine Type';
  yAxisLabel = 'Count';
  showYAxisLabel = true;

  colorScheme = {
    domain: [
      'green',
      'black',
    ]
  };
  
  ngOnInit(): void {
    this.groupMostPickedEngineByGender();
    this.calculateEngineCount(this.genders[0]);
  }
  onSelectGender(event: any) {

    const gender = event.target.value as Gender;
    this.calculateEngineCount(gender);
    console.log(event);
  }
  groupMostPickedEngineByGender(){ 
   this.engineTypeMap.clear();

    this.clients.forEach(client => {
        const key = `${client.gender.toLowerCase()}-${client.motorType.toLowerCase()}`;
        const count = this.engineTypeMap.get(key) || 0;
        this.engineTypeMap.set(key, count + 1);
    });

    return this.engineTypeMap;
  }

  calculateEngineCount(gender:Gender) {
      this.EngineTypeCount = Array.from(this.engineTypeMap).filter(([item]) => item.toLowerCase().startsWith(gender.toLowerCase()))
      .map(([name, value]) => ({
        name: name.split('-')[1].toUpperCase(),
        value
    }));
  }
}
