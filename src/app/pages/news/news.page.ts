import { Component, OnInit } from '@angular/core';
import { NewsService } from "../../services/news.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  listData: any[] = [];
  searchValue: string = "";
  topHeadlines: any[] = [];
  neutLanguage: string = 'us'
  constructor(private newsService: NewsService, private dataService: DataService) {
    newsService.getTopNews(this.neutLanguage).subscribe((res) => {
      this.topHeadlines.push(...res.articles)
    })
  }
  async loadData(){
    this.listData = await this.dataService.getData();
  }
  async addData(article: any){
    await this.dataService.addData(article);
    this.loadData();
  }
  async searchTo(searchValue:string){

    this.newsService.getSearchNews(searchValue).subscribe((res)=>{
      this.topHeadlines = res.articles;
    })

  }

  changeTo(lang:string){
    this.newsService.getTopNews(lang).subscribe((res)=>{

      this.topHeadlines = res.articles;
    });
  }

  ngOnInit() {
    this.loadData();

  }

}
