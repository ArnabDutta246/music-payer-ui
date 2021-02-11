import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import albums from '../../assets/mockdata/albums';

@Component({
  selector: 'app-album',
  templateUrl: './album.page.html',
  styleUrls: ['./album.page.scss'],
})
export class AlbumPage implements OnInit {
  data = null;

  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit() {

  const title = this.activateRoute.snapshot.paramMap.get('title');
  const decodedTitle = decodeURIComponent(title);  

  this.data = albums[decodedTitle];
  }

  correctImage(string){
    return string.replace(/[A-Z]/g,function(char,index){
      return (index !== 0?'-':'') + char.toLowerCase();
    })
  }

}
