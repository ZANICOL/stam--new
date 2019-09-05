import { Component, OnInit } from '@angular/core';
import { ISong } from "./song"

@Component({
  selector: 'app-dvd-list',
  templateUrl: './dvd-list.component.html',
  styleUrls: ['./dvd-list.component.css']
})
export class DvdListComponent implements OnInit {

  dvdNo: number = 123;
  dvdName: string = "Your name dvd-2020";
  dvdOwner: string = "Your Name";
  dvdPicUrl: string = "https://www.eden.co.uk/images/500/5051159789242.jpg";
  _dvdFilter: string = '';

  showImage: boolean = true;

  filteredSongs: ISong[];

  songsAry: ISong[] = [
    {
      name: "Dookie",
      serialNo: 1,
      length: 51,
      pic: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2014/01/75.greenday_dookie_151013-1.jpg"
    },
    {
      name: "the song name 2",
      serialNo: 2,
      length: 78, pic: "https://pbs.twimg.com/media/DWgS7UXW4AATjc3.jpg"
    }];

  constructor() {
    this.filteredSongs = this.songsAry;
  }

  get dvdFilter(): string {
    return this._dvdFilter;
  }


  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): ISong[] {
    filterBy = filterBy.toLocaleLowerCase();
    let ary: ISong[] = [];

    for (let song of this.songsAry) {
      if (song.name.toLocaleLowerCase().indexOf(filterBy) !== -1)
        ary.push(song);
    }
    return ary;
    }

    set dvdFilter(value: string) {
      this._dvdFilter = value;
      console.log(value);

      if(this._dvdFilter != ''){
        this.filteredSongs = this.performFilter(this._dvdFilter);
      }
      else{
          this.filteredSongs = this.songsAry;
        }
      
    }

  ngOnInit() {
  }

}