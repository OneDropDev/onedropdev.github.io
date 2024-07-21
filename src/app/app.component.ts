import { Component } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [TopMenuComponent]
})
export class AppComponent {
  title = 'lic-doc';
}
