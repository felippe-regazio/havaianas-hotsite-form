function validateEmail(email) {
  var regex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*(\+[a-z0-9-]+)?@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
  return regex.test(email);
}

function validateCPF(cpf) {  
  cpf = cpf.replace(/[^\d]+/g,'');    
  if(cpf == '') return false; 
  if (cpf.length != 11 || 
      cpf == "00000000000" || 
      cpf == "11111111111" || 
      cpf == "22222222222" || 
      cpf == "33333333333" || 
      cpf == "44444444444" || 
      cpf == "55555555555" || 
      cpf == "66666666666" || 
      cpf == "77777777777" || 
      cpf == "88888888888" || 
      cpf == "99999999999")
          return false;       
  let add = 0;    
  for (let i=0; i < 9; i ++)       
      add += parseInt(cpf.charAt(i)) * (10 - i);  
      let rev = 11 - (add % 11);  
      if (rev == 10 || rev == 11)     
          rev = 0;    
      if (rev != parseInt(cpf.charAt(9)))     
          return false;
  add = 0;    
  for (let i = 0; i < 10; i ++)        
      add += parseInt(cpf.charAt(i)) * (11 - i);  
  rev = 11 - (add % 11);  
  if (rev == 10 || rev == 11) 
      rev = 0;    
  if (rev != parseInt(cpf.charAt(10)))
      return false;       
  return true;   
}

function toast (message, type = 'error') {

    let top = 50;
    let duration = 7000;

    document.querySelectorAll('.toast').forEach(t => {
        top += t.offsetHeight + 6;
    });

    let toast = document.createElement('div');
    toast.style.top = `${top}px`;
    toast.classList.add('toast', type);
    toast.innerHTML = `<span>${message}</span>`;
    document.body.insertAdjacentElement('beforeend', toast);

    toast.addEventListener('click', () => toast.remove());
    setTimeout(function () { toast.remove() }, duration);
}

function validateForm (holder) {

    let errors = [];

    holder.querySelectorAll('[required]').forEach(input => {
        if (!input.value.trim()) {
            errors.push('Ops, há campos obrigatórios vazios');
            input.classList.add('has-error');
        }
    });

    holder.querySelectorAll('[name="cpf"], .is-cpf').forEach(input => {
        if (!validateCPF(input.value)) {
            errors.push('CPF Inválido');
            input.classList.add('has-error');
        }
    });

    holder.querySelectorAll('[type="email"], .is-email').forEach(input => {
        if (!validateEmail(input.value)) {
            errors.push('E-Mail Inválido');
            input.classList.add('has-error');
        }
    });

    holder.querySelectorAll('[minlength]').forEach(input => {
        const min = +input.getAttribute('minlength');

        if (input.value.length < min) {
            errors.push('Há campos com valores incompletos');
            input.classList.add('has-error');
        }
    });

    if (errors.length) {
        new Set(errors).forEach(error => {
            toast(error);
        });

        return false;
    }

    return true;
}

document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('focus', e => {
        input.classList.remove('has-error');
    });
});