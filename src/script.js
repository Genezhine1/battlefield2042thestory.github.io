function openTab(evt = undefined, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }

  tablinks = document.getElementsByClassName("header_button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  tablinks = document.getElementsByClassName("extra_button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  if (tabName !== 'home') {
    document.getElementById(tabName.charAt(0).toUpperCase() + tabName.slice(1)).className += " active";
  }

  const images = {
      'home': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/newsletter-background-image.jpg.adapt.3000w.jpg',
      'prologue': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/newsletter-background-image.jpg.adapt.3000w.jpg',
      'zero': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-01/steadfast-reckoning/bf-2042-page-bg-zero-hour-sr-xl.jpg.adapt.1920w.jpg',
      'master': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-02/the-dark-market/bf-2042-page-bg-season-2-crawford-lore-xl.jpg.adapt.1920w.jpg',
      'escalation': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-03/the-war-machine/bf-2042-page-bg-season-3-zain-lore-xl.jpg.adapt.1920w.jpg',
      'eleven': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-04/buried-secrets/bf-2042-page-bg-season4-blasco-lore-xl.jpg.adapt.1920w.jpg',
      'epilogue': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/newsletter-background-image.jpg.adapt.3000w.jpg',
      'dawn': './src/resources/season5newdawnbg.jpg',
      'dark': './src/resources/season6darkcreationsbg.jpg',
      'turning': './src/resources/season7turningpointbg.jpg',
      'continue': './src/resources/year2battlecontinuesbg.jpg',
      'forever': './src/resources/theforeverwarbg.jpg',
      'expanded': './src/resources/expandeduniversebg.jpg'
  };

  const pagesIndices = {
    'home': 0,
    'prologue': 1,
    'zero': 2,
    'master': 3,
    'escalation': 4,
    'eleven': 5,
    'epilogue': 6,
    'dawn': 7,
    'dark': 8,
    'turning': 9,
    'continue': 10,
    'forever': 11
  }

  window.pageIndex = pagesIndices[tabName];

  const imageUrl = `url(${images[tabName]})`;
  if (imageUrl) {
      $('body').css('background-image', imageUrl);
  }

}

function navigate(evt, direction) {
  const pageIndices = {
    'home': 0,
    'prologue': 1,
    'zero': 2,
    'master': 3,
    'escalation': 4,
    'eleven': 5,
    'epilogue': 6,
    'dawn': 7,
    'dark': 8,
    'turning': 9,
    'continue': 10,
    'forever': 11
  };

  if (direction === 0) {
    openTab(undefined, 'home');
  } 
  else {
    const currentIndex = window.pageIndex;
    const nextIndex = currentIndex + direction;
    const nextTabName = Object.keys(pageIndices).find(key => pageIndices[key] === nextIndex);
    console.log(window.pageIndex)

    if (nextTabName) {
      openTab(evt, nextTabName);
    }
  }
}