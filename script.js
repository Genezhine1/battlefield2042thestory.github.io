function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("header_button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  const images = {
      'prologue': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/newsletter-background-image.jpg.adapt.3000w.jpg',
      'zero': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-01/steadfast-reckoning/bf-2042-page-bg-zero-hour-sr-xl.jpg.adapt.1920w.jpg',
      'master': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-02/the-dark-market/bf-2042-page-bg-season-2-crawford-lore-xl.jpg.adapt.1920w.jpg',
      'escalation': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-03/the-war-machine/bf-2042-page-bg-season-3-zain-lore-xl.jpg.adapt.1920w.jpg',
      'eleven': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/season-04/buried-secrets/bf-2042-page-bg-season4-blasco-lore-xl.jpg.adapt.1920w.jpg',
      'epilogue': 'https://media.contentapi.ea.com/content/dam/battlefield/battlefield-2042/common/newsletter-background-image.jpg.adapt.3000w.jpg',
  };

  const imageUrl = `url(${images[tabName]})`;
  if (imageUrl) {
      $('body').css('background-image', imageUrl);
  }
}
