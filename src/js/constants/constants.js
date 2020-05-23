export const NUMBER_OF_CARDS = 3;
export const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
export const AMOUNT_OF_DAYS = 6;
export const NUMBER_OF_COMMITS = 20;

export const URL_FOR_GITHUB_API = 'https://api.github.com/repos/lenkaptichka/NewsAnalyzer/commits';
export const BASE_URL = 'https://newsapi.org/v2/everything';
export const SEARCH_SETTINGS = 'language=ru&pageSize=100&sortBy=popularity&apiKey=e0da008a0d6646b5be1826bc9a93fda3';
export const HELPER_PROXY = 'https://cors-anywhere.herokuapp.com/';

export const  ERROR_TEXT = {
  'notFound': 'К сожалению по вашему запросу\nничего не найдено',
  'serverError': 'Во время запроса произошла ошибка.\nВозможно, проблема с соединением или\nсервер недоступен. Подождите немного и\nпопробуйте ещё раз'
};
export const MONTH_LIST = {
  '1': 'января',
  '2': 'февраля',
  '3': 'марта',
  '4': 'aпреля',
  '5': 'мая',
  '6': 'июня',
  '7': 'июля',
  '8': 'августа',
  '9': 'сентября',
  '10': 'октября',
  '11': 'ноября',
  '12': 'декабря'
};
export const VALIDATION_ERROR = {
  emptyField: 'Запрос не может быть пустым',
  incorrectRequest: 'Некорректное ключевое слово',
  fieldIsValid: ''
}

export const searchButton = document.querySelector('.button_search');
export const showMorehButton = document.querySelector('.button_show-more');
export const inputError = document.querySelector('.search__error');
export const newsSection = document.querySelector('.news');
export const errorMessage = document.querySelector('.text_no-result');
export const searchForm = document.forms.search;
export const errorSection = document.querySelector('.no-result');
export const preloader = document.querySelector('.preloader');
export const numberOfArticles = document.querySelectorAll('.text_numbers');
export const scaleValue = document.querySelectorAll('.scale__value');
export const yAxisScale = document.querySelectorAll('.scale__y-axis-point');
export const searchTitle = document.querySelector('.title_serch-info');
export const scalevalueItems = [document.querySelector('.scale__value_first-value'), 
  document.querySelector('.scale__value_second-value'), 
  document.querySelector('.scale__value_third-value'), 
  document.querySelector('.scale__value_fourth-value'), 
  document.querySelector('.scale__value_fifth-value'), 
  document.querySelector('.scale__value_sixth-value'), 
  document.querySelector('.scale__value_seventh-value')
];
export const commitsCarousel = document.querySelector('.commits__carousel');
export const newsCardContainer = document.querySelector('.news__cards');


