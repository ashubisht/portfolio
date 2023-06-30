import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about3',
  templateUrl: './about3.component.html',
  styleUrls: ['./about3.component.scss']
})
export class About3Component {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const background = document.querySelector('#about-3 .image-container') as HTMLElement;
    let scrollPosition = window.pageYOffset;
    if(scrollPosition > 1900){
      scrollPosition = scrollPosition - 1900
      if(background){
        background.style.backgroundSize = 100 + scrollPosition/10 + '%';
      }
    }
    
    
  }
}
