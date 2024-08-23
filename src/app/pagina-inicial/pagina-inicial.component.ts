import {Component} from '@angular/core';
import {PaginaInicialService} from "./service/pagina-inicial.service";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss'
})
export class PaginaInicialComponent {

  type: string = 'stock'
  acoes: any = [];
  categoria: string = "";
  setores = [
    "Retail Trade",
    "Energy Minerals",
    "Health Services",
    "Utilities",
    "Finance",
    "Consumer Services",
    "Consumer Non-Durables",
    "Non-Energy Minerals",
    "Commercial Services",
    "Distribution Services",
    "Transportation",
    "Technology Services",
    "Process Industries",
    "Communications",
    "Producer Manufacturing",
    "Miscellaneous",
    "Electronic Technology",
    "Industrial Services",
    "Health Technology",
    "Consumer Durables"
  ]
  stocks = [
    {
      "stock": "N1TR34",
      "name": "NORTHERN TRUDRN ED",
      "close": 209.42999,
      "change": 0.129083,
      "volume": 5,
      "market_cap": 87580484054.45544,
      "logo": "https://s3-symbol-logo.tradingview.com/northern-trust--big.svg",
      "sector": "Finance",
      "type": "bdr",
    },
    {
      "stock": "MTRE3",
      "name": "MITRE REALTYON",
      "close": 5.24,
      "change": 1.15830116,
      "volume": 1189300,
      "market_cap": 547913502,
      "logo": "https://brapi.dev/favicon.svg",
      "sector": "Finance",
      "type": "stock",
    },
    {
      "stock": "MTRE3F",
      "name": "MITRE REALTYON",
      "close": 5.16,
      "change": 0,
      "volume": 9080,
      "market_cap": 547913502,
      "logo": "https://brapi.dev/favicon.svg",
      "sector": "Finance",
      "type": "stock",
    },
    {
      "stock": "MTRE3F",
      "name": "MITRE REALTYON",
      "close": 5.16,
      "change": 0,
      "volume": 9080,
      "market_cap": 547913502,
      "logo": "https://brapi.dev/favicon.svg",
      "sector": "Finance",
      "type": "stock",
    },
    {
      "stock": "MTRE3F",
      "name": "MITRE REALTYON",
      "close": 5.16,
      "change": 0,
      "volume": 9080,
      "market_cap": 547913502,
      "logo": "https://brapi.dev/favicon.svg",
      "sector": "Finance",
      "type": "stock",
    },
    {
      "stock": "MTRE3F",
      "name": "MITRE REALTYON",
      "close": 5.16,
      "change": 0,
      "volume": 9080,
      "market_cap": 547913502,
      "logo": "https://brapi.dev/favicon.svg",
      "sector": "Finance",
      "type": "stock",
    },
    {
      "stock": "N1TR34",
      "name": "NORTHERN TRUDRN ED",
      "close": 209.42999,
      "change": 0.129083,
      "volume": 5,
      "market_cap": 87580484054.45544,
      "logo": "https://s3-symbol-logo.tradingview.com/northern-trust--big.svg",
      "sector": "Finance",
      "type": "bdr",
    },
    {
      "stock": "MTRE3",
      "name": "MITRE REALTYON",
      "close": 5.24,
      "change": 1.15830116,
      "volume": 1189300,
      "market_cap": 547913502,
      "logo": "https://brapi.dev/favicon.svg",
      "sector": "Finance",
      "type": "stock",
    },
    {
      "stock": "N1TR34",
      "name": "NORTHERN TRUDRN ED",
      "close": 209.42999,
      "change": 0.129083,
      "volume": 5,
      "market_cap": 87580484054.45544,
      "logo": "https://s3-symbol-logo.tradingview.com/northern-trust--big.svg",
      "sector": "Finance",
      "type": "bdr",
    },
    {
      "stock": "MTRE3",
      "name": "MITRE REALTYON",
      "close": 5.24,
      "change": 1.15830116,
      "volume": 1189300,
      "market_cap": 547913502,
      "logo": "https://brapi.dev/favicon.svg",
      "sector": "Finance",
      "type": "stock",
    },
  ]
  constructor(
    private paginaInicialService: PaginaInicialService
  ) {}

  ngOnInit() {
    this.obterCotacoes("","","","","", this.type);
    console.log("teste")
  }

  obterCotacoes(search: string, sortBy: string, sortOrder: string, limit: string, sector: string, type: string) {
    this.type = type;
    this.paginaInicialService.obterCotacoes(search, sortBy, sortOrder, limit, sector, type).subscribe(
      (result) => {
        console.log(result)
        this.acoes = result.stocks;
      }
    )
  }

  // obterAcoesPorCategoria() {
  //   this.paginaInicialService.obterCotacoes("", "", "", "", this.categoria, "stock").subscribe(
  //     (result) => {
  //       console.log(result)
  //       this.acoes = result.stocks
  //       console.log(this.categoria)
  //     }
  //   )
  // }

  filtrarAcoes() {

  }
}
