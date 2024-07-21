import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'lic-top-menu',
  standalone: true,
  imports: [MatButtonModule,
		MatIconModule,
		MatToolbarModule,],
  templateUrl: './top-menu.component.html',
})
export class TopMenuComponent {

}
