<div id="get-product-type" class="swiper-slide">
  <div class="card">
    <?php ianaSay("Você pode me dizer o tipo de produto?"); ?>
    
    <div class="choices">
      <label for="name">Tipo do produto</label>
      
      <label>
        <input type="radio" name="product-type" value="Adulto" required>
        Adulto
      </label>

      <label>
        <input type="radio" name="product-type" value="Infantil" required>
        Infantil
      </label>

    </div>

    <div class="controls">
      <button data-prev class="button-clear">Voltar</button>
      <button data-next>Ok</button>
    </div>
  </div>
</div>