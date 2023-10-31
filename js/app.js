// const article = document.getElementById('vip')
// const articless = document.getElementsByTagName('article')
// const articles = document.getElementsByClassName('adsss')
// const articlessss = document.querySelector('article')



// console.log(article)
// console.log(articles)
// console.log(articless)
// console.log(articlessss)

// for(let text of document.querySelectorAll('h4')){
//     text.textContent = "Labas rytas lietuva+"
// }

// const ul = document.createElement('ul')
// const li = document.createElement('li')
// li.textContent = "Labai svarbus darbas";

// document.querySelector('section').appendChild(ul);
// document.querySelector('ul').appendChild(li)
const table = document.createElement("table");

  for (let i = 0; i < 3; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
      const cell = document.createElement("td");
      row.appendChild(cell);
    }

    table.appendChild(row);
  }


document.querySelector('section').appendChild(table);
