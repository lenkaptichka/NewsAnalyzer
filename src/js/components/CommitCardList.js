import {NUMBER_OF_COMMITS} from "../constants/constants";

export default class CommitCardList {
  constructor(container, githubApi, newCommitCard, dateConverter) {
    this.container = container;
    this.githubApi = githubApi;
    this.newCommitCard = newCommitCard;
    this.dateConverter = dateConverter;
  }

  addCard() {
    this.githubApi.getCommits()
    .then((data) => { 
      this._commitsArrCheck(data); //Сначала мы получаем массив коммитов и отправляем его на проверку длины
    })

    .catch((err) => {
      console.log('Ошибка. Запрос не выполнен: ', err);
    });
  }

  _commitsArrCheck(data) {
    let setOfRecentCommits = [];
    if (data.length > 20) {
      setOfRecentCommits = data.slice(0, data.lengt - NUMBER_OF_COMMITS); // Если коммитов было больше 20, то берём только последние 20
    } else {
      setOfRecentCommits = data; // Если меньше, то все
    }
    this._render(setOfRecentCommits); // Полученный массив, в котором не более 20 элементов, передаём на отрисовку
  }

  _render(commitsArr) {
    for (let i = 0; i < commitsArr.length; i++) {
      const cardDate = this.dateConverter.formatForCard(commitsArr[i].commit.committer.date); // Преобразуем дату в нужный формат
      const card = this.newCommitCard(commitsArr[i].commit.committer.name, 
        commitsArr[i].commit.committer.email, 
        cardDate, 
        commitsArr[i].commit.message,
        commitsArr[i].author.avatar_url);
      const commitCardElem =  card.create();
      this.container.append(commitCardElem);
    }
  }
}