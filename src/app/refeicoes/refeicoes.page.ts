import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refeicoes',
  templateUrl: './refeicoes.page.html',
  styleUrls: ['./refeicoes.page.scss'],
  standalone: false
})
export class RefeicoesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

   itensMenu = [
    {nome: "Home", url: "/home", icon: "home-outline"},
    {nome: "Refeições", url: "/refeicoes", icon: "restaurant-outline"},
    {nome: "Lanches", url: "/lanches", icon: "fast-food-outline"},
    {nome: "Bebidas", url: "/bebidas", icon: "beer-outline"},
    {nome: "Complementos", url: "/complementos", icon: "add"}
  ]

  produtos =  [
  {
    "nome": "Filé Mignon Molho Madeira",
    "descricao": "Filé mignon grelhado com molho madeira, arroz branco e batata frita.",
    "imagem": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "valor": 42.90
  },
  {
    "nome": "Frango Grelhado",
    "descricao": "Peito de frango grelhado servido com legumes no vapor e arroz integral.",
    "imagem": "https://images.unsplash.com/photo-1598514982660-07d2b9b8fca3",
    "valor": 29.90
  },
  {
    "nome": "Strogonoff de Carne",
    "descricao": "Strogonoff de carne com arroz branco e batata palha crocante.",
    "imagem": "https://images.unsplash.com/photo-1613145998435-bda0e4ee37ac",
    "valor": 34.90
  },
  {
    "nome": "Lasanha à Bolonhesa",
    "descricao": "Lasanha de massa fresca recheada com carne moída e molho bolonhesa.",
    "imagem": "https://images.unsplash.com/photo-1603133872878-684f7dd2d2d5",
    "valor": 32.00
  },
  {
    "nome": "Feijoada Completa",
    "descricao": "Feijoada com arroz, couve refogada, farofa e laranja.",
    "imagem": "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    "valor": 39.90
  },
  {
    "nome": "Bife à Parmegiana",
    "descricao": "Bife empanado com molho de tomate e queijo, com arroz e fritas.",
    "imagem": "https://images.unsplash.com/photo-1589308078055-ebdb0f1b03fb",
    "valor": 36.50
  },
  {
    "nome": "Moqueca de Peixe",
    "descricao": "Peixe ao molho de dendê e leite de coco com arroz e pirão.",
    "imagem": "https://images.unsplash.com/photo-1657299176067-7289f4a40e59",
    "valor": 44.90
  },
  {
    "nome": "Risoto de Camarão",
    "descricao": "Arroz arbóreo cremoso com camarões e toque de limão siciliano.",
    "imagem": "https://images.unsplash.com/photo-1613141409885-5814cf17a1c5",
    "valor": 41.90
  },
  {
    "nome": "Yakissoba de Carne",
    "descricao": "Macarrão oriental com carne, legumes e molho shoyu especial.",
    "imagem": "https://images.unsplash.com/photo-1606756792951-bbfec1c81acb",
    "valor": 28.90
  },
  {
    "nome": "Vegetariano Grelhado",
    "descricao": "Mix de vegetais grelhados com arroz integral e tofu.",
    "imagem": "https://images.unsplash.com/photo-1625947129799-d0fc692e3f34",
    "valor": 27.90
  }
]

  navigateFromPage(url: string): void {
    this.router.navigate([url]);
  }

}
