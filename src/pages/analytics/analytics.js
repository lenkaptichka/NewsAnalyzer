import "./analytics.css";

import DateTransformation from "../../js/components/DateTransformation";
import DataStorage from "../../js/modules/DataStorage";
import Statistics from "../../js/components/Statistics";

const daysCounter = new DateTransformation(new Date());
const dataStorage = new DataStorage();
const storageState = {
  query: dataStorage.getNewsRequestWord(),
  data: dataStorage.getNewsData(),
  totalResults: dataStorage.getTotalNumberOfArticles()
};

const statistics = new Statistics(storageState, daysCounter);

statistics.setSearchTitle(); // Отображение заголовка
statistics.addSubtitleNumbers(); // Количество статей за неделю и упоминаний в заголовках
statistics.addDataToYScale(); // Постановка точек на оси Y
statistics.renderScaleValue(); // Построение линейной диаграммы