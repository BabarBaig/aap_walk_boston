
const top5 = boston.data.slice(0, 5)
top5.sort((person1, person2) => parseInt(person2[11]) - parseInt(person1[11]))

function buildTop5(person){
  if (parseInt(person[11]) > parseInt(top5[4][11])){
    top5.splice(4, 1, person)
  }
  top5.sort((person1, person2) => parseInt(person2[11]) - parseInt(person1[11]))
}

function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;

  for (let i = 0; i < len; i++){
    buildTop5(people[i])
  }

  let html = '';
  for (let i = 0; i < 5; i++) {
    html +=
      '<li class="topSalaries">' +
      '<h2>' + top5[i][8] + '</h2>' +
      '<h3>' + top5[i][11] + '</h3>';
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  container.innerHTML = '<ul id = "data">' + html + '</ul>';
}

renderPosts(boston, document.getElementById('container'));
