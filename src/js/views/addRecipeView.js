import View from "./View.js";
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
_parentElement = document.querySelector('.upload');

_window = document.querySelector('.add-recipe-window');

_overlay = document.querySelector('.overlay');

_btnOpen = document.querySelector('.nav__btn--add-recipe');

_btnClose = document.querySelector('.btn--close-modal');

_toggleWindow() {
    const that = this;
    that._overlay.classList.add('hidden');
        that._window.classList.add('hidden');
}

_addHandlerShowWindow() {
    const that = this;
    this._btnOpen.addEventListener('click',function() {
        that._overlay.classList.remove('hidden');
        that._window.classList.remove('hidden');
    })

    this._btnClose.addEventListener('click',function(){
        that._overlay.classList.add('hidden');
        that._window.classList.add('hidden');

    })
    this._overlay.addEventListener('click',function(){
        that._overlay.classList.add('hidden');
        that._window.classList.add('hidden');
    })
}

_addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit',function(e) {
        e.preventDefault();
        const dataArr = [...new FormData(this)];
        const data =Object.fromEntries(dataArr); //convert array to Object
        console.log(data);
        handler(data);
    });
}


}




export default new AddRecipeView();