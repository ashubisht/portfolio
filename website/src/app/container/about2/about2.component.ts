import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.scss']
})
export class About2Component {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollPosition = window.pageYOffset;
    if(scrollPosition > 1170){
      scrollPosition = scrollPosition - 1170;
    }
    
    const background = document.querySelector('.image-container') as HTMLElement;
    if(background){
      background.style.backgroundSize = 100 + scrollPosition/99 + '%';
    }
    
  }
}
