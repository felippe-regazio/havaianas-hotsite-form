<div id="get-gender" class="swiper-slide">
  <div class="card">
    <?php ianaSay("Me confirme o seu gênero"); ?>
    
    <div class="choices">
      <label for="name">Seu gênero</label>
      
      <label>
        <input type="radio" name="gender" value="Masculino" required>
        Masculino
      </label>

      <label>
        <input type="radio" name="gender" value="Feminino" required>
        Feminino
      </label> 

      <label>
        <input type="radio" name="gender" value="Não informado" required>
        Prefiro não informar
      </label>           

    </div>

    <div class="controls">
      <button data-prev class="button-clear">Voltar</button>
      <button data-next>Ok</button>
    </div>
  </div>
</div>