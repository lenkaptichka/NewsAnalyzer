import {showMorehButton, newsSection, errorSection} from "../constants/constants";

export default class NewCardList {
  constructor(container, newCard, dateConverter, dataStorage) {
    this.container = container;
    this.newCard = newCard;
    this.dateConverter = dateConverter;
    this.dataStorage = dataStorage;
  }

  addMoreCards() {
    const cardsArray = this.dataStorage.getPartOfFullStorageToAddCards(); // Получаем данные из хранилища
    newsSection.classList.remove('news_hidden');

    if (cardsArray.length > 3) {
      const cardsToAddFromStorage = cardsArray.slice(0, 3); // Если в массиве осталось больше трёх элементов, то мы отрезаем первые три и отправляем их на прорисовку
      this._addCard(cardsToAddFromStorage);
      
      showMorehButton.classList.remove('button_show-more-hidden');
    } else {
      this._addCard(cardsArray); // Если в массиве три или менее карт, то мы сразу же отправляем их на прорисовку
      showMorehButton.classList.add('button_show-more-hidden'); // И кнопку "Показать ещё" делаем недоступной
    }
  }

  _addCard(cardsArr) {
    cardsArr.forEach(item => {
      const cardDate = this.dateConverter.formatForCard(item.publishedAt);
      if (item.urlToImage == null) {
        item.urlToImage = 'https://oc-media.org/app/themes/ocmedia/resources/assets/images/no-image.jpg'; // Если картинка в новостях отсутствует
      }
      const card = this.newCard(item.url, item.title, cardDate, item.description, item.urlToImage, item.source.name);
      const cardElem = card.create();
      this.container.appendChild(cardElem);
    })
    
    this.dataStorage.deleteThreeCardsFromStorage(); // Удаляем нарисованные карточки из хранилища
  }

  clearNewsCardList() {
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild); 
    }
    newsSection.classList.add('news_hidden');
    showMorehButton.classList.add('button_show-more-hidden');
    errorSection.classList.add('no-result_hidden');

  }
}