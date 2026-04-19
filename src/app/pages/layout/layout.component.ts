import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header/header.component";
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { FooterComponent } from '../../component/footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, NavbarComponent,FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
