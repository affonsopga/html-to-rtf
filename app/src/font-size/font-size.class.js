const FONT_SIZE_RTF_REFERENCE = "\\fs";
const ONE_PIXEL_IN_POINT = 0.75;
const NAMED_FONT_SIZES = {
    medium: "14px",
    larger: "16px",
    smaller: "12px"
};

class FontSize {
    static getRtfFontSizeReference(value) {
        if (!value) {
            return "";
        }

        if (typeof value !== "string") {
            return "";
        }

        value = value.toLowerCase();

        switch (value) {
            case "medium":
                value = NAMED_FONT_SIZES.medium;
                break;

            case "larger":
                value = NAMED_FONT_SIZES.larger;
                break;

            case "smaller":
                value = NAMED_FONT_SIZES.smaller;
                break;

            default:
                break;
        }

        if (value.includes("px")) {
            return this.getFontSizeReferenceInPx(value);
        }

        if (value.includes("pt")) {
            return this.getFontSizeReferenceInPt(value);
        }

        return "";
    }

    static getFontSizeReferenceInPx(valueInPixel) {
        return (
            FONT_SIZE_RTF_REFERENCE +
            Math.trunc(parseFloat(valueInPixel) * ONE_PIXEL_IN_POINT)
        );
    }

    static getFontSizeReferenceInPt(valueInPoints) {
        return (
            FONT_SIZE_RTF_REFERENCE + Math.trunc(parseFloat(valueInPoints) * 2)
        );
    }
}

module.exports = FontSize;
