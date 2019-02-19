import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
	
	routeId: string = '';

	constructor(private router: Router, private route: ActivatedRoute) {}
		
	ngOnInit() {
		this.router.navigate(['/panel', 'left']);
		this.route.params.subscribe((params) => {
			this.routeId = params['id'];
		});		
	}
	
	allowDrop(ev) {
		ev.preventDefault();
	}

	drag(ev) {
		ev.dataTransfer.setData("text", ev.target.id);
	}

	drop(ev) {
		ev.preventDefault();
		var data = ev.dataTransfer.getData("text");
		ev.target.appendChild(document.getElementById(data));
	}
	
	changePanel() {
		var main = document.getElementById("main");
		while (main.childNodes.length > 2) {
			main.removeChild(main.lastChild);
		}

		if(this.routeId == 'left') {
			this.router.navigate(['/panel', 'right']);
		} else if(this.routeId == 'right') {
			this.router.navigate(['/panel', 'left']);
		}		
	}
	

}
