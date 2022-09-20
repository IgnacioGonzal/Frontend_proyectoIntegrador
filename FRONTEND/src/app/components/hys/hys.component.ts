import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit {
  skills: Skills[] = []

  constructor(private skillsS: SkillsService, private tokenService: TokenService) { }


  isLogged = false;


  ngOnInit(): void {
    this.cargarSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void {
    this.skillsS.lista().subscribe(
      data => {
        this.skills = data;
      }
    )
  }

  deleteSkills(id?: number): void {
    if (id != undefined) {
      this.skillsS.delete(id).subscribe(data => {
        this.cargarSkills();
      }, err => {
        alert("no se pudo eliminar");
      }
      )
    }
  }
}



