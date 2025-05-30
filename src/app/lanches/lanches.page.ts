import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
  standalone: false
})
export class LanchesPage implements OnInit {

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
    "nome": "Cheeseburger Clássico",
    "descricao": "Hambúrguer artesanal com queijo, alface, tomate e maionese da casa.",
    "imagem": "https://images.unsplash.com/photo-1550547660-d9450f859349",
    "valor": 19.90
  },
  {
    "nome": "X-Bacon Especial",
    "descricao": "Hambúrguer com queijo, bacon crocante e molho especial.",
    "imagem": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    "valor": 23.90
  },
  {
    "nome": "Sanduíche Natural",
    "descricao": "Pão integral com frango desfiado, cenoura, alface e iogurte temperado.",
    "imagem": "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    "valor": 14.00
  },
  {
    "nome": "Cachorro-Quente Tradicional",
    "descricao": "Pão com salsicha, molho, batata palha, milho e ervilha.",
    "imagem": "https://images.unsplash.com/photo-1603052875347-0f4f7a572bae",
    "valor": 12.90
  },
  {
    "nome": "Hambúrguer Vegano",
    "descricao": "Hambúrguer de grão-de-bico com vegetais e molho tahine.",
    "imagem": "https://images.unsplash.com/photo-1612197525340-e6feaf4b26aa",
    "valor": 21.90
  },
  {
    "nome": "Tapioca de Frango com Queijo",
    "descricao": "Tapioca recheada com frango desfiado e queijo coalho.",
    "imagem": "https://images.unsplash.com/photo-1658164586969-d5f2fc4f7b64",
    "valor": 16.90
  },
  {
    "nome": "Pão de Queijo Recheado",
    "descricao": "Pão de queijo recheado com catupiry e presunto.",
    "imagem": "https://images.unsplash.com/photo-1625248820826-47c4fffcf2c1",
    "valor": 8.90
  },
  {
    "nome": "Wrap de Frango",
    "descricao": "Tortilla recheada com frango grelhado, salada e molho.",
    "imagem": "https://images.unsplash.com/photo-1630303837935-78b6d6ae4bcd",
    "valor": 18.90
  },
  {
    "nome": "Misto Quente",
    "descricao": "Pão com presunto e queijo, tostado na chapa.",
    "imagem": "https://images.unsplash.com/photo-1622445272430-e4d46c898640",
    "valor": 9.90
  },
  {
    "nome": "Bauru",
    "descricao": "Sanduíche com rosbife, queijo, tomate e pepino.",
    "imagem": "https://images.unsplash.com/photo-1598026694752-f49f665ef2a5",
    "valor": 15.90
  }
]

  navigateFromPage(url: string): void {
    this.router.navigate([url]);
  }

}
