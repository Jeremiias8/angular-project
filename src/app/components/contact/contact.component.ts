import { Component, OnInit, ViewChild } from '@angular/core';
// declare var $ : any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // propiedad
  public widthSlider: number | any;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;
  @ViewChild('textos') textos: any;

  constructor() {
    this.captions = true;

    this.autor = {
      nombre: "Jeremías",
      website: "jere8dev.es",
      youtube: "jere8dev"
    };
  }
  // se iniciará lo interno de la page al cargarse
  ngOnInit(): void {
    console.log(<HTMLDivElement>document.querySelector('#texto'));
    // alert(this.textos.nativeElement.textContent);
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }

  resetearSlider(){
    this.anchuraToSlider = false;
  }

  getAutor(event : any){
    this.autor = event;
  }

  // clickMe(){
    // console.log(this.textos.nativeElement.value);
  // }
}
