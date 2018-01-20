import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgrxFormsModule, formGroupReducer, createFormGroupState, FormGroupState } from 'ngrx-forms';
import { StoreModule, Action } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

export interface FormModel {
  select: string;
}

const initialFormState = createFormGroupState<FormModel>('form', {
  select: 'USD'
});

export interface AppState {
  test: FormGroupState<FormModel>;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {
        test: (state = initialFormState, action: Action) => formGroupReducer(state, action)
      }
    ),

    // issue occurs when the NgrxFormsModule is imported before FormsModule
    NgrxFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
