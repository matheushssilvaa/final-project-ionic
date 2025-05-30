import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {

  constructor(private router: Router) {}

  itensMenu = [
    {nome: "Home", url: "/home", icon: "home-outline"},
    {nome: "Refeições", url: "/refeicoes", icon: "restaurant-outline"},
    {nome: "Lanches", url: "/lanches", icon: "fast-food-outline"},
    {nome: "Bebidas", url: "/bebidas", icon: "beer-outline"},
    {nome: "Complementos", url: "/complementos", icon: "add"}
  ]

  navigateFromPage(url: string): void {
    this.router.navigate([url]);
  }
}
