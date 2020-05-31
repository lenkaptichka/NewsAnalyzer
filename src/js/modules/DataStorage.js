export default  class DataStorage {
  addTotalNumberOfArticles(data) {
    localStorage.setItem('totalResults', JSON.stringify(data));
  }

  getTotalNumberOfArticles() {
    return JSON.parse(localStorage.getItem('totalResults'));
  } 

  addNewsData(data) {
    localStorage.setItem('searhResults', JSON.stringify(data));
  }

  getNewsData() {
    return JSON.parse(localStorage.getItem('searhResults'));
  }

  addPartOfFullStorageToAddCards(data) {
    localStorage.setItem('arrayToAddCards', JSON.stringify(data));
  }

  getPartOfFullStorageToAddCards() {
    return JSON.parse(localStorage.getItem('arrayToAddCards'));  
  }

  deleteThreeCardsFromStorage() {
    const cardsArr = this.getPartOfFullStorageToAddCards();
    this.addPartOfFullStorageToAddCards((cardsArr.slice(3 - cardsArr.length)));
  }

  addNewsRequestWord(word) {
    localStorage.setItem('requestWord', JSON.stringify(word));
  }

  getNewsRequestWord() {
    return JSON.parse(localStorage.getItem('requestWord'));
  }

  clearDataStorage() {
    localStorage.clear();
  }
}
 