import {Component, OnInit} from '@angular/core';
import {skills} from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills;

  constructor() {
    this.skills = skills;
  }

  ngOnInit() {
    console.log(this.skills);
  }

}
