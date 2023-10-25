import icons from 'url:../../img/icons.svg'; // Parcel 2

export default class View {
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data  // Takes Object or Array of Objects
   * @param {boolean} [render=true] 
   * @returns {undefined | string} A markup string is returned if render = false
   *@author Jonas 
   *@toDo Partially Finished
    */

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup); //updates the whole markup
  }


  update(data) 
  {
    if (!data || (Array.isArray(data) && data.length === 0))
    return this.renderError();

    this._data=data;
    const newMarkup = this._generateNewMarkup();

    this._parentElement.insertAdjacentHTML('afterbegin', newMarkup);
    // const newDOM = document.createRange().createContextualFragment(newMarkup);
    // const newElements = Array.from(newDOM.querySelectorAll('*'));
    // const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // newElements.forEach((newEl,i)=> {
    //   const curEl=curElements[i];
    //   if(!newEl.isEqualNode(curEl))
    //   {
    //     curEl.textContent=newEl.textContent;
    //   }
    // })
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._message) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
