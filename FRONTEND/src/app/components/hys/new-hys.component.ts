import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-new-hys',
  templateUrl: './new-hys.component.html',
  styleUrls: ['./new-hys.component.css']
})
export class NewHysComponent implements OnInit {

  nombreSkills: string;
  imgsrc: string;
  colorInterno: string = '#FAD7A0';
  colorExterno: string = '#E67E22';
  porcentaje: number;

  constructor(private skillService: SkillsService, private router: Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const skills = new Skills(
      this.nombreSkills,
      this.porcentaje,
      this.imgsrc,
      this.colorInterno,
      this.colorExterno
    );

    this.skillService.save(skills).subscribe((response) => {
      this.skillService.lista();
      this.router.navigate(['']);
    });
  }
}
