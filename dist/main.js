"use strict";!function(){document.getElementById("main-form");var a=new Swiper(".swiper-container",{allowTouchMove:!1,preventInteractionOnTransition:!0,on:{slideChangeTransitionEnd:function(){var e=a.slides[a.activeIndex],t=e.querySelector("input");"render-resume"===e.id&&generateFormResume(),t&&t.focus()}}});document.querySelectorAll(".swiper-slide").forEach(function(e,t){e.dataset.index=t}),document.querySelectorAll("[data-goto]").forEach(function(n){n.addEventListener("click",function(e){var t=+document.querySelector("#".concat(n.dataset.goto)).dataset.index;t&&setTimeout(function(){return a.slideTo(t)},200)})}),document.querySelectorAll("[data-next]").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=a.slides[a.activeIndex];if(!t.querySelectorAll("input, textarea").length)return a.slideNext();validateForm(t)&&a.slideNext()})}),document.querySelectorAll("[data-prev]").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),a.slidePrev()})}),document.querySelectorAll('input[type="file"]').forEach(function(e){e.addEventListener("change",function(e){var t=URL.createObjectURL(e.target.files[0]);e.target.parentElement.querySelector(".preview img[src]").src=t})}),document.querySelectorAll(".preview-remove-image").forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),t.parentElement.querySelector("img").src="",t.parentElement.parentElement.querySelector('input[type="file"]').value=""})}),document.querySelectorAll(".preview img").forEach(function(t){t.addEventListener("click",function(e){t.parentElement.parentElement.querySelector('input[type="file"]').click()})}),document.querySelectorAll("[data-cep-search]").forEach(function(t){t.addEventListener("blur",function(e){return!(!t.value.trim().length||!window.fetch)&&(t.parentElement.parentElement.style.opacity="0.5",t.parentElement.parentElement.style.pointerEvents="none",void fetch("https://viacep.com.br/ws/".concat(t.value,"/json/unicode/")).then(function(e){return e.json()}).then(function(e){clearErrors(),document.querySelector('[name="street"]').value=e.logradouro||"",document.querySelector('[name="complement"]').value=e.complemento||"",document.querySelector('[name="neighborhood"]').value=e.bairro||"",document.querySelector('[name="city"]').value=e.localidade||"",document.querySelector('[name="region"]').value=e.uf||"",e.logradouro||e.bairro||e.cidade||e.uf||toast("Cep não encontrado automaticamente, por favor, preencha manualmente")}).catch(function(){toast("Cep não encontrado automaticamente, por favor, preencha manualmente")}).finally(function(){t.parentElement.parentElement.style.opacity="1",t.parentElement.parentElement.style.pointerEvents="initial"}))})}),document.querySelectorAll("input, select, textarea").forEach(function(e){e.setAttribute("autocomplete","off")}),Inputmask({mask:"999.999.999-9[9]",autoUnmask:!0}).mask('[name="cpf"]'),Inputmask({mask:"99/99/9999",autoUnmask:!0}).mask('[name="birth"]'),Inputmask({mask:"99/99/9999",autoUnmask:!0}).mask('[name="purchase-date"]'),Inputmask({mask:"99999-999",autoUnmask:!0}).mask('[name="cep"]'),Inputmask({mask:"(99) [9]9999-9999",autoUnmask:!0,jitMasking:!0}).mask('[name="cellphone"]'),Inputmask({mask:"(99) [9]9999-9999",autoUnmask:!0,jitMasking:!0}).mask('[name="extra-contact"]')}();