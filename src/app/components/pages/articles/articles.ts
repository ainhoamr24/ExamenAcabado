import { Component } from '@angular/core';
import { Article } from '../../../models/article';
import { ARTICLES } from '../../../models/articlesData';
import { ArticleComponent } from "../../ui/c-article/c-article";

@Component({
  selector: 'articles',
  imports: [ArticleComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.scss'
})
export class Articles {


  articles: Article[] = ARTICLES;
  info(){
    console.log(this.articles);
    console.log(ARTICLES);
  }
  removeArticle(id: string) {
    this.articles.splice(this.articles.findIndex((article: { id: string; }) => article.id === id), 1);
    console.log(`Artículo con ID ${id} eliminado.`);
  }
}