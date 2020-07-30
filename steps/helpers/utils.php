<?php

  function ianaSay($what) { ?>
    <p class="iana-say">
      <span class="iana-say__profile">
        <img src="img/lana.png" alt="Bot Profile Image">
        <strong>Iana </strong>
      </span>
      <span class="iana-say__message">
        <?= $what ?>
      </span>
    </p>
  <?php }

?>