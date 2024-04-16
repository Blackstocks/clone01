class SmoothCornersPainter {
    static get inputProperties() {
        return ["--smooth-corners"]
    }
    superellipse($, e, t = 4, s) {
        Number.isNaN(t) && (t = 4), (void 0 === s || Number.isNaN(s)) && (s = t), t > 100 && (t = 100), s > 100 && (s = 100), t < 1e-11 && (t = 1e-11), s < 1e-11 && (s = 1e-11);
        let r = 2 / t,
            o = s ? 2 / s : r,
            i = 2 * Math.PI / 360,
            l = t => {
                let s = Math.cos(t),
                    i = Math.sin(t);
                return {
                    x: Math.abs(s) ** r * $ * Math.sign(s),
                    y: Math.abs(i) ** o * e * Math.sign(i)
                }
            };
        return Array.from({
            length: 360
        }, ($, e) => l(e * i))
    }
    paint($, e, t) {
        let [s, r] = t.get("--smooth-corners").toString().replace(/ /g, "").split(","), o = e.width / 2, i = e.height / 2, l = this.superellipse(o, i, parseFloat(s), parseFloat(r));
        $.fillStyle = "#000", $.setTransform(1, 0, 0, 1, o, i), $.beginPath();
        for (let n = 0; n < l.length; n++) {
            let {
                x: a,
                y: h
            } = l[n];
            0 === n ? $.moveTo(a, h) : $.lineTo(a, h)
        }
        $.closePath(), $.fill()
    }
}
registerPaint("smooth-corners", SmoothCornersPainter);