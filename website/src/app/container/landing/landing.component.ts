import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollPosition = window.pageYOffset;
    
    const background = document.querySelector('.landing-container') as HTMLElement;
    if(background){
      background.style.backgroundSize = 100 + scrollPosition/25 + '%';
    }
    
  }
}
