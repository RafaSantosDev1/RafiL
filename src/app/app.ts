import { Component, inject } from '@angular/core';
import { NavComponent } from './features/nav/nav.component';
import { MobileMenuComponent } from './features/mobile-menu/mobile-menu.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { WorkComponent } from './features/work/work.component';
import { SkillsComponent } from './features/skills/skills.component';
import { EducationComponent } from './features/education/education.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { I18nService } from './i18n/i18n.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    MobileMenuComponent,
    HeroComponent,
    AboutComponent,
    WorkComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly i18n = inject(I18nService);
}
