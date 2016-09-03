import DefineMap from 'can-define/map/';
import appTemplate from './app.stache';

let ViewModel = DefineMap.extend({
	xy: {
		value: false
	},
	foobar: function () {
		this.xy = !this.xy;
	}
});

let vm = new ViewModel();

document.getElementById('app').appendChild(appTemplate(vm));