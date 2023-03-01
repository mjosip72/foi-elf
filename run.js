
(() => {

  let host = 'https://mjosip72.github.io/foi-elf/';
  if(document.location.hostname == 'localhost') host = '';

  let items = [
    {
      url: 'https://elf.foi.hr/course/view.php?id=595',
      img: 'mr.png',
      text: 'Mreže računala'
    },
    {
      url: 'https://elf.foi.hr/course/view.php?id=602',
      img: 'oi.png',
      text: 'Operacijska istraživanja'
    },
    {
      url: 'https://elf.foi.hr/course/view.php?id=654',
      img: 'owt.png',
      text: 'Osnove web tehnologija'
    },
    {
      url: 'https://elf.foi.hr/course/view.php?id=662',
      img: 'pi.png',
      text: 'Programsko inženjerstvo'
    },
    {
      url: 'https://elf.foi.hr/course/view.php?id=660',
      img: 'siv.png',
      text: 'Statistika i vjerojatnost'
    },
    {
      url: 'https://elf.foi.hr/course/view.php?id=792',
      img: 'tzk.png',
      text: 'Tjelesna i zdravstvena kultura'
    },
    {
      url: 'https://elf.foi.hr/course/view.php?id=661',
      img: 'uiu.png',
      text: 'Upravljanje informatičkim uslugama'
    }
  ];

  function appendItem(item, parent) {

    let hyperlink = document.createElement('a');
    hyperlink.setAttribute('href', item.url);

    let itemDiv = document.createElement('item');
    itemDiv.setAttribute('class', 'item');

    let img = document.createElement('img');
    img.setAttribute('src', host + item.img);

    let text = document.createElement('div');
    text.setAttribute('class', 'text');
    text.innerText = item.text;

    itemDiv.appendChild(img);
    itemDiv.appendChild(text);

    hyperlink.appendChild(itemDiv);
    parent.appendChild(hyperlink);

  }

  function loadStyle(callback) {

    let head = document.querySelector('head');

    let link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', host + 'style.css');

    link.onload = callback;
    head.appendChild(link);

  }

  let myBlock = document.querySelector('#elf-html-block');

  let contentDiv = document.createElement('div');
  contentDiv.setAttribute('class', 'content');

  for(let i = 0; i < items.length; i++) {
    appendItem(items[i], contentDiv);
  }

  myBlock.appendChild(contentDiv);

  loadStyle(() => {
    myBlock.style.display = 'block';
  });

})();
