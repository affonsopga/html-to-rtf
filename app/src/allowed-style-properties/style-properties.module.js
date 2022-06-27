const Alignment = require('../alignment/alignment.class');
const Color     = require('../color/color.class');
const FontFamily = require('../font-family/font-family.class');
const FontSize  = require('../font-size/font-size.class');
const Indentation = require('../indentation/indentation.class');
const LineHeight = require('../line-height/line-height.class');

module.exports = [
    {
        propertyName: 'color',
        allowed: true,
        transform: value => Color.getRtfReferenceColor(value)
    },
    {
        propertyName: 'font-size',
        allowed: true,
        transform: value => FontSize.getRtfFontSizeReference(value)
    },
    {
        propertyName: 'font-family',
        allowed: true,
        transform: value => FontFamily.getRtfFontFamilyReference(value),
        getSpecificStyleTag: (styleValue) =>
            `<span style="${styleValue
            .replace(new RegExp('\'', 'g'), '')
            .split(',')[0]}"></span>`

    },
    {
        propertyName: 'line-height',
        allowed: true,
        transform:  value => LineHeight.getRtfReference(value)
    },
    {
        propertyName: 'margin-left',
        allowed: true,
        transform:  function (value) { return  Indentation.getRtfReference(value, this.propertyName); }
    },
    {
        propertyName: 'margin-right',
        allowed: true,
        transform:  function (value) { return  Indentation.getRtfReference(value, this.propertyName); }
    },
    {
        propertyName: 'padding-left',
        allowed: true,
        transform:  function (value) { return  Indentation.getRtfReference(value, this.propertyName); }
    },
    {
        propertyName: 'padding-right',
        allowed: true,
        transform:  function (value) { return  Indentation.getRtfReference(value, this.propertyName); }
    },
    {
        propertyName: 'text-align',
        allowed: true,
        transform: value => Alignment.getRtfAlignmentReference(value)
    },
    {
        propertyName: 'text-indent',
        allowed: true,
        transform:  function (value) { return  Indentation.getRtfReference(value, this.propertyName); }
    },
    {
        propertyName: 'background',
        allowed: false
    }
];
