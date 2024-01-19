// Credits to Statssolver

$("#greater").hide();
$("#notequal").hide();
$("#explanation").hide();
$("#greatert").hide();
$("#notequalt").hide();
$("#typeexamples").hide();
$("#hypexamples").show();
$("#switchhypothesis").hide();
$("#switchtype").show();
$("#datainput").hide();
$("#valuesinput").show();
$("#hypothesis").show();
$("#type2error").hide();
$("#581773186").hide();
$("#hypoutputs").hide();
$("#testinput").hide();
$("#muknottest").hide();
$("#degfreedom").hide();
$("#alphaval").hide();
$("#footer").hide();
type = "hypothesis";
inputtype = "values";
alphatype = "premade";
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
});
function alphachange() {
    var a = document.getElementById("alpha").value;
    if (a == "other") {
        $("#alphaval").show();
        $("#alpha").hide();
        alphatype = "custom"
    }
}
function sum(a) {
    if (toString.call(a) !== "[object Array]") {
        return false
    }
    var c = 0;
    for (var b = 0; b < a.length; b++) {
        if (isNaN(a[b])) {
            continue
        }
        c += Number(a[b])
    }
    return c
}
function avg(a) {
    return sum(a) / a.length
}
function toFixing(a, c) {
    var b = new RegExp("^-?\\d+(?:.\\d{0," + (c || -1) + "})?");
    return a.toString().match(b)[0]
}
function switchtype() {
    type = "type2error";
    $("#hypothesis").hide();
    $("#type2error").show();
    $("#switchtype").hide();
    $("#switchhypothesis").show();
    $("#hypoutputs").hide();
    $("#typeoutputs").show();
    $("#hypexamples").hide();
    $("#typeexamples").show()
}
function switchhypothesis() {
    type = "hypothesis";
    $("#hypothesis").show();
    $("#type2error").hide();
    $("#switchhypothesis").hide();
    $("#switchtype").show();
    $("#hypoutputs").show();
    $("#typeoutputs").hide();
    $("#typeexamples").hide();
    $("#hypexamples").show()
}
function switchzt() {
    var a = document.getElementById("teststat").value;
    if (a == "t") {
        $("#degfreedom").show()
    } else {
        if (a == "z") {
            $("#degfreedom").hide()
        }
    }
}
function switchdata() {
    $("#datainput").show();
    $("#valuesinput").hide();
    inputtype = "data"
}
function switchtest() {
    $("#testinput").show();
    $("#datainput").hide();
    inputtype = "test"
}
function switchvalues() {
    $("#testinput").hide();
    $("#valuesinput").show();
    inputtype = "values"
}

function parameter() {
    var a = document.getElementById("parameter1").value;
    if (a == "mean") {
        document.getElementById("parameter2").innerHTML = "&mu;";
        document.getElementById("muknotvalue").innerHTML = "&mu;₀";
        $("#sd1").show();
        $("#sd2").show();
        $("#sd3").show();
        document.getElementById("samplestat").innerHTML = "$\\bar{x}$"
    } else {
        if (a == "proportion") {
            document.getElementById("parameter2").innerHTML = "p";
            document.getElementById("muknotvalue").innerHTML = "p₀";
            $("#sd1").hide();
            $("#sd2").hide();
            $("#sd3").hide();
            document.getElementById("samplestat").innerHTML = "$\\bar{p}$"
        } else {
            if (a == "variance") {
                document.getElementById("parameter2").innerHTML = "&#963;²";
                document.getElementById("muknotvalue").innerHTML = "&#963;₀²";
                $("#sd1").hide();
                $("#sd2").hide();
                $("#sd3").hide();
                document.getElementById("samplestat").innerHTML = "$s$"
            }
        }
    }
    MathJax.typeset()
}
function tailsigns() {
    var a = document.getElementById("tail").value;
    if (a == "lower") {
        $("#less").show();
        $("#greater").hide();
        $("#notequal").hide()
    } else {
        if (a == "upper") {
            $("#less").hide();
            $("#greater").show();
            $("#notequal").hide()
        } else {
            if (a == "two") {
                $("#less").hide();
                $("#greater").hide();
                $("#notequal").show()
            }
        }
    }
}
function tailsignst() {
    var a = document.getElementById("tailt").value;
    if (a == "lower") {
        $("#lesst").show();
        $("#greatert").hide();
        $("#notequalt").hide()
    } else {
        if (a == "upper") {
            $("#lesst").hide();
            $("#greatert").show();
            $("#notequalt").hide()
        } else {
            if (a == "two") {
                $("#lesst").hide();
                $("#greatert").hide();
                $("#notequalt").show()
            }
        }
    }
}
function muknotval() {
    var a = document.getElementById("muknot").value;
    document.getElementById("muknotvalue").innerHTML = a
}
function muknotvalt() {
    var a = document.getElementById("muknott").value;
    document.getElementById("muknotvaluet").innerHTML = a
}
function normalcdf(d) {
    var a = 1 / (1 + 0.2316419 * Math.abs(d));
    var b = 0.3989423 * Math.exp(-d * d / 2);
    var c = b * a * (0.3193815 + a * (-0.3565638 + a * (1.781478 + a * (-1.821256 + a * 1.330274))));
    if (d > 0) {
        c = 1 - c
    }
    return c
}
function NormSInv(m) {
    var D = -39.6968302866538
      , B = 220.946098424521
      , y = -275.928510446969;
    var w = 138.357751867269
      , v = -30.6647980661472
      , t = 2.50662827745924;
    var f = -54.4760987982241
      , e = 161.585836858041
      , d = -155.698979859887;
    var c = 66.8013118877197
      , a = -13.2806815528857
      , o = -0.00778489400243029;
    var n = -0.322396458041136
      , l = -2.40075827716184
      , k = -2.54973253934373;
    var i = 4.37466414146497
      , g = 2.93816398269878
      , E = 0.00778469570904146;
    var C = 0.32246712907004
      , z = 2.445134137143
      , x = 3.75440866190742;
    var b = 0.02425
      , s = 1 - b;
    var j, h;
    var u;
    if ((m < 0) || (m > 1)) {
        alert("NormSInv: Argument out of range.");
        u = 0
    } else {
        if (m < b) {
            j = Math.sqrt(-2 * Math.log(m));
            u = (((((o * j + n) * j + l) * j + k) * j + i) * j + g) / ((((E * j + C) * j + z) * j + x) * j + 1)
        } else {
            if (m <= s) {
                j = m - 0.5;
                h = j * j;
                u = (((((D * h + B) * h + y) * h + w) * h + v) * h + t) * j / (((((f * h + e) * h + d) * h + c) * h + a) * h + 1)
            } else {
                j = Math.sqrt(-2 * Math.log(1 - m));
                u = -(((((o * j + n) * j + l) * j + k) * j + i) * j + g) / ((((E * j + C) * j + z) * j + x) * j + 1)
            }
        }
    }
    return u
}
function LogGamma(Z) {
    with (Math) {
        var S = 1 + 76.18009173 / Z - 86.50532033 / (Z + 1) + 24.01409822 / (Z + 2) - 1.231739516 / (Z + 3) + 0.00120858003 / (Z + 4) - 0.00000536382 / (Z + 5);
        var LG = (Z - 0.5) * log(Z + 4.5) - (Z + 4.5) + log(S * 2.50662827465)
    }
    return LG
}
function Betinc(b, c, a) {
    var g = 0;
    var j = 1;
    var f = 1;
    var i = 1;
    var h = 0;
    var e = 0;
    var d;
    while (Math.abs((f - e) / f) > 0.00001) {
        e = f;
        d = -(c + h) * (c + a + h) * b / (c + 2 * h) / (c + 2 * h + 1);
        g = f + d * g;
        j = i + d * j;
        h = h + 1;
        d = h * (a - h) * b / (c + 2 * h - 1) / (c + 2 * h);
        f = g + d * f;
        i = j + d * i;
        g = g / i;
        j = j / i;
        f = f / i;
        i = 1
    }
    return f / c
}
function compute(X, df) {
    with (Math) {
        if (df <= 0) {
            alert("Degrees of freedom must be positive")
        } else {
            A = df / 2;
            S = A + 0.5;
            Z = df / (df + X * X);
            BT = exp(LogGamma(S) - LogGamma(0.5) - LogGamma(A) + A * log(Z) + 0.5 * log(1 - Z));
            if (Z < (A + 1) / (S + 2)) {
                betacdf = BT * Betinc(Z, A, 0.5)
            } else {
                betacdf = 1 - BT * Betinc(1 - Z, 0.5, A)
            }
            if (X < 0) {
                tcdf = betacdf / 2
            } else {
                tcdf = 1 - betacdf / 2
            }
        }
        tcdf = round(tcdf * 100000) / 100000
    }
    return tcdf
}
function ibetainv(m, z, y) {
    var n = 1e-8, B = z - 1, f = y - 1, q = 0, d, c, r, l, k, e, g, o, v, i, s;
    if (m <= 0) {
        return 0
    }
    if (m >= 1) {
        return 1
    }
    if (z >= 1 && y >= 1) {
        r = (m < 0.5) ? m : 1 - m;
        l = Math.sqrt(-2 * Math.log(r));
        g = (2.30753 + l * 0.27061) / (1 + l * (0.99229 + l * 0.04481)) - l;
        if (m < 0.5) {
            g = -g
        }
        o = (g * g - 3) / 6;
        v = 2 / (1 / (2 * z - 1) + 1 / (2 * y - 1));
        i = (g * Math.sqrt(o + v) / v) - (1 / (2 * y - 1) - 1 / (2 * z - 1)) * (o + 5 / 6 - 2 / (3 * v));
        g = z / (z + y * Math.exp(2 * i))
    } else {
        d = Math.log(z / (z + y));
        c = Math.log(y / (z + y));
        l = Math.exp(z * d) / z;
        k = Math.exp(y * c) / y;
        i = l + k;
        if (m < l / i) {
            g = Math.pow(z * i * m, 1 / z)
        } else {
            g = 1 - Math.pow(y * i * (1 - m), 1 / y)
        }
    }
    s = -gammaln(z) - gammaln(y) + gammaln(z + y);
    for (; q < 10; q++) {
        if (g === 0 || g === 1) {
            return g
        }
        e = ibeta(g, z, y) - m;
        l = Math.exp(B * Math.log(g) + f * Math.log(1 - g) + s);
        k = e / l;
        g -= (l = k / (1 - 0.5 * Math.min(1, k * (B / g - f / (1 - g)))));
        if (g <= 0) {
            g = 0.5 * (g + l)
        }
        if (g >= 1) {
            g = 0.5 * (g + l + 1)
        }
        if (Math.abs(l) < n * g && q > 0) {
            break
        }
    }
    return g
}
function ibeat(d, e, c) {
    var f = (d === 0 || d === 1) ? 0 : Math.exp(gammaln(e + c) - gammaln(e) - gammaln(c) + e * Math.log(d) + c * Math.log(1 - d));
    if (d < 0 || d > 1) {
        return false
    }
    if (d < (e + 1) / (e + c + 2)) {
        return f * betacf(d, e, c) / e
    }
    return 1 - f * betacf(1 - d, c, e) / c
}
function gammaln(a) {
    var c = 0, f = [76.18009172947146, -86.50532032941678, 24.01409824083091, -1.231739572450155, 0.001208650973866179, -0.000005395239384953], b = 1.000000000190015, e, g, d;
    d = (g = e = a) + 5.5;
    d -= (e + 0.5) * Math.log(d);
    for (; c < 6; c++) {
        b += f[c] / ++g
    }
    return Math.log(2.5066282746310007 * b / e) - d
}
function gammafn(o) {
    var b = [-1.716185138865495, 24.76565080557592, -379.80425647094563, 629.3311553128184, 866.9662027904133, -31451.272968848367, -36144.413418691176, 66456.14382024054], a = [-30.8402300119739, 315.35062697960416, -1015.1563674902192, -3107.771671572311, 22538.11842098015, 4755.846277527881, -134659.9598649693, -115132.2596755535], r = false, d = 0, h = 0, c = 0, m = o, g, l, e, k, j, f;
    if (m <= 0) {
        k = m % 1 + 3.6e-16;
        if (k) {
            r = (!(m & 1) ? 1 : -1) * Math.PI / Math.sin(Math.PI * k);
            m = 1 - m
        } else {
            return Infinity
        }
    }
    e = m;
    if (m < 1) {
        l = m++
    } else {
        l = (m -= d = (m | 0) - 1) - 1
    }
    for (g = 0; g < 8; ++g) {
        c = (c + b[g]) * l;
        h = h * l + a[g]
    }
    k = c / h + 1;
    if (e < m) {
        k /= e
    } else {
        if (e > m) {
            for (g = 0; g < d; ++g) {
                k *= m;
                m++
            }
        }
    }
    if (r) {
        k = r / k
    }
    return k
}
function betacf(q, p, o) {
    var i = 1e-30, g = 1, s, e, n, l, r, j, k, f, t;
    k = p + o;
    t = p + 1;
    f = p - 1;
    n = 1;
    l = 1 - k * q / t;
    if (Math.abs(l) < i) {
        l = i
    }
    l = 1 / l;
    j = l;
    for (; g <= 100; g++) {
        s = 2 * g;
        e = g * (o - g) * q / ((f + s) * (p + s));
        l = 1 + e * l;
        if (Math.abs(l) < i) {
            l = i
        }
        n = 1 + e / n;
        if (Math.abs(n) < i) {
            n = i
        }
        l = 1 / l;
        j *= l * n;
        e = -(p + g) * (k + g) * q / ((p + s) * (t + s));
        l = 1 + e * l;
        if (Math.abs(l) < i) {
            l = i
        }
        n = 1 + e / n;
        if (Math.abs(n) < i) {
            n = i
        }
        l = 1 / l;
        r = l * n;
        j *= r;
        if (Math.abs(r - 1) < 3e-7) {
            break
        }
    }
    return j
}
function ibeta(d, e, c) {
    var f = (d === 0 || d === 1) ? 0 : Math.exp(gammaln(e + c) - gammaln(e) - gammaln(c) + e * Math.log(d) + c * Math.log(1 - d));
    if (d < 0 || d > 1) {
        return false
    }
    if (d < (e + 1) / (e + c + 2)) {
        return f * betacf(d, e, c) / e
    }
    return 1 - f * betacf(1 - d, c, e) / c
}
function tinv(c, b) {
    var a = ibetainv(2 * Math.min(c, 1 - c), 0.5 * b, 0.5);
    a = Math.sqrt(b * (1 - a) / a);
    return (c > 0) ? a : -a
}
function solve() {
    $("#explanation").show();
    $("#samples").hide();
    $("#hypoutputs").show();
    $("#how").hide();
    $("#581773186").show();
    if (type == "hypothesis") {
        hyptest()
    } else {
        if (type == "type2error") {
            type2()
        }
    }
}
function type2() {
    var j = document.getElementById("tailt").value;
    var u = document.getElementById("muknott").value;
    var q = document.getElementById("sizet").value;
    var a = q - 1;
    var s = document.getElementById("mut").value;
    var l = document.getElementById("stdevt").value;
    var h = document.getElementById("alphat").value;
    var x = (NormSInv(h)).toFixed(2);
    var y = (x * (l / Math.sqrt(q)) + parseFloat(u)).toFixed(2);
    var g = parseFloat(((y - s) / (l / Math.sqrt(q))).toFixed(2));
    var d = (normalcdf(g)).toFixed(4);
    var k = (1 - d).toFixed(4);
    var f = (NormSInv(1 - h)).toFixed(2);
    var z = parseFloat((f * (l / Math.sqrt(q)) + parseFloat(u)).toFixed(2)).toFixed(2);
    var i = parseFloat(((z - s) / (l / Math.sqrt(q))).toFixed(2));
    var b = (normalcdf(i)).toFixed(4);
    var o = b;
    var r = (NormSInv(h / 2)).toFixed(2);
    var p = (NormSInv(1 - h / 2)).toFixed(2);
    var m = (r * (l / Math.sqrt(q)) + parseFloat(u)).toFixed(2);
    var w = parseFloat((p * (l / Math.sqrt(q)) + parseFloat(u)).toFixed(2));
    var e = parseFloat(((m - s) / (l / Math.sqrt(q))).toFixed(2));
    var n = parseFloat(((w - s) / (l / Math.sqrt(q))).toFixed(2));
    var v = (normalcdf(e)).toFixed(4);
    var c = (normalcdf(n)).toFixed(4);
    var t = (c - v).toFixed(4);
    if (j == "lower") {
        document.getElementById("output4").innerHTML = " $$ \\text{Reject } H_0 \\text{ if } z = \\frac{\\bar{x}-" + u + "}{" + l + "/ \\sqrt{" + q + "}} \\leq " + x + "  $$  $$ \\bar{x} \\leq " + y + "  $$ $$ z = \\frac{" + y + "-" + s + "}{" + l + "/ \\sqrt{" + q + "}} = " + g + " $$ $$ \\begin{align} \\beta &= P(z \\geq " + g + ") = 1 - P(z \\leq " + g + ") \\\\ &= 1 - " + d + " = \\boxed{" + k + "} \\end{align} $$ "
    } else {
        if (j == "upper") {
            document.getElementById("output4").innerHTML = " $$ \\text{Reject } H_0 \\text{ if } z = \\frac{\\bar{x}-" + u + "}{" + l + "/ \\sqrt{" + q + "}} \\geq " + f + "  $$ $$ \\bar{x} \\geq " + z + "  $$ $$ z = \\frac{" + z + "-" + s + "}{" + l + "/ \\sqrt{" + q + "}} = " + i + " $$ $$ \\begin{align} \\beta &= P(z \\leq " + i + ") = \\boxed{" + o + "} \\end{align} $$ "
        } else {
            if (j == "two") {
                document.getElementById("output4").innerHTML = " $$ \\begin{align} \\text{Reject } H_0 \\text{ if } z &= \\frac{\\bar{x}-" + u + "}{" + l + "/ \\sqrt{" + q + "}} \\leq " + r + " \\\\ \\text{or } z &= \\frac{\\bar{x}-" + u + "}{" + l + "/ \\sqrt{" + q + "}} \\geq " + p + " \\end{align} $$  $$ \\bar{x} \\leq " + m + " \\text{ or } \\bar{x} \\geq " + w + " $$ $$ z = \\frac{" + m + "-" + s + "}{" + l + "/ \\sqrt{" + q + "}}  = " + e + "  $$ $$ z = \\frac{" + w + "-" + s + "}{" + l + "/ \\sqrt{" + q + "}} = " + n + " $$ $$ \\begin{align} \\beta &= P(" + e + " \\leq z \\leq " + n + ") \\\\ &= P(z \\leq " + n + ") - P(z \\leq " + e + ") \\\\ &= " + c + " - " + v + " = \\boxed{" + t + "} \\end{align} $$ "
            }
        }
    }
    MathJax.typeset()
}
function hyptest() {
    var a = document.getElementById("parameter1").value;
    if (a == "mean") {
        hyptest1()
    } else {
        if (a == "proportion") {
            hyptest2()
        } else {
            if (a == "variance") {
                hyptest3()
            }
        }
    }
}
function hyptest1() {
    $("#output21").show();
    if (inputtype == "values") {
        var al = document.getElementById("sigma").value;
        var H = document.getElementById("size").value;
        var u = H - 1;
        var t = H - 2;
        var ar = document.getElementById("xbar").value;
        var s = document.getElementById("stdev").value;
        var an = document.getElementById("muknot").value
    } else {
        if (inputtype == "data") {
            var aN = document.getElementById("xvalues").value;
            var aQ = aN.split(",").map(Number);
            var ak = aQ.length;
            var n = ak - 1;
            var l = sum(aQ);
            var au = avg(aQ);
            var w = aQ.map(function(c) {
                return c - au
            });
            var h = w.map(function(c) {
                return c * c
            });
            var ai = sum(w);
            var af = sum(h);
            var C = af / n;
            var R = Math.sqrt(C);
            var H = ak;
            var u = H - 1;
            var t = H - 2;
            var ar = au;
            var s = parseFloat(R.toFixed(2));
            var al = "unknown";
            var an = document.getElementById("muknot").value
        } else {
            if (inputtype == "test") {
                var q = document.getElementById("teststat").value;
                var an = document.getElementById("muknot").value;
                if (q == "z") {
                    var al = "known"
                } else {
                    if (q == "t") {
                        var al = "unknown";
                        var P = document.getElementById("degfreeval").value;
                        var H = parseFloat(P) + 1;
                        var u = H - 1;
                        var t = H - 2
                    }
                }
            }
        }
    }
    var G = document.getElementById("tail").value;
    if (alphatype == "premade") {
        var aj = document.getElementById("alpha").value
    } else {
        var aj = document.getElementById("alphaval").value
    }
    if (inputtype == "values" || inputtype == "data") {
        var ah = (ar - an) / (s / Math.sqrt(H))
    } else {
        if (inputtype == "test") {
            var ah = parseFloat(document.getElementById("testvalue").value)
        }
    }
    var aH = -Math.abs(ah);
    var B = normalcdf(ah);
    var v = 1 - normalcdf(ah);
    var I = normalcdf(aH);
    var aM = 2 * I;
    var aw = NormSInv(aj);
    var aq = Math.abs(NormSInv(aj));
    var M = NormSInv(aj / 2);
    var K = Math.abs(NormSInv(aj / 2));
    var aC = -tinv(aj, u);
    var ax = tinv(aj, u);
    var ac = -tinv(aj / 2, u);
    var ab = tinv(aj / 2, u);
    var av = 2.71828;
    if (al == "known") {
        document.getElementById("descriptiontext").innerHTML = "A hypothesis test is used to determine whether the population mean is less than, greater than or different than some value.";
        document.getElementById("formulatext").innerHTML = "$ z =\\dfrac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} $";
        document.getElementById("explanationtext").innerHTML = "Rejecting the null hypothesis means accepting the alternative hypothesis."
    } else {
        if (al == "unknown") {
            document.getElementById("descriptiontext").innerHTML = "A hypothesis test is used to determine whether the population mean is less than, greater than or different than some value.";
            document.getElementById("formulatext").innerHTML = "$ t =\\dfrac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} $";
            document.getElementById("explanationtext").innerHTML = "Rejecting the null hypothesis means accepting the alternative hypothesis."
        }
    }
    if (al == "known" && G == "lower") {
        var ap = "<b>Lower Tail Test</b>";
        var p = "z";
        var x = "\\leq";
        var z = "\\sigma";
        var aK = "-z_\\alpha";
        var aI = normalcdf(ah.toFixed(2));
        var aJ = aI.toFixed(4);
        var at = aw
    } else {
        if (al == "known" && G == "upper") {
            var ap = "<b>Upper Tail Test</b>";
            var p = "z";
            var x = "\\geq";
            var z = "\\sigma";
            var aK = "z_\\alpha";
            var aI = 1 - normalcdf(ah.toFixed(2));
            var aJ = aI.toFixed(4);
            var ao = aq
        } else {
            if (al == "known" && G == "two") {
                var ap = "<b>Two-Tailed Test</b>";
                var p = "z";
                var x = "=";
                var z = "\\sigma";
                var aF = "-z_{\\alpha / 2}";
                var aE = "z_{\\alpha / 2}";
                var ag = normalcdf(aH.toFixed(2));
                var aG = ag.toFixed(4);
                var aI = 2 * ag.toFixed(4);
                var aJ = aI.toFixed(4);
                var F = M;
                var D = K
            } else {
                if (al == "unknown" && G == "lower") {
                    var ap = "<b>Lower Tail Test</b>";
                    var p = "t";
                    var x = "\\leq";
                    var z = "s";
                    var aK = "-t_\\alpha";
                    var aI = compute(ah, H - 1);
                    if (aI > 0.2) {
                        var aJ = ".20 \\text{ to } 1"
                    } else {
                        if (aI < 0.2 && aI > 0.1) {
                            var aJ = ".10 \\text{ to } .20"
                        } else {
                            if (aI < 0.1 && aI > 0.05) {
                                var aJ = ".05 \\text{ to } .10"
                            } else {
                                if (aI < 0.05 && aI > 0.025) {
                                    var aJ = ".025 \\text{ to } .05"
                                } else {
                                    if (aI < 0.025 && aI > 0.01) {
                                        var aJ = ".01 \\text{ to } .025"
                                    } else {
                                        if (aI < 0.01 && aI > 0.005) {
                                            var aJ = ".005 \\text{ to } .01"
                                        } else {
                                            if (aI < 0.005) {
                                                var aJ = "0 \\text{ to } .005"
                                            } else {
                                                var aJ = aI.toFixed(4)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var at = aC
                } else {
                    if (al == "unknown" && G == "upper") {
                        var ap = "<b>Upper Tail Test</b>";
                        var p = "t";
                        var x = "\\geq";
                        var z = "s";
                        var aK = "t_\\alpha";
                        var aI = 1 - compute(ah, H - 1);
                        if (aI > 0.2) {
                            var aJ = ".20 \\text{ to } 1"
                        } else {
                            if (aI < 0.2 && aI > 0.1) {
                                var aJ = ".10 \\text{ to } .20"
                            } else {
                                if (aI < 0.1 && aI > 0.05) {
                                    var aJ = ".05 \\text{ to } .10"
                                } else {
                                    if (aI < 0.05 && aI > 0.025) {
                                        var aJ = ".025 \\text{ to } .05"
                                    } else {
                                        if (aI < 0.025 && aI > 0.01) {
                                            var aJ = ".01 \\text{ to } .025"
                                        } else {
                                            if (aI < 0.01 && aI > 0.005) {
                                                var aJ = ".005 \\text{ to } .01"
                                            } else {
                                                if (aI < 0.005) {
                                                    var aJ = "0 \\text{ to } .005"
                                                } else {
                                                    var aJ = aI.toFixed(4)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var ao = ax
                    } else {
                        if (al == "unknown" && G == "two") {
                            var ap = "<b>Two-Tailed Test</b>";
                            var p = "t";
                            var x = "=";
                            var z = "s";
                            var aF = "-t_{\\alpha / 2}";
                            var aE = "t_{\\alpha / 2}";
                            var ag = normalcdf(aH);
                            if (ag > 0.2) {
                                var aG = ".20 \\text{ to } 1"
                            } else {
                                if (ag < 0.2 && ag > 0.1) {
                                    var aG = ".10 \\text{ to } .20"
                                } else {
                                    if (ag < 0.1 && ag > 0.05) {
                                        var aG = ".05 \\text{ to } .10"
                                    } else {
                                        if (ag < 0.05 && ag > 0.025) {
                                            var aG = ".025 \\text{ to } .05"
                                        } else {
                                            if (ag < 0.025 && ag > 0.01) {
                                                var aG = ".01 \\text{ to } .025"
                                            } else {
                                                if (ag < 0.01 && ag > 0.005) {
                                                    var aG = ".005 \\text{ to } .01"
                                                } else {
                                                    if (ag < 0.005) {
                                                        var aG = "0 \\text{ to } .005"
                                                    } else {
                                                        var aG = ag.toFixed(4)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            var aI = 2 * ag;
                            if (ag > 0.2) {
                                var aJ = ".40 \\text{ to } 1"
                            } else {
                                if (ag < 0.2 && ag > 0.1) {
                                    var aJ = ".20 \\text{ to } .40"
                                } else {
                                    if (ag < 0.1 && ag > 0.05) {
                                        var aJ = ".10 \\text{ to } .20"
                                    } else {
                                        if (ag < 0.05 && ag > 0.025) {
                                            var aJ = ".05 \\text{ to } .10"
                                        } else {
                                            if (ag < 0.025 && ag > 0.01) {
                                                var aJ = ".02 \\text{ to } .05"
                                            } else {
                                                if (ag < 0.01 && ag > 0.005) {
                                                    var aJ = ".01 \\text{ to } .02"
                                                } else {
                                                    if (ag < 0.005) {
                                                        var aJ = "0 \\text{ to } .01"
                                                    } else {
                                                        var aJ = aI.toFixed(4)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            var F = ac;
                            var D = ab
                        }
                    }
                }
            }
        }
    }
    if (aI <= aj) {
        var U = "\\leq";
        var o = "\\text{Reject } H_o";
        var ae = "\\leq";
        var e = "\\geq"
    } else {
        if (aI > aj) {
            var U = ">";
            var o = "\\text{Failed to Reject } H_o";
            var ae = ">";
            var e = "<"
        }
    }
    if (aI <= aj) {
        if (G == "lower") {
            var V = " $$ \\text{Interpretation: Significant }  $$ "
        } else {
            if (G == "upper") {
                var V = " $$ \\text{Interpretation: Significant } $$ "
            } else {
                if (G == "two") {
                    var V = " $$ \\text{Interpretation: Significant } $$ "
                }
            }
        }
    } else {
        if (aI > aj) {
            if (G == "lower") {
                var V = " $$ \\text{Interpretation: Not Significant }  $$ "
            } else {
                if (G == "upper") {
                    var V = " $$ \\text{Interpretation: Not Significant }  $$ "
                } else {
                    if (G == "two") {
                        var V = " $$ \\text{Interpretation: Not Significant }  $$ "
                    }
                }
            }
        }
    }
    if (aH < M) {
        var aP = "<"
    } else {
        if (aH > M) {
            var aP = ">"
        }
    }
    if (aH > M) {
        var aO = ">"
    } else {
        if (aH < M) {
            var aO = "<"
        }
    }
    if (ah <= F) {
        var y = p + "=" + ah.toFixed(2) + "\\leq" + aF + " = " + F.toFixed(2)
    } else {
        if (ah >= D) {
            var y = p + "=" + ah.toFixed(2) + "\\geq " + aE + " = " + D.toFixed(2)
        } else {
            var y = "\\begin{align}" + p + "&=" + ah.toFixed(2) + ">" + aF + " = " + M.toFixed(2) + " \\\\ \\text{ and }" + p + "&=" + ah.toFixed(2) + "< " + aE + " = " + K.toFixed(2) + " \\end{align}"
        }
    }
    var T = toFixing(parseFloat(ah), 1);
    var aA = (T - 0.1).toFixed(1);
    var ay = (parseFloat(T) + 0.1).toFixed(1);
    var Y = parseFloat(ah).toFixed(2);
    var d = +Y.toString().split("").pop();
    var aS = d;
    if (G == "lower" || G == "upper") {
        var E = toFixing(aw, 1);
        var aT = (E - 0.1).toFixed(1);
        var aR = (parseFloat(E) + 0.1).toFixed(1);
        var am = aw.toFixed(2);
        var aL = ("" + am)[4];
        var g = aL
    } else {
        if (G == "two") {
            var E = toFixing(M, 1);
            var aT = (E - 0.1).toFixed(1);
            var aR = (parseFloat(E) + 0.1).toFixed(1);
            var am = M.toFixed(2);
            var aL = ("" + am)[4];
            var g = aL
        }
    }
    if (d == 0 || d == 1 || d == 2) {
        var az = 0;
        var L = 4
    } else {
        if (d == 3) {
            var az = 1;
            var L = 5
        } else {
            if (d == 4) {
                var az = 2;
                var L = 6
            } else {
                if ((d == 5)) {
                    var az = 3;
                    var L = 7
                } else {
                    if (d == 6) {
                        var az = 4;
                        var L = 8
                    } else {
                        if (d == 7 || d == 8 || d == 9) {
                            var az = 5;
                            var L = 9
                        }
                    }
                }
            }
        }
    }
    if (d == 0) {
        var O = 1
    } else {
        if (d == 1) {
            var O = 2
        } else {
            if (d == 2) {
                var O = 3
            } else {
                if ((d == 3 || d == 4 || d == 5 || d == 6)) {
                    var O = 3
                } else {
                    if (d == 7) {
                        var O = 3
                    } else {
                        if (d == 8) {
                            var O = 4
                        } else {
                            if (d == 9) {
                                var O = 5
                            }
                        }
                    }
                }
            }
        }
    }
    if (aL == 0 || aL == 1 || aL == 2) {
        var m = 0;
        var aB = 4
    } else {
        if (aL == 3) {
            var m = 1;
            var aB = 5
        } else {
            if (aL == 4) {
                var m = 2;
                var aB = 6
            } else {
                if ((aL == 5)) {
                    var m = 3;
                    var aB = 7
                } else {
                    if (aL == 6) {
                        var m = 4;
                        var aB = 8
                    } else {
                        if (aL == 7 || aL == 8 || aL == 9) {
                            var m = 5;
                            var aB = 9
                        }
                    }
                }
            }
        }
    }
    table1 = [];
    for (var J = az; J < L + 1; J++) {
        if (J == aS) {
            table1 += "<td bgcolor='lightgray'>$" + (0.01 * J).toFixed(2).replace(/^0+/, "") + "$</td>"
        } else {
            table1 += "<td>$" + (0.01 * J).toFixed(2).replace(/^0+/, "") + "$</td>"
        }
    }
    if (ah < 0) {
        table31 = [];
        for (var J = az; J < L + 1; J++) {
            if (J == aS) {
                table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(aA) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
            } else {
                table31 += "<td>$" + normalcdf(parseFloat(aA) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
            }
        }
        table3 = [];
        for (var J = az; J < L + 1; J++) {
            if (J == aS) {
                table3 += "<td style='border: 1px solid black'>$" + normalcdf(parseFloat(T) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
            } else {
                table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(T) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
            }
        }
        table32 = [];
        for (var J = az; J < L + 1; J++) {
            if (J == aS) {
                table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(ay) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
            } else {
                table32 += "<td>$" + normalcdf(parseFloat(ay) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
            }
        }
    } else {
        if (ah >= 0) {
            table31 = [];
            for (var J = az; J < L + 1; J++) {
                if (J == aS) {
                    table31 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(aA) + parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
                } else {
                    table31 += "<td>$" + normalcdf(parseFloat(aA) + parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
                }
            }
            table3 = [];
            for (var J = az; J < L + 1; J++) {
                if (J == aS) {
                    table3 += "<td style='border: 1px solid black'>$" + normalcdf(parseFloat(T) + parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
                } else {
                    table3 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(T) + parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
                }
            }
            table32 = [];
            for (var J = az; J < L + 1; J++) {
                if (J == aS) {
                    table32 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(ay) + parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
                } else {
                    table32 += "<td>$" + normalcdf(parseFloat(ay) + parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
                }
            }
        }
    }
    table12 = [];
    for (var J = m; J < aB + 1; J++) {
        if (J == g) {
            table12 += "<td bgcolor='lightgray'>$" + (0.01 * J).toFixed(2).replace(/^0+/, "") + "$</td>"
        } else {
            table12 += "<td>$" + (0.01 * J).toFixed(2).replace(/^0+/, "") + "$</td>"
        }
    }
    table21 = [];
    for (var J = m; J < aB + 1; J++) {
        if (J == g) {
            table21 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(aT) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
        } else {
            table21 += "<td>$" + normalcdf(parseFloat(aT) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
        }
    }
    table2 = [];
    for (var J = m; J < aB + 1; J++) {
        if (J == g) {
            table2 += "<td bgcolor='lightgray' style='border: 1px solid black'>$" + normalcdf(parseFloat(E) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
        } else {
            table2 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(E) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
        }
    }
    table22 = [];
    for (var J = m; J < aB + 1; J++) {
        if (J == g) {
            table22 += "<td bgcolor='lightgray'>$" + normalcdf(parseFloat(aR) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
        } else {
            table22 += "<td>$" + normalcdf(parseFloat(aR) - parseFloat(0.01 * J)).toFixed(4).replace(/^0+/, "") + "$</td>"
        }
    }
    table41 = "<td colspan='7'>$\\text{Student's t-Distribution Table}$</td>";
    table4 = "<td></td><td colspan='6' style='border-bottom: thin solid'>$\\text{Area in Upper Tail}$</td>";
    if (al == "unknown" && G == "lower") {
        var ap = "<b>Lower Tail Test</b>";
        var p = "t";
        var x = "\\leq";
        var z = "s";
        var aK = "-t_\\alpha";
        var aI = compute(ah, H - 1);
        if (aI > 0.2) {
            table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
            table61 = "<td>$" + t + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, t).toFixed(3) + "$</td><td'>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
            table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
            table62 = "<td>$" + H + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
        } else {
            if (aI < 0.2 && aI > 0.1) {
                table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                table61 = "<td>$" + t + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                table62 = "<td>$" + H + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
            } else {
                if (aI < 0.1 && aI > 0.05) {
                    table5 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                    table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                    table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                    table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                } else {
                    if (aI < 0.05 && aI > 0.025) {
                        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>";
                        table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                        table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                        table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                    } else {
                        if (aI < 0.025 && aI > 0.01) {
                            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>";
                            table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                            table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                            table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                        } else {
                            if (aI < 0.01 && aI > 0.005) {
                                table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray'>$.005$</td>";
                                table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                            } else {
                                if (aI < 0.005) {
                                    table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>";
                                    table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                    table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                    table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                                } else {}
                            }
                        }
                    }
                }
            }
        }
        var at = aC
    } else {
        if (al == "unknown" && G == "upper") {
            var ap = "<b>Upper Tail Test</b>";
            var p = "t";
            var x = "\\geq";
            var z = "s";
            var aK = "t_\\alpha";
            var aI = 1 - compute(ah, H - 1);
            if (aI > 0.2) {
                table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                table61 = "<td>$" + t + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, t).toFixed(3) + "$</td><td'>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                table62 = "<td>$" + H + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
            } else {
                if (aI < 0.2 && aI > 0.1) {
                    table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                    table61 = "<td>$" + t + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                    table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                    table62 = "<td>$" + H + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                } else {
                    if (aI < 0.1 && aI > 0.05) {
                        table5 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                        table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                        table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                        table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                    } else {
                        if (aI < 0.05 && aI > 0.025) {
                            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>";
                            table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                            table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                            table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                        } else {
                            if (aI < 0.025 && aI > 0.01) {
                                table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>";
                                table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                            } else {
                                if (aI < 0.01 && aI > 0.005) {
                                    table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray'>$.005$</td>";
                                    table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                    table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                    table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                                } else {
                                    if (aI < 0.005) {
                                        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>";
                                        table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                        table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                        table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                                    } else {}
                                }
                            }
                        }
                    }
                }
            }
            var ao = ax
        } else {
            if (al == "unknown" && G == "two") {
                var ap = "<b>Two-Tailed Test</b>";
                var p = "t";
                var x = "=";
                var z = "s";
                var aF = "-t_{\\alpha / 2}";
                var aE = "t_{\\alpha / 2}";
                var ag = compute(aH, H - 1);
                if (ag > 0.2) {
                    var aG = ".20 \\text{ to } 1";
                    table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                    table61 = "<td>$" + t + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, t).toFixed(3) + "$</td><td'>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                    table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                    table62 = "<td>$" + H + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                } else {
                    if (ag < 0.2 && ag > 0.1) {
                        var aG = ".10 \\text{ to } .20";
                        table5 = "<td>$df$</td><td bgcolor='lightgray'>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                        table61 = "<td>$" + t + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                        table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                        table62 = "<td>$" + H + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                    } else {
                        if (ag < 0.1 && ag > 0.05) {
                            var aG = ".05 \\text{ to } .10";
                            table5 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                            table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                            table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                            table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                        } else {
                            if (ag < 0.05 && ag > 0.025) {
                                var aG = ".025 \\text{ to } .05";
                                table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>";
                                table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                            } else {
                                if (ag < 0.025 && ag > 0.01) {
                                    var aG = ".01 \\text{ to } .025";
                                    table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>";
                                    table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                    table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                    table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                                } else {
                                    if (ag < 0.01 && ag > 0.005) {
                                        var aG = ".005 \\text{ to } .01";
                                        table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td bgcolor='lightgray'>$.005$</td>";
                                        table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                        table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-right: thin solid'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                        table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                                    } else {
                                        if (ag < 0.005) {
                                            var aG = "0 \\text{ to } .005";
                                            table5 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>";
                                            table61 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                                            table6 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border-top: thin solid; border-bottom: thin solid; border-left: thin solid'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                                            table62 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                                        } else {
                                            var aG = ag.toFixed(4)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                var aI = 2 * ag;
                if (ag > 0.2) {
                    var aJ = ".40 \\text{ to } 1"
                } else {
                    if (ag < 0.2 && ag > 0.1) {
                        var aJ = ".20 \\text{ to } .40"
                    } else {
                        if (ag < 0.1 && ag > 0.05) {
                            var aJ = ".10 \\text{ to } .20"
                        } else {
                            if (ag < 0.05 && ag > 0.025) {
                                var aJ = ".05 \\text{ to } .10"
                            } else {
                                if (ag < 0.025 && ag > 0.01) {
                                    var aJ = ".02 \\text{ to } .05"
                                } else {
                                    if (ag < 0.01 && ag > 0.005) {
                                        var aJ = ".01 \\text{ to } .02"
                                    } else {
                                        if (ag < 0.005) {
                                            var aJ = "0 \\text{ to } .01"
                                        } else {
                                            var aJ = aI.toFixed(4)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                var F = ac;
                var D = ab
            }
        }
    }
    if (G == "lower" || G == "upper") {
        if (aj == ".1") {
            table52 = "<td>$df$</td><td>$.20$</td><td bgcolor='lightgray'>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
            table71 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
            table7 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border: 1px solid black'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
            table72 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
        } else {
            if (aj == ".05") {
                table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                table71 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                table7 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border: 1px solid black'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                table72 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
            } else {
                if (aj == ".01") {
                    table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td bgcolor='lightgray'>$.01$</td><td>$.005$</td>";
                    table71 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                    table7 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border: 1px solid black'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                    table72 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                }
            }
        }
    } else {
        if (G == "two") {
            if (aj == ".1") {
                table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td bgcolor='lightgray'>$.05$</td><td>$.025$</td><td>$.01$</td><td>$.005$</td>";
                table71 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                table7 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border: 1px solid black'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                table72 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
            } else {
                if (aj == ".05") {
                    table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td bgcolor='lightgray'>$.025$</td><td>$.01$</td><td>$.005$</td>";
                    table71 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                    table7 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border: 1px solid black'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                    table72 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                } else {
                    if (aj == ".01") {
                        table52 = "<td>$df$</td><td>$.20$</td><td>$.10$</td><td>$.05$</td><td>$.025$</td><td>$.01$</td><td bgcolor='lightgray'>$.005$</td>";
                        table71 = "<td>$" + t + "$</td><td>$" + tinv(0.2, t).toFixed(3) + "$</td><td>$" + tinv(0.1, t).toFixed(3) + "$</td><td>$" + tinv(0.05, t).toFixed(3) + "$</td><td>$" + tinv(0.025, t).toFixed(3) + "$</td><td>$" + tinv(0.01, t).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, t).toFixed(3) + "$</td>";
                        table7 = "<td bgcolor='lightgray'>$" + u + "$</td><td bgcolor='lightgray'>$" + tinv(0.2, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.1, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.05, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.025, u).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.01, u).toFixed(3) + "$</td><td bgcolor='lightgray' style='border: 1px solid black'>$" + tinv(0.005, u).toFixed(3) + "$</td>";
                        table72 = "<td>$" + H + "$</td><td>$" + tinv(0.2, H).toFixed(3) + "$</td><td>$" + tinv(0.1, H).toFixed(3) + "$</td><td>$" + tinv(0.05, H).toFixed(3) + "$</td><td>$" + tinv(0.025, H).toFixed(3) + "$</td><td>$" + tinv(0.01, H).toFixed(3) + "$</td><td bgcolor='lightgray'>$" + tinv(0.005, H).toFixed(3) + "$</td>"
                    }
                }
            }
        }
    }
    if (al == "known") {
        var b = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>" + table1 + "</tr><tr style='border-top: thin solid'><td>$" + aA + "$</td>" + table31 + "</tr><tr bgcolor='lightgray'><td>$" + T + "$</td>" + table3 + "</tr><tr><td>$" + ay + "$</td>" + table32 + "</tr></table>";
        var k = "<table><tr><td colspan='6'>$\\text{Standard Normal Table}$</td></tr><tr style='border-top: thin solid'><td>$z$</td>" + table12 + "</tr><tr style='border-top: thin solid'><td>$" + aT + "$</td>" + table21 + "</tr><tr><td bgcolor='lightgray'>$" + E + "$</td>" + table2 + "</tr><tr><td>$" + aR + "$</td>" + table22 + "</tr></table>"
    } else {
        if (al == "unknown") {
            var b = "<table><tr>" + table41 + "</tr><tr style='border-top: thin solid;'>" + table4 + "</tr><tr style='border-bottom: thin solid'>" + table5 + "</tr><tr>" + table61 + "</tr><tr>" + table6 + "</tr><tr>" + table62 + "</tr></table>";
            var k = "<table><tr>" + table41 + "</tr><tr style='border-top: thin solid;'>" + table4 + "</tr><tr style='border-bottom: thin solid'>" + table52 + "</tr><tr>" + table71 + "</tr><tr>" + table7 + "</tr><tr>" + table72 + "</tr></table>"
        }
    }
    if (inputtype == "values" || inputtype == "data") {
        if (al == "known") {
            document.getElementById("output1").innerHTML = " $ \\text{Test Statistic:} $ $$ z =\\frac{\\bar{x}-\\mu_o}{\\sigma / \\sqrt{n}} = \\frac{" + ar + "-" + an + "}{" + s + "/ \\sqrt{" + H + "}} = {\\color{RoyalBlue} " + ah.toFixed(2) + "} $$   $ \\text{Critical Value Approach:} $"
        } else {
            if (al == "unknown") {
                if (inputtype == "values") {
                    document.getElementById("output1").innerHTML = " $ \\text{Test Statistic:} $ $$ t =\\frac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} = \\frac{" + ar + "-" + an + "}{" + s + "/ \\sqrt{" + H + "}} = {\\color{RoyalBlue}" + ah.toFixed(2) + "} $$ $ \\text{Degrees of Freedom:} $ $$ df = n - 1 = " + H + " - 1 = {\\color{RoyalBlue}" + (H - 1) + "} $$   $ \\text{p-Value Approach:} $"
                } else {
                    if (inputtype == "data") {
                        document.getElementById("output1").innerHTML = " $$ n  = {\\color{RoyalBlue}" + H + "} \\quad \\bar{x}  = {\\color{RoyalBlue}" + parseFloat(au.toFixed(2)) + "} \\quad \\ s  = {\\color{RoyalBlue}" + parseFloat(R.toFixed(2)) + "} $$ $ \\text{Test Statistic:} $ $$ t =\\frac{\\bar{x}-\\mu_o}{s / \\sqrt{n}} = \\frac{" + ar + "-" + an + "}{" + s + "/ \\sqrt{" + H + "}} = {\\color{RoyalBlue}" + ah.toFixed(2) + "} $$ $ \\text{Degrees of Freedom:} $ $$ df = n - 1 = " + H + " - 1 = {\\color{RoyalBlue}" + (H - 1) + "} $$   $ \\text{Critical Value Approach:} $"
                    }
                }
            }
        }
    }
        
    if (G == "lower" && al == "known") {
        document.getElementById("output3").innerHTML =  " $$ \\text{Critical Value: }" + aK + " = {\\color{RoyalBlue}" + at.toFixed(2) + "} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } z \\leq -z_\\alpha $$ $$" + p + "=" + ah.toFixed(2) + ae + aK + " = " + at.toFixed(2) + "$$ $$ \\text{Conclusion: } \\boxed{" + o + "} $$" + V + " "
    } else {
        if (G == "upper" && al == "known") {
            document.getElementById("output3").innerHTML =  "$$ \\text{Critical Value: }" + aK + " = {\\color{RoyalBlue}" + ao.toFixed(2) + "} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } z \\geq z_\\alpha $$ $$" + p + "=" + ah.toFixed(2) + e + " " + aK + " = " + ao.toFixed(2) + "$$ $$ \\text{Conclusion: } \\boxed{" + o + "} $$" + V + " "
        } else {
            if (G == "two" && al == "known") {
                document.getElementById("output3").innerHTML =  "$$ \\text{Critical Values:} $$ $$ " + aF + " = {\\color{RoyalBlue}" + F.toFixed(2) + "}  \\text{ and } " + aE + " = {\\color{RoyalBlue}" + D.toFixed(2) + "} $$ $$ \\text{Rejection Rule:} $$ $$ \\text{Reject } H_0 \\text{ if } z \\leq -z_\\alpha \\text{ or if } z \\geq z_\\alpha $$ $$ " + y + " $$ $$ \\text{Conclusion: } \\boxed{" + o + "} $$ " + V + " "
            } else {
                if (G == "lower" && al == "unknown") {
                    document.getElementById("output3").innerHTML =  " $$ \\text{Critical Value: }" + aK + " = {\\color{RoyalBlue}" + at.toFixed(3) + "} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } t \\leq -t_\\alpha $$ $$" + p + "=" + ah.toFixed(2) + ae + aK + " = " + at.toFixed(3) + "$$ $$ \\text{Conclusion: } \\boxed{" + o + "} $$" + V + " "
                } else {
                    if (G == "upper" && al == "unknown") {
                        document.getElementById("output3").innerHTML =  "$$ \\text{Critical Value: }" + aK + " = {\\color{RoyalBlue}" + ao.toFixed(3) + "} $$ $$ \\text{Rejection Rule: Reject } H_0 \\text{ if } t \\geq t_\\alpha $$ $$" + p + "=" + ah.toFixed(2) + e + " " + aK + " = " + ao.toFixed(3) + " $$ $$ \\text{Conclusion: } \\boxed{" + o + "} $$" + V + " "
                    } else {
                        if (G == "two" && al == "unknown") {
                            document.getElementById("output3").innerHTML =  "$$ \\text{Critical Values:} $$ $$ " + aF + " = {\\color{RoyalBlue}" + F.toFixed(3) + "} \\text{ and } " + aE + " = {\\color{RoyalBlue}" + D.toFixed(3) + "} $$ $$ \\text{Rejection Rule:} $$ $$ \\text{Reject } H_0 \\text{ if } t \\leq -t_\\alpha \\text{ or if } t \\geq t_\\alpha $$ $$ " + y + " $$ $$ \\text{Conclusion: } \\boxed{" + o + "} $$ " + V + " "
                        }
                    }
                }
            }
        }
    }
    MathJax.typeset()
}
function hyptest2() {
    $("#output21").hide();
    var aw = document.getElementById("tail").value;
    var g = document.getElementById("muknot").value;
    var q = document.getElementById("size").value;
    var aj = q - 1;
    var Y = document.getElementById("xbar").value;
    var ae = document.getElementById("alpha").value;
    var p = (Y - g) / Math.sqrt(g * (1 - g) / q);
    var m = -Math.abs(p);
    var s = normalcdf(p);
    var am = 1 - normalcdf(p);
    var o = normalcdf(m);
    var C = 2 * o;
    var X = NormSInv(ae);
    var I = Math.abs(NormSInv(ae));
    var ar = NormSInv(ae / 2);
    var aq = Math.abs(NormSInv(ae / 2));
    var at = 2.71828;
    document.getElementById("descriptiontext").innerHTML = "A hypothesis test is used to determine whether the population proportion is less than, greater than or different than some value.";
    document.getElementById("formulatext").innerHTML = "$ z = \\dfrac{\\bar{p}-p_0}{\\sqrt{\\dfrac{p_0(1-p_0)}{n}}} $";
    document.getElementById("explanationtext").innerHTML = "Rejecting the null hypothesis means accepting the alternative hypothesis.";
    if (aw == "lower") {
        var an = "<b>Lower Tail Test</b>";
        var O = "z";
        var u = "\\leq";
        var w = "\\sigma";
        var n = "-z_\\alpha";
        var Q = normalcdf(p);
        var L = Q.toFixed(4);
        var ac = X
    } else {
        if (aw == "upper") {
            var an = "<b>Upper Tail Test</b>";
            var O = "z";
            var u = "\\geq";
            var w = "\\sigma";
            var n = "z_\\alpha";
            var Q = 1 - normalcdf(p);
            var L = Q.toFixed(4);
            var N = I
        } else {
            if (aw == "two") {
                var an = "<b>Two-Tailed Test</b>";
                var O = "z";
                var u = "=";
                var w = "\\sigma";
                var J = "-z_{\\alpha / 2}";
                var H = "z_{\\alpha / 2}";
                var U = normalcdf(m);
                var t = U.toFixed(4);
                var Q = 2 * U.toFixed(4);
                var L = Q.toFixed(4);
                var a = ar;
                var ax = aq
            }
        }
    }
    if (Q <= ae) {
        var E = "\\leq";
        var x = "\\text{Reject } H_o";
        var e = "\\leq";
        var ad = "\\geq"
    } else {
        if (Q > ae) {
            var E = ">";
            var x = "\\text{Failed to Reject } H_o";
            var e = ">";
            var ad = "<"
        }
    }
    if (m <= ar) {
        var ao = "\\leq"
    } else {
        if (m > ar) {
            var ao = ">"
        }
    }
    if (m >= ar) {
        var al = "\\geq"
    } else {
        if (m < ar) {
            var al = "<"
        }
    }
    if (p <= a) {
        var v = O + "=" + p.toFixed(2) + "\\leq" + J + " = " + a.toFixed(2)
    } else {
        if (p >= ax) {
            var v = O + "=" + p.toFixed(2) + "\\geq " + H + " = " + ax.toFixed(2)
        } else {
            var v = "\\begin{align}" + O + "&=" + p.toFixed(2) + ">" + J + " = " + ar.toFixed(2) + " \\\\ \\text{ and }" + O + "&=" + p.toFixed(2) + "< " + H + " = " + aq.toFixed(2) + " \\end{align}"
        }
    }
    var W = toFixing(parseFloat(p), 1);
    var av = (W - 0.1).toFixed(1);
    var au = (parseFloat(W) + 0.1).toFixed(1);
    var y = parseFloat(p).toFixed(2);
    var l = +y.toString().split("").pop();
    var B = l;
    if (aw == "lower" || aw == "upper") {
        var P = toFixing(X, 1);
        var k = (P - 0.1).toFixed(1);
        var h = (parseFloat(P) + 0.1).toFixed(1);
        var F = X.toFixed(2);
        var M = ("" + F)[4];
        var K = M
    } else {
        if (aw == "two") {
            var P = toFixing(ar, 1);
            var k = (P - 0.1).toFixed(1);
            var h = (parseFloat(P) + 0.1).toFixed(1);
            var F = ar.toFixed(2);
            var M = ("" + F)[4];
            var K = M
        }
    }
    if (l == 0 || l == 1 || l == 2) {
        var R = 0;
        var d = 4
    } else {
        if (l == 3) {
            var R = 1;
            var d = 5
        } else {
            if (l == 4) {
                var R = 2;
                var d = 6
            } else {
                if ((l == 5)) {
                    var R = 3;
                    var d = 7
                } else {
                    if (l == 6) {
                        var R = 4;
                        var d = 8
                    } else {
                        if (l == 7 || l == 8 || l == 9) {
                            var R = 5;
                            var d = 9
                        }
                    }
                }
            }
        }
    }
    if (l == 0) {
        var ai = 1
    } else {
        if (l == 1) {
            var ai = 2
        } else {
            if (l == 2) {
                var ai = 3
            } else {
                if ((l == 3 || l == 4 || l == 5 || l == 6)) {
                    var ai = 3
                } else {
                    if (l == 7) {
                        var ai = 3
                    } else {
                        if (l == 8) {
                            var ai = 4
                        } else {
                            if (l == 9) {
                                var ai = 5
                            }
                        }
                    }
                }
            }
        }
    }
    if (M == 0 || M == 1 || M == 2) {
        var V = 0;
        var z = 4
    } else {
        if (M == 3) {
            var V = 1;
            var z = 5
        } else {
            if (M == 4) {
                var V = 2;
                var z = 6
            } else {
                if ((M == 5)) {
                    var V = 3;
                    var z = 7
                } else {
                    if (M == 6) {
                        var V = 4;
                        var z = 8
                    } else {
                        if (M == 7 || M == 8 || M == 9) {
                            var V = 5;
                            var z = 9
                        }
                    }
                }
            }
        }
    }
    
   
    document.getElementById("output1").innerHTML = " $ \\text{Test Statistic:} $ $$ \\begin{align} z &= \\frac{\\bar{p}-p_0}{\\sqrt{\\dfrac{p_0(1-p_0)}{n}}} =\\dfrac{" + Y + "-" + g + "}{\\sqrt{\\dfrac{" + g + "(1-" + g + ")}{ " + q + "}}} \\\\ &= {\\color{RoyalBlue}" + p.toFixed(2) + "} \\end{align}  $$ $ \\text{Critical Value Approach:}$";
    
   
   
    if (aw == "lower") {
        document.getElementById("output3").innerHTML =  " $$ \\text{Critical Value: }" + n + " = {\\color{RoyalBlue}" + ac.toFixed(2) + "} $$ $$" + O + "=" + p.toFixed(2) + e + n + " = " + ac.toFixed(2) + "$$ $$ \\text{Conclusion: } \\boxed{" + x + "} $$ "
    } else {
        if (aw == "upper") {
            document.getElementById("output3").innerHTML =  "$$ \\text{Critical Value: }" + n + " = {\\color{RoyalBlue}" + N.toFixed(2) + "} $$ $$" + O + "=" + p.toFixed(2) + ad + " " + n + " = " + N.toFixed(2) + "$$ $$ \\text{Conclusion: } \\boxed{" + x + "} "
        } else {
            if (aw == "two") {
                document.getElementById("output3").innerHTML =  "$$ \\begin{align} \\text{Critical Values: } " + J + " &= {\\color{RoyalBlue}" + a.toFixed(2) + "} \\\\ \\text{ and } " + H + " &= {\\color{RoyalBlue}" + ax.toFixed(2) + "} \\end{align} $$ $$ " + v + " $$ $$ \\text{Conclusion: } \\boxed{" + x + "} $$ "
            }
        }
    }
    MathJax.typeset()
}
