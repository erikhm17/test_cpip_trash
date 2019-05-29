"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ServiciosViewComponent = (function () {
    function ServiciosViewComponent() {
        this.services = [
            { "title": "CONTROL DE PROYECTOS DE INVERSION PUBLICA",
                "image": "images/serviceimagen1.jpg",
                "description": "ONSTRUINNOVA S.R.L. cuenta  con  profesionales altamente calificados en el desarrollo de aplicaciones para el control, registro, ejecución, seguimiento, administración y monitoreo de proyectos a través de tecnología web, las cuales se adaptan a los diferentes tipos de proyectos y a los requerimientos particulares de cada cliente."
            },
            { "title": "CONTROL Y MONITOREO DE OBRAS",
                "image": "images/serviceimagen2.jpg",
                "description": "segunda descripcion de la imagen"
            },
            { "title": "DESARROLLO DE TECNOLOGIAS Y SISTEMAS",
                "image": "images/serviceimagen1.jpg",
                "description": "tercera descripcion de la imagen"
            },
            { "title": "DESARROLLO Y EJECUCIÓN DE PROYECTOS \" A MEDIDA \" ",
                "image": "images/serviceimagen2.jpg",
                "description": "cuarta descripcion de la imagen"
            }
        ];
        this.elemento = "Hola mundo";
        this.print();
    }
    ServiciosViewComponent.prototype.print = function () {
        console.log(this.services[0].title);
        console.log(this.services[1].title);
        console.log(this.services[2].title);
    };
    ServiciosViewComponent = __decorate([
        core_1.Component({
            selector: 'serviciosview-component',
            templateUrl: 'app/serviciosView/view/serviciosView.html',
            styleUrls: ['app/serviciosView/asset/css/style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ServiciosViewComponent);
    return ServiciosViewComponent;
}());
exports.ServiciosViewComponent = ServiciosViewComponent;
//# sourceMappingURL=serviciosview.component.js.map