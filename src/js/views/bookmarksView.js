import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2
import previewView from './previewView.js';
class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find some nice recipes';
  _message = '';


  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
//   _generateMarkupPreview(item) {
//     const id = window.location.hash.slice(1);

//     return `
//       <li class="preview">
//         <a class="preview__link ${
//           item.id === id ? 'preview__link--active' : ''
//         }" href="#${item.id}">
//           <figure class="preview__fig">
//             <img src="${item.image}" alt="${item.title}" />
//           </figure>
//           <div class="preview__data">
//             <h4 class="preview__title">${item.title}</h4>
//             <p class="preview__publisher">${item.publisher}</p>
//             <div class="preview__user-generated ${
//               item.key ? '' : 'hidden'
//             }">
//               <svg>
//               <use href="${icons}#icon-user"></use>
//               </svg>
//             </div>
//           </div>
//         </a>
//       </li>
//     `;
//   }
}

export default new BookmarksView();
