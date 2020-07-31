<div id="get-address" class="swiper-slide">
  <div class="card">
    <?php ianaSay("Me o seu endereço por favor?"); ?>
    
    <div class="choices">
      <label for="name">Seu CEP</label>
      <input type="text" name="cep" autocomplete="off" data-cep-search required/>

      <label for="name">Sua Rua</label>
      <input type="text" autocomplete="off" name="street" required/>

      <label for="name">Seu Bairro</label>
      <input type="text" autocomplete="off" name="neighborhood" required/>      

      <label for="name">Número da sua residência</label>
      <input type="text" autocomplete="off" name="house-number" required/>

      <label for="name">Complemento</label>
      <input type="text" autocomplete="off" name="complement"/>                  
    </div>

    <div class="controls">
      <button data-prev class="button-clear">Voltar</button>
      <button data-next>Ok</button>
    </div>
  </div>
</div>