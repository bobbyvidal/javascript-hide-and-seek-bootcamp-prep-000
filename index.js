httpserver;
function getFirstSelector(selector) {
  return document.querySelector(selector);
}
function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target');
}
function increaseRankBy(n) {
  var rankUp = document.getElementById('app').querySelectorAll('u1.ranked-list');
  for (let i = 0; i < rankUp.length; i++){
    rankUp[i].innerHTML = ((parseInt(rankUp[i].innerHTML)) + n)
    }
}