const tabs = document.querySelector('.team-tabs');

if(tabs) {
  const openers = tabs.querySelectorAll('.team-tabs__opener');

  const onClickHandler = (evt) => {
    const target = evt.currentTarget;

    //if(target.parentNode.classList.contains('active')) return;

    //document.querySelector('.team-tabs__item.active').classList.remove('active');
    target.parentNode.classList.toggle('active');
  };

  openers.forEach(btn => {
    btn.addEventListener('click', onClickHandler);
  });
}
