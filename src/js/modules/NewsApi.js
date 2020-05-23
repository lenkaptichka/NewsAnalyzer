import {HELPER_PROXY} from "../constants/constants";

export default class NewsApi {
  constructor(baseUrl, searchSettings, daysCounter, searchQuery) {
    this.baseUrl = baseUrl;
    this.searchSettings = searchSettings;
    this.daysCounter = daysCounter;
    this.searchQuery = searchQuery;
  }

  getNews() {
    const dateFrom = this.daysCounter.formatForRequest(this.daysCounter.getPreviousWeekDate());
    const dateTo = this.daysCounter.formatForRequest(new Date);
    return fetch(`${HELPER_PROXY}${this.baseUrl}?q=${this.searchQuery}&from=${dateFrom}&to=${dateTo}&${this.searchSettings}`,)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }
}
