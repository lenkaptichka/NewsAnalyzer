import {searchButton, VALIDATION_ERROR, inputError} from "../constants/constants";

export default class SearchInput {
  
  constructor(form, callback) {
    this.form = form;
    this.callback = callback;

    this.input = this.form.elements.query;
    this.setEventListeners();
  }

  _startSearch(event) {
    event.preventDefault();
    this.callback(this.input.value);
  }

  checkInputValidity(fotmInput) {
    inputError.textContent = '';

    if (fotmInput.value.length == 0) {
      inputError.textContent = VALIDATION_ERROR.emptyField;
    } else if (fotmInput.value.length !== 0 && !fotmInput.validity.valid) {
      inputError.textContent = VALIDATION_ERROR.incorrectRequest;
    } else {
      inputError.textContent = VALIDATION_ERROR.fieldIsValid;
    }
  }

  setSubmitButtonState() {
    if (this.form.checkValidity()) {
      searchButton.removeAttribute('disabled', '');
      searchButton.classList.remove('button_search-disabled');
    } else {
      searchButton.setAttribute('disabled', '');
      searchButton.classList.add('button_search-disabled');
    }
  }
  
  reset() {
    // this.form.reset();
    searchButton.setAttribute('disabled', '');
    searchButton.classList.add('button_search-disabled');   
  }

  setEventListeners() {
    this.form.addEventListener('input', () => {
      this.checkInputValidity(this.input);
    });
    this.form.addEventListener('input', this.setSubmitButtonState.bind(this));
    this.form.addEventListener('submit', this._startSearch.bind(this));
  }
}