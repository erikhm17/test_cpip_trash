import {Component} from '@angular/core';
@Component({
	selector:'control-proyectos',
	templateUrl:'./../../serviciosView/subComponents/controlProyectos.html',
	styleUrls:['./../../body/asset/css/style.css',
		'./../../body/asset/css/eventsStyle.css']
})
export class ControlProyectos{
	public valueData:number;

	constructor(){
		/* default in content_tab_main*/
		this.valueData = 1;
	}
	showData(value){
		this.valueData=value;
	}
}
