# NgrxSelectBug

NgrxFormsModule needs to be imported after FormsModule. Otherwise, `select` elements fail to work. See [MrWolfZ/ngrx-forms#32](https://github.com/MrWolfZ/ngrx-forms/issues/32)
