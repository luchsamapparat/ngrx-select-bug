import { Component } from '@angular/core';
import { createFormGroupState, FormGroupState } from 'ngrx-forms';
import { Store } from '@ngrx/store';
import { AppState, FormModel } from './app.module';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formState: Observable<FormGroupState<FormModel>>;

  constructor(
    private store: Store<AppState>
  ) {
    this.formState = this.store.select(state => state.test);
  }

}
