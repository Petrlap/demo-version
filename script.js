document.addEventListener("DOMContentLoaded", (event) => {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const openModalButton = document.getElementById("open-modal");
  const closeButton = document.querySelector(".close__button");

  openModalButton.addEventListener("click", () => {
    modalBody.innerHTML = getFormHTML(); // Загрузка формы в модальное окно
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  function getFormHTML() {
    return `
        <form class="form">
          <div class="form-container">
            <h1 class="form-container__title">Войти в систему</h1>
            <div class="functional">
              <div class="data">
                <fieldset class="inputs">
                  <input type="text" class="inputs__email" placeholder="Email/Телефон" name="email-phone" required />
                  <input type="password" class="inputs__password" placeholder="Пароль" name="password" required />
                </fieldset>
                <div class="checkbox">
                  <input class="checkbox__area" type="checkbox" id="checkbox-pas" />
                  <label class="checkbox__title" for="checkbox-pas">Запомнить пароль</label>
                </div>
                <a href="#" class="data__link">Восстановить</a>
              </div>
              <div class="buttons">
                <button type="submit" class="buttons__sign-in">Войти</button>
                <button type="button" class="buttons__registration">Зарегистрироваться</button>
              </div>
            </div>
          </div>
        </form>
      `;
  }
});
