(function () {
  const form = document.getElementById('main-form');

  const swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,
    preventInteractionOnTransition: true,
    on: {
      slideChangeTransitionEnd: sw => {
        const input = swiper.slides[swiper.activeIndex].querySelector('input');
        if (input) input.focus();
      }
    } 
  });

  document.querySelectorAll('.swiper-slide').forEach((slide, index) => {
    slide.dataset.index = index;
  });

  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', e => {
      const destEl = document.querySelector(`#${el.dataset.goto}`);
      const index = +(destEl.dataset.index);
      
      if (index) {
        setTimeout(() => swiper.slideTo(index), 200);
      }
    });
  });

  document.querySelectorAll('[data-next]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      
      const stepInputs = swiper.slides[swiper.activeIndex].querySelectorAll('input, textarea');

      if (!stepInputs.length) {
        return swiper.slideNext();
      } else {
        stepInputs.forEach(input => {
          input.blur();
          const stepValid = input.checkValidity();
          stepValid ? swiper.slideNext() : form.reportValidity();        
        });
      }
    });
  });

  document.querySelectorAll('[data-prev]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();

      swiper.slidePrev();
    });
  });

  // ------------------------------------------------------------

  document.querySelectorAll('input[type="file"]').forEach(inputFile => {
    inputFile.addEventListener('change', e => {
      const fileURL = URL.createObjectURL(e.target.files[0]);
      e.target.parentElement.querySelector('.preview img[src]').src = fileURL;
    });
  });

  document.querySelectorAll('.preview-remove-image').forEach(removeImgPreview => {
    removeImgPreview.addEventListener('click', e => {
      e.preventDefault();
      
      removeImgPreview.parentElement.querySelector('img').src = '';
      removeImgPreview.parentElement.parentElement.querySelector('input[type="file"]').value = '';
    });
  });

  document.querySelectorAll('.preview img').forEach(previewImg => {
    previewImg.addEventListener('click', e => {
      previewImg.parentElement.parentElement.querySelector(`input[type="file"]`).click();
    });
  });

  // ------------------------------------------------------------

  Inputmask({ mask: "999.999.999-9[9]", autoUnmask: true }).mask('[name="cpf"]');
  Inputmask({ mask: "99/99/9999" }).mask('[name="birth"]');
  Inputmask({ mask: "99/99/9999" }).mask('[name="purchase-date"]');
  Inputmask({ mask: "99999-999" }).mask('[name="cep"]');
  Inputmask({ mask: "(99) [9]9999-9999", jitMasking: true }).mask('[name="cellphone"]');
  Inputmask({ mask: "(99) [9]9999-9999", jitMasking: true }).mask('[name="extra-contact"]');
})();