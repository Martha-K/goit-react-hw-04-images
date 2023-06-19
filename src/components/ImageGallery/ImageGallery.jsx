import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { List } from './styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { fetchPictures } from '../Request/Request';
import { useState, useEffect, useCallback } from 'react';

export const ImageGallery = ({ picturesName }) => {
  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState(null);
  const [descriptionPicture, setDescriptionPicture] = useState(null);
  const [loader, setLoader] = useState(false);

  const fetchImages = useCallback(() => {
    setLoader(true);

    fetchPictures(picturesName, currentPage)
      .then(data => {
        if (data.total === 0) {
          setLoader(false);
          alert('No results');
        } else {
          setTotalImages(data.totalHits);
          const nextImages = data.hits;
          setImages(prevState => [...prevState, ...nextImages]);
        }
      })
      .finally(() => setLoader(false))
      .catch(error => {});
  }, [picturesName, currentPage]);

  useEffect(() => {
    if (!picturesName) {
      return;
    }
    setImages([]);
    setCurrentPage(1);
    fetchImages();
  }, [picturesName, fetchImages]);

  const handleLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
    fetchImages();
  };

  const totalModal = item => {
    setImageModal(item?.largeImageURL);
    setDescriptionPicture(item?.tags);
    setShowModal(!showModal);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <List>
        {loader && <Loader />}
        {images.map(item => (
          <ImageGalleryItem
            src={item.webformatURL}
            alt={item.tags}
            id={item.id}
            key={item.id}
            onImageClick={() => totalModal(item)}
          />
        ))}
      </List>
      {totalImages > images.length && images.length > 0 && (
        <Button onNextPage={handleLoadMore} />
      )}
      {showModal && (
        <Modal
          imageModal={imageModal}
          descriptionPicture={descriptionPicture}
          onClose={onCloseModal}
        />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  picturesName: PropTypes.string,
};

