const cheerio   = require('cheerio');
const $         = cheerio.load('');
const Color     = require('../color/color.class');
const AllowedStyleProperties = require('../allowed-style-properties/allowed-style-properties.class');

class Style {

  static getRtfColorTable() {
    return Color.getRtfColorTable();
  }

  static getStyleValueOfProperty(styleValue, property) {
      const fictitiousTagWithTruthStyle = `<span style="${styleValue}"></span>`;
      return $(fictitiousTagWithTruthStyle).css(property)
  }

    static getRtfReferencesInStyleProperty(styleValue) {
        if (styleValue === '') {
            return undefined;
        }

        let listOfRtfReferences = '';
        let allowedTags = AllowedStyleProperties.getAllowedTags();

        allowedTags.forEach(value => {
            let styleValueFromProperty = Style.getStyleValueOfProperty(styleValue, value.propertyName);
            if (styleValueFromProperty !== undefined && value.transform !== undefined) {
                if ( value.getSpecificStyleTag !== undefined ) {
                    const styleTag = value.getSpecificStyleTag(styleValue);
                    styleValueFromProperty = $(styleTag).css(value.propertyName);
                }
                listOfRtfReferences += value.transform(styleValueFromProperty);
            }
        });

        if (listOfRtfReferences === '') {
            return undefined;
        }

        return listOfRtfReferences;
    }
}

module.exports = Style;
