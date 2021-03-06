import {
  openBigPost
} from './posts-fullscreen.js'

const picturesList = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const fillPosts = function (postsArray) {
  const picturesListFragment = document.createDocumentFragment();

  postsArray.forEach(element => {
    const {
      url,
      likes,
      comments,
    } = element;
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    openBigPost(pictureElement, element);
    picturesListFragment.appendChild(pictureElement);
  });

  picturesList.appendChild(picturesListFragment);
}

export {
  picturesList,
  fillPosts
};
