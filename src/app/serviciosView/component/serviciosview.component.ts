
import {Component} from '@angular/core';

@Component({
	selector:'serviciosview-component',
	templateUrl:'./../../serviciosView/view/serviciosView.html',
	styleUrls:['./../../serviciosView/asset/css/style.css']
})

export class ServiciosViewComponent{

	public services ;
	public elemento;

	constructor(){
		this.services = [
			{"title":"CONTROL DE PROYECTOS DE INVERSION PUBLICA",
			"image":"images/serviceimagen1.jpg",
			"description":"ONSTRUINNOVA S.R.L. cuenta  con  profesionales altamente calificados en el desarrollo de aplicaciones para el control, registro, ejecución, seguimiento, administración y monitoreo de proyectos a través de tecnología web, las cuales se adaptan a los diferentes tipos de proyectos y a los requerimientos particulares de cada cliente."
			},

			{"title":"CONTROL Y MONITOREO DE OBRAS",
			"image":"images/serviceimagen2.jpg",
			"description":"segunda descripcion de la imagen"
			},

			{"title":"DESARROLLO DE TECNOLOGIAS Y SISTEMAS",
			 "image":"images/serviceimagen1.jpg",
			 "description":"tercera descripcion de la imagen"
			},

			{"title":"DESARROLLO Y EJECUCIÓN DE PROYECTOS \" A MEDIDA \" ",
			 "image":"images/serviceimagen2.jpg",
			 "description":"cuarta descripcion de la imagen"
			}
		];

		this.elemento = "Hola mundo";
		this.print();
	}
	print(){
		console.log(this.services[0].title);
		console.log(this.services[1].title);
		console.log(this.services[2].title);
	}

}
