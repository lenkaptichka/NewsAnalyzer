import {MILLISECONDS_PER_DAY, AMOUNT_OF_DAYS, MONTH_LIST} from "../constants/constants";

export default class DateTransformation {
  constructor(currentDate) {
    this.currentDate = currentDate;
  }

  getPreviousWeekDate() {
    return new Date(this.currentDate.getTime() - MILLISECONDS_PER_DAY * AMOUNT_OF_DAYS);
  }

  formatForRequest(date) {
    return (date.toISOString()).substr(0, 10)
  }

  formatForCard(date) {
    // Преобразование формата ISO в обычный
    const dateMs = Date.parse(date);
    const newDate = new Date(dateMs);

    const day = newDate.toLocaleDateString('ru', {day: 'numeric'});

    const numberOfMonth = newDate.toLocaleDateString('ru', {month: 'numeric'});
    const month = MONTH_LIST[numberOfMonth];

    const year = newDate.toLocaleDateString('ru', {year: 'numeric'});

    const finalDateStr = `${day} ${month}, ${year}`;

    return finalDateStr;
  }

  getWeekDate() {
    const firstWeekDay = this.getPreviousWeekDate();
    const weekArr = [];
    for (let i = 0; i <= AMOUNT_OF_DAYS; i++) {
      const date = new Date(Date.parse(firstWeekDay) + (i * MILLISECONDS_PER_DAY));    
      weekArr.push(date);
    }
    return weekArr;
  }

  formatforScale() {
    const weekArr = this.getWeekDate();
    const daysArray = this.getWeekDate().map(item => {
      return `${item.toLocaleDateString('ru', {day: 'numeric'})}, ${item.toLocaleDateString('ru', {weekday: 'short'})}`;
    });
    return daysArray;
  }
}