import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  public eventosFiltrados: any = [];
  mostrarImagem = true;
  private _filtroLista = '';


  public get filtroLista(){
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtroPor: string) {
    filtroPor = filtroPor.toLocaleLowerCase();
    return this.eventos.filter(
      (eventoLowerCase: any) => eventoLowerCase.tema.toLocaleLowerCase().indexOf(filtroPor) !== -1 ||
      eventoLowerCase.local.toLocaleLowerCase().indexOf(filtroPor) !== -1
    )
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  exibeImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }
  public getEventos(): void{
    this.http.get('https://localhost:5001/api/eventos').subscribe(
     evento=>{
       this.eventos = evento;
       this.eventosFiltrados = evento;
      }
    );
  }
}
