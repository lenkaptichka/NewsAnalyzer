export default class NewsCard {
  constructor(sourceLink, title, date, description, image, source) {
    this.sourceLink = sourceLink;
    this.title = title;
    this.date = date;
    this.description = description;
    this.image = image;
    this.source = source;
  }

  create() {
    const cardItem = document.createElement('a');
    cardItem.classList.add('news__card-item');
    cardItem.setAttribute('href', `${this.sourceLink}`);
    cardItem.setAttribute('target','_blank');

    const cardImage = document.createElement('img');
    cardImage.classList.add('news__card-image');
    cardImage.setAttribute('src', `${this.image}`);
    cardImage.setAttribute('alt', 'Иллюстрация к карточке');

    const cardDate = document.createElement('p');
    cardDate.classList.add('news__card-date');
    cardDate.textContent = this.date;

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('news__card-title');
    cardTitle.textContent = this.title;

    const cardDescription = document.createElement('blockquote');
    cardDescription.classList.add('news__card-text');
    cardDescription.textContent = this.description;

    const cardSource = document.createElement('cite');
    cardSource.classList.add('news__card-source');
    cardSource.textContent = this.source;

    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardDate);
    cardItem.appendChild(cardTitle);
    cardItem.appendChild(cardDescription);
    cardItem.appendChild(cardSource);
    
    return cardItem;
  }
} 
