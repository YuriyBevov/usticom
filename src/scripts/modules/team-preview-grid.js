const cards = document.querySelectorAll('.staff-preview-card');

if(cards.length) {
  console.log(cards);
  const showMoreBtn = document.querySelector('.team-preview-grid__btn');
  const windowWidth = window.innerWidth;
  const CARDS_TO_SHOW = 3;

  let flag = true;

  const onClickShowItems = () => {
    showItems();

    showMoreBtn.removeEventListener('click', onClickShowItems);
  }

  const showItems = () => {
    cards.forEach(card => {
      card.classList.contains('hidden') ?
      card.classList.remove('hidden') : null;
    });
    showMoreBtn.classList.add('hidden');
  }

  const hideItems = () => {
    flag = false;

    cards.forEach((card, index) => {
      if(index + 1 > CARDS_TO_SHOW) {
        !card.classList.contains('hidden') ?
        card.classList.add('hidden') : null;
      }
    })

    showMoreBtn.classList.remove('hidden');
    showMoreBtn.addEventListener('click', onClickShowItems);
  }

  if(windowWidth < 501) {
    hideItems();
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth < 501) {
      if(flag) {
        hideItems();
      }
    } else {
      showItems();

      flag = true;
    }
  })
}
