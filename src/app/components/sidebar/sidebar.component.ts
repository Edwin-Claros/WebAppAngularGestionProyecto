import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'EVENTOS',  icon: 'dashboard', class: '' },
   { path: '/evento', title: 'Evento',  icon:'dashboard', class: '' },
    { path: '/agregar-equipo', title: 'Agregar Equipos',  icon:'group', class: '' },
    { path: '/participante', title: 'Participante',  icon:'person', class: '' },
    { path: '/lista-equipo', title: 'Lista Equipos',  icon:'assessment', class: '' },
    { path: '/lista-evento', title: 'Lista Evento',  icon:'assessment', class: '' },
    { path: '/typography', title: 'INTEGRANTES',  icon:'person', class: '' },
    { path: '/table-list', title: 'ESTADISTICAS',  icon:'assessment', class: '' },
    { path: '/exit', title: 'SALIR',  icon:'exit_to_app', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },//
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
