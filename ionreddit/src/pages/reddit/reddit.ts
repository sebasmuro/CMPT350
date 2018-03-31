import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from '../../app/services/reddit.service';
@Component({
  selector: 'reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {

  constructor(public navCtrl: NavController, private redditService:RedditService) {
    
  }
  ngOnInit(){
    this.getPosts('sports', 5);
  }
  getPosts(category, limit)
  {
    this.redditService.getPosts(category,limit).subscribe(response => {
      console.log(response);
    });
  }
}
