import "../../../node_modules/flickity/css/flickity.css";
import "./about.css";

import {commitsCarousel, URL_FOR_GITHUB_API} from "../../js/constants/constants";
import GithubApi from "../../js/modules/GithubApi";
import DateTransformation from "../../js/components/DateTransformation";
import CommitCard from "../../js/components/CommitCard";
import CommitCardList from "../../js/components/CommitCardList";

const Flickity = require('flickity');
const flkty = new Flickity(commitsCarousel, {
  cellAlign: 'center',
  draggable: true,
  wrapAround: true,
  freeScroll: true
});

const githubApi = new GithubApi(URL_FOR_GITHUB_API);
const commitCard = (name, email, date, message, avatar, commitLink) => new CommitCard(name, email, date, message, avatar, commitLink);
const daysCounter = new DateTransformation(new Date());
const commitCardList = new CommitCardList(flkty, githubApi, commitCard, daysCounter); 

commitCardList.addCard();