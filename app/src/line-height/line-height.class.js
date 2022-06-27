const LINE_HEIGHT_RTF_REFERENCE = "\\sl";
const SL_MULT = "\\slmult1"
const PT_TO_SL_MULTIPLIER = 20;

class LineHeight {
    static getRtfReference(value) {

        if (!value) {
            return "";
        }

        if (typeof value !== "string") {
            return "";
        }

        value = value.toLowerCase();

        const multiplier = this.getMultiplier(value);

        if (multiplier === undefined) {
            return "";
        }

        return this.getReference(value, multiplier, LINE_HEIGHT_RTF_REFERENCE);
    }

    static getMultiplier(value) {
        if (value.includes("pt")) {
            return PT_TO_SL_MULTIPLIER;
        }

        return undefined;
    }

    static getReference(value, multiplier, rtfReference) {
        return (
            rtfReference +
            Math.trunc(parseFloat(value) * multiplier)
            + SL_MULT
        );
    }
}

module.exports = LineHeight;
