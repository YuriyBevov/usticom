document.addEventListener('click', (evt) => {
  const target = evt.target;

  if(target.classList.contains('modal-overlay')) {
    evt.target.classList.remove('active');
  }
});
