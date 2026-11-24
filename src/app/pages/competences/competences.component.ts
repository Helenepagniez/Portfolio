import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QUALITIES, SKILL_GROUPS, TASK_TOOLS, TOOLS } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

@Component({
  selector: 'app-competences',
  imports: [IconComponent, RevealDirective],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetencesComponent {
  protected readonly groups = SKILL_GROUPS;
  protected readonly qualities = QUALITIES;
  protected readonly tools = TOOLS;
  protected readonly taskTools = TASK_TOOLS;
}
