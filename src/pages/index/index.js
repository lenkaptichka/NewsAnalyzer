import "./index.css";

import {BASE_URL, SEARCH_SETTINGS, newsCardContainer, preloader, searchForm, searchButton, errorMessage, ERROR_TEXT, showMorehButton, errorSection, newsSection} from "../../js/constants/constants";

import DateTransformation from "../../js/components/DateTransformation";
import NewsApi from "../../js/modules/NewsApi";
import DataStorage from "../../js/modules/DataStorage";
import NewsCard from "../../js/components/NewsCard"; 
import NewsCardList from "../../js/components/NewsCardList";
import SearchInput from "../../js/components/SearchInput";

const daysCounter = new DateTransformation(new Date());
const dataStorage = new DataStorage();
const newNewsCard = (sourceLink, title, date, description, image, source) => new NewsCard(sourceLink, title, date, description, image, source);
const newsCardList = new NewsCardList(newsCardContainer, newNewsCard, daysCounter, dataStorage);

const dataTransfer = (data, searchQuery) => {
  dataStorage.clearDataStorage();
  dataStorage.addPartOfFullStorageToAddCards(data.articles); 
  dataStorage.addNewsData(data.articles);
  dataStorage.addTotalNumberOfArticles(data.totalResults);
  dataStorage.addNewsRequestWord(searchQuery);
};

const onFormSubmit = (searchQuery) => {
  newsCardList.clearNewsCardList(); // Очищаем список карточек
  dataStorage.clearDataStorage(); // Очищаем localStorage
  searchInput.reset(); // Блок кнопки

  preloader.classList.remove('preloader_hidden'); // Появляется прелоадер
  const newsApi = new NewsApi(BASE_URL, SEARCH_SETTINGS, daysCounter, searchQuery); // Отправляем запрос

  newsApi.getNews()
    .then((data) => {
      if (data.totalResults == 0) {
        preloader.classList.add('preloader_hidden'); // Прячем прелоадер
        errorSection.classList.remove('no-result_hidden');
        errorMessage.textContent = ERROR_TEXT.notFound;

      } else {     
        dataTransfer(data, searchQuery); // Сохраняем в localStorage все нужные для последующей работы данные
        preloader.classList.add('preloader_hidden'); // Прячем прелоадер
        newsCardList.addMoreCards(); // Отрисовываем три первые карточки
      }
    })

    .catch((err) => {
      preloader.classList.add('preloader_hidden');
      errorSection.classList.remove('no-result_hidden');
      errorMessage.textContent = ERROR_TEXT.serverError;
    }); 
}
  
const searchInput = new SearchInput(searchForm, onFormSubmit);

showMorehButton.addEventListener('click', function(event) {
  newsCardList.addMoreCards()
});

// Прорисовка карточек после обновления страницы
if (dataStorage.getNewsData() === null) {
  searchInput.reset();
} else {
  newsSection.classList.remove('news_hidden');
  searchForm.elements.query.value = dataStorage.getNewsRequestWord();

  const cardsToRender = dataStorage.getNewsData().slice(0, dataStorage.numberOfCardsPerPage());
  newsCardList.addCard(cardsToRender);

  // Проверка на необходимость отображать кнопку "Показать ещё"
  if (dataStorage.getNewsData().length - cardsToRender.length > 3) {
    showMorehButton.classList.remove('button_show-more-hidden');
  }
}