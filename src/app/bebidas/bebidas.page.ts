import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: false
})
export class BebidasPage implements OnInit {

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
    "nome": "Suco de Laranja Natural",
    "descricao": "Suco fresco de laranja espremida na hora, sem conservantes.",
    "imagem": "https://images.unsplash.com/photo-1604908812022-dfaef4d98a62",
    "valor": 7.90
  },
  {
    "nome": "Refrigerante Coca-Cola",
    "descricao": "Lata 350ml, bebida gaseificada sabor cola.",
    "imagem": "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
    "valor": 5.00
  },
  {
    "nome": "Água Mineral com Gás",
    "descricao": "Garrafa 500ml de água gaseificada natural.",
    "imagem": "https://images.unsplash.com/photo-1528825871115-3581a5387919",
    "valor": 3.50
  },
  {
    "nome": "Chá Gelado de Pêssego",
    "descricao": "Chá gelado com sabor de pêssego, servido com gelo.",
    "imagem": "https://images.unsplash.com/photo-1615485297715-bba76f96b8cb",
    "valor": 6.50
  },
  {
    "nome": "Suco Detox Verde",
    "descricao": "Suco com couve, limão, maçã e gengibre.",
    "imagem": "https://images.unsplash.com/photo-1572441710534-9b4b62a38b88",
    "valor": 8.00
  },
  {
    "nome": "Limonada Suíça",
    "descricao": "Limão batido com gelo e toque de leite condensado.",
    "imagem": "https://images.unsplash.com/photo-1572449043416-55f4685c9bbd",
    "valor": 6.90
  },
  {
    "nome": "Smoothie de Morango",
    "descricao": "Smoothie gelado com morango, iogurte e mel.",
    "imagem": "https://images.unsplash.com/photo-1587202372775-98973d7b82c3",
    "valor": 9.50
  },
  {
    "nome": "Cerveja Artesanal Lager",
    "descricao": "Long neck 355ml de cerveja artesanal tipo lager.",
    "imagem": "https://images.unsplash.com/photo-1593701701344-9756d4606b52",
    "valor": 12.00
  },
  {
    "nome": "Café Expresso",
    "descricao": "Dose de café expresso encorpado.",
    "imagem": "https://images.unsplash.com/photo-1586015559301-6f4f0d5d860d",
    "valor": 4.00
  },
  {
    "nome": "Capuccino Cremoso",
    "descricao": "Café com leite e espuma cremosa de leite.",
    "imagem": "https://images.unsplash.com/photo-1606851091899-56e07e7f9f0a",
    "valor": 6.00
  }
]

  navigateFromPage(url: string): void {
    this.router.navigate([url]);
  }
}
