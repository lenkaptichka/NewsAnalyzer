
export default class CommitCard {
  constructor(name, email, date, message, avatar) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.message = message;
    this.avatar = avatar;
  }

  create() {
    const cardItem = document.createElement('div');
    cardItem.classList.add('commits__cell');

    const cardContent = document.createElement('div');
    cardContent.classList.add('commits__content');

    const cardDate = document.createElement('p');
    cardDate.classList.add('commits__date');
    cardDate.textContent = this.date;

    const cardAuthorInfo = document.createElement('div');
    cardAuthorInfo.classList.add('commits__author-info');

    const cardAuthorPhoto = document.createElement('img');
    cardAuthorPhoto.classList.add('commits__author-photo');
    cardAuthorPhoto.setAttribute('src', `${this.avatar}`);
    cardAuthorPhoto.setAttribute('alt', 'Фото автора коммитов');

    const cardPersonalInfo = document.createElement('div');
    cardPersonalInfo.classList.add('commits__personal-info');

    const cardAuthorName = document.createElement('h4');
    cardAuthorName.classList.add('commits__author-name');
    cardAuthorName.textContent = this.name;

    const cardAuthorMail = document.createElement('p');
    cardAuthorMail.classList.add('commits__author-mail');
    cardAuthorMail.textContent = this.email;

    const cardText = document.createElement('p');
    cardText.classList.add('commits__text');
    cardText.textContent = this.message;

    cardPersonalInfo.appendChild(cardAuthorName);
    cardPersonalInfo.appendChild(cardAuthorMail);
    cardAuthorInfo.appendChild(cardAuthorPhoto);
    cardAuthorInfo.appendChild(cardPersonalInfo);
    cardContent.appendChild(cardDate);
    cardContent.appendChild(cardAuthorInfo);
    cardContent.appendChild(cardText);
    cardItem.appendChild(cardContent);

    return cardItem;
  }
}