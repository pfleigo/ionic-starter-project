import { select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { SessionActions } from 'src/store/session/actions';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @select(['session', 'username']) username$: Observable<string>;
  activeLang;

  constructor(
    private translate: TranslateService,
    private sessionActions: SessionActions
  ) {}

  changeLanguage(language: string) {
    this.translate.use(language);
    this.activeLang = language;
  }

  updateState(ev) {
    this.sessionActions.updateUser(ev.detail.value);
  }
}
