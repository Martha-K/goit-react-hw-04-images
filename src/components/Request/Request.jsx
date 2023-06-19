export async function fetchPictures(picturesName, currentPage) {
  const KEY = '35106389-b5a872e61a54744fed1e01881';

  const apiUrl = `https://pixabay.com/api/?q=${picturesName}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}
