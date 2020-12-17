import {Attribute, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input() max = 5;
  @Input() current = 0;
  @Input() icon = '';

  bars = [];
  gridStyle = {
    'grid-template-columns': `repeat(${this.max}, 1fr)`
  };

  constructor(@Attribute('title') public title) {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.max; i++) {
      this.bars.push(i + 1 <= this.current);
    }
    console.log(this.bars);
  }

}
