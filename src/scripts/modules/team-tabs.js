const tabs = document.querySelector('.team-tabs');

if(tabs) {
  const openers = tabs.querySelectorAll('.team-tabs__opener');

  const onClickHandler = (evt) => {
    const target = evt.currentTarget;
    target.parentNode.classList.toggle('active');
  };

  openers.forEach(btn => {
    btn.addEventListener('click', onClickHandler);
  });
}
