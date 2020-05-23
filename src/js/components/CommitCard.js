
export default class CommitCard {
  constructor(name, email, date, message, avatar) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.message = message;
    this.avatar = avatar;
    this.element = null;
  }

  create() {
    this.element = document.createElement('div');
    this.element.classList.add('commits__cell');
    const template = `<div class="commits__content">
      <p class="commits__date">${this.date}</p>
      <div class="commits__author-info">
        <img class="commits__author-photo" src="${this.avatar}" alt="Фото автора коммитов">
        <div class="commits__personal-info">
          <h4 class="commits__author-name">${this.name}</h4>
          <p class="commits__author-mail">${this.email}</p>
        </div>
      </div>
      <p class="commits__text">${this.message}</p>  
    </div>`;
    this.element.insertAdjacentHTML('beforeend', template);
    return this.element;   
  }
}