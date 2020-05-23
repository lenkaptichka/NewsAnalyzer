export default class NewsCard {
  constructor(sourceLink, title, date, description, image, source) {
    this.sourceLink = sourceLink;
    this.title = title;
    this.date = date;
    this.description = description;
    this.image = image;
    this.source = source;
    this.element = null;
  }

  create() {
    this.element = document.createElement('a');
    this.element.classList.add('news__card-item');
    this.element.setAttribute('href', `${this.sourceLink}`);
    this.element.setAttribute('target','_blank');

    const template = `<img class="news__card-image" src="${this.image}" alt="Иллюстрация к карточке">
    <p class="news__card-date">${this.date}</p>
    <h3 class="news__card-title">${this.title}</h3>
    <blockquote class="news__card-text">${this.description}</blockquote>
    <cite class="news__card-source">${this.source}</cite>`;
    this.element.insertAdjacentHTML('beforeend', template);
    
    return this.element;
  }
} 
