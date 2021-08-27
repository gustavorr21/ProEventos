import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
  isCollapsed = true; //serve para quando diminuir a tela, os 3 pontos da barra de navegação funcionar
  ngOnInit(): void {
  }

}
