import {Component} from '@angular/core';
@Component({
	selector:'slider-component',
	/*templateUrl:'app/slider/view/slider.html',*/
  templateUrl:'./../../slider/view/slider.html',
	styleUrls:['./../../slider/asset/css/style.css']
})
export class SliderComponent{
	public images:Array<string>;

	constructor(){
		this.images = ['../../../assets/images/image2.png',
			  '../../../assets/images/image4.png',
			  '../../../assets/images/image5.png'
			  ];
	}

	getImages(){
		return this.images;
	}

}
