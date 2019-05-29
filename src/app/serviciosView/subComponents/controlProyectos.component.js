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
var ControlProyectos = (function () {
    function ControlProyectos() {
        /* default in content_tab_main*/
        this.valueData = 1;
    }
    ControlProyectos.prototype.showData = function (value) {
        this.valueData = value;
    };
    ControlProyectos = __decorate([
        core_1.Component({
            selector: 'control-proyectos',
            templateUrl: 'app/serviciosView/subComponents/controlProyectos.html',
            styleUrls: ['app/body/asset/css/style.css',
                'app/body/asset/css/eventsStyle.css']
        }), 
        __metadata('design:paramtypes', [])
    ], ControlProyectos);
    return ControlProyectos;
}());
exports.ControlProyectos = ControlProyectos;
//# sourceMappingURL=controlProyectos.component.js.map