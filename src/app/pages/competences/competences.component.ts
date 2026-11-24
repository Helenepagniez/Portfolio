import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QUALITIES, SKILL_GROUPS, TASK_TOOLS, TOOLS } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-competences',
  imports: [IconComponent],
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
