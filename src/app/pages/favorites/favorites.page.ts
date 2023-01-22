import {Component, OnChanges, OnInit} from '@angular/core';
import { NewsService } from "../../services/news.service";
import { DataService } from "../../services/data.service";


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit{
  listData: any[] = [];
  constructor(private newsService: NewsService, private dataService: DataService) {

  }
  async loadData(){
    return this.listData = await this.dataService.getData();
  }
  async removeItem(index: any){
    this.dataService.removeItem(index);
    this.listData.splice(index, 1);
  }

  ngOnInit() {
    this.loadData();
  }

}
