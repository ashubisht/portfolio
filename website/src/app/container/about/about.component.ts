import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const background = document.querySelector('.image-text-container') as HTMLElement;
    let scrollPosition = window.pageYOffset;
    if(scrollPosition > 250){
      scrollPosition = scrollPosition - 250;
    }
    if(background){
      background.style.backgroundSize = 150 + scrollPosition/10 + '%';
    }
    
  }
}
