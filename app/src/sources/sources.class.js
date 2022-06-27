const MyString = require('../string/my-string.class');
const Style = require('../style/style.class');
const Indentation = require('../indentation/indentation.class');

const request = require('sync-request');
const imageType = require('image-type');

const IMG_MAP = {
    'png': '\\pngblip',
    'jpg': '\\jpegblip',
    'jpeg': '\\jpegblip',
    'bmp': '\\wbitmap0\\picw6400\\pich4260\\wbmbitspixel1\\wbmplanes1\\wbmwidthbytes220'
}

class Sources {
  static getRtfSourcesReference(attributes) {
      const src = attributes.src;
      
      const width = attributes.width;
      const height = attributes.height;

      let sizeStyle = width > 0 ? '\\picwgoal' + width : '';
      sizeStyle += height > 0 ? '\\pichgoal' + height : '';
      
      let buffer, imgType;
      if(src.includes('http')) {
        const response = request('GET', src); //await axios.get(src,  { responseType: 'arraybuffer' });
        buffer = Buffer.from(response.body, "utf-8");
        imgType = imageType(buffer);
        return IMG_MAP[imgType.ext.toLowerCase()] + sizeStyle + ' ' + buffer.toString('hex');
      } else {
        imgType = MyString.findTextBetween(src, 'data:image/', ';' ) || '';
        buffer = new Buffer( src.replace( 'data:image/'+ imgType + ';base64,', '' ), 'base64' );
        return IMG_MAP[imgType.toLowerCase()] + sizeStyle + ' ' + buffer.toString('hex');
      }
  }

  static getStyleInImgTag( style, property ) {
      if ( style ) {
          const value = Style.getStyleValueOfProperty( style, property) || '0';
          const multiplier = Indentation.getMultiplier( value ) || 0;
          return Math.trunc(parseFloat(value) * multiplier);
      }
  }
}

module.exports = Sources;
