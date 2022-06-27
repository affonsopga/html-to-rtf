class FontFamily {
    static getRtfFontFamilyReference(value) {
        var fontFamilyTable = [
            {
                fontFamily: 'Arial',
                rtfChar: '\\f0'
            },
            {
                fontFamily: 'Arial Black',
                rtfChar: '\\f1'
            },
            {
                fontFamily: 'Courier New',
                rtfChar: '\\f2'
            },
            {
                fontFamily: 'Georgia',
                rtfChar: '\\f3'
            },
            {
                fontFamily: 'Tahoma',
                rtfChar: '\\f4'
            },
            {
                fontFamily: 'Times New Roman',
                rtfChar: '\\f5'
            },
            {
                fontFamily: 'Verdana',
                rtfChar: '\\f6'
            }
        ];

        if (value) {
            var rtfChar = '';

            fontFamilyTable.forEach(f => {
                if (f.fontFamily.toLowerCase() == value.toLowerCase()) {
                    rtfChar = f.rtfChar;
                }
            });

            return rtfChar;
        }

        return '';
    }
}

module.exports = FontFamily;
