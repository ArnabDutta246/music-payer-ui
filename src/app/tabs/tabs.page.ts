import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs:IonTabs;
  selected:string = '';
  progress:number = 57;
  constructor() {}

  selectedTabs(){
    this.selected = this.tabs.getSelected()
  }

}
