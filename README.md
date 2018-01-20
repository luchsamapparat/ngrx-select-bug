# NgrxSelectBug

NgrxFormsModule needs to be imported after FormsModule. Otherwise, `select` elements fail to work. See MrWolfZ/ngrx-forms#32
