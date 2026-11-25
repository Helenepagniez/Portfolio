import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QUALITIES, SKILL_GROUPS, TASK_TOOLS, TOOLS } from '../../core/data/profil';
import { IconComponent } from '../../shared/icon/icon.component';
import { RevealDirective } from '../../shared/reveal/reveal.directive';

/** Compétences d’un métier, rangées par entreprise : chaque nom d’entreprise n’apparaît qu’une fois par carte. */
function byCompany(items: { text: string; where: string }[]): { company: string; texts: string[] }[] {
  const map = new Map<string, string[]>();
  for (const it of items) {
    for (const company of it.where.split(' · ')) {
      map.set(company, [...(map.get(company) ?? []), it.text]);
    }
  }
  return [...map].map(([company, texts]) => ({ company, texts }));
}

@Component({
  selector: 'app-competences',
  imports: [IconComponent, RevealDirective],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetencesComponent {
  protected readonly groups = SKILL_GROUPS.map((g) => ({ ...g, companies: byCompany(g.items) }));
  protected readonly qualities = QUALITIES;
  protected readonly tools = TOOLS;
  protected readonly taskTools = TASK_TOOLS;
}
