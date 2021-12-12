import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConfigService } from '../../services/app.config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,public app:AppConfigService) { }

  ngOnInit() {}

  onClick(){
    this.router.navigateByUrl('alerta',{replaceUrl:true});
  } 

}
