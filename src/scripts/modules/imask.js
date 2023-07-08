import IMask from 'imask';

const phoneFields = document.querySelectorAll('input[type="tel"');

if(phoneFields) {
  phoneFields.forEach(field => {
    console.log('imasjk')
    IMask(field, {
      mask: '+{7}(000)000-00-00'
    });
  });
}
