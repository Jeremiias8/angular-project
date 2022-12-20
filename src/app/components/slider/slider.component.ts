import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $ : any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  // @Input recoge el atributo pasado en contact.html de padre a hijo
  @Input() anchura: number | any;
  @Input('etiquetas') captions: boolean | any;
  // @Output de hijo a padre
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {
    
  }

  ngOnInit(): void {
    $("#logo").click(function(e: { preventDefault: () => void; }){

      $("header").css("background", "green")
                  .css("height", "50px");
    }); 

    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });

  }

  lanzar(event: any){
    this.conseguirAutor.emit(this.autor);
  }
}
