import React from 'react'
import Portrait from './Portrait'

const ImageList = (props) => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
      const images = importAll(require.context('../Pictures/Portraits', false, /\.(png|jpe?g|svg)$/))

      const hero_names = Object.keys(images)

    return (
        <div className='image-list'>
            {
                hero_names.map((hero_name) => (
                    <Portrait source={images[hero_name].default} name={hero_name.replace('.jpg','').replaceAll('_', ' ')} onClick={props.onClick}/>
                ))
            }
        </div>
    )
}

export default ImageList
