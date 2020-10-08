import {numberOfArticles, scaleValues, yAxisScales, searchTitle, scalevalueItems} from "../constants/constants";

export default class Statistics {
  constructor(storageState, dateConverter) {
    this.storageState = storageState;
    this.dateConverter = dateConverter;
    const {query, data, totalResults} = this.storageState;
    this.query = query;
    this.data = data;
    this.totalResults = totalResults;
  }

  setSearchTitle() {  
    searchTitle.textContent =  `Вы спросили: «${this.query}»`
  }

  _countNumberOfArticles() {
    return this.totalResults;
  }

  _countTitlesReference() {
    let counter = 0;
    this.data.forEach(item => {
      if (item.title.toLowerCase().includes(this.query.toLowerCase())) {
        counter++;
      }
    });
    return counter;
  }

  addSubtitleNumbers() {
    const [newsOfTheWeeks, mentionsInTitles] = numberOfArticles;
    newsOfTheWeeks.textContent = this._countNumberOfArticles();
    mentionsInTitles.textContent = this._countTitlesReference();
  }

  addDataToYScale() {
    yAxisScales.forEach((item, index) => {
      item.textContent = this.dateConverter.formatforScale()[index];
    });
  }

  _countArticlesPerDay() {
    const numberOfArticlesPerDay = [0, 0, 0, 0, 0, 0, 0];
    const articles = this.data;
    const weekArr = this.dateConverter.getWeekDate();

    for (let i = 0; i < articles.length; i++) {
      for (let j = 0; j < weekArr.length; j++) {
        if (articles[i].publishedAt.substr(0, 10) == this.dateConverter.formatForRequest(weekArr[j])) {
          numberOfArticlesPerDay[j] = numberOfArticlesPerDay[j] + 1;
        }
      }
    }
    return numberOfArticlesPerDay;
  }

  renderScaleValue() {
    scaleValues.forEach((item, index) => {
      return (item.textContent = this._countArticlesPerDay()[index],
        scalevalueItems[index].setAttribute('style', `width: ${this._countArticlesPerDay()[index]}%`))
    });
  }
}