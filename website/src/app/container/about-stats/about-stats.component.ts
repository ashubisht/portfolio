import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-stats',
  templateUrl: './about-stats.component.html',
  styleUrls: ['./about-stats.component.scss']
})
export class AboutStatsComponent {
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let scrollPosition = window.pageYOffset;
    if(scrollPosition > 1170){
      scrollPosition = scrollPosition - 1170;
    }
    const background = document.querySelector('.waves-bg') as HTMLElement;
    if(background){
      background.style.backgroundSize = 100 + scrollPosition/25 + '%';
    }
    
  }
}
