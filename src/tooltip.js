function showTooltip() {
    var id="";
    const elements = document.querySelectorAll('[tooltip]');
    elements.forEach((element) => {
      id = element.getAttribute('tooltip');
      element.setAttribute('data-tooltip', tooltips[id]);
    });
}