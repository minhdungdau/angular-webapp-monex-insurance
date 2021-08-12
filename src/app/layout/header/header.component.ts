import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  titleNavigation :string = "Bảo hiểm";
  logoSrc: string = "assets/img/logo-brand.png";
  isLogged:boolean = true;
  isSignUp: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
