import {  useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './SearchBar/SearchBar';
import { Div } from './styledApp';


export const App = () => {
const [picturesName, setPicturesName] = useState('')
 
  
    return (
      <Div>
        <SearchBar onSubmit={setPicturesName} />
        <ImageGallery picturesName={picturesName} />
      </Div>
    );
  
}
