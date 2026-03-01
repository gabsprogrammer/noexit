(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = t(i);
    fetch(i.href, s);
  }
})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const is = "148",
  Ro = 0,
  ys = 1,
  Po = 2,
  Xa = 1,
  Io = 2,
  hi = 3,
  Sn = 0,
  Ct = 1,
  rs = 2,
  Li = 3,
  nn = 0,
  Xn = 1,
  Xr = 2,
  Ms = 3,
  Ss = 4,
  Fo = 5,
  kn = 100,
  Oo = 101,
  No = 102,
  ws = 103,
  Es = 104,
  Uo = 200,
  zo = 201,
  Bo = 202,
  ko = 203,
  qa = 204,
  Ya = 205,
  Vo = 206,
  Go = 207,
  Ho = 208,
  Wo = 209,
  Xo = 210,
  qo = 0,
  Yo = 1,
  jo = 2,
  qr = 3,
  $o = 4,
  Zo = 5,
  Ko = 6,
  Jo = 7,
  ja = 0,
  Qo = 1,
  el = 2,
  Zt = 0,
  tl = 1,
  nl = 2,
  il = 3,
  rl = 4,
  sl = 5,
  $a = 300,
  Yn = 301,
  jn = 302,
  Yr = 303,
  jr = 304,
  rr = 306,
  $r = 1e3,
  Tt = 1001,
  Zr = 1002,
  rt = 1003,
  Ts = 1004,
  hr = 1005,
  dt = 1006,
  al = 1007,
  _i = 1008,
  wn = 1009,
  ol = 1010,
  ll = 1011,
  Za = 1012,
  cl = 1013,
  xn = 1014,
  bn = 1015,
  vi = 1016,
  ul = 1017,
  dl = 1018,
  qn = 1020,
  hl = 1021,
  fl = 1022,
  Pt = 1023,
  pl = 1024,
  ml = 1025,
  yn = 1026,
  $n = 1027,
  gl = 1028,
  _l = 1029,
  vl = 1030,
  xl = 1031,
  bl = 1033,
  fr = 33776,
  pr = 33777,
  mr = 33778,
  gr = 33779,
  Cs = 35840,
  As = 35841,
  Ls = 35842,
  Ds = 35843,
  yl = 36196,
  Rs = 37492,
  Ps = 37496,
  Is = 37808,
  Fs = 37809,
  Os = 37810,
  Ns = 37811,
  Us = 37812,
  zs = 37813,
  Bs = 37814,
  ks = 37815,
  Vs = 37816,
  Gs = 37817,
  Hs = 37818,
  Ws = 37819,
  Xs = 37820,
  qs = 37821,
  Ys = 36492,
  En = 3e3,
  Be = 3001,
  Ml = 3200,
  Sl = 3201,
  wl = 0,
  El = 1,
  Ut = "srgb",
  xi = "srgb-linear",
  _r = 7680,
  Tl = 519,
  js = 35044,
  $s = "300 es",
  Kr = 1035;
class Jn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, o = i.length; s < o; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const it = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "0a",
    "0b",
    "0c",
    "0d",
    "0e",
    "0f",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "1a",
    "1b",
    "1c",
    "1d",
    "1e",
    "1f",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "2a",
    "2b",
    "2c",
    "2d",
    "2e",
    "2f",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "3a",
    "3b",
    "3c",
    "3d",
    "3e",
    "3f",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "4a",
    "4b",
    "4c",
    "4d",
    "4e",
    "4f",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "5a",
    "5b",
    "5c",
    "5d",
    "5e",
    "5f",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "6a",
    "6b",
    "6c",
    "6d",
    "6e",
    "6f",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "7a",
    "7b",
    "7c",
    "7d",
    "7e",
    "7f",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "8a",
    "8b",
    "8c",
    "8d",
    "8e",
    "8f",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "9a",
    "9b",
    "9c",
    "9d",
    "9e",
    "9f",
    "a0",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "aa",
    "ab",
    "ac",
    "ad",
    "ae",
    "af",
    "b0",
    "b1",
    "b2",
    "b3",
    "b4",
    "b5",
    "b6",
    "b7",
    "b8",
    "b9",
    "ba",
    "bb",
    "bc",
    "bd",
    "be",
    "bf",
    "c0",
    "c1",
    "c2",
    "c3",
    "c4",
    "c5",
    "c6",
    "c7",
    "c8",
    "c9",
    "ca",
    "cb",
    "cc",
    "cd",
    "ce",
    "cf",
    "d0",
    "d1",
    "d2",
    "d3",
    "d4",
    "d5",
    "d6",
    "d7",
    "d8",
    "d9",
    "da",
    "db",
    "dc",
    "dd",
    "de",
    "df",
    "e0",
    "e1",
    "e2",
    "e3",
    "e4",
    "e5",
    "e6",
    "e7",
    "e8",
    "e9",
    "ea",
    "eb",
    "ec",
    "ed",
    "ee",
    "ef",
    "f0",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "fa",
    "fb",
    "fc",
    "fd",
    "fe",
    "ff",
  ],
  vr = Math.PI / 180,
  Zs = 180 / Math.PI;
function wi() {
  const r = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    it[r & 255] +
    it[(r >> 8) & 255] +
    it[(r >> 16) & 255] +
    it[(r >> 24) & 255] +
    "-" +
    it[e & 255] +
    it[(e >> 8) & 255] +
    "-" +
    it[((e >> 16) & 15) | 64] +
    it[(e >> 24) & 255] +
    "-" +
    it[(t & 63) | 128] +
    it[(t >> 8) & 255] +
    "-" +
    it[(t >> 16) & 255] +
    it[(t >> 24) & 255] +
    it[n & 255] +
    it[(n >> 8) & 255] +
    it[(n >> 16) & 255] +
    it[(n >> 24) & 255]
  ).toLowerCase();
}
function xt(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Cl(r, e) {
  return ((r % e) + e) % e;
}
function xr(r, e, t) {
  return (1 - t) * r + t * e;
}
function Ks(r) {
  return (r & (r - 1)) === 0 && r !== 0;
}
function Jr(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Di(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function gt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
let Ce = class Ka {
  constructor(e = 0, t = 0) {
    (Ka.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * i + e.x), (this.y = s * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
};
class bt {
  constructor() {
    (bt.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, o, a, l, c) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[1] = i),
      (u[2] = a),
      (u[3] = t),
      (u[4] = s),
      (u[5] = l),
      (u[6] = n),
      (u[7] = o),
      (u[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      a = n[3],
      l = n[6],
      c = n[1],
      u = n[4],
      d = n[7],
      h = n[2],
      m = n[5],
      g = n[8],
      p = i[0],
      f = i[3],
      x = i[6],
      w = i[1],
      y = i[4],
      E = i[7],
      M = i[2],
      A = i[5],
      F = i[8];
    return (
      (s[0] = o * p + a * w + l * M),
      (s[3] = o * f + a * y + l * A),
      (s[6] = o * x + a * E + l * F),
      (s[1] = c * p + u * w + d * M),
      (s[4] = c * f + u * y + d * A),
      (s[7] = c * x + u * E + d * F),
      (s[2] = h * p + m * w + g * M),
      (s[5] = h * f + m * y + g * A),
      (s[8] = h * x + m * E + g * F),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8];
    return (
      t * o * u - t * a * c - n * s * u + n * a * l + i * s * c - i * o * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = u * o - a * c,
      h = a * l - u * s,
      m = c * s - o * l,
      g = t * d + n * h + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const p = 1 / g;
    return (
      (e[0] = d * p),
      (e[1] = (i * c - u * n) * p),
      (e[2] = (a * n - i * o) * p),
      (e[3] = h * p),
      (e[4] = (u * t - i * l) * p),
      (e[5] = (i * s - a * t) * p),
      (e[6] = m * p),
      (e[7] = (n * l - c * t) * p),
      (e[8] = (o * t - n * s) * p),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, s, o, a) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * o + c * a) + o + e,
        -i * c,
        i * l,
        -i * (-c * o + l * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    return this.premultiply(br.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(br.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(br.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const br = new bt();
function Ja(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return !0;
  return !1;
}
function bi(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function Mn(r) {
  return r < 0.04045
    ? r * 0.0773993808
    : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function Ji(r) {
  return r < 0.0031308 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
const yr = { [Ut]: { [xi]: Mn }, [xi]: { [Ut]: Ji } },
  ct = {
    legacyMode: !0,
    get workingColorSpace() {
      return xi;
    },
    set workingColorSpace(r) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (r, e, t) {
      if (this.legacyMode || e === t || !e || !t) return r;
      if (yr[e] && yr[e][t] !== void 0) {
        const n = yr[e][t];
        return (r.r = n(r.r)), (r.g = n(r.g)), (r.b = n(r.b)), r;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (r, e) {
      return this.convert(r, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (r, e) {
      return this.convert(r, e, this.workingColorSpace);
    },
  },
  Qa = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  qe = { r: 0, g: 0, b: 0 },
  Lt = { h: 0, s: 0, l: 0 },
  Ri = { h: 0, s: 0, l: 0 };
function Mr(r, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? r + (e - r) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? r + (e - r) * 6 * (2 / 3 - t)
      : r
  );
}
function Pi(r, e) {
  return (e.r = r.r), (e.g = r.g), (e.b = r.b), e;
}
let Ue = class {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ut) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      ct.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = ct.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      ct.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = ct.workingColorSpace) {
    if (((e = Cl(e, 1)), (t = xt(t, 0, 1)), (n = xt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - s;
      (this.r = Mr(o, s, e + 1 / 3)),
        (this.g = Mr(o, s, e)),
        (this.b = Mr(o, s, e - 1 / 3));
    }
    return ct.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ut) {
    function n(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let s;
      const o = i[1],
        a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (s =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(s[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(s[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(s[3], 10)) / 255),
              ct.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          if (
            (s =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(s[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(s[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(s[3], 10)) / 100),
              ct.toWorkingColorSpace(this, t),
              n(s[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const l = parseFloat(s[1]) / 360,
              c = parseFloat(s[2]) / 100,
              u = parseFloat(s[3]) / 100;
            return n(s[4]), this.setHSL(l, c, u, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = i[1],
        o = s.length;
      if (o === 3)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(0), 16) / 255),
          (this.g = parseInt(s.charAt(1) + s.charAt(1), 16) / 255),
          (this.b = parseInt(s.charAt(2) + s.charAt(2), 16) / 255),
          ct.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(s.charAt(0) + s.charAt(1), 16) / 255),
          (this.g = parseInt(s.charAt(2) + s.charAt(3), 16) / 255),
          (this.b = parseInt(s.charAt(4) + s.charAt(5), 16) / 255),
          ct.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Ut) {
    const n = Qa[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = Mn(e.r)), (this.g = Mn(e.g)), (this.b = Mn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = Ji(e.r)), (this.g = Ji(e.g)), (this.b = Ji(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ut) {
    return (
      ct.fromWorkingColorSpace(Pi(this, qe), e),
      (xt(qe.r * 255, 0, 255) << 16) ^
        (xt(qe.g * 255, 0, 255) << 8) ^
        (xt(qe.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Ut) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ct.workingColorSpace) {
    ct.fromWorkingColorSpace(Pi(this, qe), t);
    const n = qe.r,
      i = qe.g,
      s = qe.b,
      o = Math.max(n, i, s),
      a = Math.min(n, i, s);
    let l, c;
    const u = (a + o) / 2;
    if (a === o) (l = 0), (c = 0);
    else {
      const d = o - a;
      switch (((c = u <= 0.5 ? d / (o + a) : d / (2 - o - a)), o)) {
        case n:
          l = (i - s) / d + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / d + 2;
          break;
        case s:
          l = (n - i) / d + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = u), e;
  }
  getRGB(e, t = ct.workingColorSpace) {
    return (
      ct.fromWorkingColorSpace(Pi(this, qe), t),
      (e.r = qe.r),
      (e.g = qe.g),
      (e.b = qe.b),
      e
    );
  }
  getStyle(e = Ut) {
    return (
      ct.fromWorkingColorSpace(Pi(this, qe), e),
      e !== Ut
        ? `color(${e} ${qe.r} ${qe.g} ${qe.b})`
        : `rgb(${(qe.r * 255) | 0},${(qe.g * 255) | 0},${(qe.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(Lt),
      (Lt.h += e),
      (Lt.s += t),
      (Lt.l += n),
      this.setHSL(Lt.h, Lt.s, Lt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(Lt), e.getHSL(Ri);
    const n = xr(Lt.h, Ri.h, t),
      i = xr(Lt.s, Ri.s, t),
      s = xr(Lt.l, Ri.l, t);
    return this.setHSL(n, i, s), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)), (this.g = e.getY(t)), (this.b = e.getZ(t)), this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
};
Ue.NAMES = Qa;
let Tn;
class eo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Tn === void 0 && (Tn = bi("canvas")),
        (Tn.width = e.width),
        (Tn.height = e.height);
      const n = Tn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Tn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = bi("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        s = i.data;
      for (let o = 0; o < s.length; o++) s[o] = Mn(s[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(Mn(t[n] / 255) * 255))
          : (t[n] = Mn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class to {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = wi()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? s.push(Sr(i[o].image)) : s.push(Sr(i[o]));
      } else s = Sr(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Sr(r) {
  return (typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && r instanceof ImageBitmap)
    ? eo.getDataURL(r)
    : r.data
    ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Al = 0;
class ft extends Jn {
  constructor(
    e = ft.DEFAULT_IMAGE,
    t = ft.DEFAULT_MAPPING,
    n = Tt,
    i = Tt,
    s = dt,
    o = _i,
    a = Pt,
    l = wn,
    c = ft.DEFAULT_ANISOTROPY,
    u = En
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: Al++ }),
      (this.uuid = wi()),
      (this.name = ""),
      (this.source = new to(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = s),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Ce(0, 0)),
      (this.repeat = new Ce(1, 1)),
      (this.center = new Ce(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new bt()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = u),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== $a) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case $r:
          e.x = e.x - Math.floor(e.x);
          break;
        case Tt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Zr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case $r:
          e.y = e.y - Math.floor(e.y);
          break;
        case Tt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Zr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
ft.DEFAULT_IMAGE = null;
ft.DEFAULT_MAPPING = $a;
ft.DEFAULT_ANISOTROPY = 1;
class tt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (tt.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this
    );
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this
    );
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * s),
      (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * s),
      (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * s),
      (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements,
      c = l[0],
      u = l[4],
      d = l[8],
      h = l[1],
      m = l[5],
      g = l[9],
      p = l[2],
      f = l[6],
      x = l[10];
    if (
      Math.abs(u - h) < 0.01 &&
      Math.abs(d - p) < 0.01 &&
      Math.abs(g - f) < 0.01
    ) {
      if (
        Math.abs(u + h) < 0.1 &&
        Math.abs(d + p) < 0.1 &&
        Math.abs(g + f) < 0.1 &&
        Math.abs(c + m + x - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const y = (c + 1) / 2,
        E = (m + 1) / 2,
        M = (x + 1) / 2,
        A = (u + h) / 4,
        F = (d + p) / 4,
        _ = (g + f) / 4;
      return (
        y > E && y > M
          ? y < 0.01
            ? ((n = 0), (i = 0.707106781), (s = 0.707106781))
            : ((n = Math.sqrt(y)), (i = A / n), (s = F / n))
          : E > M
          ? E < 0.01
            ? ((n = 0.707106781), (i = 0), (s = 0.707106781))
            : ((i = Math.sqrt(E)), (n = A / i), (s = _ / i))
          : M < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (s = 0))
          : ((s = Math.sqrt(M)), (n = F / s), (i = _ / s)),
        this.set(n, i, s, t),
        this
      );
    }
    let w = Math.sqrt(
      (f - g) * (f - g) + (d - p) * (d - p) + (h - u) * (h - u)
    );
    return (
      Math.abs(w) < 0.001 && (w = 1),
      (this.x = (f - g) / w),
      (this.y = (d - p) / w),
      (this.z = (h - u) / w),
      (this.w = Math.acos((c + m + x - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class It extends Jn {
  constructor(e = 1, t = 1, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new tt(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new tt(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new ft(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : dt),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new to(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class no extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = rt),
      (this.minFilter = rt),
      (this.wrapR = Tt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ll extends ft {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = rt),
      (this.minFilter = rt),
      (this.wrapR = Tt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Ei {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerpFlat(e, t, n, i, s, o, a) {
    let l = n[i + 0],
      c = n[i + 1],
      u = n[i + 2],
      d = n[i + 3];
    const h = s[o + 0],
      m = s[o + 1],
      g = s[o + 2],
      p = s[o + 3];
    if (a === 0) {
      (e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
      return;
    }
    if (a === 1) {
      (e[t + 0] = h), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = p);
      return;
    }
    if (d !== p || l !== h || c !== m || u !== g) {
      let f = 1 - a;
      const x = l * h + c * m + u * g + d * p,
        w = x >= 0 ? 1 : -1,
        y = 1 - x * x;
      if (y > Number.EPSILON) {
        const M = Math.sqrt(y),
          A = Math.atan2(M, x * w);
        (f = Math.sin(f * A) / M), (a = Math.sin(a * A) / M);
      }
      const E = a * w;
      if (
        ((l = l * f + h * E),
        (c = c * f + m * E),
        (u = u * f + g * E),
        (d = d * f + p * E),
        f === 1 - a)
      ) {
        const M = 1 / Math.sqrt(l * l + c * c + u * u + d * d);
        (l *= M), (c *= M), (u *= M), (d *= M);
      }
    }
    (e[t] = l), (e[t + 1] = c), (e[t + 2] = u), (e[t + 3] = d);
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, o) {
    const a = n[i],
      l = n[i + 1],
      c = n[i + 2],
      u = n[i + 3],
      d = s[o],
      h = s[o + 1],
      m = s[o + 2],
      g = s[o + 3];
    return (
      (e[t] = a * g + u * d + l * m - c * h),
      (e[t + 1] = l * g + u * h + c * d - a * m),
      (e[t + 2] = c * g + u * m + a * h - l * d),
      (e[t + 3] = u * g - a * d - l * h - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._order,
      a = Math.cos,
      l = Math.sin,
      c = a(n / 2),
      u = a(i / 2),
      d = a(s / 2),
      h = l(n / 2),
      m = l(i / 2),
      g = l(s / 2);
    switch (o) {
      case "XYZ":
        (this._x = h * u * d + c * m * g),
          (this._y = c * m * d - h * u * g),
          (this._z = c * u * g + h * m * d),
          (this._w = c * u * d - h * m * g);
        break;
      case "YXZ":
        (this._x = h * u * d + c * m * g),
          (this._y = c * m * d - h * u * g),
          (this._z = c * u * g - h * m * d),
          (this._w = c * u * d + h * m * g);
        break;
      case "ZXY":
        (this._x = h * u * d - c * m * g),
          (this._y = c * m * d + h * u * g),
          (this._z = c * u * g + h * m * d),
          (this._w = c * u * d - h * m * g);
        break;
      case "ZYX":
        (this._x = h * u * d - c * m * g),
          (this._y = c * m * d + h * u * g),
          (this._z = c * u * g - h * m * d),
          (this._w = c * u * d + h * m * g);
        break;
      case "YZX":
        (this._x = h * u * d + c * m * g),
          (this._y = c * m * d + h * u * g),
          (this._z = c * u * g - h * m * d),
          (this._w = c * u * d - h * m * g);
        break;
      case "XZY":
        (this._x = h * u * d - c * m * g),
          (this._y = c * m * d - h * u * g),
          (this._z = c * u * g + h * m * d),
          (this._w = c * u * d + h * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      s = t[8],
      o = t[1],
      a = t[5],
      l = t[9],
      c = t[2],
      u = t[6],
      d = t[10],
      h = n + a + d;
    if (h > 0) {
      const m = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / m),
        (this._x = (u - l) * m),
        (this._y = (s - c) * m),
        (this._z = (o - i) * m);
    } else if (n > a && n > d) {
      const m = 2 * Math.sqrt(1 + n - a - d);
      (this._w = (u - l) / m),
        (this._x = 0.25 * m),
        (this._y = (i + o) / m),
        (this._z = (s + c) / m);
    } else if (a > d) {
      const m = 2 * Math.sqrt(1 + a - n - d);
      (this._w = (s - c) / m),
        (this._x = (i + o) / m),
        (this._y = 0.25 * m),
        (this._z = (l + u) / m);
    } else {
      const m = 2 * Math.sqrt(1 + d - n - a);
      (this._w = (o - i) / m),
        (this._x = (s + c) / m),
        (this._y = (l + u) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(xt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      s = e._z,
      o = e._w,
      a = t._x,
      l = t._y,
      c = t._z,
      u = t._w;
    return (
      (this._x = n * u + o * a + i * c - s * l),
      (this._y = i * u + o * l + s * a - n * c),
      (this._z = s * u + o * c + n * l - i * a),
      (this._w = o * u - n * a - i * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      s = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + i * e._y + s * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = s), this;
    const l = 1 - a * a;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * s + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(l),
      u = Math.atan2(c, a),
      d = Math.sin((1 - t) * u) / c,
      h = Math.sin(t * u) / c;
    return (
      (this._w = o * d + this._w * h),
      (this._x = n * d + this._x * h),
      (this._y = i * d + this._y * h),
      (this._z = s * d + this._z * h),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class I {
  constructor(e = 0, t = 0, n = 0) {
    (I.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(Js.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Js.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[3] * n + s[6] * i),
      (this.y = s[1] * t + s[4] * n + s[7] * i),
      (this.z = s[2] * t + s[5] * n + s[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements,
      o = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return (
      (this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * o),
      (this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * o),
      (this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.x,
      o = e.y,
      a = e.z,
      l = e.w,
      c = l * t + o * i - a * n,
      u = l * n + a * t - s * i,
      d = l * i + s * n - o * t,
      h = -s * t - o * n - a * i;
    return (
      (this.x = c * l + h * -s + u * -a - d * -o),
      (this.y = u * l + h * -o + d * -s - c * -a),
      (this.z = d * l + h * -a + c * -o - u * -s),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * t + s[4] * n + s[8] * i),
      (this.y = s[1] * t + s[5] * n + s[9] * i),
      (this.z = s[2] * t + s[6] * n + s[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      s = e.z,
      o = t.x,
      a = t.y,
      l = t.z;
    return (
      (this.x = i * l - s * a),
      (this.y = s * o - n * l),
      (this.z = n * a - i * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return wr.copy(this).projectOnVector(e), this.sub(wr);
  }
  reflect(e) {
    return this.sub(wr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(xt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)), (this.y = e.getY(t)), (this.z = e.getZ(t)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const wr = new I(),
  Js = new Ei();
class Ti {
  constructor(
    e = new I(1 / 0, 1 / 0, 1 / 0),
    t = new I(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.length; l < c; l += 3) {
      const u = e[l],
        d = e[l + 1],
        h = e[l + 2];
      u < t && (t = u),
        d < n && (n = d),
        h < i && (i = h),
        u > s && (s = u),
        d > o && (o = d),
        h > a && (a = h);
    }
    return this.min.set(t, n, i), this.max.set(s, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      s = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let l = 0, c = e.count; l < c; l++) {
      const u = e.getX(l),
        d = e.getY(l),
        h = e.getZ(l);
      u < t && (t = u),
        d < n && (n = d),
        h < i && (i = h),
        u > s && (s = u),
        d > o && (o = d),
        h > a && (a = h);
    }
    return this.min.set(t, n, i), this.max.set(s, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = fn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const s = n.attributes.position;
        for (let o = 0, a = s.count; o < a; o++)
          fn.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(fn);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          Er.copy(n.boundingBox),
          Er.applyMatrix4(e.matrixWorld),
          this.union(Er);
    const i = e.children;
    for (let s = 0, o = i.length; s < o; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, fn),
      fn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ni),
      Ii.subVectors(this.max, ni),
      Cn.subVectors(e.a, ni),
      An.subVectors(e.b, ni),
      Ln.subVectors(e.c, ni),
      Jt.subVectors(An, Cn),
      Qt.subVectors(Ln, An),
      pn.subVectors(Cn, Ln);
    let t = [
      0,
      -Jt.z,
      Jt.y,
      0,
      -Qt.z,
      Qt.y,
      0,
      -pn.z,
      pn.y,
      Jt.z,
      0,
      -Jt.x,
      Qt.z,
      0,
      -Qt.x,
      pn.z,
      0,
      -pn.x,
      -Jt.y,
      Jt.x,
      0,
      -Qt.y,
      Qt.x,
      0,
      -pn.y,
      pn.x,
      0,
    ];
    return !Tr(t, Cn, An, Ln, Ii) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !Tr(t, Cn, An, Ln, Ii))
      ? !1
      : (Fi.crossVectors(Jt, Qt),
        (t = [Fi.x, Fi.y, Fi.z]),
        Tr(t, Cn, An, Ln, Ii));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return fn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(fn).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Wt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Wt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Wt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Wt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Wt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Wt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Wt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Wt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Wt),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Wt = [
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
    new I(),
  ],
  fn = new I(),
  Er = new Ti(),
  Cn = new I(),
  An = new I(),
  Ln = new I(),
  Jt = new I(),
  Qt = new I(),
  pn = new I(),
  ni = new I(),
  Ii = new I(),
  Fi = new I(),
  mn = new I();
function Tr(r, e, t, n, i) {
  for (let s = 0, o = r.length - 3; s <= o; s += 3) {
    mn.fromArray(r, s);
    const a =
        i.x * Math.abs(mn.x) + i.y * Math.abs(mn.y) + i.z * Math.abs(mn.z),
      l = e.dot(mn),
      c = t.dot(mn),
      u = n.dot(mn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > a) return !1;
  }
  return !0;
}
const Dl = new Ti(),
  ii = new I(),
  Cr = new I();
class ss {
  constructor(e = new I(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Dl.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, o = e.length; s < o; s++)
      i = Math.max(i, n.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    ii.subVectors(e, this.center);
    const t = ii.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.addScaledVector(ii, i / n), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Cr.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(ii.copy(e.center).add(Cr)),
            this.expandByPoint(ii.copy(e.center).sub(Cr))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xt = new I(),
  Ar = new I(),
  Oi = new I(),
  en = new I(),
  Lr = new I(),
  Ni = new I(),
  Dr = new I();
class Rl {
  constructor(e = new I(), t = new I(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Xt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Xt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Xt.copy(this.direction).multiplyScalar(t).add(this.origin),
        Xt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Ar.copy(e).add(t).multiplyScalar(0.5),
      Oi.copy(t).sub(e).normalize(),
      en.copy(this.origin).sub(Ar);
    const s = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Oi),
      a = en.dot(this.direction),
      l = -en.dot(Oi),
      c = en.lengthSq(),
      u = Math.abs(1 - o * o);
    let d, h, m, g;
    if (u > 0)
      if (((d = o * l - a), (h = o * a - l), (g = s * u), d >= 0))
        if (h >= -g)
          if (h <= g) {
            const p = 1 / u;
            (d *= p),
              (h *= p),
              (m = d * (d + o * h + 2 * a) + h * (o * d + h + 2 * l) + c);
          } else
            (h = s),
              (d = Math.max(0, -(o * h + a))),
              (m = -d * d + h * (h + 2 * l) + c);
        else
          (h = -s),
            (d = Math.max(0, -(o * h + a))),
            (m = -d * d + h * (h + 2 * l) + c);
      else
        h <= -g
          ? ((d = Math.max(0, -(-o * s + a))),
            (h = d > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + h * (h + 2 * l) + c))
          : h <= g
          ? ((d = 0),
            (h = Math.min(Math.max(-s, -l), s)),
            (m = h * (h + 2 * l) + c))
          : ((d = Math.max(0, -(o * s + a))),
            (h = d > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (m = -d * d + h * (h + 2 * l) + c));
    else
      (h = o > 0 ? -s : s),
        (d = Math.max(0, -(o * h + a))),
        (m = -d * d + h * (h + 2 * l) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(d).add(this.origin),
      i && i.copy(Oi).multiplyScalar(h).add(Ar),
      m
    );
  }
  intersectSphere(e, t) {
    Xt.subVectors(e.center, this.origin);
    const n = Xt.dot(this.direction),
      i = Xt.dot(Xt) - n * n,
      s = e.radius * e.radius;
    if (i > s) return null;
    const o = Math.sqrt(s - i),
      a = n - o,
      l = n + o;
    return a < 0 && l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, o, a, l;
    const c = 1 / this.direction.x,
      u = 1 / this.direction.y,
      d = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - h.x) * c), (i = (e.max.x - h.x) * c))
        : ((n = (e.max.x - h.x) * c), (i = (e.min.x - h.x) * c)),
      u >= 0
        ? ((s = (e.min.y - h.y) * u), (o = (e.max.y - h.y) * u))
        : ((s = (e.max.y - h.y) * u), (o = (e.min.y - h.y) * u)),
      n > o ||
      s > i ||
      ((s > n || isNaN(n)) && (n = s),
      (o < i || isNaN(i)) && (i = o),
      d >= 0
        ? ((a = (e.min.z - h.z) * d), (l = (e.max.z - h.z) * d))
        : ((a = (e.max.z - h.z) * d), (l = (e.min.z - h.z) * d)),
      n > l || a > i) ||
      ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Xt) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Lr.subVectors(t, e), Ni.subVectors(n, e), Dr.crossVectors(Lr, Ni);
    let o = this.direction.dot(Dr),
      a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    en.subVectors(this.origin, e);
    const l = a * this.direction.dot(Ni.crossVectors(en, Ni));
    if (l < 0) return null;
    const c = a * this.direction.dot(Lr.cross(en));
    if (c < 0 || l + c > o) return null;
    const u = -a * en.dot(Dr);
    return u < 0 ? null : this.at(u / o, s);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ye {
  constructor() {
    (Ye.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  }
  set(e, t, n, i, s, o, a, l, c, u, d, h, m, g, p, f) {
    const x = this.elements;
    return (
      (x[0] = e),
      (x[4] = t),
      (x[8] = n),
      (x[12] = i),
      (x[1] = s),
      (x[5] = o),
      (x[9] = a),
      (x[13] = l),
      (x[2] = c),
      (x[6] = u),
      (x[10] = d),
      (x[14] = h),
      (x[3] = m),
      (x[7] = g),
      (x[11] = p),
      (x[15] = f),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ye().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Dn.setFromMatrixColumn(e, 0).length(),
      s = 1 / Dn.setFromMatrixColumn(e, 1).length(),
      o = 1 / Dn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * s),
      (t[5] = n[5] * s),
      (t[6] = n[6] * s),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      u = Math.cos(s),
      d = Math.sin(s);
    if (e.order === "XYZ") {
      const h = o * u,
        m = o * d,
        g = a * u,
        p = a * d;
      (t[0] = l * u),
        (t[4] = -l * d),
        (t[8] = c),
        (t[1] = m + g * c),
        (t[5] = h - p * c),
        (t[9] = -a * l),
        (t[2] = p - h * c),
        (t[6] = g + m * c),
        (t[10] = o * l);
    } else if (e.order === "YXZ") {
      const h = l * u,
        m = l * d,
        g = c * u,
        p = c * d;
      (t[0] = h + p * a),
        (t[4] = g * a - m),
        (t[8] = o * c),
        (t[1] = o * d),
        (t[5] = o * u),
        (t[9] = -a),
        (t[2] = m * a - g),
        (t[6] = p + h * a),
        (t[10] = o * l);
    } else if (e.order === "ZXY") {
      const h = l * u,
        m = l * d,
        g = c * u,
        p = c * d;
      (t[0] = h - p * a),
        (t[4] = -o * d),
        (t[8] = g + m * a),
        (t[1] = m + g * a),
        (t[5] = o * u),
        (t[9] = p - h * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * l);
    } else if (e.order === "ZYX") {
      const h = o * u,
        m = o * d,
        g = a * u,
        p = a * d;
      (t[0] = l * u),
        (t[4] = g * c - m),
        (t[8] = h * c + p),
        (t[1] = l * d),
        (t[5] = p * c + h),
        (t[9] = m * c - g),
        (t[2] = -c),
        (t[6] = a * l),
        (t[10] = o * l);
    } else if (e.order === "YZX") {
      const h = o * l,
        m = o * c,
        g = a * l,
        p = a * c;
      (t[0] = l * u),
        (t[4] = p - h * d),
        (t[8] = g * d + m),
        (t[1] = d),
        (t[5] = o * u),
        (t[9] = -a * u),
        (t[2] = -c * u),
        (t[6] = m * d + g),
        (t[10] = h - p * d);
    } else if (e.order === "XZY") {
      const h = o * l,
        m = o * c,
        g = a * l,
        p = a * c;
      (t[0] = l * u),
        (t[4] = -d),
        (t[8] = c * u),
        (t[1] = h * d + p),
        (t[5] = o * u),
        (t[9] = m * d - g),
        (t[2] = g * d - m),
        (t[6] = a * u),
        (t[10] = p * d + h);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Pl, e, Il);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      _t.subVectors(e, t),
      _t.lengthSq() === 0 && (_t.z = 1),
      _t.normalize(),
      tn.crossVectors(n, _t),
      tn.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (_t.x += 1e-4) : (_t.z += 1e-4),
        _t.normalize(),
        tn.crossVectors(n, _t)),
      tn.normalize(),
      Ui.crossVectors(_t, tn),
      (i[0] = tn.x),
      (i[4] = Ui.x),
      (i[8] = _t.x),
      (i[1] = tn.y),
      (i[5] = Ui.y),
      (i[9] = _t.y),
      (i[2] = tn.z),
      (i[6] = Ui.z),
      (i[10] = _t.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      s = this.elements,
      o = n[0],
      a = n[4],
      l = n[8],
      c = n[12],
      u = n[1],
      d = n[5],
      h = n[9],
      m = n[13],
      g = n[2],
      p = n[6],
      f = n[10],
      x = n[14],
      w = n[3],
      y = n[7],
      E = n[11],
      M = n[15],
      A = i[0],
      F = i[4],
      _ = i[8],
      T = i[12],
      O = i[1],
      j = i[5],
      se = i[9],
      N = i[13],
      D = i[2],
      Y = i[6],
      J = i[10],
      Z = i[14],
      X = i[3],
      te = i[7],
      Q = i[11],
      U = i[15];
    return (
      (s[0] = o * A + a * O + l * D + c * X),
      (s[4] = o * F + a * j + l * Y + c * te),
      (s[8] = o * _ + a * se + l * J + c * Q),
      (s[12] = o * T + a * N + l * Z + c * U),
      (s[1] = u * A + d * O + h * D + m * X),
      (s[5] = u * F + d * j + h * Y + m * te),
      (s[9] = u * _ + d * se + h * J + m * Q),
      (s[13] = u * T + d * N + h * Z + m * U),
      (s[2] = g * A + p * O + f * D + x * X),
      (s[6] = g * F + p * j + f * Y + x * te),
      (s[10] = g * _ + p * se + f * J + x * Q),
      (s[14] = g * T + p * N + f * Z + x * U),
      (s[3] = w * A + y * O + E * D + M * X),
      (s[7] = w * F + y * j + E * Y + M * te),
      (s[11] = w * _ + y * se + E * J + M * Q),
      (s[15] = w * T + y * N + E * Z + M * U),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      s = e[12],
      o = e[1],
      a = e[5],
      l = e[9],
      c = e[13],
      u = e[2],
      d = e[6],
      h = e[10],
      m = e[14],
      g = e[3],
      p = e[7],
      f = e[11],
      x = e[15];
    return (
      g *
        (+s * l * d -
          i * c * d -
          s * a * h +
          n * c * h +
          i * a * m -
          n * l * m) +
      p *
        (+t * l * m -
          t * c * h +
          s * o * h -
          i * o * m +
          i * c * u -
          s * l * u) +
      f *
        (+t * c * d -
          t * a * m -
          s * o * d +
          n * o * m +
          s * a * u -
          n * c * u) +
      x *
        (-i * a * u - t * l * d + t * a * h + i * o * d - n * o * h + n * l * u)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      s = e[3],
      o = e[4],
      a = e[5],
      l = e[6],
      c = e[7],
      u = e[8],
      d = e[9],
      h = e[10],
      m = e[11],
      g = e[12],
      p = e[13],
      f = e[14],
      x = e[15],
      w = d * f * c - p * h * c + p * l * m - a * f * m - d * l * x + a * h * x,
      y = g * h * c - u * f * c - g * l * m + o * f * m + u * l * x - o * h * x,
      E = u * p * c - g * d * c + g * a * m - o * p * m - u * a * x + o * d * x,
      M = g * d * l - u * p * l - g * a * h + o * p * h + u * a * f - o * d * f,
      A = t * w + n * y + i * E + s * M;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const F = 1 / A;
    return (
      (e[0] = w * F),
      (e[1] =
        (p * h * s -
          d * f * s -
          p * i * m +
          n * f * m +
          d * i * x -
          n * h * x) *
        F),
      (e[2] =
        (a * f * s -
          p * l * s +
          p * i * c -
          n * f * c -
          a * i * x +
          n * l * x) *
        F),
      (e[3] =
        (d * l * s -
          a * h * s -
          d * i * c +
          n * h * c +
          a * i * m -
          n * l * m) *
        F),
      (e[4] = y * F),
      (e[5] =
        (u * f * s -
          g * h * s +
          g * i * m -
          t * f * m -
          u * i * x +
          t * h * x) *
        F),
      (e[6] =
        (g * l * s -
          o * f * s -
          g * i * c +
          t * f * c +
          o * i * x -
          t * l * x) *
        F),
      (e[7] =
        (o * h * s -
          u * l * s +
          u * i * c -
          t * h * c -
          o * i * m +
          t * l * m) *
        F),
      (e[8] = E * F),
      (e[9] =
        (g * d * s -
          u * p * s -
          g * n * m +
          t * p * m +
          u * n * x -
          t * d * x) *
        F),
      (e[10] =
        (o * p * s -
          g * a * s +
          g * n * c -
          t * p * c -
          o * n * x +
          t * a * x) *
        F),
      (e[11] =
        (u * a * s -
          o * d * s -
          u * n * c +
          t * d * c +
          o * n * m -
          t * a * m) *
        F),
      (e[12] = M * F),
      (e[13] =
        (u * p * i -
          g * d * i +
          g * n * h -
          t * p * h -
          u * n * f +
          t * d * f) *
        F),
      (e[14] =
        (g * a * i -
          o * p * i -
          g * n * l +
          t * p * l +
          o * n * f -
          t * a * f) *
        F),
      (e[15] =
        (o * d * i -
          u * a * i +
          u * n * l -
          t * d * l -
          o * n * h +
          t * a * h) *
        F),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      s = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= s),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= s),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= s),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = 1 - n,
      o = e.x,
      a = e.y,
      l = e.z,
      c = s * o,
      u = s * a;
    return (
      this.set(
        c * o + n,
        c * a - i * l,
        c * l + i * a,
        0,
        c * a + i * l,
        u * a + n,
        u * l - i * o,
        0,
        c * l - i * a,
        u * l + i * o,
        s * l * l + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, o) {
    return this.set(1, n, s, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      s = t._x,
      o = t._y,
      a = t._z,
      l = t._w,
      c = s + s,
      u = o + o,
      d = a + a,
      h = s * c,
      m = s * u,
      g = s * d,
      p = o * u,
      f = o * d,
      x = a * d,
      w = l * c,
      y = l * u,
      E = l * d,
      M = n.x,
      A = n.y,
      F = n.z;
    return (
      (i[0] = (1 - (p + x)) * M),
      (i[1] = (m + E) * M),
      (i[2] = (g - y) * M),
      (i[3] = 0),
      (i[4] = (m - E) * A),
      (i[5] = (1 - (h + x)) * A),
      (i[6] = (f + w) * A),
      (i[7] = 0),
      (i[8] = (g + y) * F),
      (i[9] = (f - w) * F),
      (i[10] = (1 - (h + p)) * F),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Dn.set(i[0], i[1], i[2]).length();
    const o = Dn.set(i[4], i[5], i[6]).length(),
      a = Dn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      Dt.copy(this);
    const c = 1 / s,
      u = 1 / o,
      d = 1 / a;
    return (
      (Dt.elements[0] *= c),
      (Dt.elements[1] *= c),
      (Dt.elements[2] *= c),
      (Dt.elements[4] *= u),
      (Dt.elements[5] *= u),
      (Dt.elements[6] *= u),
      (Dt.elements[8] *= d),
      (Dt.elements[9] *= d),
      (Dt.elements[10] *= d),
      t.setFromRotationMatrix(Dt),
      (n.x = s),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, i, s, o) {
    const a = this.elements,
      l = (2 * s) / (t - e),
      c = (2 * s) / (n - i),
      u = (t + e) / (t - e),
      d = (n + i) / (n - i),
      h = -(o + s) / (o - s),
      m = (-2 * o * s) / (o - s);
    return (
      (a[0] = l),
      (a[4] = 0),
      (a[8] = u),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = c),
      (a[9] = d),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = h),
      (a[14] = m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, s, o) {
    const a = this.elements,
      l = 1 / (t - e),
      c = 1 / (n - i),
      u = 1 / (o - s),
      d = (t + e) * l,
      h = (n + i) * c,
      m = (o + s) * u;
    return (
      (a[0] = 2 * l),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -d),
      (a[1] = 0),
      (a[5] = 2 * c),
      (a[9] = 0),
      (a[13] = -h),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * u),
      (a[14] = -m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Dn = new I(),
  Dt = new Ye(),
  Pl = new I(0, 0, 0),
  Il = new I(1, 1, 1),
  tn = new I(),
  Ui = new I(),
  _t = new I(),
  Qs = new Ye(),
  ea = new Ei();
class Qn {
  constructor(e = 0, t = 0, n = 0, i = Qn.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      s = i[0],
      o = i[4],
      a = i[8],
      l = i[1],
      c = i[5],
      u = i[9],
      d = i[2],
      h = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(xt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-u, m)), (this._z = Math.atan2(-o, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-xt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-d, s)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(xt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-d, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case "ZYX":
        (this._y = Math.asin(-xt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._x = Math.atan2(h, m)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(xt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-u, c)), (this._y = Math.atan2(-d, s)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-xt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(a, s)))
            : ((this._x = Math.atan2(-u, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      Qs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Qs, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ea.setFromEuler(this), this.setFromQuaternion(ea, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
Qn.DefaultOrder = "XYZ";
Qn.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class io {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Fl = 0;
const ta = new I(),
  Rn = new Ei(),
  qt = new Ye(),
  zi = new I(),
  ri = new I(),
  Ol = new I(),
  Nl = new Ei(),
  na = new I(1, 0, 0),
  ia = new I(0, 1, 0),
  ra = new I(0, 0, 1),
  Ul = { type: "added" },
  sa = { type: "removed" };
class yt extends Jn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Fl++ }),
      (this.uuid = wi()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = yt.DefaultUp.clone());
    const e = new I(),
      t = new Qn(),
      n = new Ei(),
      i = new I(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Ye() },
        normalMatrix: { value: new bt() },
      }),
      (this.matrix = new Ye()),
      (this.matrixWorld = new Ye()),
      (this.matrixAutoUpdate = yt.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.matrixWorldAutoUpdate = yt.DefaultMatrixWorldAutoUpdate),
      (this.layers = new io()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Rn.setFromAxisAngle(e, t), this.quaternion.multiply(Rn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Rn.setFromAxisAngle(e, t), this.quaternion.premultiply(Rn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(na, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ia, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ra, e);
  }
  translateOnAxis(e, t) {
    return (
      ta.copy(e).applyQuaternion(this.quaternion),
      this.position.add(ta.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(na, e);
  }
  translateY(e) {
    return this.translateOnAxis(ia, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ra, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(qt.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? zi.copy(e) : zi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      ri.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? qt.lookAt(ri, zi, this.up)
        : qt.lookAt(zi, ri, this.up),
      this.quaternion.setFromRotationMatrix(qt),
      i &&
        (qt.extractRotation(i.matrixWorld),
        Rn.setFromRotationMatrix(qt),
        this.quaternion.premultiply(Rn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Ul))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(sa)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(sa);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      qt.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), qt.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(qt),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let i = 0, s = this.children.length; i < s; i++) {
      const o = this.children[i].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ri, e, Ol), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ri, Nl, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 &&
        n !== null &&
        n.matrixWorldAutoUpdate === !0 &&
        n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let s = 0, o = i.length; s < o; s++) {
        const a = i[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function s(a, l) {
      return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const l = a.shapes;
        if (Array.isArray(l))
          for (let c = 0, u = l.length; c < u; c++) {
            const d = l[c];
            s(e.shapes, d);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          a.push(s(e.materials, this.material[l]));
        i.material = a;
      } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const l = this.animations[a];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const a = o(e.geometries),
        l = o(e.materials),
        c = o(e.textures),
        u = o(e.images),
        d = o(e.shapes),
        h = o(e.skeletons),
        m = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        u.length > 0 && (n.images = u),
        d.length > 0 && (n.shapes = d),
        h.length > 0 && (n.skeletons = h),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function o(a) {
      const l = [];
      for (const c in a) {
        const u = a[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
yt.DefaultUp = new I(0, 1, 0);
yt.DefaultMatrixAutoUpdate = !0;
yt.DefaultMatrixWorldAutoUpdate = !0;
const Rt = new I(),
  Yt = new I(),
  Rr = new I(),
  jt = new I(),
  Pn = new I(),
  In = new I(),
  aa = new I(),
  Pr = new I(),
  Ir = new I(),
  Fr = new I();
class $t {
  constructor(e = new I(), t = new I(), n = new I()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Rt.subVectors(e, t), i.cross(Rt);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Rt.subVectors(i, t), Yt.subVectors(n, t), Rr.subVectors(e, t);
    const o = Rt.dot(Rt),
      a = Rt.dot(Yt),
      l = Rt.dot(Rr),
      c = Yt.dot(Yt),
      u = Yt.dot(Rr),
      d = o * c - a * a;
    if (d === 0) return s.set(-2, -1, -1);
    const h = 1 / d,
      m = (c * l - a * u) * h,
      g = (o * u - a * l) * h;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, jt),
      jt.x >= 0 && jt.y >= 0 && jt.x + jt.y <= 1
    );
  }
  static getUV(e, t, n, i, s, o, a, l) {
    return (
      this.getBarycoord(e, t, n, i, jt),
      l.set(0, 0),
      l.addScaledVector(s, jt.x),
      l.addScaledVector(o, jt.y),
      l.addScaledVector(a, jt.z),
      l
    );
  }
  static isFrontFacing(e, t, n, i) {
    return Rt.subVectors(n, t), Yt.subVectors(e, t), Rt.cross(Yt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Rt.subVectors(this.c, this.b),
      Yt.subVectors(this.a, this.b),
      Rt.cross(Yt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return $t.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return $t.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, s) {
    return $t.getUV(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return $t.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return $t.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      s = this.c;
    let o, a;
    Pn.subVectors(i, n), In.subVectors(s, n), Pr.subVectors(e, n);
    const l = Pn.dot(Pr),
      c = In.dot(Pr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Ir.subVectors(e, i);
    const u = Pn.dot(Ir),
      d = In.dot(Ir);
    if (u >= 0 && d <= u) return t.copy(i);
    const h = l * d - u * c;
    if (h <= 0 && l >= 0 && u <= 0)
      return (o = l / (l - u)), t.copy(n).addScaledVector(Pn, o);
    Fr.subVectors(e, s);
    const m = Pn.dot(Fr),
      g = In.dot(Fr);
    if (g >= 0 && m <= g) return t.copy(s);
    const p = m * c - l * g;
    if (p <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), t.copy(n).addScaledVector(In, a);
    const f = u * g - m * d;
    if (f <= 0 && d - u >= 0 && m - g >= 0)
      return (
        aa.subVectors(s, i),
        (a = (d - u) / (d - u + (m - g))),
        t.copy(i).addScaledVector(aa, a)
      );
    const x = 1 / (f + p + h);
    return (
      (o = p * x),
      (a = h * x),
      t.copy(n).addScaledVector(Pn, o).addScaledVector(In, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let zl = 0;
class sr extends Jn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: zl++ }),
      (this.uuid = wi()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Xn),
      (this.side = Sn),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = qa),
      (this.blendDst = Ya),
      (this.blendEquation = kn),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = qr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = Tl),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = _r),
      (this.stencilZFail = _r),
      (this.stencilZPass = _r),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Xn && (n.blending = this.blending),
      this.side !== Sn && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const o = [];
      for (const a in s) {
        const l = s[a];
        delete l.metadata, o.push(l);
      }
      return o;
    }
    if (t) {
      const s = i(e.textures),
        o = i(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class as extends sr {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ue(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = ja),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const We = new I(),
  Bi = new Ce();
class kt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = js),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, s = this.itemSize; i < s; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Bi.fromBufferAttribute(this, t),
          Bi.applyMatrix3(e),
          this.setXY(t, Bi.x, Bi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        We.fromBufferAttribute(this, t),
          We.applyMatrix3(e),
          this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      We.fromBufferAttribute(this, t),
        We.applyMatrix4(e),
        this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      We.fromBufferAttribute(this, t),
        We.applyNormalMatrix(e),
        this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      We.fromBufferAttribute(this, t),
        We.transformDirection(e),
        this.setXYZ(t, We.x, We.y, We.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Di(t, this.array)), t;
  }
  setX(e, t) {
    return (
      this.normalized && (t = gt(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Di(t, this.array)), t;
  }
  setY(e, t) {
    return (
      this.normalized && (t = gt(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Di(t, this.array)), t;
  }
  setZ(e, t) {
    return (
      this.normalized && (t = gt(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Di(t, this.array)), t;
  }
  setW(e, t) {
    return (
      this.normalized && (t = gt(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = gt(t, this.array)), (n = gt(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = gt(t, this.array)),
        (n = gt(n, this.array)),
        (i = gt(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = gt(t, this.array)),
        (n = gt(n, this.array)),
        (i = gt(i, this.array)),
        (s = gt(s, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== js && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
  copyColorsArray() {
    console.error(
      "THREE.BufferAttribute: copyColorsArray() was removed in r144."
    );
  }
  copyVector2sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector2sArray() was removed in r144."
    );
  }
  copyVector3sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector3sArray() was removed in r144."
    );
  }
  copyVector4sArray() {
    console.error(
      "THREE.BufferAttribute: copyVector4sArray() was removed in r144."
    );
  }
}
class ro extends kt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class so extends kt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Kt extends kt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let Bl = 0;
const wt = new Ye(),
  Or = new yt(),
  Fn = new I(),
  vt = new Ti(),
  si = new Ti(),
  et = new I();
class sn extends Jn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: Bl++ }),
      (this.uuid = wi()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Ja(e) ? so : ro)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new bt().getNormalMatrix(e);
      n.applyNormalMatrix(s), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return wt.makeRotationFromQuaternion(e), this.applyMatrix4(wt), this;
  }
  rotateX(e) {
    return wt.makeRotationX(e), this.applyMatrix4(wt), this;
  }
  rotateY(e) {
    return wt.makeRotationY(e), this.applyMatrix4(wt), this;
  }
  rotateZ(e) {
    return wt.makeRotationZ(e), this.applyMatrix4(wt), this;
  }
  translate(e, t, n) {
    return wt.makeTranslation(e, t, n), this.applyMatrix4(wt), this;
  }
  scale(e, t, n) {
    return wt.makeScale(e, t, n), this.applyMatrix4(wt), this;
  }
  lookAt(e) {
    return Or.lookAt(e), Or.updateMatrix(), this.applyMatrix4(Or.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Fn).negate(),
      this.translate(Fn.x, Fn.y, Fn.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new Kt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ti());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new I(-1 / 0, -1 / 0, -1 / 0),
          new I(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const s = t[n];
          vt.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (et.addVectors(this.boundingBox.min, vt.min),
                this.boundingBox.expandByPoint(et),
                et.addVectors(this.boundingBox.max, vt.max),
                this.boundingBox.expandByPoint(et))
              : (this.boundingBox.expandByPoint(vt.min),
                this.boundingBox.expandByPoint(vt.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ss());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new I(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((vt.setFromBufferAttribute(e), t))
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          si.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (et.addVectors(vt.min, si.min),
                vt.expandByPoint(et),
                et.addVectors(vt.max, si.max),
                vt.expandByPoint(et))
              : (vt.expandByPoint(si.min), vt.expandByPoint(si.max));
        }
      vt.getCenter(n);
      let i = 0;
      for (let s = 0, o = e.count; s < o; s++)
        et.fromBufferAttribute(e, s),
          (i = Math.max(i, n.distanceToSquared(et)));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s],
            l = this.morphTargetsRelative;
          for (let c = 0, u = a.count; c < u; c++)
            et.fromBufferAttribute(a, c),
              l && (Fn.fromBufferAttribute(e, c), et.add(Fn)),
              (i = Math.max(i, n.distanceToSquared(et)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      s = t.normal.array,
      o = t.uv.array,
      a = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new kt(new Float32Array(4 * a), 4));
    const l = this.getAttribute("tangent").array,
      c = [],
      u = [];
    for (let O = 0; O < a; O++) (c[O] = new I()), (u[O] = new I());
    const d = new I(),
      h = new I(),
      m = new I(),
      g = new Ce(),
      p = new Ce(),
      f = new Ce(),
      x = new I(),
      w = new I();
    function y(O, j, se) {
      d.fromArray(i, O * 3),
        h.fromArray(i, j * 3),
        m.fromArray(i, se * 3),
        g.fromArray(o, O * 2),
        p.fromArray(o, j * 2),
        f.fromArray(o, se * 2),
        h.sub(d),
        m.sub(d),
        p.sub(g),
        f.sub(g);
      const N = 1 / (p.x * f.y - f.x * p.y);
      isFinite(N) &&
        (x
          .copy(h)
          .multiplyScalar(f.y)
          .addScaledVector(m, -p.y)
          .multiplyScalar(N),
        w
          .copy(m)
          .multiplyScalar(p.x)
          .addScaledVector(h, -f.x)
          .multiplyScalar(N),
        c[O].add(x),
        c[j].add(x),
        c[se].add(x),
        u[O].add(w),
        u[j].add(w),
        u[se].add(w));
    }
    let E = this.groups;
    E.length === 0 && (E = [{ start: 0, count: n.length }]);
    for (let O = 0, j = E.length; O < j; ++O) {
      const se = E[O],
        N = se.start,
        D = se.count;
      for (let Y = N, J = N + D; Y < J; Y += 3) y(n[Y + 0], n[Y + 1], n[Y + 2]);
    }
    const M = new I(),
      A = new I(),
      F = new I(),
      _ = new I();
    function T(O) {
      F.fromArray(s, O * 3), _.copy(F);
      const j = c[O];
      M.copy(j),
        M.sub(F.multiplyScalar(F.dot(j))).normalize(),
        A.crossVectors(_, j);
      const N = A.dot(u[O]) < 0 ? -1 : 1;
      (l[O * 4] = M.x),
        (l[O * 4 + 1] = M.y),
        (l[O * 4 + 2] = M.z),
        (l[O * 4 + 3] = N);
    }
    for (let O = 0, j = E.length; O < j; ++O) {
      const se = E[O],
        N = se.start,
        D = se.count;
      for (let Y = N, J = N + D; Y < J; Y += 3)
        T(n[Y + 0]), T(n[Y + 1]), T(n[Y + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new kt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let h = 0, m = n.count; h < m; h++) n.setXYZ(h, 0, 0, 0);
      const i = new I(),
        s = new I(),
        o = new I(),
        a = new I(),
        l = new I(),
        c = new I(),
        u = new I(),
        d = new I();
      if (e)
        for (let h = 0, m = e.count; h < m; h += 3) {
          const g = e.getX(h + 0),
            p = e.getX(h + 1),
            f = e.getX(h + 2);
          i.fromBufferAttribute(t, g),
            s.fromBufferAttribute(t, p),
            o.fromBufferAttribute(t, f),
            u.subVectors(o, s),
            d.subVectors(i, s),
            u.cross(d),
            a.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, p),
            c.fromBufferAttribute(n, f),
            a.add(u),
            l.add(u),
            c.add(u),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(p, l.x, l.y, l.z),
            n.setXYZ(f, c.x, c.y, c.z);
        }
      else
        for (let h = 0, m = t.count; h < m; h += 3)
          i.fromBufferAttribute(t, h + 0),
            s.fromBufferAttribute(t, h + 1),
            o.fromBufferAttribute(t, h + 2),
            u.subVectors(o, s),
            d.subVectors(i, s),
            u.cross(d),
            n.setXYZ(h + 0, u.x, u.y, u.z),
            n.setXYZ(h + 1, u.x, u.y, u.z),
            n.setXYZ(h + 2, u.x, u.y, u.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge() {
    return (
      console.error(
        "THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."
      ),
      this
    );
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      et.fromBufferAttribute(e, t),
        et.normalize(),
        e.setXYZ(t, et.x, et.y, et.z);
  }
  toNonIndexed() {
    function e(a, l) {
      const c = a.array,
        u = a.itemSize,
        d = a.normalized,
        h = new c.constructor(l.length * u);
      let m = 0,
        g = 0;
      for (let p = 0, f = l.length; p < f; p++) {
        a.isInterleavedBufferAttribute
          ? (m = l[p] * a.data.stride + a.offset)
          : (m = l[p] * u);
        for (let x = 0; x < u; x++) h[g++] = c[m++];
      }
      return new kt(h, u, d);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new sn(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const l = i[a],
        c = e(l, n);
      t.setAttribute(a, c);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const l = [],
        c = s[a];
      for (let u = 0, d = c.length; u < d; u++) {
        const h = c[u],
          m = e(h, n);
        l.push(m);
      }
      t.morphAttributes[a] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, l = o.length; a < l; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        u = [];
      for (let d = 0, h = c.length; d < h; d++) {
        const m = c[d];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && ((i[l] = u), (s = !0));
    }
    s &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const u = i[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [],
        d = s[c];
      for (let h = 0, m = d.length; h < m; h++) u.push(d[h].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, u = o.length; c < u; c++) {
      const d = o[c];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const oa = new Ye(),
  On = new Rl(),
  Nr = new ss(),
  ai = new I(),
  oi = new I(),
  li = new I(),
  Ur = new I(),
  ki = new I(),
  Vi = new Ce(),
  Gi = new Ce(),
  Hi = new Ce(),
  zr = new I(),
  Wi = new I();
class Bt extends yt {
  constructor(e = new sn(), t = new as()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, o = i.length; s < o; s++) {
          const a = i[s].name || String(s);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = s);
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      s = n.morphAttributes.position,
      o = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      ki.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = a[l],
          d = s[l];
        u !== 0 &&
          (Ur.fromBufferAttribute(d, e),
          o ? ki.addScaledVector(Ur, u) : ki.addScaledVector(Ur.sub(t), u));
      }
      t.add(ki);
    }
    return this.isSkinnedMesh && this.boneTransform(e, t), t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      s = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Nr.copy(n.boundingSphere),
      Nr.applyMatrix4(s),
      e.ray.intersectsSphere(Nr) === !1) ||
      (oa.copy(s).invert(),
      On.copy(e.ray).applyMatrix4(oa),
      n.boundingBox !== null && On.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const a = n.index,
      l = n.attributes.position,
      c = n.attributes.uv,
      u = n.attributes.uv2,
      d = n.groups,
      h = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let m = 0, g = d.length; m < g; m++) {
          const p = d[m],
            f = i[p.materialIndex],
            x = Math.max(p.start, h.start),
            w = Math.min(
              a.count,
              Math.min(p.start + p.count, h.start + h.count)
            );
          for (let y = x, E = w; y < E; y += 3) {
            const M = a.getX(y),
              A = a.getX(y + 1),
              F = a.getX(y + 2);
            (o = Xi(this, f, e, On, c, u, M, A, F)),
              o &&
                ((o.faceIndex = Math.floor(y / 3)),
                (o.face.materialIndex = p.materialIndex),
                t.push(o));
          }
        }
      else {
        const m = Math.max(0, h.start),
          g = Math.min(a.count, h.start + h.count);
        for (let p = m, f = g; p < f; p += 3) {
          const x = a.getX(p),
            w = a.getX(p + 1),
            y = a.getX(p + 2);
          (o = Xi(this, i, e, On, c, u, x, w, y)),
            o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(i))
        for (let m = 0, g = d.length; m < g; m++) {
          const p = d[m],
            f = i[p.materialIndex],
            x = Math.max(p.start, h.start),
            w = Math.min(
              l.count,
              Math.min(p.start + p.count, h.start + h.count)
            );
          for (let y = x, E = w; y < E; y += 3) {
            const M = y,
              A = y + 1,
              F = y + 2;
            (o = Xi(this, f, e, On, c, u, M, A, F)),
              o &&
                ((o.faceIndex = Math.floor(y / 3)),
                (o.face.materialIndex = p.materialIndex),
                t.push(o));
          }
        }
      else {
        const m = Math.max(0, h.start),
          g = Math.min(l.count, h.start + h.count);
        for (let p = m, f = g; p < f; p += 3) {
          const x = p,
            w = p + 1,
            y = p + 2;
          (o = Xi(this, i, e, On, c, u, x, w, y)),
            o && ((o.faceIndex = Math.floor(p / 3)), t.push(o));
        }
      }
  }
}
function kl(r, e, t, n, i, s, o, a) {
  let l;
  if (
    (e.side === Ct
      ? (l = n.intersectTriangle(o, s, i, !0, a))
      : (l = n.intersectTriangle(i, s, o, e.side === Sn, a)),
    l === null)
  )
    return null;
  Wi.copy(a), Wi.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(Wi);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: Wi.clone(), object: r };
}
function Xi(r, e, t, n, i, s, o, a, l) {
  r.getVertexPosition(o, ai),
    r.getVertexPosition(a, oi),
    r.getVertexPosition(l, li);
  const c = kl(r, e, t, n, ai, oi, li, zr);
  if (c) {
    i &&
      (Vi.fromBufferAttribute(i, o),
      Gi.fromBufferAttribute(i, a),
      Hi.fromBufferAttribute(i, l),
      (c.uv = $t.getUV(zr, ai, oi, li, Vi, Gi, Hi, new Ce()))),
      s &&
        (Vi.fromBufferAttribute(s, o),
        Gi.fromBufferAttribute(s, a),
        Hi.fromBufferAttribute(s, l),
        (c.uv2 = $t.getUV(zr, ai, oi, li, Vi, Gi, Hi, new Ce())));
    const u = { a: o, b: a, c: l, normal: new I(), materialIndex: 0 };
    $t.getNormal(ai, oi, li, u.normal), (c.face = u);
  }
  return c;
}
class Ci extends sn {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: s,
        depthSegments: o,
      });
    const a = this;
    (i = Math.floor(i)), (s = Math.floor(s)), (o = Math.floor(o));
    const l = [],
      c = [],
      u = [],
      d = [];
    let h = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0),
      g("z", "y", "x", 1, -1, n, t, -e, o, s, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
      this.setIndex(l),
      this.setAttribute("position", new Kt(c, 3)),
      this.setAttribute("normal", new Kt(u, 3)),
      this.setAttribute("uv", new Kt(d, 2));
    function g(p, f, x, w, y, E, M, A, F, _, T) {
      const O = E / F,
        j = M / _,
        se = E / 2,
        N = M / 2,
        D = A / 2,
        Y = F + 1,
        J = _ + 1;
      let Z = 0,
        X = 0;
      const te = new I();
      for (let Q = 0; Q < J; Q++) {
        const U = Q * j - N;
        for (let V = 0; V < Y; V++) {
          const K = V * O - se;
          (te[p] = K * w),
            (te[f] = U * y),
            (te[x] = D),
            c.push(te.x, te.y, te.z),
            (te[p] = 0),
            (te[f] = 0),
            (te[x] = A > 0 ? 1 : -1),
            u.push(te.x, te.y, te.z),
            d.push(V / F),
            d.push(1 - Q / _),
            (Z += 1);
        }
      }
      for (let Q = 0; Q < _; Q++)
        for (let U = 0; U < F; U++) {
          const V = h + U + Y * Q,
            K = h + U + Y * (Q + 1),
            ne = h + (U + 1) + Y * (Q + 1),
            ae = h + (U + 1) + Y * Q;
          l.push(V, K, ae), l.push(K, ne, ae), (X += 6);
        }
      a.addGroup(m, X, T), (m += X), (h += Z);
    }
  }
  static fromJSON(e) {
    return new Ci(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function Zn(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function ut(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = Zn(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function Vl(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function ao(r) {
  return r.getRenderTarget() === null && r.outputEncoding === Be ? Ut : xi;
}
const er = { clone: Zn, merge: ut };
var Gl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Hl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class ht extends sr {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = Gl),
      (this.fragmentShader = Hl),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Zn(e.uniforms)),
      (this.uniformsGroups = Vl(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[i] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[i] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[i] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[i] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: o.toArray() })
        : (t.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class os extends yt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Ye()),
      (this.projectionMatrix = new Ye()),
      (this.projectionMatrixInverse = new Ye());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Et extends os {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Zs * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(vr * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Zs * 2 * Math.atan(Math.tan(vr * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, s, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(vr * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      s = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = o.fullWidth,
        c = o.fullHeight;
      (s += (o.offsetX * i) / l),
        (t -= (o.offsetY * n) / c),
        (i *= o.width / l),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (s += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Nn = -90,
  Un = 1;
class Wl extends yt {
  constructor(e, t, n) {
    super(), (this.type = "CubeCamera"), (this.renderTarget = n);
    const i = new Et(Nn, Un, e, t);
    (i.layers = this.layers), i.up.set(0, 1, 0), i.lookAt(1, 0, 0), this.add(i);
    const s = new Et(Nn, Un, e, t);
    (s.layers = this.layers),
      s.up.set(0, 1, 0),
      s.lookAt(-1, 0, 0),
      this.add(s);
    const o = new Et(Nn, Un, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, -1),
      o.lookAt(0, 1, 0),
      this.add(o);
    const a = new Et(Nn, Un, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, 1),
      a.lookAt(0, -1, 0),
      this.add(a);
    const l = new Et(Nn, Un, e, t);
    (l.layers = this.layers), l.up.set(0, 1, 0), l.lookAt(0, 0, 1), this.add(l);
    const c = new Et(Nn, Un, e, t);
    (c.layers = this.layers),
      c.up.set(0, 1, 0),
      c.lookAt(0, 0, -1),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, s, o, a, l, c] = this.children,
      u = e.getRenderTarget(),
      d = e.toneMapping,
      h = e.xr.enabled;
    (e.toneMapping = Zt), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, s),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, l),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(u),
      (e.toneMapping = d),
      (e.xr.enabled = h),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class oo extends ft {
  constructor(e, t, n, i, s, o, a, l, c, u) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Yn),
      super(e, t, n, i, s, o, a, l, c, u),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Xl extends It {
  constructor(e = 1, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new oo(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : dt);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new Ci(5, 5, 5),
      s = new ht({
        name: "CubemapFromEquirect",
        uniforms: Zn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Ct,
        blending: nn,
      });
    s.uniforms.tEquirect.value = t;
    const o = new Bt(i, s),
      a = t.minFilter;
    return (
      t.minFilter === _i && (t.minFilter = dt),
      new Wl(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
const Br = new I(),
  ql = new I(),
  Yl = new bt();
class gn {
  constructor(e = new I(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Br.subVectors(n, t).cross(ql.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Br),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(n).multiplyScalar(s).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Yl.getNormalMatrix(e),
      i = this.coplanarPoint(Br).applyMatrix4(e),
      s = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const zn = new ss(),
  qi = new I();
class lo {
  constructor(
    e = new gn(),
    t = new gn(),
    n = new gn(),
    i = new gn(),
    s = new gn(),
    o = new gn()
  ) {
    this.planes = [e, t, n, i, s, o];
  }
  set(e, t, n, i, s, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(s),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      s = n[1],
      o = n[2],
      a = n[3],
      l = n[4],
      c = n[5],
      u = n[6],
      d = n[7],
      h = n[8],
      m = n[9],
      g = n[10],
      p = n[11],
      f = n[12],
      x = n[13],
      w = n[14],
      y = n[15];
    return (
      t[0].setComponents(a - i, d - l, p - h, y - f).normalize(),
      t[1].setComponents(a + i, d + l, p + h, y + f).normalize(),
      t[2].setComponents(a + s, d + c, p + m, y + x).normalize(),
      t[3].setComponents(a - s, d - c, p - m, y - x).normalize(),
      t[4].setComponents(a - o, d - u, p - g, y - w).normalize(),
      t[5].setComponents(a + o, d + u, p + g, y + w).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(zn)
    );
  }
  intersectsSprite(e) {
    return (
      zn.center.set(0, 0, 0),
      (zn.radius = 0.7071067811865476),
      zn.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(zn)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((qi.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (qi.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (qi.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(qi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function co() {
  let r = null,
    e = !1,
    t = null,
    n = null;
  function i(s, o) {
    t(s, o), (n = r.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = r.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      r.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (s) {
      t = s;
    },
    setContext: function (s) {
      r = s;
    },
  };
}
function jl(r, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, u) {
    const d = c.array,
      h = c.usage,
      m = r.createBuffer();
    r.bindBuffer(u, m), r.bufferData(u, d, h), c.onUploadCallback();
    let g;
    if (d instanceof Float32Array) g = 5126;
    else if (d instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (d instanceof Int16Array) g = 5122;
    else if (d instanceof Uint32Array) g = 5125;
    else if (d instanceof Int32Array) g = 5124;
    else if (d instanceof Int8Array) g = 5120;
    else if (d instanceof Uint8Array) g = 5121;
    else if (d instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + d
      );
    return {
      buffer: m,
      type: g,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function s(c, u, d) {
    const h = u.array,
      m = u.updateRange;
    r.bindBuffer(d, c),
      m.count === -1
        ? r.bufferSubData(d, 0, h)
        : (t
            ? r.bufferSubData(
                d,
                m.offset * h.BYTES_PER_ELEMENT,
                h,
                m.offset,
                m.count
              )
            : r.bufferSubData(
                d,
                m.offset * h.BYTES_PER_ELEMENT,
                h.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1)),
      u.onUploadCallback();
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const u = n.get(c);
    u && (r.deleteBuffer(u.buffer), n.delete(c));
  }
  function l(c, u) {
    if (c.isGLBufferAttribute) {
      const h = n.get(c);
      (!h || h.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = n.get(c);
    d === void 0
      ? n.set(c, i(c, u))
      : d.version < c.version && (s(d.buffer, c, u), (d.version = c.version));
  }
  return { get: o, remove: a, update: l };
}
class ar extends sn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const s = e / 2,
      o = t / 2,
      a = Math.floor(n),
      l = Math.floor(i),
      c = a + 1,
      u = l + 1,
      d = e / a,
      h = t / l,
      m = [],
      g = [],
      p = [],
      f = [];
    for (let x = 0; x < u; x++) {
      const w = x * h - o;
      for (let y = 0; y < c; y++) {
        const E = y * d - s;
        g.push(E, -w, 0), p.push(0, 0, 1), f.push(y / a), f.push(1 - x / l);
      }
    }
    for (let x = 0; x < l; x++)
      for (let w = 0; w < a; w++) {
        const y = w + c * x,
          E = w + c * (x + 1),
          M = w + 1 + c * (x + 1),
          A = w + 1 + c * x;
        m.push(y, E, A), m.push(E, M, A);
      }
    this.setIndex(m),
      this.setAttribute("position", new Kt(g, 3)),
      this.setAttribute("normal", new Kt(p, 3)),
      this.setAttribute("uv", new Kt(f, 2));
  }
  static fromJSON(e) {
    return new ar(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var $l = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  Zl = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Kl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Jl = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Ql = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  ec = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  tc = "vec3 transformed = vec3( position );",
  nc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  ic = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  rc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  sc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  ac = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  oc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  lc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  cc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  uc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  dc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  hc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  fc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  pc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  mc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  gc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  _c = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  vc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  xc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  bc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  yc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Mc = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Sc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  wc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  Ec = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Tc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Cc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Ac = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Lc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Dc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Rc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Pc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Ic = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Fc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Oc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Nc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Uc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  zc = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  Bc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  kc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Vc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Gc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  Hc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  Wc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Xc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  qc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Yc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  jc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  $c = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Zc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  Kc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Jc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Qc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  eu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  tu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  nu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  iu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  ru = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  su = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  au = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  ou = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  lu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  cu = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  uu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  du = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  hu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  fu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  pu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  mu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  gu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  _u = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  vu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  xu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  bu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  yu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Mu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Su = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  wu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Eu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Tu = `#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Cu = `#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Au = `#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  Lu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Du = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Ru = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Pu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Iu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Fu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Ou = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Nu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Uu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  zu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,
  Bu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  ku = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  Vu = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Gu = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Hu = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  Wu = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Xu = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  qu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Yu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  ju = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  $u = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Zu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Ku = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Ju = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  Qu = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  ed = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  td = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  nd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  id = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  rd = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  sd = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ad = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  od = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  ld = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  cd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ud = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  dd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  hd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  fd = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  pd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  md = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  gd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  _d = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  vd = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  xd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  bd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  yd = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Md = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Sd = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  wd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Ed = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Td = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  Se = {
    alphamap_fragment: $l,
    alphamap_pars_fragment: Zl,
    alphatest_fragment: Kl,
    alphatest_pars_fragment: Jl,
    aomap_fragment: Ql,
    aomap_pars_fragment: ec,
    begin_vertex: tc,
    beginnormal_vertex: nc,
    bsdfs: ic,
    iridescence_fragment: rc,
    bumpmap_pars_fragment: sc,
    clipping_planes_fragment: ac,
    clipping_planes_pars_fragment: oc,
    clipping_planes_pars_vertex: lc,
    clipping_planes_vertex: cc,
    color_fragment: uc,
    color_pars_fragment: dc,
    color_pars_vertex: hc,
    color_vertex: fc,
    common: pc,
    cube_uv_reflection_fragment: mc,
    defaultnormal_vertex: gc,
    displacementmap_pars_vertex: _c,
    displacementmap_vertex: vc,
    emissivemap_fragment: xc,
    emissivemap_pars_fragment: bc,
    encodings_fragment: yc,
    encodings_pars_fragment: Mc,
    envmap_fragment: Sc,
    envmap_common_pars_fragment: wc,
    envmap_pars_fragment: Ec,
    envmap_pars_vertex: Tc,
    envmap_physical_pars_fragment: zc,
    envmap_vertex: Cc,
    fog_vertex: Ac,
    fog_pars_vertex: Lc,
    fog_fragment: Dc,
    fog_pars_fragment: Rc,
    gradientmap_pars_fragment: Pc,
    lightmap_fragment: Ic,
    lightmap_pars_fragment: Fc,
    lights_lambert_fragment: Oc,
    lights_lambert_pars_fragment: Nc,
    lights_pars_begin: Uc,
    lights_toon_fragment: Bc,
    lights_toon_pars_fragment: kc,
    lights_phong_fragment: Vc,
    lights_phong_pars_fragment: Gc,
    lights_physical_fragment: Hc,
    lights_physical_pars_fragment: Wc,
    lights_fragment_begin: Xc,
    lights_fragment_maps: qc,
    lights_fragment_end: Yc,
    logdepthbuf_fragment: jc,
    logdepthbuf_pars_fragment: $c,
    logdepthbuf_pars_vertex: Zc,
    logdepthbuf_vertex: Kc,
    map_fragment: Jc,
    map_pars_fragment: Qc,
    map_particle_fragment: eu,
    map_particle_pars_fragment: tu,
    metalnessmap_fragment: nu,
    metalnessmap_pars_fragment: iu,
    morphcolor_vertex: ru,
    morphnormal_vertex: su,
    morphtarget_pars_vertex: au,
    morphtarget_vertex: ou,
    normal_fragment_begin: lu,
    normal_fragment_maps: cu,
    normal_pars_fragment: uu,
    normal_pars_vertex: du,
    normal_vertex: hu,
    normalmap_pars_fragment: fu,
    clearcoat_normal_fragment_begin: pu,
    clearcoat_normal_fragment_maps: mu,
    clearcoat_pars_fragment: gu,
    iridescence_pars_fragment: _u,
    output_fragment: vu,
    packing: xu,
    premultiplied_alpha_fragment: bu,
    project_vertex: yu,
    dithering_fragment: Mu,
    dithering_pars_fragment: Su,
    roughnessmap_fragment: wu,
    roughnessmap_pars_fragment: Eu,
    shadowmap_pars_fragment: Tu,
    shadowmap_pars_vertex: Cu,
    shadowmap_vertex: Au,
    shadowmask_pars_fragment: Lu,
    skinbase_vertex: Du,
    skinning_pars_vertex: Ru,
    skinning_vertex: Pu,
    skinnormal_vertex: Iu,
    specularmap_fragment: Fu,
    specularmap_pars_fragment: Ou,
    tonemapping_fragment: Nu,
    tonemapping_pars_fragment: Uu,
    transmission_fragment: zu,
    transmission_pars_fragment: Bu,
    uv_pars_fragment: ku,
    uv_pars_vertex: Vu,
    uv_vertex: Gu,
    uv2_pars_fragment: Hu,
    uv2_pars_vertex: Wu,
    uv2_vertex: Xu,
    worldpos_vertex: qu,
    background_vert: Yu,
    background_frag: ju,
    backgroundCube_vert: $u,
    backgroundCube_frag: Zu,
    cube_vert: Ku,
    cube_frag: Ju,
    depth_vert: Qu,
    depth_frag: ed,
    distanceRGBA_vert: td,
    distanceRGBA_frag: nd,
    equirect_vert: id,
    equirect_frag: rd,
    linedashed_vert: sd,
    linedashed_frag: ad,
    meshbasic_vert: od,
    meshbasic_frag: ld,
    meshlambert_vert: cd,
    meshlambert_frag: ud,
    meshmatcap_vert: dd,
    meshmatcap_frag: hd,
    meshnormal_vert: fd,
    meshnormal_frag: pd,
    meshphong_vert: md,
    meshphong_frag: gd,
    meshphysical_vert: _d,
    meshphysical_frag: vd,
    meshtoon_vert: xd,
    meshtoon_frag: bd,
    points_vert: yd,
    points_frag: Md,
    shadow_vert: Sd,
    shadow_frag: wd,
    sprite_vert: Ed,
    sprite_frag: Td,
  },
  re = {
    common: {
      diffuse: { value: new Ue(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new bt() },
      uv2Transform: { value: new bt() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new Ce(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ue(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ue(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new bt() },
    },
    sprite: {
      diffuse: { value: new Ue(16777215) },
      opacity: { value: 1 },
      center: { value: new Ce(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new bt() },
    },
  },
  zt = {
    basic: {
      uniforms: ut([
        re.common,
        re.specularmap,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.fog,
      ]),
      vertexShader: Se.meshbasic_vert,
      fragmentShader: Se.meshbasic_frag,
    },
    lambert: {
      uniforms: ut([
        re.common,
        re.specularmap,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.fog,
        re.lights,
        { emissive: { value: new Ue(0) } },
      ]),
      vertexShader: Se.meshlambert_vert,
      fragmentShader: Se.meshlambert_frag,
    },
    phong: {
      uniforms: ut([
        re.common,
        re.specularmap,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.fog,
        re.lights,
        {
          emissive: { value: new Ue(0) },
          specular: { value: new Ue(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Se.meshphong_vert,
      fragmentShader: Se.meshphong_frag,
    },
    standard: {
      uniforms: ut([
        re.common,
        re.envmap,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.roughnessmap,
        re.metalnessmap,
        re.fog,
        re.lights,
        {
          emissive: { value: new Ue(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Se.meshphysical_vert,
      fragmentShader: Se.meshphysical_frag,
    },
    toon: {
      uniforms: ut([
        re.common,
        re.aomap,
        re.lightmap,
        re.emissivemap,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.gradientmap,
        re.fog,
        re.lights,
        { emissive: { value: new Ue(0) } },
      ]),
      vertexShader: Se.meshtoon_vert,
      fragmentShader: Se.meshtoon_frag,
    },
    matcap: {
      uniforms: ut([
        re.common,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        re.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Se.meshmatcap_vert,
      fragmentShader: Se.meshmatcap_frag,
    },
    points: {
      uniforms: ut([re.points, re.fog]),
      vertexShader: Se.points_vert,
      fragmentShader: Se.points_frag,
    },
    dashed: {
      uniforms: ut([
        re.common,
        re.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Se.linedashed_vert,
      fragmentShader: Se.linedashed_frag,
    },
    depth: {
      uniforms: ut([re.common, re.displacementmap]),
      vertexShader: Se.depth_vert,
      fragmentShader: Se.depth_frag,
    },
    normal: {
      uniforms: ut([
        re.common,
        re.bumpmap,
        re.normalmap,
        re.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Se.meshnormal_vert,
      fragmentShader: Se.meshnormal_frag,
    },
    sprite: {
      uniforms: ut([re.sprite, re.fog]),
      vertexShader: Se.sprite_vert,
      fragmentShader: Se.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new bt() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Se.background_vert,
      fragmentShader: Se.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Se.backgroundCube_vert,
      fragmentShader: Se.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Se.cube_vert,
      fragmentShader: Se.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Se.equirect_vert,
      fragmentShader: Se.equirect_frag,
    },
    distanceRGBA: {
      uniforms: ut([
        re.common,
        re.displacementmap,
        {
          referencePosition: { value: new I() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Se.distanceRGBA_vert,
      fragmentShader: Se.distanceRGBA_frag,
    },
    shadow: {
      uniforms: ut([
        re.lights,
        re.fog,
        { color: { value: new Ue(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Se.shadow_vert,
      fragmentShader: Se.shadow_frag,
    },
  };
zt.physical = {
  uniforms: ut([
    zt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new Ce(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Ue(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new Ce() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ue(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Ue(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: Se.meshphysical_vert,
  fragmentShader: Se.meshphysical_frag,
};
const Yi = { r: 0, b: 0, g: 0 };
function Cd(r, e, t, n, i, s, o) {
  const a = new Ue(0);
  let l = s === !0 ? 0 : 1,
    c,
    u,
    d = null,
    h = 0,
    m = null;
  function g(f, x) {
    let w = !1,
      y = x.isScene === !0 ? x.background : null;
    y && y.isTexture && (y = (x.backgroundBlurriness > 0 ? t : e).get(y));
    const E = r.xr,
      M = E.getSession && E.getSession();
    M && M.environmentBlendMode === "additive" && (y = null),
      y === null ? p(a, l) : y && y.isColor && (p(y, 1), (w = !0)),
      (r.autoClear || w) &&
        r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil),
      y && (y.isCubeTexture || y.mapping === rr)
        ? (u === void 0 &&
            ((u = new Bt(
              new Ci(1, 1, 1),
              new ht({
                name: "BackgroundCubeMaterial",
                uniforms: Zn(zt.backgroundCube.uniforms),
                vertexShader: zt.backgroundCube.vertexShader,
                fragmentShader: zt.backgroundCube.fragmentShader,
                side: Ct,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            u.geometry.deleteAttribute("uv"),
            (u.onBeforeRender = function (A, F, _) {
              this.matrixWorld.copyPosition(_.matrixWorld);
            }),
            Object.defineProperty(u.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            i.update(u)),
          (u.material.uniforms.envMap.value = y),
          (u.material.uniforms.flipEnvMap.value =
            y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1),
          (u.material.uniforms.backgroundBlurriness.value =
            x.backgroundBlurriness),
          (u.material.uniforms.backgroundIntensity.value =
            x.backgroundIntensity),
          (u.material.toneMapped = y.encoding !== Be),
          (d !== y || h !== y.version || m !== r.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (d = y),
            (h = y.version),
            (m = r.toneMapping)),
          u.layers.enableAll(),
          f.unshift(u, u.geometry, u.material, 0, 0, null))
        : y &&
          y.isTexture &&
          (c === void 0 &&
            ((c = new Bt(
              new ar(2, 2),
              new ht({
                name: "BackgroundMaterial",
                uniforms: Zn(zt.background.uniforms),
                vertexShader: zt.background.vertexShader,
                fragmentShader: zt.background.fragmentShader,
                side: Sn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            Object.defineProperty(c.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            i.update(c)),
          (c.material.uniforms.t2D.value = y),
          (c.material.uniforms.backgroundIntensity.value =
            x.backgroundIntensity),
          (c.material.toneMapped = y.encoding !== Be),
          y.matrixAutoUpdate === !0 && y.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(y.matrix),
          (d !== y || h !== y.version || m !== r.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (d = y),
            (h = y.version),
            (m = r.toneMapping)),
          c.layers.enableAll(),
          f.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(f, x) {
    f.getRGB(Yi, ao(r)), n.buffers.color.setClear(Yi.r, Yi.g, Yi.b, x, o);
  }
  return {
    getClearColor: function () {
      return a;
    },
    setClearColor: function (f, x = 1) {
      a.set(f), (l = x), p(a, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (f) {
      (l = f), p(a, l);
    },
    render: g,
  };
}
function Ad(r, e, t, n) {
  const i = r.getParameter(34921),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = f(null);
  let c = l,
    u = !1;
  function d(D, Y, J, Z, X) {
    let te = !1;
    if (o) {
      const Q = p(Z, J, Y);
      c !== Q && ((c = Q), m(c.object)),
        (te = x(D, Z, J, X)),
        te && w(D, Z, J, X);
    } else {
      const Q = Y.wireframe === !0;
      (c.geometry !== Z.id || c.program !== J.id || c.wireframe !== Q) &&
        ((c.geometry = Z.id), (c.program = J.id), (c.wireframe = Q), (te = !0));
    }
    X !== null && t.update(X, 34963),
      (te || u) &&
        ((u = !1),
        _(D, Y, J, Z),
        X !== null && r.bindBuffer(34963, t.get(X).buffer));
  }
  function h() {
    return n.isWebGL2 ? r.createVertexArray() : s.createVertexArrayOES();
  }
  function m(D) {
    return n.isWebGL2 ? r.bindVertexArray(D) : s.bindVertexArrayOES(D);
  }
  function g(D) {
    return n.isWebGL2 ? r.deleteVertexArray(D) : s.deleteVertexArrayOES(D);
  }
  function p(D, Y, J) {
    const Z = J.wireframe === !0;
    let X = a[D.id];
    X === void 0 && ((X = {}), (a[D.id] = X));
    let te = X[Y.id];
    te === void 0 && ((te = {}), (X[Y.id] = te));
    let Q = te[Z];
    return Q === void 0 && ((Q = f(h())), (te[Z] = Q)), Q;
  }
  function f(D) {
    const Y = [],
      J = [],
      Z = [];
    for (let X = 0; X < i; X++) (Y[X] = 0), (J[X] = 0), (Z[X] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: Y,
      enabledAttributes: J,
      attributeDivisors: Z,
      object: D,
      attributes: {},
      index: null,
    };
  }
  function x(D, Y, J, Z) {
    const X = c.attributes,
      te = Y.attributes;
    let Q = 0;
    const U = J.getAttributes();
    for (const V in U)
      if (U[V].location >= 0) {
        const ne = X[V];
        let ae = te[V];
        if (
          (ae === void 0 &&
            (V === "instanceMatrix" &&
              D.instanceMatrix &&
              (ae = D.instanceMatrix),
            V === "instanceColor" && D.instanceColor && (ae = D.instanceColor)),
          ne === void 0 || ne.attribute !== ae || (ae && ne.data !== ae.data))
        )
          return !0;
        Q++;
      }
    return c.attributesNum !== Q || c.index !== Z;
  }
  function w(D, Y, J, Z) {
    const X = {},
      te = Y.attributes;
    let Q = 0;
    const U = J.getAttributes();
    for (const V in U)
      if (U[V].location >= 0) {
        let ne = te[V];
        ne === void 0 &&
          (V === "instanceMatrix" &&
            D.instanceMatrix &&
            (ne = D.instanceMatrix),
          V === "instanceColor" && D.instanceColor && (ne = D.instanceColor));
        const ae = {};
        (ae.attribute = ne),
          ne && ne.data && (ae.data = ne.data),
          (X[V] = ae),
          Q++;
      }
    (c.attributes = X), (c.attributesNum = Q), (c.index = Z);
  }
  function y() {
    const D = c.newAttributes;
    for (let Y = 0, J = D.length; Y < J; Y++) D[Y] = 0;
  }
  function E(D) {
    M(D, 0);
  }
  function M(D, Y) {
    const J = c.newAttributes,
      Z = c.enabledAttributes,
      X = c.attributeDivisors;
    (J[D] = 1),
      Z[D] === 0 && (r.enableVertexAttribArray(D), (Z[D] = 1)),
      X[D] !== Y &&
        ((n.isWebGL2 ? r : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](D, Y),
        (X[D] = Y));
  }
  function A() {
    const D = c.newAttributes,
      Y = c.enabledAttributes;
    for (let J = 0, Z = Y.length; J < Z; J++)
      Y[J] !== D[J] && (r.disableVertexAttribArray(J), (Y[J] = 0));
  }
  function F(D, Y, J, Z, X, te) {
    n.isWebGL2 === !0 && (J === 5124 || J === 5125)
      ? r.vertexAttribIPointer(D, Y, J, X, te)
      : r.vertexAttribPointer(D, Y, J, Z, X, te);
  }
  function _(D, Y, J, Z) {
    if (
      n.isWebGL2 === !1 &&
      (D.isInstancedMesh || Z.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    y();
    const X = Z.attributes,
      te = J.getAttributes(),
      Q = Y.defaultAttributeValues;
    for (const U in te) {
      const V = te[U];
      if (V.location >= 0) {
        let K = X[U];
        if (
          (K === void 0 &&
            (U === "instanceMatrix" &&
              D.instanceMatrix &&
              (K = D.instanceMatrix),
            U === "instanceColor" && D.instanceColor && (K = D.instanceColor)),
          K !== void 0)
        ) {
          const ne = K.normalized,
            ae = K.itemSize,
            H = t.get(K);
          if (H === void 0) continue;
          const Re = H.buffer,
            de = H.type,
            be = H.bytesPerElement;
          if (K.isInterleavedBufferAttribute) {
            const ue = K.data,
              Oe = ue.stride,
              we = K.offset;
            if (ue.isInstancedInterleavedBuffer) {
              for (let xe = 0; xe < V.locationSize; xe++)
                M(V.location + xe, ue.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = ue.meshPerAttribute * ue.count);
            } else
              for (let xe = 0; xe < V.locationSize; xe++) E(V.location + xe);
            r.bindBuffer(34962, Re);
            for (let xe = 0; xe < V.locationSize; xe++)
              F(
                V.location + xe,
                ae / V.locationSize,
                de,
                ne,
                Oe * be,
                (we + (ae / V.locationSize) * xe) * be
              );
          } else {
            if (K.isInstancedBufferAttribute) {
              for (let ue = 0; ue < V.locationSize; ue++)
                M(V.location + ue, K.meshPerAttribute);
              D.isInstancedMesh !== !0 &&
                Z._maxInstanceCount === void 0 &&
                (Z._maxInstanceCount = K.meshPerAttribute * K.count);
            } else
              for (let ue = 0; ue < V.locationSize; ue++) E(V.location + ue);
            r.bindBuffer(34962, Re);
            for (let ue = 0; ue < V.locationSize; ue++)
              F(
                V.location + ue,
                ae / V.locationSize,
                de,
                ne,
                ae * be,
                (ae / V.locationSize) * ue * be
              );
          }
        } else if (Q !== void 0) {
          const ne = Q[U];
          if (ne !== void 0)
            switch (ne.length) {
              case 2:
                r.vertexAttrib2fv(V.location, ne);
                break;
              case 3:
                r.vertexAttrib3fv(V.location, ne);
                break;
              case 4:
                r.vertexAttrib4fv(V.location, ne);
                break;
              default:
                r.vertexAttrib1fv(V.location, ne);
            }
        }
      }
    }
    A();
  }
  function T() {
    se();
    for (const D in a) {
      const Y = a[D];
      for (const J in Y) {
        const Z = Y[J];
        for (const X in Z) g(Z[X].object), delete Z[X];
        delete Y[J];
      }
      delete a[D];
    }
  }
  function O(D) {
    if (a[D.id] === void 0) return;
    const Y = a[D.id];
    for (const J in Y) {
      const Z = Y[J];
      for (const X in Z) g(Z[X].object), delete Z[X];
      delete Y[J];
    }
    delete a[D.id];
  }
  function j(D) {
    for (const Y in a) {
      const J = a[Y];
      if (J[D.id] === void 0) continue;
      const Z = J[D.id];
      for (const X in Z) g(Z[X].object), delete Z[X];
      delete J[D.id];
    }
  }
  function se() {
    N(), (u = !0), c !== l && ((c = l), m(c.object));
  }
  function N() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: d,
    reset: se,
    resetDefaultState: N,
    dispose: T,
    releaseStatesOfGeometry: O,
    releaseStatesOfProgram: j,
    initAttributes: y,
    enableAttribute: E,
    disableUnusedAttributes: A,
  };
}
function Ld(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(c) {
    s = c;
  }
  function a(c, u) {
    r.drawArrays(s, c, u), t.update(u, s, 1);
  }
  function l(c, u, d) {
    if (d === 0) return;
    let h, m;
    if (i) (h = r), (m = "drawArraysInstanced");
    else if (
      ((h = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      h === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    h[m](s, c, u, d), t.update(u, s, d);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = l);
}
function Dd(r, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const F = e.get("EXT_texture_filter_anisotropic");
      n = r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function s(F) {
    if (F === "highp") {
      if (
        r.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        r.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      F = "mediump";
    }
    return F === "mediump" &&
      r.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      r.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o =
    (typeof WebGL2RenderingContext < "u" &&
      r instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext < "u" &&
      r instanceof WebGL2ComputeRenderingContext);
  let a = t.precision !== void 0 ? t.precision : "highp";
  const l = s(a);
  l !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      l,
      "instead."
    ),
    (a = l));
  const c = o || e.has("WEBGL_draw_buffers"),
    u = t.logarithmicDepthBuffer === !0,
    d = r.getParameter(34930),
    h = r.getParameter(35660),
    m = r.getParameter(3379),
    g = r.getParameter(34076),
    p = r.getParameter(34921),
    f = r.getParameter(36347),
    x = r.getParameter(36348),
    w = r.getParameter(36349),
    y = h > 0,
    E = o || e.has("OES_texture_float"),
    M = y && E,
    A = o ? r.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: h,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: p,
    maxVertexUniforms: f,
    maxVaryings: x,
    maxFragmentUniforms: w,
    vertexTextures: y,
    floatFragmentTextures: E,
    floatVertexTextures: M,
    maxSamples: A,
  };
}
function Rd(r) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    s = !1;
  const o = new gn(),
    a = new bt(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (d, h, m) {
      const g = d.length !== 0 || h || n !== 0 || i;
      return (i = h), (t = u(d, m, 0)), (n = d.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), u(null);
    }),
    (this.endShadows = function () {
      (s = !1), c();
    }),
    (this.setState = function (d, h, m) {
      const g = d.clippingPlanes,
        p = d.clipIntersection,
        f = d.clipShadows,
        x = r.get(d);
      if (!i || g === null || g.length === 0 || (s && !f)) s ? u(null) : c();
      else {
        const w = s ? 0 : n,
          y = w * 4;
        let E = x.clippingState || null;
        (l.value = E), (E = u(g, h, y, m));
        for (let M = 0; M !== y; ++M) E[M] = t[M];
        (x.clippingState = E),
          (this.numIntersection = p ? this.numPlanes : 0),
          (this.numPlanes += w);
      }
    });
  function c() {
    l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function u(d, h, m, g) {
    const p = d !== null ? d.length : 0;
    let f = null;
    if (p !== 0) {
      if (((f = l.value), g !== !0 || f === null)) {
        const x = m + p * 4,
          w = h.matrixWorldInverse;
        a.getNormalMatrix(w),
          (f === null || f.length < x) && (f = new Float32Array(x));
        for (let y = 0, E = m; y !== p; ++y, E += 4)
          o.copy(d[y]).applyMatrix4(w, a),
            o.normal.toArray(f, E),
            (f[E + 3] = o.constant);
      }
      (l.value = f), (l.needsUpdate = !0);
    }
    return (e.numPlanes = p), (e.numIntersection = 0), f;
  }
}
function Pd(r) {
  let e = new WeakMap();
  function t(o, a) {
    return a === Yr ? (o.mapping = Yn) : a === jr && (o.mapping = jn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === Yr || a === jr)
        if (e.has(o)) {
          const l = e.get(o).texture;
          return t(l, o.mapping);
        } else {
          const l = o.image;
          if (l && l.height > 0) {
            const c = new Xl(l.height / 2);
            return (
              c.fromEquirectangularTexture(r, o),
              e.set(o, c),
              o.addEventListener("dispose", i),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: n, dispose: s };
}
class uo extends os {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = s),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, s, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = s),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let s = n - e,
      o = n + e,
      a = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (o = s + c * this.view.width),
        (a -= u * this.view.offsetY),
        (l = a - u * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const Hn = 4,
  la = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  vn = 20,
  kr = new uo(),
  ca = new Ue();
let Vr = null;
const _n = (1 + Math.sqrt(5)) / 2,
  Bn = 1 / _n,
  ua = [
    new I(1, 1, 1),
    new I(-1, 1, 1),
    new I(1, 1, -1),
    new I(-1, 1, -1),
    new I(0, _n, Bn),
    new I(0, _n, -Bn),
    new I(Bn, 0, _n),
    new I(-Bn, 0, _n),
    new I(_n, Bn, 0),
    new I(-_n, Bn, 0),
  ];
class da {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Vr = this._renderer.getRenderTarget()), this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, s),
      t > 0 && this._blur(s, 0, 0, t),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = pa()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = fa()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Vr),
      (e.scissorTest = !1),
      ji(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Yn || e.mapping === jn
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Vr = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: dt,
        minFilter: dt,
        generateMipmaps: !1,
        type: vi,
        format: Pt,
        encoding: En,
        depthBuffer: !1,
      },
      i = ha(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = ha(e, t, n));
      const { _lodMax: s } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Id(s)),
        (this._blurMaterial = Fd(s, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Bt(this._lodPlanes[0], e);
    this._renderer.compile(t, kr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new Et(90, 1, t, n),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      d = u.autoClear,
      h = u.toneMapping;
    u.getClearColor(ca), (u.toneMapping = Zt), (u.autoClear = !1);
    const m = new as({
        name: "PMREM.Background",
        side: Ct,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new Bt(new Ci(), m);
    let p = !1;
    const f = e.background;
    f
      ? f.isColor && (m.color.copy(f), (e.background = null), (p = !0))
      : (m.color.copy(ca), (p = !0));
    for (let x = 0; x < 6; x++) {
      const w = x % 3;
      w === 0
        ? (a.up.set(0, l[x], 0), a.lookAt(c[x], 0, 0))
        : w === 1
        ? (a.up.set(0, 0, l[x]), a.lookAt(0, c[x], 0))
        : (a.up.set(0, l[x], 0), a.lookAt(0, 0, c[x]));
      const y = this._cubeSize;
      ji(i, w * y, x > 2 ? y : 0, y, y),
        u.setRenderTarget(i),
        p && u.render(g, a),
        u.render(e, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (u.toneMapping = h),
      (u.autoClear = d),
      (e.background = f);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Yn || e.mapping === jn;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = pa()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = fa());
    const s = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new Bt(this._lodPlanes[0], s),
      a = s.uniforms;
    a.envMap.value = e;
    const l = this._cubeSize;
    ji(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, kr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const s = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        o = ua[(i - 1) % ua.length];
      this._blur(e, i - 1, i, s, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", s),
      this._halfBlur(o, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, o, a) {
    const l = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const u = 3,
      d = new Bt(this._lodPlanes[i], c),
      h = c.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(s) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * vn - 1),
      p = s / g,
      f = isFinite(s) ? 1 + Math.floor(u * p) : vn;
    f > vn &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${vn}`
      );
    const x = [];
    let w = 0;
    for (let F = 0; F < vn; ++F) {
      const _ = F / p,
        T = Math.exp((-_ * _) / 2);
      x.push(T), F === 0 ? (w += T) : F < f && (w += 2 * T);
    }
    for (let F = 0; F < x.length; F++) x[F] = x[F] / w;
    (h.envMap.value = e.texture),
      (h.samples.value = f),
      (h.weights.value = x),
      (h.latitudinal.value = o === "latitudinal"),
      a && (h.poleAxis.value = a);
    const { _lodMax: y } = this;
    (h.dTheta.value = g), (h.mipInt.value = y - n);
    const E = this._sizeLods[i],
      M = 3 * E * (i > y - Hn ? i - y + Hn : 0),
      A = 4 * (this._cubeSize - E);
    ji(t, M, A, 3 * E, 2 * E), l.setRenderTarget(t), l.render(d, kr);
  }
}
function Id(r) {
  const e = [],
    t = [],
    n = [];
  let i = r;
  const s = r - Hn + 1 + la.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let l = 1 / a;
    o > r - Hn ? (l = la[o - r + Hn - 1]) : o === 0 && (l = 0), n.push(l);
    const c = 1 / (a - 2),
      u = -c,
      d = 1 + c,
      h = [u, u, d, u, d, d, u, u, d, d, u, d],
      m = 6,
      g = 6,
      p = 3,
      f = 2,
      x = 1,
      w = new Float32Array(p * g * m),
      y = new Float32Array(f * g * m),
      E = new Float32Array(x * g * m);
    for (let A = 0; A < m; A++) {
      const F = ((A % 3) * 2) / 3 - 1,
        _ = A > 2 ? 0 : -1,
        T = [
          F,
          _,
          0,
          F + 2 / 3,
          _,
          0,
          F + 2 / 3,
          _ + 1,
          0,
          F,
          _,
          0,
          F + 2 / 3,
          _ + 1,
          0,
          F,
          _ + 1,
          0,
        ];
      w.set(T, p * g * A), y.set(h, f * g * A);
      const O = [A, A, A, A, A, A];
      E.set(O, x * g * A);
    }
    const M = new sn();
    M.setAttribute("position", new kt(w, p)),
      M.setAttribute("uv", new kt(y, f)),
      M.setAttribute("faceIndex", new kt(E, x)),
      e.push(M),
      i > Hn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ha(r, e, t) {
  const n = new It(r, e, t);
  return (
    (n.texture.mapping = rr),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function ji(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function Fd(r, e, t) {
  const n = new Float32Array(vn),
    i = new I(0, 1, 0);
  return new ht({
    name: "SphericalGaussianBlur",
    defines: {
      n: vn,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${r}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: ls(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: nn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function fa() {
  return new ht({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: ls(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: nn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function pa() {
  return new ht({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: ls(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: nn,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ls() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Od(r) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const l = a.mapping,
        c = l === Yr || l === jr,
        u = l === Yn || l === jn;
      if (c || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return (
            t === null && (t = new da(r)),
            (d = c ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d)),
            e.set(a, d),
            d.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const d = a.image;
            if ((c && d && d.height > 0) || (u && d && i(d))) {
              t === null && (t = new da(r));
              const h = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, h), a.addEventListener("dispose", s), h.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) a[u] !== void 0 && l++;
    return l === c;
  }
  function s(a) {
    const l = a.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Nd(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          r.getExtension("WEBGL_depth_texture") ||
          r.getExtension("MOZ_WEBGL_depth_texture") ||
          r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          r.getExtension("EXT_texture_filter_anisotropic") ||
          r.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          r.getExtension("WEBGL_compressed_texture_s3tc") ||
          r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          r.getExtension("WEBGL_compressed_texture_pvrtc") ||
          r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function Ud(r, e, t, n) {
  const i = {},
    s = new WeakMap();
  function o(d) {
    const h = d.target;
    h.index !== null && e.remove(h.index);
    for (const g in h.attributes) e.remove(h.attributes[g]);
    h.removeEventListener("dispose", o), delete i[h.id];
    const m = s.get(h);
    m && (e.remove(m), s.delete(h)),
      n.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(d, h) {
    return (
      i[h.id] === !0 ||
        (h.addEventListener("dispose", o),
        (i[h.id] = !0),
        t.memory.geometries++),
      h
    );
  }
  function l(d) {
    const h = d.attributes;
    for (const g in h) e.update(h[g], 34962);
    const m = d.morphAttributes;
    for (const g in m) {
      const p = m[g];
      for (let f = 0, x = p.length; f < x; f++) e.update(p[f], 34962);
    }
  }
  function c(d) {
    const h = [],
      m = d.index,
      g = d.attributes.position;
    let p = 0;
    if (m !== null) {
      const w = m.array;
      p = m.version;
      for (let y = 0, E = w.length; y < E; y += 3) {
        const M = w[y + 0],
          A = w[y + 1],
          F = w[y + 2];
        h.push(M, A, A, F, F, M);
      }
    } else {
      const w = g.array;
      p = g.version;
      for (let y = 0, E = w.length / 3 - 1; y < E; y += 3) {
        const M = y + 0,
          A = y + 1,
          F = y + 2;
        h.push(M, A, A, F, F, M);
      }
    }
    const f = new (Ja(h) ? so : ro)(h, 1);
    f.version = p;
    const x = s.get(d);
    x && e.remove(x), s.set(d, f);
  }
  function u(d) {
    const h = s.get(d);
    if (h) {
      const m = d.index;
      m !== null && h.version < m.version && c(d);
    } else c(d);
    return s.get(d);
  }
  return { get: a, update: l, getWireframeAttribute: u };
}
function zd(r, e, t, n) {
  const i = n.isWebGL2;
  let s;
  function o(h) {
    s = h;
  }
  let a, l;
  function c(h) {
    (a = h.type), (l = h.bytesPerElement);
  }
  function u(h, m) {
    r.drawElements(s, m, a, h * l), t.update(m, s, 1);
  }
  function d(h, m, g) {
    if (g === 0) return;
    let p, f;
    if (i) (p = r), (f = "drawElementsInstanced");
    else if (
      ((p = e.get("ANGLE_instanced_arrays")),
      (f = "drawElementsInstancedANGLE"),
      p === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    p[f](s, m, a, h * l, g), t.update(m, s, g);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = u),
    (this.renderInstances = d);
}
function Bd(r) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, o, a) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += a * (s / 3);
        break;
      case 1:
        t.lines += a * (s / 2);
        break;
      case 3:
        t.lines += a * (s - 1);
        break;
      case 2:
        t.lines += a * s;
        break;
      case 0:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function kd(r, e) {
  return r[0] - e[0];
}
function Vd(r, e) {
  return Math.abs(e[1]) - Math.abs(r[1]);
}
function Gd(r, e, t) {
  const n = {},
    i = new Float32Array(8),
    s = new WeakMap(),
    o = new tt(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function l(c, u, d, h) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p =
          u.morphAttributes.position ||
          u.morphAttributes.normal ||
          u.morphAttributes.color,
        f = p !== void 0 ? p.length : 0;
      let x = s.get(u);
      if (x === void 0 || x.count !== f) {
        let J = function () {
          D.dispose(), s.delete(u), u.removeEventListener("dispose", J);
        };
        var g = J;
        x !== void 0 && x.texture.dispose();
        const E = u.morphAttributes.position !== void 0,
          M = u.morphAttributes.normal !== void 0,
          A = u.morphAttributes.color !== void 0,
          F = u.morphAttributes.position || [],
          _ = u.morphAttributes.normal || [],
          T = u.morphAttributes.color || [];
        let O = 0;
        E === !0 && (O = 1), M === !0 && (O = 2), A === !0 && (O = 3);
        let j = u.attributes.position.count * O,
          se = 1;
        j > e.maxTextureSize &&
          ((se = Math.ceil(j / e.maxTextureSize)), (j = e.maxTextureSize));
        const N = new Float32Array(j * se * 4 * f),
          D = new no(N, j, se, f);
        (D.type = bn), (D.needsUpdate = !0);
        const Y = O * 4;
        for (let Z = 0; Z < f; Z++) {
          const X = F[Z],
            te = _[Z],
            Q = T[Z],
            U = j * se * 4 * Z;
          for (let V = 0; V < X.count; V++) {
            const K = V * Y;
            E === !0 &&
              (o.fromBufferAttribute(X, V),
              (N[U + K + 0] = o.x),
              (N[U + K + 1] = o.y),
              (N[U + K + 2] = o.z),
              (N[U + K + 3] = 0)),
              M === !0 &&
                (o.fromBufferAttribute(te, V),
                (N[U + K + 4] = o.x),
                (N[U + K + 5] = o.y),
                (N[U + K + 6] = o.z),
                (N[U + K + 7] = 0)),
              A === !0 &&
                (o.fromBufferAttribute(Q, V),
                (N[U + K + 8] = o.x),
                (N[U + K + 9] = o.y),
                (N[U + K + 10] = o.z),
                (N[U + K + 11] = Q.itemSize === 4 ? o.w : 1));
          }
        }
        (x = { count: f, texture: D, size: new Ce(j, se) }),
          s.set(u, x),
          u.addEventListener("dispose", J);
      }
      let w = 0;
      for (let E = 0; E < m.length; E++) w += m[E];
      const y = u.morphTargetsRelative ? 1 : 1 - w;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", y),
        h.getUniforms().setValue(r, "morphTargetInfluences", m),
        h.getUniforms().setValue(r, "morphTargetsTexture", x.texture, t),
        h.getUniforms().setValue(r, "morphTargetsTextureSize", x.size);
    } else {
      const p = m === void 0 ? 0 : m.length;
      let f = n[u.id];
      if (f === void 0 || f.length !== p) {
        f = [];
        for (let M = 0; M < p; M++) f[M] = [M, 0];
        n[u.id] = f;
      }
      for (let M = 0; M < p; M++) {
        const A = f[M];
        (A[0] = M), (A[1] = m[M]);
      }
      f.sort(Vd);
      for (let M = 0; M < 8; M++)
        M < p && f[M][1]
          ? ((a[M][0] = f[M][0]), (a[M][1] = f[M][1]))
          : ((a[M][0] = Number.MAX_SAFE_INTEGER), (a[M][1] = 0));
      a.sort(kd);
      const x = u.morphAttributes.position,
        w = u.morphAttributes.normal;
      let y = 0;
      for (let M = 0; M < 8; M++) {
        const A = a[M],
          F = A[0],
          _ = A[1];
        F !== Number.MAX_SAFE_INTEGER && _
          ? (x &&
              u.getAttribute("morphTarget" + M) !== x[F] &&
              u.setAttribute("morphTarget" + M, x[F]),
            w &&
              u.getAttribute("morphNormal" + M) !== w[F] &&
              u.setAttribute("morphNormal" + M, w[F]),
            (i[M] = _),
            (y += _))
          : (x &&
              u.hasAttribute("morphTarget" + M) === !0 &&
              u.deleteAttribute("morphTarget" + M),
            w &&
              u.hasAttribute("morphNormal" + M) === !0 &&
              u.deleteAttribute("morphNormal" + M),
            (i[M] = 0));
      }
      const E = u.morphTargetsRelative ? 1 : 1 - y;
      h.getUniforms().setValue(r, "morphTargetBaseInfluence", E),
        h.getUniforms().setValue(r, "morphTargetInfluences", i);
    }
  }
  return { update: l };
}
function Hd(r, e, t, n) {
  let i = new WeakMap();
  function s(l) {
    const c = n.render.frame,
      u = l.geometry,
      d = e.get(l, u);
    return (
      i.get(d) !== c && (e.update(d), i.set(d, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", a) === !1 &&
          l.addEventListener("dispose", a),
        t.update(l.instanceMatrix, 34962),
        l.instanceColor !== null && t.update(l.instanceColor, 34962)),
      d
    );
  }
  function o() {
    i = new WeakMap();
  }
  function a(l) {
    const c = l.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: o };
}
const ho = new ft(),
  fo = new no(),
  po = new Ll(),
  mo = new oo(),
  ma = [],
  ga = [],
  _a = new Float32Array(16),
  va = new Float32Array(9),
  xa = new Float32Array(4);
function ei(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = ma[i];
  if ((s === void 0 && ((s = new Float32Array(i)), (ma[i] = s)), e !== 0)) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), r[o].toArray(s, a);
  }
  return s;
}
function $e(r, e) {
  if (r.length !== e.length) return !1;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return !1;
  return !0;
}
function Ze(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function or(r, e) {
  let t = ga[e];
  t === void 0 && ((t = new Int32Array(e)), (ga[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function Wd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), (t[0] = e));
}
function Xd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if ($e(t, e)) return;
    r.uniform2fv(this.addr, e), Ze(t, e);
  }
}
function qd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (r.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if ($e(t, e)) return;
    r.uniform3fv(this.addr, e), Ze(t, e);
  }
}
function Yd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if ($e(t, e)) return;
    r.uniform4fv(this.addr, e), Ze(t, e);
  }
}
function jd(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if ($e(t, e)) return;
    r.uniformMatrix2fv(this.addr, !1, e), Ze(t, e);
  } else {
    if ($e(t, n)) return;
    xa.set(n), r.uniformMatrix2fv(this.addr, !1, xa), Ze(t, n);
  }
}
function $d(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if ($e(t, e)) return;
    r.uniformMatrix3fv(this.addr, !1, e), Ze(t, e);
  } else {
    if ($e(t, n)) return;
    va.set(n), r.uniformMatrix3fv(this.addr, !1, va), Ze(t, n);
  }
}
function Zd(r, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if ($e(t, e)) return;
    r.uniformMatrix4fv(this.addr, !1, e), Ze(t, e);
  } else {
    if ($e(t, n)) return;
    _a.set(n), r.uniformMatrix4fv(this.addr, !1, _a), Ze(t, n);
  }
}
function Kd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), (t[0] = e));
}
function Jd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if ($e(t, e)) return;
    r.uniform2iv(this.addr, e), Ze(t, e);
  }
}
function Qd(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if ($e(t, e)) return;
    r.uniform3iv(this.addr, e), Ze(t, e);
  }
}
function eh(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if ($e(t, e)) return;
    r.uniform4iv(this.addr, e), Ze(t, e);
  }
}
function th(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), (t[0] = e));
}
function nh(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (r.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if ($e(t, e)) return;
    r.uniform2uiv(this.addr, e), Ze(t, e);
  }
}
function ih(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (r.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if ($e(t, e)) return;
    r.uniform3uiv(this.addr, e), Ze(t, e);
  }
}
function rh(r, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if ($e(t, e)) return;
    r.uniform4uiv(this.addr, e), Ze(t, e);
  }
}
function sh(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || ho, i);
}
function ah(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || po, i);
}
function oh(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || mo, i);
}
function lh(r, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || fo, i);
}
function ch(r) {
  switch (r) {
    case 5126:
      return Wd;
    case 35664:
      return Xd;
    case 35665:
      return qd;
    case 35666:
      return Yd;
    case 35674:
      return jd;
    case 35675:
      return $d;
    case 35676:
      return Zd;
    case 5124:
    case 35670:
      return Kd;
    case 35667:
    case 35671:
      return Jd;
    case 35668:
    case 35672:
      return Qd;
    case 35669:
    case 35673:
      return eh;
    case 5125:
      return th;
    case 36294:
      return nh;
    case 36295:
      return ih;
    case 36296:
      return rh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return sh;
    case 35679:
    case 36299:
    case 36307:
      return ah;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return oh;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return lh;
  }
}
function uh(r, e) {
  r.uniform1fv(this.addr, e);
}
function dh(r, e) {
  const t = ei(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function hh(r, e) {
  const t = ei(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function fh(r, e) {
  const t = ei(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function ph(r, e) {
  const t = ei(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, !1, t);
}
function mh(r, e) {
  const t = ei(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, !1, t);
}
function gh(r, e) {
  const t = ei(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, !1, t);
}
function _h(r, e) {
  r.uniform1iv(this.addr, e);
}
function vh(r, e) {
  r.uniform2iv(this.addr, e);
}
function xh(r, e) {
  r.uniform3iv(this.addr, e);
}
function bh(r, e) {
  r.uniform4iv(this.addr, e);
}
function yh(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Mh(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Sh(r, e) {
  r.uniform3uiv(this.addr, e);
}
function wh(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Eh(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = or(t, i);
  $e(n, s) || (r.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture2D(e[o] || ho, s[o]);
}
function Th(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = or(t, i);
  $e(n, s) || (r.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture3D(e[o] || po, s[o]);
}
function Ch(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = or(t, i);
  $e(n, s) || (r.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o) t.setTextureCube(e[o] || mo, s[o]);
}
function Ah(r, e, t) {
  const n = this.cache,
    i = e.length,
    s = or(t, i);
  $e(n, s) || (r.uniform1iv(this.addr, s), Ze(n, s));
  for (let o = 0; o !== i; ++o) t.setTexture2DArray(e[o] || fo, s[o]);
}
function Lh(r) {
  switch (r) {
    case 5126:
      return uh;
    case 35664:
      return dh;
    case 35665:
      return hh;
    case 35666:
      return fh;
    case 35674:
      return ph;
    case 35675:
      return mh;
    case 35676:
      return gh;
    case 5124:
    case 35670:
      return _h;
    case 35667:
    case 35671:
      return vh;
    case 35668:
    case 35672:
      return xh;
    case 35669:
    case 35673:
      return bh;
    case 5125:
      return yh;
    case 36294:
      return Mh;
    case 36295:
      return Sh;
    case 36296:
      return wh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Eh;
    case 35679:
    case 36299:
    case 36307:
      return Th;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ch;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Ah;
  }
}
class Dh {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = ch(t.type));
  }
}
class Rh {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = Lh(t.type));
  }
}
class Ph {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, o = i.length; s !== o; ++s) {
      const a = i[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Gr = /(\w+)(\])?(\[|\.)?/g;
function ba(r, e) {
  r.seq.push(e), (r.map[e.id] = e);
}
function Ih(r, e, t) {
  const n = r.name,
    i = n.length;
  for (Gr.lastIndex = 0; ; ) {
    const s = Gr.exec(n),
      o = Gr.lastIndex;
    let a = s[1];
    const l = s[2] === "]",
      c = s[3];
    if ((l && (a = a | 0), c === void 0 || (c === "[" && o + 2 === i))) {
      ba(t, c === void 0 ? new Dh(a, r, e) : new Rh(a, r, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && ((d = new Ph(a)), ba(t, d)), (t = d);
    }
  }
}
class Qi {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, s.name);
      Ih(s, o, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function ya(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
let Fh = 0;
function Oh(r, e) {
  const t = r.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length);
  for (let o = i; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Nh(r) {
  switch (r) {
    case En:
      return ["Linear", "( value )"];
    case Be:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", r),
        ["Linear", "( value )"]
      );
  }
}
function Ma(r, e, t) {
  const n = r.getShaderParameter(e, 35713),
    i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const o = parseInt(s[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Oh(r.getShaderSource(e), o)
    );
  } else return i;
}
function Uh(r, e) {
  const t = Nh(e);
  return "vec4 " + r + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function zh(r, e) {
  let t;
  switch (e) {
    case tl:
      t = "Linear";
      break;
    case nl:
      t = "Reinhard";
      break;
    case il:
      t = "OptimizedCineon";
      break;
    case rl:
      t = "ACESFilmic";
      break;
    case sl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Bh(r) {
  return [
    r.extensionDerivatives ||
    r.envMapCubeUVHeight ||
    r.bumpMap ||
    r.tangentSpaceNormalMap ||
    r.clearcoatNormalMap ||
    r.flatShading ||
    r.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (r.extensionFragDepth || r.logarithmicDepthBuffer) &&
    r.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    r.extensionDrawBuffers && r.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (r.extensionShaderTextureLOD || r.envMap || r.transmission) &&
    r.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(fi).join(`
`);
}
function kh(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Vh(r, e) {
  const t = {},
    n = r.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i),
      o = s.name;
    let a = 1;
    s.type === 35674 && (a = 2),
      s.type === 35675 && (a = 3),
      s.type === 35676 && (a = 4),
      (t[o] = {
        type: s.type,
        location: r.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function fi(r) {
  return r !== "";
}
function Sa(r, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function wa(r, e) {
  return r
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Gh = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Qr(r) {
  return r.replace(Gh, Hh);
}
function Hh(r, e) {
  const t = Se[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Qr(t);
}
const Wh =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ea(r) {
  return r.replace(Wh, Xh);
}
function Xh(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + s + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Ta(r) {
  let e =
    "precision " +
    r.precision +
    ` float;
precision ` +
    r.precision +
    " int;";
  return (
    r.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : r.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : r.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function qh(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    r.shadowMapType === Xa
      ? (e = "SHADOWMAP_TYPE_PCF")
      : r.shadowMapType === Io
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : r.shadowMapType === hi && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Yh(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap)
    switch (r.envMapMode) {
      case Yn:
      case jn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case rr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function jh(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap)
    switch (r.envMapMode) {
      case jn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function $h(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap)
    switch (r.combine) {
      case ja:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Qo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case el:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Zh(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Kh(r, e, t, n) {
  const i = r.getContext(),
    s = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const l = qh(t),
    c = Yh(t),
    u = jh(t),
    d = $h(t),
    h = Zh(t),
    m = t.isWebGL2 ? "" : Bh(t),
    g = kh(s),
    p = i.createProgram();
  let f,
    x,
    w = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((f = [g].filter(fi).join(`
`)),
      f.length > 0 &&
        (f += `
`),
      (x = [m, g].filter(fi).join(`
`)),
      x.length > 0 &&
        (x += `
`))
    : ((f = [
        Ta(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + u : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(fi).join(`
`)),
      (x = [
        m,
        Ta(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + u : "",
        t.envMap ? "#define " + d : "",
        h ? "#define CUBEUV_TEXEL_WIDTH " + h.texelWidth : "",
        h ? "#define CUBEUV_TEXEL_HEIGHT " + h.texelHeight : "",
        h ? "#define CUBEUV_MAX_MIP " + h.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Zt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Zt ? Se.tonemapping_pars_fragment : "",
        t.toneMapping !== Zt ? zh("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Se.encodings_pars_fragment,
        Uh("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(fi).join(`
`))),
    (o = Qr(o)),
    (o = Sa(o, t)),
    (o = wa(o, t)),
    (a = Qr(a)),
    (a = Sa(a, t)),
    (a = wa(a, t)),
    (o = Ea(o)),
    (a = Ea(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((w = `#version 300 es
`),
      (f =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        f),
      (x =
        [
          "#define varying in",
          t.glslVersion === $s
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === $s ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        x));
  const y = w + f + o,
    E = w + x + a,
    M = ya(i, 35633, y),
    A = ya(i, 35632, E);
  if (
    (i.attachShader(p, M),
    i.attachShader(p, A),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(p, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(p, 0, "position"),
    i.linkProgram(p),
    r.debug.checkShaderErrors)
  ) {
    const T = i.getProgramInfoLog(p).trim(),
      O = i.getShaderInfoLog(M).trim(),
      j = i.getShaderInfoLog(A).trim();
    let se = !0,
      N = !0;
    if (i.getProgramParameter(p, 35714) === !1) {
      se = !1;
      const D = Ma(i, M, "vertex"),
        Y = Ma(i, A, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(p, 35715) +
          `

Program Info Log: ` +
          T +
          `
` +
          D +
          `
` +
          Y
      );
    } else
      T !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", T)
        : (O === "" || j === "") && (N = !1);
    N &&
      (this.diagnostics = {
        runnable: se,
        programLog: T,
        vertexShader: { log: O, prefix: f },
        fragmentShader: { log: j, prefix: x },
      });
  }
  i.deleteShader(M), i.deleteShader(A);
  let F;
  this.getUniforms = function () {
    return F === void 0 && (F = new Qi(i, p)), F;
  };
  let _;
  return (
    (this.getAttributes = function () {
      return _ === void 0 && (_ = Vh(i, p)), _;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(p),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = Fh++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = M),
    (this.fragmentShader = A),
    this
  );
}
let Jh = 0;
class Qh {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && ((n = new Set()), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && ((n = new ef(e)), t.set(e, n)), n;
  }
}
class ef {
  constructor(e) {
    (this.id = Jh++), (this.code = e), (this.usedTimes = 0);
  }
}
function tf(r, e, t, n, i, s, o) {
  const a = new io(),
    l = new Qh(),
    c = [],
    u = i.isWebGL2,
    d = i.logarithmicDepthBuffer,
    h = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function p(_, T, O, j, se) {
    const N = j.fog,
      D = se.geometry,
      Y = _.isMeshStandardMaterial ? j.environment : null,
      J = (_.isMeshStandardMaterial ? t : e).get(_.envMap || Y),
      Z = J && J.mapping === rr ? J.image.height : null,
      X = g[_.type];
    _.precision !== null &&
      ((m = i.getMaxPrecision(_.precision)),
      m !== _.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          _.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const te =
        D.morphAttributes.position ||
        D.morphAttributes.normal ||
        D.morphAttributes.color,
      Q = te !== void 0 ? te.length : 0;
    let U = 0;
    D.morphAttributes.position !== void 0 && (U = 1),
      D.morphAttributes.normal !== void 0 && (U = 2),
      D.morphAttributes.color !== void 0 && (U = 3);
    let V, K, ne, ae;
    if (X) {
      const Oe = zt[X];
      (V = Oe.vertexShader), (K = Oe.fragmentShader);
    } else
      (V = _.vertexShader),
        (K = _.fragmentShader),
        l.update(_),
        (ne = l.getVertexShaderID(_)),
        (ae = l.getFragmentShaderID(_));
    const H = r.getRenderTarget(),
      Re = _.alphaTest > 0,
      de = _.clearcoat > 0,
      be = _.iridescence > 0;
    return {
      isWebGL2: u,
      shaderID: X,
      shaderName: _.type,
      vertexShader: V,
      fragmentShader: K,
      defines: _.defines,
      customVertexShaderID: ne,
      customFragmentShaderID: ae,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: m,
      instancing: se.isInstancedMesh === !0,
      instancingColor: se.isInstancedMesh === !0 && se.instanceColor !== null,
      supportsVertexTextures: h,
      outputEncoding:
        H === null
          ? r.outputEncoding
          : H.isXRRenderTarget === !0
          ? H.texture.encoding
          : En,
      map: !!_.map,
      matcap: !!_.matcap,
      envMap: !!J,
      envMapMode: J && J.mapping,
      envMapCubeUVHeight: Z,
      lightMap: !!_.lightMap,
      aoMap: !!_.aoMap,
      emissiveMap: !!_.emissiveMap,
      bumpMap: !!_.bumpMap,
      normalMap: !!_.normalMap,
      objectSpaceNormalMap: _.normalMapType === El,
      tangentSpaceNormalMap: _.normalMapType === wl,
      decodeVideoTexture:
        !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === Be,
      clearcoat: de,
      clearcoatMap: de && !!_.clearcoatMap,
      clearcoatRoughnessMap: de && !!_.clearcoatRoughnessMap,
      clearcoatNormalMap: de && !!_.clearcoatNormalMap,
      iridescence: be,
      iridescenceMap: be && !!_.iridescenceMap,
      iridescenceThicknessMap: be && !!_.iridescenceThicknessMap,
      displacementMap: !!_.displacementMap,
      roughnessMap: !!_.roughnessMap,
      metalnessMap: !!_.metalnessMap,
      specularMap: !!_.specularMap,
      specularIntensityMap: !!_.specularIntensityMap,
      specularColorMap: !!_.specularColorMap,
      opaque: _.transparent === !1 && _.blending === Xn,
      alphaMap: !!_.alphaMap,
      alphaTest: Re,
      gradientMap: !!_.gradientMap,
      sheen: _.sheen > 0,
      sheenColorMap: !!_.sheenColorMap,
      sheenRoughnessMap: !!_.sheenRoughnessMap,
      transmission: _.transmission > 0,
      transmissionMap: !!_.transmissionMap,
      thicknessMap: !!_.thicknessMap,
      combine: _.combine,
      vertexTangents: !!_.normalMap && !!D.attributes.tangent,
      vertexColors: _.vertexColors,
      vertexAlphas:
        _.vertexColors === !0 &&
        !!D.attributes.color &&
        D.attributes.color.itemSize === 4,
      vertexUvs:
        !!_.map ||
        !!_.bumpMap ||
        !!_.normalMap ||
        !!_.specularMap ||
        !!_.alphaMap ||
        !!_.emissiveMap ||
        !!_.roughnessMap ||
        !!_.metalnessMap ||
        !!_.clearcoatMap ||
        !!_.clearcoatRoughnessMap ||
        !!_.clearcoatNormalMap ||
        !!_.iridescenceMap ||
        !!_.iridescenceThicknessMap ||
        !!_.displacementMap ||
        !!_.transmissionMap ||
        !!_.thicknessMap ||
        !!_.specularIntensityMap ||
        !!_.specularColorMap ||
        !!_.sheenColorMap ||
        !!_.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          _.map ||
          _.bumpMap ||
          _.normalMap ||
          _.specularMap ||
          _.alphaMap ||
          _.emissiveMap ||
          _.roughnessMap ||
          _.metalnessMap ||
          _.clearcoatNormalMap ||
          _.iridescenceMap ||
          _.iridescenceThicknessMap ||
          _.transmission > 0 ||
          _.transmissionMap ||
          _.thicknessMap ||
          _.specularIntensityMap ||
          _.specularColorMap ||
          _.sheen > 0 ||
          _.sheenColorMap ||
          _.sheenRoughnessMap
        ) && !!_.displacementMap,
      fog: !!N,
      useFog: _.fog === !0,
      fogExp2: N && N.isFogExp2,
      flatShading: !!_.flatShading,
      sizeAttenuation: _.sizeAttenuation,
      logarithmicDepthBuffer: d,
      skinning: se.isSkinnedMesh === !0,
      morphTargets: D.morphAttributes.position !== void 0,
      morphNormals: D.morphAttributes.normal !== void 0,
      morphColors: D.morphAttributes.color !== void 0,
      morphTargetsCount: Q,
      morphTextureStride: U,
      numDirLights: T.directional.length,
      numPointLights: T.point.length,
      numSpotLights: T.spot.length,
      numSpotLightMaps: T.spotLightMap.length,
      numRectAreaLights: T.rectArea.length,
      numHemiLights: T.hemi.length,
      numDirLightShadows: T.directionalShadowMap.length,
      numPointLightShadows: T.pointShadowMap.length,
      numSpotLightShadows: T.spotShadowMap.length,
      numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: r.shadowMap.enabled && O.length > 0,
      shadowMapType: r.shadowMap.type,
      toneMapping: _.toneMapped ? r.toneMapping : Zt,
      physicallyCorrectLights: r.physicallyCorrectLights,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === rs,
      flipSided: _.side === Ct,
      useDepthPacking: !!_.depthPacking,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: _.extensions && _.extensions.derivatives,
      extensionFragDepth: _.extensions && _.extensions.fragDepth,
      extensionDrawBuffers: _.extensions && _.extensions.drawBuffers,
      extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: _.customProgramCacheKey(),
    };
  }
  function f(_) {
    const T = [];
    if (
      (_.shaderID
        ? T.push(_.shaderID)
        : (T.push(_.customVertexShaderID), T.push(_.customFragmentShaderID)),
      _.defines !== void 0)
    )
      for (const O in _.defines) T.push(O), T.push(_.defines[O]);
    return (
      _.isRawShaderMaterial === !1 &&
        (x(T, _), w(T, _), T.push(r.outputEncoding)),
      T.push(_.customProgramCacheKey),
      T.join()
    );
  }
  function x(_, T) {
    _.push(T.precision),
      _.push(T.outputEncoding),
      _.push(T.envMapMode),
      _.push(T.envMapCubeUVHeight),
      _.push(T.combine),
      _.push(T.vertexUvs),
      _.push(T.fogExp2),
      _.push(T.sizeAttenuation),
      _.push(T.morphTargetsCount),
      _.push(T.morphAttributeCount),
      _.push(T.numDirLights),
      _.push(T.numPointLights),
      _.push(T.numSpotLights),
      _.push(T.numSpotLightMaps),
      _.push(T.numHemiLights),
      _.push(T.numRectAreaLights),
      _.push(T.numDirLightShadows),
      _.push(T.numPointLightShadows),
      _.push(T.numSpotLightShadows),
      _.push(T.numSpotLightShadowsWithMaps),
      _.push(T.shadowMapType),
      _.push(T.toneMapping),
      _.push(T.numClippingPlanes),
      _.push(T.numClipIntersection),
      _.push(T.depthPacking);
  }
  function w(_, T) {
    a.disableAll(),
      T.isWebGL2 && a.enable(0),
      T.supportsVertexTextures && a.enable(1),
      T.instancing && a.enable(2),
      T.instancingColor && a.enable(3),
      T.map && a.enable(4),
      T.matcap && a.enable(5),
      T.envMap && a.enable(6),
      T.lightMap && a.enable(7),
      T.aoMap && a.enable(8),
      T.emissiveMap && a.enable(9),
      T.bumpMap && a.enable(10),
      T.normalMap && a.enable(11),
      T.objectSpaceNormalMap && a.enable(12),
      T.tangentSpaceNormalMap && a.enable(13),
      T.clearcoat && a.enable(14),
      T.clearcoatMap && a.enable(15),
      T.clearcoatRoughnessMap && a.enable(16),
      T.clearcoatNormalMap && a.enable(17),
      T.iridescence && a.enable(18),
      T.iridescenceMap && a.enable(19),
      T.iridescenceThicknessMap && a.enable(20),
      T.displacementMap && a.enable(21),
      T.specularMap && a.enable(22),
      T.roughnessMap && a.enable(23),
      T.metalnessMap && a.enable(24),
      T.gradientMap && a.enable(25),
      T.alphaMap && a.enable(26),
      T.alphaTest && a.enable(27),
      T.vertexColors && a.enable(28),
      T.vertexAlphas && a.enable(29),
      T.vertexUvs && a.enable(30),
      T.vertexTangents && a.enable(31),
      T.uvsVertexOnly && a.enable(32),
      _.push(a.mask),
      a.disableAll(),
      T.fog && a.enable(0),
      T.useFog && a.enable(1),
      T.flatShading && a.enable(2),
      T.logarithmicDepthBuffer && a.enable(3),
      T.skinning && a.enable(4),
      T.morphTargets && a.enable(5),
      T.morphNormals && a.enable(6),
      T.morphColors && a.enable(7),
      T.premultipliedAlpha && a.enable(8),
      T.shadowMapEnabled && a.enable(9),
      T.physicallyCorrectLights && a.enable(10),
      T.doubleSided && a.enable(11),
      T.flipSided && a.enable(12),
      T.useDepthPacking && a.enable(13),
      T.dithering && a.enable(14),
      T.specularIntensityMap && a.enable(15),
      T.specularColorMap && a.enable(16),
      T.transmission && a.enable(17),
      T.transmissionMap && a.enable(18),
      T.thicknessMap && a.enable(19),
      T.sheen && a.enable(20),
      T.sheenColorMap && a.enable(21),
      T.sheenRoughnessMap && a.enable(22),
      T.decodeVideoTexture && a.enable(23),
      T.opaque && a.enable(24),
      _.push(a.mask);
  }
  function y(_) {
    const T = g[_.type];
    let O;
    if (T) {
      const j = zt[T];
      O = er.clone(j.uniforms);
    } else O = _.uniforms;
    return O;
  }
  function E(_, T) {
    let O;
    for (let j = 0, se = c.length; j < se; j++) {
      const N = c[j];
      if (N.cacheKey === T) {
        (O = N), ++O.usedTimes;
        break;
      }
    }
    return O === void 0 && ((O = new Kh(r, T, _, s)), c.push(O)), O;
  }
  function M(_) {
    if (--_.usedTimes === 0) {
      const T = c.indexOf(_);
      (c[T] = c[c.length - 1]), c.pop(), _.destroy();
    }
  }
  function A(_) {
    l.remove(_);
  }
  function F() {
    l.dispose();
  }
  return {
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: y,
    acquireProgram: E,
    releaseProgram: M,
    releaseShaderCache: A,
    programs: c,
    dispose: F,
  };
}
function nf() {
  let r = new WeakMap();
  function e(s) {
    let o = r.get(s);
    return o === void 0 && ((o = {}), r.set(s, o)), o;
  }
  function t(s) {
    r.delete(s);
  }
  function n(s, o, a) {
    r.get(s)[o] = a;
  }
  function i() {
    r = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function rf(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.material.id !== e.material.id
    ? r.material.id - e.material.id
    : r.z !== e.z
    ? r.z - e.z
    : r.id - e.id;
}
function Ca(r, e) {
  return r.groupOrder !== e.groupOrder
    ? r.groupOrder - e.groupOrder
    : r.renderOrder !== e.renderOrder
    ? r.renderOrder - e.renderOrder
    : r.z !== e.z
    ? e.z - r.z
    : r.id - e.id;
}
function Aa() {
  const r = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function s() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(d, h, m, g, p, f) {
    let x = r[e];
    return (
      x === void 0
        ? ((x = {
            id: d.id,
            object: d,
            geometry: h,
            material: m,
            groupOrder: g,
            renderOrder: d.renderOrder,
            z: p,
            group: f,
          }),
          (r[e] = x))
        : ((x.id = d.id),
          (x.object = d),
          (x.geometry = h),
          (x.material = m),
          (x.groupOrder = g),
          (x.renderOrder = d.renderOrder),
          (x.z = p),
          (x.group = f)),
      e++,
      x
    );
  }
  function a(d, h, m, g, p, f) {
    const x = o(d, h, m, g, p, f);
    m.transmission > 0
      ? n.push(x)
      : m.transparent === !0
      ? i.push(x)
      : t.push(x);
  }
  function l(d, h, m, g, p, f) {
    const x = o(d, h, m, g, p, f);
    m.transmission > 0
      ? n.unshift(x)
      : m.transparent === !0
      ? i.unshift(x)
      : t.unshift(x);
  }
  function c(d, h) {
    t.length > 1 && t.sort(d || rf),
      n.length > 1 && n.sort(h || Ca),
      i.length > 1 && i.sort(h || Ca);
  }
  function u() {
    for (let d = e, h = r.length; d < h; d++) {
      const m = r[d];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: s,
    push: a,
    unshift: l,
    finish: u,
    sort: c,
  };
}
function sf() {
  let r = new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let o;
    return (
      s === void 0
        ? ((o = new Aa()), r.set(n, [o]))
        : i >= s.length
        ? ((o = new Aa()), s.push(o))
        : (o = s[i]),
      o
    );
  }
  function t() {
    r = new WeakMap();
  }
  return { get: e, dispose: t };
}
function af() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new I(), color: new Ue() };
          break;
        case "SpotLight":
          t = {
            position: new I(),
            direction: new I(),
            color: new Ue(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new I(), color: new Ue(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new I(), skyColor: new Ue(), groundColor: new Ue() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ue(),
            position: new I(),
            halfWidth: new I(),
            halfHeight: new I(),
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
function of() {
  const r = {};
  return {
    get: function (e) {
      if (r[e.id] !== void 0) return r[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Ce(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (r[e.id] = t), t;
    },
  };
}
let lf = 0;
function cf(r, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (r.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (r.map ? 1 : 0)
  );
}
function uf(r, e) {
  const t = new af(),
    n = of(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
    };
  for (let u = 0; u < 9; u++) i.probe.push(new I());
  const s = new I(),
    o = new Ye(),
    a = new Ye();
  function l(u, d) {
    let h = 0,
      m = 0,
      g = 0;
    for (let j = 0; j < 9; j++) i.probe[j].set(0, 0, 0);
    let p = 0,
      f = 0,
      x = 0,
      w = 0,
      y = 0,
      E = 0,
      M = 0,
      A = 0,
      F = 0,
      _ = 0;
    u.sort(cf);
    const T = d !== !0 ? Math.PI : 1;
    for (let j = 0, se = u.length; j < se; j++) {
      const N = u[j],
        D = N.color,
        Y = N.intensity,
        J = N.distance,
        Z = N.shadow && N.shadow.map ? N.shadow.map.texture : null;
      if (N.isAmbientLight)
        (h += D.r * Y * T), (m += D.g * Y * T), (g += D.b * Y * T);
      else if (N.isLightProbe)
        for (let X = 0; X < 9; X++)
          i.probe[X].addScaledVector(N.sh.coefficients[X], Y);
      else if (N.isDirectionalLight) {
        const X = t.get(N);
        if (
          (X.color.copy(N.color).multiplyScalar(N.intensity * T), N.castShadow)
        ) {
          const te = N.shadow,
            Q = n.get(N);
          (Q.shadowBias = te.bias),
            (Q.shadowNormalBias = te.normalBias),
            (Q.shadowRadius = te.radius),
            (Q.shadowMapSize = te.mapSize),
            (i.directionalShadow[p] = Q),
            (i.directionalShadowMap[p] = Z),
            (i.directionalShadowMatrix[p] = N.shadow.matrix),
            E++;
        }
        (i.directional[p] = X), p++;
      } else if (N.isSpotLight) {
        const X = t.get(N);
        X.position.setFromMatrixPosition(N.matrixWorld),
          X.color.copy(D).multiplyScalar(Y * T),
          (X.distance = J),
          (X.coneCos = Math.cos(N.angle)),
          (X.penumbraCos = Math.cos(N.angle * (1 - N.penumbra))),
          (X.decay = N.decay),
          (i.spot[x] = X);
        const te = N.shadow;
        if (
          (N.map &&
            ((i.spotLightMap[F] = N.map),
            F++,
            te.updateMatrices(N),
            N.castShadow && _++),
          (i.spotLightMatrix[x] = te.matrix),
          N.castShadow)
        ) {
          const Q = n.get(N);
          (Q.shadowBias = te.bias),
            (Q.shadowNormalBias = te.normalBias),
            (Q.shadowRadius = te.radius),
            (Q.shadowMapSize = te.mapSize),
            (i.spotShadow[x] = Q),
            (i.spotShadowMap[x] = Z),
            A++;
        }
        x++;
      } else if (N.isRectAreaLight) {
        const X = t.get(N);
        X.color.copy(D).multiplyScalar(Y),
          X.halfWidth.set(N.width * 0.5, 0, 0),
          X.halfHeight.set(0, N.height * 0.5, 0),
          (i.rectArea[w] = X),
          w++;
      } else if (N.isPointLight) {
        const X = t.get(N);
        if (
          (X.color.copy(N.color).multiplyScalar(N.intensity * T),
          (X.distance = N.distance),
          (X.decay = N.decay),
          N.castShadow)
        ) {
          const te = N.shadow,
            Q = n.get(N);
          (Q.shadowBias = te.bias),
            (Q.shadowNormalBias = te.normalBias),
            (Q.shadowRadius = te.radius),
            (Q.shadowMapSize = te.mapSize),
            (Q.shadowCameraNear = te.camera.near),
            (Q.shadowCameraFar = te.camera.far),
            (i.pointShadow[f] = Q),
            (i.pointShadowMap[f] = Z),
            (i.pointShadowMatrix[f] = N.shadow.matrix),
            M++;
        }
        (i.point[f] = X), f++;
      } else if (N.isHemisphereLight) {
        const X = t.get(N);
        X.skyColor.copy(N.color).multiplyScalar(Y * T),
          X.groundColor.copy(N.groundColor).multiplyScalar(Y * T),
          (i.hemi[y] = X),
          y++;
      }
    }
    w > 0 &&
      (e.isWebGL2 || r.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = re.LTC_FLOAT_1), (i.rectAreaLTC2 = re.LTC_FLOAT_2))
        : r.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = re.LTC_HALF_1), (i.rectAreaLTC2 = re.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = h),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const O = i.hash;
    (O.directionalLength !== p ||
      O.pointLength !== f ||
      O.spotLength !== x ||
      O.rectAreaLength !== w ||
      O.hemiLength !== y ||
      O.numDirectionalShadows !== E ||
      O.numPointShadows !== M ||
      O.numSpotShadows !== A ||
      O.numSpotMaps !== F) &&
      ((i.directional.length = p),
      (i.spot.length = x),
      (i.rectArea.length = w),
      (i.point.length = f),
      (i.hemi.length = y),
      (i.directionalShadow.length = E),
      (i.directionalShadowMap.length = E),
      (i.pointShadow.length = M),
      (i.pointShadowMap.length = M),
      (i.spotShadow.length = A),
      (i.spotShadowMap.length = A),
      (i.directionalShadowMatrix.length = E),
      (i.pointShadowMatrix.length = M),
      (i.spotLightMatrix.length = A + F - _),
      (i.spotLightMap.length = F),
      (i.numSpotLightShadowsWithMaps = _),
      (O.directionalLength = p),
      (O.pointLength = f),
      (O.spotLength = x),
      (O.rectAreaLength = w),
      (O.hemiLength = y),
      (O.numDirectionalShadows = E),
      (O.numPointShadows = M),
      (O.numSpotShadows = A),
      (O.numSpotMaps = F),
      (i.version = lf++));
  }
  function c(u, d) {
    let h = 0,
      m = 0,
      g = 0,
      p = 0,
      f = 0;
    const x = d.matrixWorldInverse;
    for (let w = 0, y = u.length; w < y; w++) {
      const E = u[w];
      if (E.isDirectionalLight) {
        const M = i.directional[h];
        M.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          M.direction.sub(s),
          M.direction.transformDirection(x),
          h++;
      } else if (E.isSpotLight) {
        const M = i.spot[g];
        M.position.setFromMatrixPosition(E.matrixWorld),
          M.position.applyMatrix4(x),
          M.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          M.direction.sub(s),
          M.direction.transformDirection(x),
          g++;
      } else if (E.isRectAreaLight) {
        const M = i.rectArea[p];
        M.position.setFromMatrixPosition(E.matrixWorld),
          M.position.applyMatrix4(x),
          a.identity(),
          o.copy(E.matrixWorld),
          o.premultiply(x),
          a.extractRotation(o),
          M.halfWidth.set(E.width * 0.5, 0, 0),
          M.halfHeight.set(0, E.height * 0.5, 0),
          M.halfWidth.applyMatrix4(a),
          M.halfHeight.applyMatrix4(a),
          p++;
      } else if (E.isPointLight) {
        const M = i.point[m];
        M.position.setFromMatrixPosition(E.matrixWorld),
          M.position.applyMatrix4(x),
          m++;
      } else if (E.isHemisphereLight) {
        const M = i.hemi[f];
        M.direction.setFromMatrixPosition(E.matrixWorld),
          M.direction.transformDirection(x),
          f++;
      }
    }
  }
  return { setup: l, setupView: c, state: i };
}
function La(r, e) {
  const t = new uf(r, e),
    n = [],
    i = [];
  function s() {
    (n.length = 0), (i.length = 0);
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    i.push(d);
  }
  function l(d) {
    t.setup(n, d);
  }
  function c(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: l,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function df(r, e) {
  let t = new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let l;
    return (
      a === void 0
        ? ((l = new La(r, e)), t.set(s, [l]))
        : o >= a.length
        ? ((l = new La(r, e)), a.push(l))
        : (l = a[o]),
      l
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class hf extends sr {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = Ml),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class ff extends sr {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new I()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const pf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  mf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function gf(r, e, t) {
  let n = new lo();
  const i = new Ce(),
    s = new Ce(),
    o = new tt(),
    a = new hf({ depthPacking: Sl }),
    l = new ff(),
    c = {},
    u = t.maxTextureSize,
    d = { 0: Ct, 1: Sn, 2: rs },
    h = new ht({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Ce() },
        radius: { value: 4 },
      },
      vertexShader: pf,
      fragmentShader: mf,
    }),
    m = h.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new sn();
  g.setAttribute(
    "position",
    new kt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const p = new Bt(g, h),
    f = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Xa),
    (this.render = function (E, M, A) {
      if (
        f.enabled === !1 ||
        (f.autoUpdate === !1 && f.needsUpdate === !1) ||
        E.length === 0
      )
        return;
      const F = r.getRenderTarget(),
        _ = r.getActiveCubeFace(),
        T = r.getActiveMipmapLevel(),
        O = r.state;
      O.setBlending(nn),
        O.buffers.color.setClear(1, 1, 1, 1),
        O.buffers.depth.setTest(!0),
        O.setScissorTest(!1);
      for (let j = 0, se = E.length; j < se; j++) {
        const N = E[j],
          D = N.shadow;
        if (D === void 0) {
          console.warn("THREE.WebGLShadowMap:", N, "has no shadow.");
          continue;
        }
        if (D.autoUpdate === !1 && D.needsUpdate === !1) continue;
        i.copy(D.mapSize);
        const Y = D.getFrameExtents();
        if (
          (i.multiply(Y),
          s.copy(D.mapSize),
          (i.x > u || i.y > u) &&
            (i.x > u &&
              ((s.x = Math.floor(u / Y.x)),
              (i.x = s.x * Y.x),
              (D.mapSize.x = s.x)),
            i.y > u &&
              ((s.y = Math.floor(u / Y.y)),
              (i.y = s.y * Y.y),
              (D.mapSize.y = s.y))),
          D.map === null)
        ) {
          const Z = this.type !== hi ? { minFilter: rt, magFilter: rt } : {};
          (D.map = new It(i.x, i.y, Z)),
            (D.map.texture.name = N.name + ".shadowMap"),
            D.camera.updateProjectionMatrix();
        }
        r.setRenderTarget(D.map), r.clear();
        const J = D.getViewportCount();
        for (let Z = 0; Z < J; Z++) {
          const X = D.getViewport(Z);
          o.set(s.x * X.x, s.y * X.y, s.x * X.z, s.y * X.w),
            O.viewport(o),
            D.updateMatrices(N, Z),
            (n = D.getFrustum()),
            y(M, A, D.camera, N, this.type);
        }
        D.isPointLightShadow !== !0 && this.type === hi && x(D, A),
          (D.needsUpdate = !1);
      }
      (f.needsUpdate = !1), r.setRenderTarget(F, _, T);
    });
  function x(E, M) {
    const A = e.update(p);
    h.defines.VSM_SAMPLES !== E.blurSamples &&
      ((h.defines.VSM_SAMPLES = E.blurSamples),
      (m.defines.VSM_SAMPLES = E.blurSamples),
      (h.needsUpdate = !0),
      (m.needsUpdate = !0)),
      E.mapPass === null && (E.mapPass = new It(i.x, i.y)),
      (h.uniforms.shadow_pass.value = E.map.texture),
      (h.uniforms.resolution.value = E.mapSize),
      (h.uniforms.radius.value = E.radius),
      r.setRenderTarget(E.mapPass),
      r.clear(),
      r.renderBufferDirect(M, null, A, h, p, null),
      (m.uniforms.shadow_pass.value = E.mapPass.texture),
      (m.uniforms.resolution.value = E.mapSize),
      (m.uniforms.radius.value = E.radius),
      r.setRenderTarget(E.map),
      r.clear(),
      r.renderBufferDirect(M, null, A, m, p, null);
  }
  function w(E, M, A, F, _, T) {
    let O = null;
    const j =
      A.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (j !== void 0) O = j;
    else if (
      ((O = A.isPointLight === !0 ? l : a),
      (r.localClippingEnabled &&
        M.clipShadows === !0 &&
        Array.isArray(M.clippingPlanes) &&
        M.clippingPlanes.length !== 0) ||
        (M.displacementMap && M.displacementScale !== 0) ||
        (M.alphaMap && M.alphaTest > 0) ||
        (M.map && M.alphaTest > 0))
    ) {
      const se = O.uuid,
        N = M.uuid;
      let D = c[se];
      D === void 0 && ((D = {}), (c[se] = D));
      let Y = D[N];
      Y === void 0 && ((Y = O.clone()), (D[N] = Y)), (O = Y);
    }
    return (
      (O.visible = M.visible),
      (O.wireframe = M.wireframe),
      T === hi
        ? (O.side = M.shadowSide !== null ? M.shadowSide : M.side)
        : (O.side = M.shadowSide !== null ? M.shadowSide : d[M.side]),
      (O.alphaMap = M.alphaMap),
      (O.alphaTest = M.alphaTest),
      (O.map = M.map),
      (O.clipShadows = M.clipShadows),
      (O.clippingPlanes = M.clippingPlanes),
      (O.clipIntersection = M.clipIntersection),
      (O.displacementMap = M.displacementMap),
      (O.displacementScale = M.displacementScale),
      (O.displacementBias = M.displacementBias),
      (O.wireframeLinewidth = M.wireframeLinewidth),
      (O.linewidth = M.linewidth),
      A.isPointLight === !0 &&
        O.isMeshDistanceMaterial === !0 &&
        (O.referencePosition.setFromMatrixPosition(A.matrixWorld),
        (O.nearDistance = F),
        (O.farDistance = _)),
      O
    );
  }
  function y(E, M, A, F, _) {
    if (E.visible === !1) return;
    if (
      E.layers.test(M.layers) &&
      (E.isMesh || E.isLine || E.isPoints) &&
      (E.castShadow || (E.receiveShadow && _ === hi)) &&
      (!E.frustumCulled || n.intersectsObject(E))
    ) {
      E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, E.matrixWorld);
      const j = e.update(E),
        se = E.material;
      if (Array.isArray(se)) {
        const N = j.groups;
        for (let D = 0, Y = N.length; D < Y; D++) {
          const J = N[D],
            Z = se[J.materialIndex];
          if (Z && Z.visible) {
            const X = w(E, Z, F, A.near, A.far, _);
            r.renderBufferDirect(A, null, j, X, E, J);
          }
        }
      } else if (se.visible) {
        const N = w(E, se, F, A.near, A.far, _);
        r.renderBufferDirect(A, null, j, N, E, null);
      }
    }
    const O = E.children;
    for (let j = 0, se = O.length; j < se; j++) y(O[j], M, A, F, _);
  }
}
function _f(r, e, t) {
  const n = t.isWebGL2;
  function i() {
    let C = !1;
    const z = new tt();
    let $ = null;
    const ce = new tt(0, 0, 0, 0);
    return {
      setMask: function (fe) {
        $ !== fe && !C && (r.colorMask(fe, fe, fe, fe), ($ = fe));
      },
      setLocked: function (fe) {
        C = fe;
      },
      setClear: function (fe, Fe, Je, nt, cn) {
        cn === !0 && ((fe *= nt), (Fe *= nt), (Je *= nt)),
          z.set(fe, Fe, Je, nt),
          ce.equals(z) === !1 && (r.clearColor(fe, Fe, Je, nt), ce.copy(z));
      },
      reset: function () {
        (C = !1), ($ = null), ce.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let C = !1,
      z = null,
      $ = null,
      ce = null;
    return {
      setTest: function (fe) {
        fe ? Re(2929) : de(2929);
      },
      setMask: function (fe) {
        z !== fe && !C && (r.depthMask(fe), (z = fe));
      },
      setFunc: function (fe) {
        if ($ !== fe) {
          switch (fe) {
            case qo:
              r.depthFunc(512);
              break;
            case Yo:
              r.depthFunc(519);
              break;
            case jo:
              r.depthFunc(513);
              break;
            case qr:
              r.depthFunc(515);
              break;
            case $o:
              r.depthFunc(514);
              break;
            case Zo:
              r.depthFunc(518);
              break;
            case Ko:
              r.depthFunc(516);
              break;
            case Jo:
              r.depthFunc(517);
              break;
            default:
              r.depthFunc(515);
          }
          $ = fe;
        }
      },
      setLocked: function (fe) {
        C = fe;
      },
      setClear: function (fe) {
        ce !== fe && (r.clearDepth(fe), (ce = fe));
      },
      reset: function () {
        (C = !1), (z = null), ($ = null), (ce = null);
      },
    };
  }
  function o() {
    let C = !1,
      z = null,
      $ = null,
      ce = null,
      fe = null,
      Fe = null,
      Je = null,
      nt = null,
      cn = null;
    return {
      setTest: function (Ve) {
        C || (Ve ? Re(2960) : de(2960));
      },
      setMask: function (Ve) {
        z !== Ve && !C && (r.stencilMask(Ve), (z = Ve));
      },
      setFunc: function (Ve, Gt, St) {
        ($ !== Ve || ce !== Gt || fe !== St) &&
          (r.stencilFunc(Ve, Gt, St), ($ = Ve), (ce = Gt), (fe = St));
      },
      setOp: function (Ve, Gt, St) {
        (Fe !== Ve || Je !== Gt || nt !== St) &&
          (r.stencilOp(Ve, Gt, St), (Fe = Ve), (Je = Gt), (nt = St));
      },
      setLocked: function (Ve) {
        C = Ve;
      },
      setClear: function (Ve) {
        cn !== Ve && (r.clearStencil(Ve), (cn = Ve));
      },
      reset: function () {
        (C = !1),
          (z = null),
          ($ = null),
          (ce = null),
          (fe = null),
          (Fe = null),
          (Je = null),
          (nt = null),
          (cn = null);
      },
    };
  }
  const a = new i(),
    l = new s(),
    c = new o(),
    u = new WeakMap(),
    d = new WeakMap();
  let h = {},
    m = {},
    g = new WeakMap(),
    p = [],
    f = null,
    x = !1,
    w = null,
    y = null,
    E = null,
    M = null,
    A = null,
    F = null,
    _ = null,
    T = !1,
    O = null,
    j = null,
    se = null,
    N = null,
    D = null;
  const Y = r.getParameter(35661);
  let J = !1,
    Z = 0;
  const X = r.getParameter(7938);
  X.indexOf("WebGL") !== -1
    ? ((Z = parseFloat(/^WebGL (\d)/.exec(X)[1])), (J = Z >= 1))
    : X.indexOf("OpenGL ES") !== -1 &&
      ((Z = parseFloat(/^OpenGL ES (\d)/.exec(X)[1])), (J = Z >= 2));
  let te = null,
    Q = {};
  const U = r.getParameter(3088),
    V = r.getParameter(2978),
    K = new tt().fromArray(U),
    ne = new tt().fromArray(V);
  function ae(C, z, $) {
    const ce = new Uint8Array(4),
      fe = r.createTexture();
    r.bindTexture(C, fe),
      r.texParameteri(C, 10241, 9728),
      r.texParameteri(C, 10240, 9728);
    for (let Fe = 0; Fe < $; Fe++)
      r.texImage2D(z + Fe, 0, 6408, 1, 1, 0, 6408, 5121, ce);
    return fe;
  }
  const H = {};
  (H[3553] = ae(3553, 3553, 1)),
    (H[34067] = ae(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    Re(2929),
    l.setFunc(qr),
    ot(!1),
    Mt(ys),
    Re(2884),
    st(nn);
  function Re(C) {
    h[C] !== !0 && (r.enable(C), (h[C] = !0));
  }
  function de(C) {
    h[C] !== !1 && (r.disable(C), (h[C] = !1));
  }
  function be(C, z) {
    return m[C] !== z
      ? (r.bindFramebuffer(C, z),
        (m[C] = z),
        n && (C === 36009 && (m[36160] = z), C === 36160 && (m[36009] = z)),
        !0)
      : !1;
  }
  function ue(C, z) {
    let $ = p,
      ce = !1;
    if (C)
      if (
        (($ = g.get(z)),
        $ === void 0 && (($ = []), g.set(z, $)),
        C.isWebGLMultipleRenderTargets)
      ) {
        const fe = C.texture;
        if ($.length !== fe.length || $[0] !== 36064) {
          for (let Fe = 0, Je = fe.length; Fe < Je; Fe++) $[Fe] = 36064 + Fe;
          ($.length = fe.length), (ce = !0);
        }
      } else $[0] !== 36064 && (($[0] = 36064), (ce = !0));
    else $[0] !== 1029 && (($[0] = 1029), (ce = !0));
    ce &&
      (t.isWebGL2
        ? r.drawBuffers($)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL($));
  }
  function Oe(C) {
    return f !== C ? (r.useProgram(C), (f = C), !0) : !1;
  }
  const we = { [kn]: 32774, [Oo]: 32778, [No]: 32779 };
  if (n) (we[ws] = 32775), (we[Es] = 32776);
  else {
    const C = e.get("EXT_blend_minmax");
    C !== null && ((we[ws] = C.MIN_EXT), (we[Es] = C.MAX_EXT));
  }
  const xe = {
    [Uo]: 0,
    [zo]: 1,
    [Bo]: 768,
    [qa]: 770,
    [Xo]: 776,
    [Ho]: 774,
    [Vo]: 772,
    [ko]: 769,
    [Ya]: 771,
    [Wo]: 775,
    [Go]: 773,
  };
  function st(C, z, $, ce, fe, Fe, Je, nt) {
    if (C === nn) {
      x === !0 && (de(3042), (x = !1));
      return;
    }
    if ((x === !1 && (Re(3042), (x = !0)), C !== Fo)) {
      if (C !== w || nt !== T) {
        if (
          ((y !== kn || A !== kn) &&
            (r.blendEquation(32774), (y = kn), (A = kn)),
          nt)
        )
          switch (C) {
            case Xn:
              r.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Xr:
              r.blendFunc(1, 1);
              break;
            case Ms:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Ss:
              r.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        else
          switch (C) {
            case Xn:
              r.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Xr:
              r.blendFunc(770, 1);
              break;
            case Ms:
              r.blendFuncSeparate(0, 769, 0, 1);
              break;
            case Ss:
              r.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", C);
              break;
          }
        (E = null), (M = null), (F = null), (_ = null), (w = C), (T = nt);
      }
      return;
    }
    (fe = fe || z),
      (Fe = Fe || $),
      (Je = Je || ce),
      (z !== y || fe !== A) &&
        (r.blendEquationSeparate(we[z], we[fe]), (y = z), (A = fe)),
      ($ !== E || ce !== M || Fe !== F || Je !== _) &&
        (r.blendFuncSeparate(xe[$], xe[ce], xe[Fe], xe[Je]),
        (E = $),
        (M = ce),
        (F = Fe),
        (_ = Je)),
      (w = C),
      (T = !1);
  }
  function at(C, z) {
    C.side === rs ? de(2884) : Re(2884);
    let $ = C.side === Ct;
    z && ($ = !$),
      ot($),
      C.blending === Xn && C.transparent === !1
        ? st(nn)
        : st(
            C.blending,
            C.blendEquation,
            C.blendSrc,
            C.blendDst,
            C.blendEquationAlpha,
            C.blendSrcAlpha,
            C.blendDstAlpha,
            C.premultipliedAlpha
          ),
      l.setFunc(C.depthFunc),
      l.setTest(C.depthTest),
      l.setMask(C.depthWrite),
      a.setMask(C.colorWrite);
    const ce = C.stencilWrite;
    c.setTest(ce),
      ce &&
        (c.setMask(C.stencilWriteMask),
        c.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        c.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
      Ne(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
      C.alphaToCoverage === !0 ? Re(32926) : de(32926);
  }
  function ot(C) {
    O !== C && (C ? r.frontFace(2304) : r.frontFace(2305), (O = C));
  }
  function Mt(C) {
    C !== Ro
      ? (Re(2884),
        C !== j &&
          (C === ys
            ? r.cullFace(1029)
            : C === Po
            ? r.cullFace(1028)
            : r.cullFace(1032)))
      : de(2884),
      (j = C);
  }
  function Xe(C) {
    C !== se && (J && r.lineWidth(C), (se = C));
  }
  function Ne(C, z, $) {
    C
      ? (Re(32823),
        (N !== z || D !== $) && (r.polygonOffset(z, $), (N = z), (D = $)))
      : de(32823);
  }
  function Vt(C) {
    C ? Re(3089) : de(3089);
  }
  function At(C) {
    C === void 0 && (C = 33984 + Y - 1),
      te !== C && (r.activeTexture(C), (te = C));
  }
  function S(C, z, $) {
    $ === void 0 && (te === null ? ($ = 33984 + Y - 1) : ($ = te));
    let ce = Q[$];
    ce === void 0 && ((ce = { type: void 0, texture: void 0 }), (Q[$] = ce)),
      (ce.type !== C || ce.texture !== z) &&
        (te !== $ && (r.activeTexture($), (te = $)),
        r.bindTexture(C, z || H[C]),
        (ce.type = C),
        (ce.texture = z));
  }
  function v() {
    const C = Q[te];
    C !== void 0 &&
      C.type !== void 0 &&
      (r.bindTexture(C.type, null), (C.type = void 0), (C.texture = void 0));
  }
  function k() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ee() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ie() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function oe() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ye() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function le() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function W() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ge() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ve() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function he() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function _e(C) {
    K.equals(C) === !1 && (r.scissor(C.x, C.y, C.z, C.w), K.copy(C));
  }
  function pe(C) {
    ne.equals(C) === !1 && (r.viewport(C.x, C.y, C.z, C.w), ne.copy(C));
  }
  function Pe(C, z) {
    let $ = d.get(z);
    $ === void 0 && (($ = new WeakMap()), d.set(z, $));
    let ce = $.get(C);
    ce === void 0 && ((ce = r.getUniformBlockIndex(z, C.name)), $.set(C, ce));
  }
  function ke(C, z) {
    const ce = d.get(z).get(C);
    u.get(z) !== ce &&
      (r.uniformBlockBinding(z, ce, C.__bindingPointIndex), u.set(z, ce));
  }
  function Ke() {
    r.disable(3042),
      r.disable(2884),
      r.disable(2929),
      r.disable(32823),
      r.disable(3089),
      r.disable(2960),
      r.disable(32926),
      r.blendEquation(32774),
      r.blendFunc(1, 0),
      r.blendFuncSeparate(1, 0, 1, 0),
      r.colorMask(!0, !0, !0, !0),
      r.clearColor(0, 0, 0, 0),
      r.depthMask(!0),
      r.depthFunc(513),
      r.clearDepth(1),
      r.stencilMask(4294967295),
      r.stencilFunc(519, 0, 4294967295),
      r.stencilOp(7680, 7680, 7680),
      r.clearStencil(0),
      r.cullFace(1029),
      r.frontFace(2305),
      r.polygonOffset(0, 0),
      r.activeTexture(33984),
      r.bindFramebuffer(36160, null),
      n === !0 &&
        (r.bindFramebuffer(36009, null), r.bindFramebuffer(36008, null)),
      r.useProgram(null),
      r.lineWidth(1),
      r.scissor(0, 0, r.canvas.width, r.canvas.height),
      r.viewport(0, 0, r.canvas.width, r.canvas.height),
      (h = {}),
      (te = null),
      (Q = {}),
      (m = {}),
      (g = new WeakMap()),
      (p = []),
      (f = null),
      (x = !1),
      (w = null),
      (y = null),
      (E = null),
      (M = null),
      (A = null),
      (F = null),
      (_ = null),
      (T = !1),
      (O = null),
      (j = null),
      (se = null),
      (N = null),
      (D = null),
      K.set(0, 0, r.canvas.width, r.canvas.height),
      ne.set(0, 0, r.canvas.width, r.canvas.height),
      a.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: l, stencil: c },
    enable: Re,
    disable: de,
    bindFramebuffer: be,
    drawBuffers: ue,
    useProgram: Oe,
    setBlending: st,
    setMaterial: at,
    setFlipSided: ot,
    setCullFace: Mt,
    setLineWidth: Xe,
    setPolygonOffset: Ne,
    setScissorTest: Vt,
    activeTexture: At,
    bindTexture: S,
    unbindTexture: v,
    compressedTexImage2D: k,
    compressedTexImage3D: ee,
    texImage2D: ve,
    texImage3D: he,
    updateUBOMapping: Pe,
    uniformBlockBinding: ke,
    texStorage2D: W,
    texStorage3D: ge,
    texSubImage2D: ie,
    texSubImage3D: oe,
    compressedTexSubImage2D: ye,
    compressedTexSubImage3D: le,
    scissor: _e,
    viewport: pe,
    reset: Ke,
  };
}
function vf(r, e, t, n, i, s, o) {
  const a = i.isWebGL2,
    l = i.maxTextures,
    c = i.maxCubemapSize,
    u = i.maxTextureSize,
    d = i.maxSamples,
    h = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let p;
  const f = new WeakMap();
  let x = !1;
  try {
    x =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function w(S, v) {
    return x ? new OffscreenCanvas(S, v) : bi("canvas");
  }
  function y(S, v, k, ee) {
    let ie = 1;
    if (
      ((S.width > ee || S.height > ee) &&
        (ie = ee / Math.max(S.width, S.height)),
      ie < 1 || v === !0)
    )
      if (
        (typeof HTMLImageElement < "u" && S instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && S instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && S instanceof ImageBitmap)
      ) {
        const oe = v ? Jr : Math.floor,
          ye = oe(ie * S.width),
          le = oe(ie * S.height);
        p === void 0 && (p = w(ye, le));
        const W = k ? w(ye, le) : p;
        return (
          (W.width = ye),
          (W.height = le),
          W.getContext("2d").drawImage(S, 0, 0, ye, le),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              S.width +
              "x" +
              S.height +
              ") to (" +
              ye +
              "x" +
              le +
              ")."
          ),
          W
        );
      } else
        return (
          "data" in S &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                S.width +
                "x" +
                S.height +
                ")."
            ),
          S
        );
    return S;
  }
  function E(S) {
    return Ks(S.width) && Ks(S.height);
  }
  function M(S) {
    return a
      ? !1
      : S.wrapS !== Tt ||
          S.wrapT !== Tt ||
          (S.minFilter !== rt && S.minFilter !== dt);
  }
  function A(S, v) {
    return S.generateMipmaps && v && S.minFilter !== rt && S.minFilter !== dt;
  }
  function F(S) {
    r.generateMipmap(S);
  }
  function _(S, v, k, ee, ie = !1) {
    if (a === !1) return v;
    if (S !== null) {
      if (r[S] !== void 0) return r[S];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          S +
          "'"
      );
    }
    let oe = v;
    return (
      v === 6403 &&
        (k === 5126 && (oe = 33326),
        k === 5131 && (oe = 33325),
        k === 5121 && (oe = 33321)),
      v === 33319 &&
        (k === 5126 && (oe = 33328),
        k === 5131 && (oe = 33327),
        k === 5121 && (oe = 33323)),
      v === 6408 &&
        (k === 5126 && (oe = 34836),
        k === 5131 && (oe = 34842),
        k === 5121 && (oe = ee === Be && ie === !1 ? 35907 : 32856),
        k === 32819 && (oe = 32854),
        k === 32820 && (oe = 32855)),
      (oe === 33325 ||
        oe === 33326 ||
        oe === 33327 ||
        oe === 33328 ||
        oe === 34842 ||
        oe === 34836) &&
        e.get("EXT_color_buffer_float"),
      oe
    );
  }
  function T(S, v, k) {
    return A(S, k) === !0 ||
      (S.isFramebufferTexture && S.minFilter !== rt && S.minFilter !== dt)
      ? Math.log2(Math.max(v.width, v.height)) + 1
      : S.mipmaps !== void 0 && S.mipmaps.length > 0
      ? S.mipmaps.length
      : S.isCompressedTexture && Array.isArray(S.image)
      ? v.mipmaps.length
      : 1;
  }
  function O(S) {
    return S === rt || S === Ts || S === hr ? 9728 : 9729;
  }
  function j(S) {
    const v = S.target;
    v.removeEventListener("dispose", j), N(v), v.isVideoTexture && g.delete(v);
  }
  function se(S) {
    const v = S.target;
    v.removeEventListener("dispose", se), Y(v);
  }
  function N(S) {
    const v = n.get(S);
    if (v.__webglInit === void 0) return;
    const k = S.source,
      ee = f.get(k);
    if (ee) {
      const ie = ee[v.__cacheKey];
      ie.usedTimes--,
        ie.usedTimes === 0 && D(S),
        Object.keys(ee).length === 0 && f.delete(k);
    }
    n.remove(S);
  }
  function D(S) {
    const v = n.get(S);
    r.deleteTexture(v.__webglTexture);
    const k = S.source,
      ee = f.get(k);
    delete ee[v.__cacheKey], o.memory.textures--;
  }
  function Y(S) {
    const v = S.texture,
      k = n.get(S),
      ee = n.get(v);
    if (
      (ee.__webglTexture !== void 0 &&
        (r.deleteTexture(ee.__webglTexture), o.memory.textures--),
      S.depthTexture && S.depthTexture.dispose(),
      S.isWebGLCubeRenderTarget)
    )
      for (let ie = 0; ie < 6; ie++)
        r.deleteFramebuffer(k.__webglFramebuffer[ie]),
          k.__webglDepthbuffer &&
            r.deleteRenderbuffer(k.__webglDepthbuffer[ie]);
    else {
      if (
        (r.deleteFramebuffer(k.__webglFramebuffer),
        k.__webglDepthbuffer && r.deleteRenderbuffer(k.__webglDepthbuffer),
        k.__webglMultisampledFramebuffer &&
          r.deleteFramebuffer(k.__webglMultisampledFramebuffer),
        k.__webglColorRenderbuffer)
      )
        for (let ie = 0; ie < k.__webglColorRenderbuffer.length; ie++)
          k.__webglColorRenderbuffer[ie] &&
            r.deleteRenderbuffer(k.__webglColorRenderbuffer[ie]);
      k.__webglDepthRenderbuffer &&
        r.deleteRenderbuffer(k.__webglDepthRenderbuffer);
    }
    if (S.isWebGLMultipleRenderTargets)
      for (let ie = 0, oe = v.length; ie < oe; ie++) {
        const ye = n.get(v[ie]);
        ye.__webglTexture &&
          (r.deleteTexture(ye.__webglTexture), o.memory.textures--),
          n.remove(v[ie]);
      }
    n.remove(v), n.remove(S);
  }
  let J = 0;
  function Z() {
    J = 0;
  }
  function X() {
    const S = J;
    return (
      S >= l &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            S +
            " texture units while this GPU supports only " +
            l
        ),
      (J += 1),
      S
    );
  }
  function te(S) {
    const v = [];
    return (
      v.push(S.wrapS),
      v.push(S.wrapT),
      v.push(S.wrapR || 0),
      v.push(S.magFilter),
      v.push(S.minFilter),
      v.push(S.anisotropy),
      v.push(S.internalFormat),
      v.push(S.format),
      v.push(S.type),
      v.push(S.generateMipmaps),
      v.push(S.premultiplyAlpha),
      v.push(S.flipY),
      v.push(S.unpackAlignment),
      v.push(S.encoding),
      v.join()
    );
  }
  function Q(S, v) {
    const k = n.get(S);
    if (
      (S.isVideoTexture && Vt(S),
      S.isRenderTargetTexture === !1 &&
        S.version > 0 &&
        k.__version !== S.version)
    ) {
      const ee = S.image;
      if (ee === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (ee.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        de(k, S, v);
        return;
      }
    }
    t.bindTexture(3553, k.__webglTexture, 33984 + v);
  }
  function U(S, v) {
    const k = n.get(S);
    if (S.version > 0 && k.__version !== S.version) {
      de(k, S, v);
      return;
    }
    t.bindTexture(35866, k.__webglTexture, 33984 + v);
  }
  function V(S, v) {
    const k = n.get(S);
    if (S.version > 0 && k.__version !== S.version) {
      de(k, S, v);
      return;
    }
    t.bindTexture(32879, k.__webglTexture, 33984 + v);
  }
  function K(S, v) {
    const k = n.get(S);
    if (S.version > 0 && k.__version !== S.version) {
      be(k, S, v);
      return;
    }
    t.bindTexture(34067, k.__webglTexture, 33984 + v);
  }
  const ne = { [$r]: 10497, [Tt]: 33071, [Zr]: 33648 },
    ae = {
      [rt]: 9728,
      [Ts]: 9984,
      [hr]: 9986,
      [dt]: 9729,
      [al]: 9985,
      [_i]: 9987,
    };
  function H(S, v, k) {
    if (
      (k
        ? (r.texParameteri(S, 10242, ne[v.wrapS]),
          r.texParameteri(S, 10243, ne[v.wrapT]),
          (S === 32879 || S === 35866) &&
            r.texParameteri(S, 32882, ne[v.wrapR]),
          r.texParameteri(S, 10240, ae[v.magFilter]),
          r.texParameteri(S, 10241, ae[v.minFilter]))
        : (r.texParameteri(S, 10242, 33071),
          r.texParameteri(S, 10243, 33071),
          (S === 32879 || S === 35866) && r.texParameteri(S, 32882, 33071),
          (v.wrapS !== Tt || v.wrapT !== Tt) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          r.texParameteri(S, 10240, O(v.magFilter)),
          r.texParameteri(S, 10241, O(v.minFilter)),
          v.minFilter !== rt &&
            v.minFilter !== dt &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const ee = e.get("EXT_texture_filter_anisotropic");
      if (
        v.magFilter === rt ||
        (v.minFilter !== hr && v.minFilter !== _i) ||
        (v.type === bn && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          v.type === vi &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (v.anisotropy > 1 || n.get(v).__currentAnisotropy) &&
        (r.texParameterf(
          S,
          ee.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(v.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(v).__currentAnisotropy = v.anisotropy));
    }
  }
  function Re(S, v) {
    let k = !1;
    S.__webglInit === void 0 &&
      ((S.__webglInit = !0), v.addEventListener("dispose", j));
    const ee = v.source;
    let ie = f.get(ee);
    ie === void 0 && ((ie = {}), f.set(ee, ie));
    const oe = te(v);
    if (oe !== S.__cacheKey) {
      ie[oe] === void 0 &&
        ((ie[oe] = { texture: r.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (k = !0)),
        ie[oe].usedTimes++;
      const ye = ie[S.__cacheKey];
      ye !== void 0 &&
        (ie[S.__cacheKey].usedTimes--, ye.usedTimes === 0 && D(v)),
        (S.__cacheKey = oe),
        (S.__webglTexture = ie[oe].texture);
    }
    return k;
  }
  function de(S, v, k) {
    let ee = 3553;
    (v.isDataArrayTexture || v.isCompressedArrayTexture) && (ee = 35866),
      v.isData3DTexture && (ee = 32879);
    const ie = Re(S, v),
      oe = v.source;
    t.bindTexture(ee, S.__webglTexture, 33984 + k);
    const ye = n.get(oe);
    if (oe.version !== ye.__version || ie === !0) {
      t.activeTexture(33984 + k),
        r.pixelStorei(37440, v.flipY),
        r.pixelStorei(37441, v.premultiplyAlpha),
        r.pixelStorei(3317, v.unpackAlignment),
        r.pixelStorei(37443, 0);
      const le = M(v) && E(v.image) === !1;
      let W = y(v.image, le, !1, u);
      W = At(v, W);
      const ge = E(W) || a,
        ve = s.convert(v.format, v.encoding);
      let he = s.convert(v.type),
        _e = _(v.internalFormat, ve, he, v.encoding, v.isVideoTexture);
      H(ee, v, ge);
      let pe;
      const Pe = v.mipmaps,
        ke = a && v.isVideoTexture !== !0,
        Ke = ye.__version === void 0 || ie === !0,
        C = T(v, W, ge);
      if (v.isDepthTexture)
        (_e = 6402),
          a
            ? v.type === bn
              ? (_e = 36012)
              : v.type === xn
              ? (_e = 33190)
              : v.type === qn
              ? (_e = 35056)
              : (_e = 33189)
            : v.type === bn &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          v.format === yn &&
            _e === 6402 &&
            v.type !== Za &&
            v.type !== xn &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (v.type = xn),
            (he = s.convert(v.type))),
          v.format === $n &&
            _e === 6402 &&
            ((_e = 34041),
            v.type !== qn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (v.type = qn),
              (he = s.convert(v.type)))),
          Ke &&
            (ke
              ? t.texStorage2D(3553, 1, _e, W.width, W.height)
              : t.texImage2D(3553, 0, _e, W.width, W.height, 0, ve, he, null));
      else if (v.isDataTexture)
        if (Pe.length > 0 && ge) {
          ke && Ke && t.texStorage2D(3553, C, _e, Pe[0].width, Pe[0].height);
          for (let z = 0, $ = Pe.length; z < $; z++)
            (pe = Pe[z]),
              ke
                ? t.texSubImage2D(
                    3553,
                    z,
                    0,
                    0,
                    pe.width,
                    pe.height,
                    ve,
                    he,
                    pe.data
                  )
                : t.texImage2D(
                    3553,
                    z,
                    _e,
                    pe.width,
                    pe.height,
                    0,
                    ve,
                    he,
                    pe.data
                  );
          v.generateMipmaps = !1;
        } else
          ke
            ? (Ke && t.texStorage2D(3553, C, _e, W.width, W.height),
              t.texSubImage2D(3553, 0, 0, 0, W.width, W.height, ve, he, W.data))
            : t.texImage2D(3553, 0, _e, W.width, W.height, 0, ve, he, W.data);
      else if (v.isCompressedTexture)
        if (v.isCompressedArrayTexture) {
          ke &&
            Ke &&
            t.texStorage3D(35866, C, _e, Pe[0].width, Pe[0].height, W.depth);
          for (let z = 0, $ = Pe.length; z < $; z++)
            (pe = Pe[z]),
              v.format !== Pt
                ? ve !== null
                  ? ke
                    ? t.compressedTexSubImage3D(
                        35866,
                        z,
                        0,
                        0,
                        0,
                        pe.width,
                        pe.height,
                        W.depth,
                        ve,
                        pe.data,
                        0,
                        0
                      )
                    : t.compressedTexImage3D(
                        35866,
                        z,
                        _e,
                        pe.width,
                        pe.height,
                        W.depth,
                        0,
                        pe.data,
                        0,
                        0
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : ke
                ? t.texSubImage3D(
                    35866,
                    z,
                    0,
                    0,
                    0,
                    pe.width,
                    pe.height,
                    W.depth,
                    ve,
                    he,
                    pe.data
                  )
                : t.texImage3D(
                    35866,
                    z,
                    _e,
                    pe.width,
                    pe.height,
                    W.depth,
                    0,
                    ve,
                    he,
                    pe.data
                  );
        } else {
          ke && Ke && t.texStorage2D(3553, C, _e, Pe[0].width, Pe[0].height);
          for (let z = 0, $ = Pe.length; z < $; z++)
            (pe = Pe[z]),
              v.format !== Pt
                ? ve !== null
                  ? ke
                    ? t.compressedTexSubImage2D(
                        3553,
                        z,
                        0,
                        0,
                        pe.width,
                        pe.height,
                        ve,
                        pe.data
                      )
                    : t.compressedTexImage2D(
                        3553,
                        z,
                        _e,
                        pe.width,
                        pe.height,
                        0,
                        pe.data
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                    )
                : ke
                ? t.texSubImage2D(
                    3553,
                    z,
                    0,
                    0,
                    pe.width,
                    pe.height,
                    ve,
                    he,
                    pe.data
                  )
                : t.texImage2D(
                    3553,
                    z,
                    _e,
                    pe.width,
                    pe.height,
                    0,
                    ve,
                    he,
                    pe.data
                  );
        }
      else if (v.isDataArrayTexture)
        ke
          ? (Ke && t.texStorage3D(35866, C, _e, W.width, W.height, W.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              W.width,
              W.height,
              W.depth,
              ve,
              he,
              W.data
            ))
          : t.texImage3D(
              35866,
              0,
              _e,
              W.width,
              W.height,
              W.depth,
              0,
              ve,
              he,
              W.data
            );
      else if (v.isData3DTexture)
        ke
          ? (Ke && t.texStorage3D(32879, C, _e, W.width, W.height, W.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              W.width,
              W.height,
              W.depth,
              ve,
              he,
              W.data
            ))
          : t.texImage3D(
              32879,
              0,
              _e,
              W.width,
              W.height,
              W.depth,
              0,
              ve,
              he,
              W.data
            );
      else if (v.isFramebufferTexture) {
        if (Ke)
          if (ke) t.texStorage2D(3553, C, _e, W.width, W.height);
          else {
            let z = W.width,
              $ = W.height;
            for (let ce = 0; ce < C; ce++)
              t.texImage2D(3553, ce, _e, z, $, 0, ve, he, null),
                (z >>= 1),
                ($ >>= 1);
          }
      } else if (Pe.length > 0 && ge) {
        ke && Ke && t.texStorage2D(3553, C, _e, Pe[0].width, Pe[0].height);
        for (let z = 0, $ = Pe.length; z < $; z++)
          (pe = Pe[z]),
            ke
              ? t.texSubImage2D(3553, z, 0, 0, ve, he, pe)
              : t.texImage2D(3553, z, _e, ve, he, pe);
        v.generateMipmaps = !1;
      } else
        ke
          ? (Ke && t.texStorage2D(3553, C, _e, W.width, W.height),
            t.texSubImage2D(3553, 0, 0, 0, ve, he, W))
          : t.texImage2D(3553, 0, _e, ve, he, W);
      A(v, ge) && F(ee),
        (ye.__version = oe.version),
        v.onUpdate && v.onUpdate(v);
    }
    S.__version = v.version;
  }
  function be(S, v, k) {
    if (v.image.length !== 6) return;
    const ee = Re(S, v),
      ie = v.source;
    t.bindTexture(34067, S.__webglTexture, 33984 + k);
    const oe = n.get(ie);
    if (ie.version !== oe.__version || ee === !0) {
      t.activeTexture(33984 + k),
        r.pixelStorei(37440, v.flipY),
        r.pixelStorei(37441, v.premultiplyAlpha),
        r.pixelStorei(3317, v.unpackAlignment),
        r.pixelStorei(37443, 0);
      const ye = v.isCompressedTexture || v.image[0].isCompressedTexture,
        le = v.image[0] && v.image[0].isDataTexture,
        W = [];
      for (let z = 0; z < 6; z++)
        !ye && !le
          ? (W[z] = y(v.image[z], !1, !0, c))
          : (W[z] = le ? v.image[z].image : v.image[z]),
          (W[z] = At(v, W[z]));
      const ge = W[0],
        ve = E(ge) || a,
        he = s.convert(v.format, v.encoding),
        _e = s.convert(v.type),
        pe = _(v.internalFormat, he, _e, v.encoding),
        Pe = a && v.isVideoTexture !== !0,
        ke = oe.__version === void 0 || ee === !0;
      let Ke = T(v, ge, ve);
      H(34067, v, ve);
      let C;
      if (ye) {
        Pe && ke && t.texStorage2D(34067, Ke, pe, ge.width, ge.height);
        for (let z = 0; z < 6; z++) {
          C = W[z].mipmaps;
          for (let $ = 0; $ < C.length; $++) {
            const ce = C[$];
            v.format !== Pt
              ? he !== null
                ? Pe
                  ? t.compressedTexSubImage2D(
                      34069 + z,
                      $,
                      0,
                      0,
                      ce.width,
                      ce.height,
                      he,
                      ce.data
                    )
                  : t.compressedTexImage2D(
                      34069 + z,
                      $,
                      pe,
                      ce.width,
                      ce.height,
                      0,
                      ce.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : Pe
              ? t.texSubImage2D(
                  34069 + z,
                  $,
                  0,
                  0,
                  ce.width,
                  ce.height,
                  he,
                  _e,
                  ce.data
                )
              : t.texImage2D(
                  34069 + z,
                  $,
                  pe,
                  ce.width,
                  ce.height,
                  0,
                  he,
                  _e,
                  ce.data
                );
          }
        }
      } else {
        (C = v.mipmaps),
          Pe &&
            ke &&
            (C.length > 0 && Ke++,
            t.texStorage2D(34067, Ke, pe, W[0].width, W[0].height));
        for (let z = 0; z < 6; z++)
          if (le) {
            Pe
              ? t.texSubImage2D(
                  34069 + z,
                  0,
                  0,
                  0,
                  W[z].width,
                  W[z].height,
                  he,
                  _e,
                  W[z].data
                )
              : t.texImage2D(
                  34069 + z,
                  0,
                  pe,
                  W[z].width,
                  W[z].height,
                  0,
                  he,
                  _e,
                  W[z].data
                );
            for (let $ = 0; $ < C.length; $++) {
              const fe = C[$].image[z].image;
              Pe
                ? t.texSubImage2D(
                    34069 + z,
                    $ + 1,
                    0,
                    0,
                    fe.width,
                    fe.height,
                    he,
                    _e,
                    fe.data
                  )
                : t.texImage2D(
                    34069 + z,
                    $ + 1,
                    pe,
                    fe.width,
                    fe.height,
                    0,
                    he,
                    _e,
                    fe.data
                  );
            }
          } else {
            Pe
              ? t.texSubImage2D(34069 + z, 0, 0, 0, he, _e, W[z])
              : t.texImage2D(34069 + z, 0, pe, he, _e, W[z]);
            for (let $ = 0; $ < C.length; $++) {
              const ce = C[$];
              Pe
                ? t.texSubImage2D(34069 + z, $ + 1, 0, 0, he, _e, ce.image[z])
                : t.texImage2D(34069 + z, $ + 1, pe, he, _e, ce.image[z]);
            }
          }
      }
      A(v, ve) && F(34067),
        (oe.__version = ie.version),
        v.onUpdate && v.onUpdate(v);
    }
    S.__version = v.version;
  }
  function ue(S, v, k, ee, ie) {
    const oe = s.convert(k.format, k.encoding),
      ye = s.convert(k.type),
      le = _(k.internalFormat, oe, ye, k.encoding);
    n.get(v).__hasExternalTextures ||
      (ie === 32879 || ie === 35866
        ? t.texImage3D(ie, 0, le, v.width, v.height, v.depth, 0, oe, ye, null)
        : t.texImage2D(ie, 0, le, v.width, v.height, 0, oe, ye, null)),
      t.bindFramebuffer(36160, S),
      Ne(v)
        ? h.framebufferTexture2DMultisampleEXT(
            36160,
            ee,
            ie,
            n.get(k).__webglTexture,
            0,
            Xe(v)
          )
        : (ie === 3553 || (ie >= 34069 && ie <= 34074)) &&
          r.framebufferTexture2D(36160, ee, ie, n.get(k).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Oe(S, v, k) {
    if ((r.bindRenderbuffer(36161, S), v.depthBuffer && !v.stencilBuffer)) {
      let ee = 33189;
      if (k || Ne(v)) {
        const ie = v.depthTexture;
        ie &&
          ie.isDepthTexture &&
          (ie.type === bn ? (ee = 36012) : ie.type === xn && (ee = 33190));
        const oe = Xe(v);
        Ne(v)
          ? h.renderbufferStorageMultisampleEXT(
              36161,
              oe,
              ee,
              v.width,
              v.height
            )
          : r.renderbufferStorageMultisample(36161, oe, ee, v.width, v.height);
      } else r.renderbufferStorage(36161, ee, v.width, v.height);
      r.framebufferRenderbuffer(36160, 36096, 36161, S);
    } else if (v.depthBuffer && v.stencilBuffer) {
      const ee = Xe(v);
      k && Ne(v) === !1
        ? r.renderbufferStorageMultisample(36161, ee, 35056, v.width, v.height)
        : Ne(v)
        ? h.renderbufferStorageMultisampleEXT(
            36161,
            ee,
            35056,
            v.width,
            v.height
          )
        : r.renderbufferStorage(36161, 34041, v.width, v.height),
        r.framebufferRenderbuffer(36160, 33306, 36161, S);
    } else {
      const ee =
        v.isWebGLMultipleRenderTargets === !0 ? v.texture : [v.texture];
      for (let ie = 0; ie < ee.length; ie++) {
        const oe = ee[ie],
          ye = s.convert(oe.format, oe.encoding),
          le = s.convert(oe.type),
          W = _(oe.internalFormat, ye, le, oe.encoding),
          ge = Xe(v);
        k && Ne(v) === !1
          ? r.renderbufferStorageMultisample(36161, ge, W, v.width, v.height)
          : Ne(v)
          ? h.renderbufferStorageMultisampleEXT(36161, ge, W, v.width, v.height)
          : r.renderbufferStorage(36161, W, v.width, v.height);
      }
    }
    r.bindRenderbuffer(36161, null);
  }
  function we(S, v) {
    if (v && v.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, S),
      !(v.depthTexture && v.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(v.depthTexture).__webglTexture ||
      v.depthTexture.image.width !== v.width ||
      v.depthTexture.image.height !== v.height) &&
      ((v.depthTexture.image.width = v.width),
      (v.depthTexture.image.height = v.height),
      (v.depthTexture.needsUpdate = !0)),
      Q(v.depthTexture, 0);
    const ee = n.get(v.depthTexture).__webglTexture,
      ie = Xe(v);
    if (v.depthTexture.format === yn)
      Ne(v)
        ? h.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, ee, 0, ie)
        : r.framebufferTexture2D(36160, 36096, 3553, ee, 0);
    else if (v.depthTexture.format === $n)
      Ne(v)
        ? h.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, ee, 0, ie)
        : r.framebufferTexture2D(36160, 33306, 3553, ee, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function xe(S) {
    const v = n.get(S),
      k = S.isWebGLCubeRenderTarget === !0;
    if (S.depthTexture && !v.__autoAllocateDepthBuffer) {
      if (k)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      we(v.__webglFramebuffer, S);
    } else if (k) {
      v.__webglDepthbuffer = [];
      for (let ee = 0; ee < 6; ee++)
        t.bindFramebuffer(36160, v.__webglFramebuffer[ee]),
          (v.__webglDepthbuffer[ee] = r.createRenderbuffer()),
          Oe(v.__webglDepthbuffer[ee], S, !1);
    } else
      t.bindFramebuffer(36160, v.__webglFramebuffer),
        (v.__webglDepthbuffer = r.createRenderbuffer()),
        Oe(v.__webglDepthbuffer, S, !1);
    t.bindFramebuffer(36160, null);
  }
  function st(S, v, k) {
    const ee = n.get(S);
    v !== void 0 && ue(ee.__webglFramebuffer, S, S.texture, 36064, 3553),
      k !== void 0 && xe(S);
  }
  function at(S) {
    const v = S.texture,
      k = n.get(S),
      ee = n.get(v);
    S.addEventListener("dispose", se),
      S.isWebGLMultipleRenderTargets !== !0 &&
        (ee.__webglTexture === void 0 &&
          (ee.__webglTexture = r.createTexture()),
        (ee.__version = v.version),
        o.memory.textures++);
    const ie = S.isWebGLCubeRenderTarget === !0,
      oe = S.isWebGLMultipleRenderTargets === !0,
      ye = E(S) || a;
    if (ie) {
      k.__webglFramebuffer = [];
      for (let le = 0; le < 6; le++)
        k.__webglFramebuffer[le] = r.createFramebuffer();
    } else {
      if (((k.__webglFramebuffer = r.createFramebuffer()), oe))
        if (i.drawBuffers) {
          const le = S.texture;
          for (let W = 0, ge = le.length; W < ge; W++) {
            const ve = n.get(le[W]);
            ve.__webglTexture === void 0 &&
              ((ve.__webglTexture = r.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && S.samples > 0 && Ne(S) === !1) {
        const le = oe ? v : [v];
        (k.__webglMultisampledFramebuffer = r.createFramebuffer()),
          (k.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, k.__webglMultisampledFramebuffer);
        for (let W = 0; W < le.length; W++) {
          const ge = le[W];
          (k.__webglColorRenderbuffer[W] = r.createRenderbuffer()),
            r.bindRenderbuffer(36161, k.__webglColorRenderbuffer[W]);
          const ve = s.convert(ge.format, ge.encoding),
            he = s.convert(ge.type),
            _e = _(
              ge.internalFormat,
              ve,
              he,
              ge.encoding,
              S.isXRRenderTarget === !0
            ),
            pe = Xe(S);
          r.renderbufferStorageMultisample(36161, pe, _e, S.width, S.height),
            r.framebufferRenderbuffer(
              36160,
              36064 + W,
              36161,
              k.__webglColorRenderbuffer[W]
            );
        }
        r.bindRenderbuffer(36161, null),
          S.depthBuffer &&
            ((k.__webglDepthRenderbuffer = r.createRenderbuffer()),
            Oe(k.__webglDepthRenderbuffer, S, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if (ie) {
      t.bindTexture(34067, ee.__webglTexture), H(34067, v, ye);
      for (let le = 0; le < 6; le++)
        ue(k.__webglFramebuffer[le], S, v, 36064, 34069 + le);
      A(v, ye) && F(34067), t.unbindTexture();
    } else if (oe) {
      const le = S.texture;
      for (let W = 0, ge = le.length; W < ge; W++) {
        const ve = le[W],
          he = n.get(ve);
        t.bindTexture(3553, he.__webglTexture),
          H(3553, ve, ye),
          ue(k.__webglFramebuffer, S, ve, 36064 + W, 3553),
          A(ve, ye) && F(3553);
      }
      t.unbindTexture();
    } else {
      let le = 3553;
      (S.isWebGL3DRenderTarget || S.isWebGLArrayRenderTarget) &&
        (a
          ? (le = S.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(le, ee.__webglTexture),
        H(le, v, ye),
        ue(k.__webglFramebuffer, S, v, 36064, le),
        A(v, ye) && F(le),
        t.unbindTexture();
    }
    S.depthBuffer && xe(S);
  }
  function ot(S) {
    const v = E(S) || a,
      k = S.isWebGLMultipleRenderTargets === !0 ? S.texture : [S.texture];
    for (let ee = 0, ie = k.length; ee < ie; ee++) {
      const oe = k[ee];
      if (A(oe, v)) {
        const ye = S.isWebGLCubeRenderTarget ? 34067 : 3553,
          le = n.get(oe).__webglTexture;
        t.bindTexture(ye, le), F(ye), t.unbindTexture();
      }
    }
  }
  function Mt(S) {
    if (a && S.samples > 0 && Ne(S) === !1) {
      const v = S.isWebGLMultipleRenderTargets ? S.texture : [S.texture],
        k = S.width,
        ee = S.height;
      let ie = 16384;
      const oe = [],
        ye = S.stencilBuffer ? 33306 : 36096,
        le = n.get(S),
        W = S.isWebGLMultipleRenderTargets === !0;
      if (W)
        for (let ge = 0; ge < v.length; ge++)
          t.bindFramebuffer(36160, le.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(36160, 36064 + ge, 36161, null),
            t.bindFramebuffer(36160, le.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + ge, 3553, null, 0);
      t.bindFramebuffer(36008, le.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, le.__webglFramebuffer);
      for (let ge = 0; ge < v.length; ge++) {
        oe.push(36064 + ge), S.depthBuffer && oe.push(ye);
        const ve =
          le.__ignoreDepthValues !== void 0 ? le.__ignoreDepthValues : !1;
        if (
          (ve === !1 &&
            (S.depthBuffer && (ie |= 256), S.stencilBuffer && (ie |= 1024)),
          W &&
            r.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              le.__webglColorRenderbuffer[ge]
            ),
          ve === !0 &&
            (r.invalidateFramebuffer(36008, [ye]),
            r.invalidateFramebuffer(36009, [ye])),
          W)
        ) {
          const he = n.get(v[ge]).__webglTexture;
          r.framebufferTexture2D(36009, 36064, 3553, he, 0);
        }
        r.blitFramebuffer(0, 0, k, ee, 0, 0, k, ee, ie, 9728),
          m && r.invalidateFramebuffer(36008, oe);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), W))
        for (let ge = 0; ge < v.length; ge++) {
          t.bindFramebuffer(36160, le.__webglMultisampledFramebuffer),
            r.framebufferRenderbuffer(
              36160,
              36064 + ge,
              36161,
              le.__webglColorRenderbuffer[ge]
            );
          const ve = n.get(v[ge]).__webglTexture;
          t.bindFramebuffer(36160, le.__webglFramebuffer),
            r.framebufferTexture2D(36009, 36064 + ge, 3553, ve, 0);
        }
      t.bindFramebuffer(36009, le.__webglMultisampledFramebuffer);
    }
  }
  function Xe(S) {
    return Math.min(d, S.samples);
  }
  function Ne(S) {
    const v = n.get(S);
    return (
      a &&
      S.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      v.__useRenderToTexture !== !1
    );
  }
  function Vt(S) {
    const v = o.render.frame;
    g.get(S) !== v && (g.set(S, v), S.update());
  }
  function At(S, v) {
    const k = S.encoding,
      ee = S.format,
      ie = S.type;
    return (
      S.isCompressedTexture === !0 ||
        S.isVideoTexture === !0 ||
        S.format === Kr ||
        (k !== En &&
          (k === Be
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && ee === Pt
                ? ((S.format = Kr),
                  (S.minFilter = dt),
                  (S.generateMipmaps = !1))
                : (v = eo.sRGBToLinear(v))
              : (ee !== Pt || ie !== wn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                k
              ))),
      v
    );
  }
  (this.allocateTextureUnit = X),
    (this.resetTextureUnits = Z),
    (this.setTexture2D = Q),
    (this.setTexture2DArray = U),
    (this.setTexture3D = V),
    (this.setTextureCube = K),
    (this.rebindTextures = st),
    (this.setupRenderTarget = at),
    (this.updateRenderTargetMipmap = ot),
    (this.updateMultisampleRenderTarget = Mt),
    (this.setupDepthRenderbuffer = xe),
    (this.setupFrameBufferTexture = ue),
    (this.useMultisampledRTT = Ne);
}
function xf(r, e, t) {
  const n = t.isWebGL2;
  function i(s, o = null) {
    let a;
    if (s === wn) return 5121;
    if (s === ul) return 32819;
    if (s === dl) return 32820;
    if (s === ol) return 5120;
    if (s === ll) return 5122;
    if (s === Za) return 5123;
    if (s === cl) return 5124;
    if (s === xn) return 5125;
    if (s === bn) return 5126;
    if (s === vi)
      return n
        ? 5131
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (s === hl) return 6406;
    if (s === Pt) return 6408;
    if (s === pl) return 6409;
    if (s === ml) return 6410;
    if (s === yn) return 6402;
    if (s === $n) return 34041;
    if (s === fl)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (s === Kr)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === gl) return 6403;
    if (s === _l) return 36244;
    if (s === vl) return 33319;
    if (s === xl) return 33320;
    if (s === bl) return 36249;
    if (s === fr || s === pr || s === mr || s === gr)
      if (o === Be)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (s === fr) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === pr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === mr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === gr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (s === fr) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === pr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === mr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === gr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === Cs || s === As || s === Ls || s === Ds)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (s === Cs) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === As) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Ls) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Ds) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === yl)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Rs || s === Ps)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (s === Rs)
          return o === Be ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Ps)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Is ||
      s === Fs ||
      s === Os ||
      s === Ns ||
      s === Us ||
      s === zs ||
      s === Bs ||
      s === ks ||
      s === Vs ||
      s === Gs ||
      s === Hs ||
      s === Ws ||
      s === Xs ||
      s === qs
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (s === Is)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Fs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Os)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Ns)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Us)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === zs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Bs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === ks)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Vs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === Gs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Hs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Ws)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Xs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === qs)
          return o === Be
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === Ys)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (s === Ys)
          return o === Be
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return s === qn
      ? n
        ? 34042
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : r[s] !== void 0
      ? r[s]
      : null;
  }
  return { convert: i };
}
class bf extends Et {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class $i extends yt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const yf = { type: "move" };
class Hr {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new $i()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new $i()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new I()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new I())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new $i()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new I()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new I())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      s = null,
      o = null;
    const a = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const p of e.hand.values()) {
          const f = t.getJointPose(p, n),
            x = this._getHandJoint(c, p);
          f !== null &&
            (x.matrix.fromArray(f.transform.matrix),
            x.matrix.decompose(x.position, x.rotation, x.scale),
            (x.jointRadius = f.radius)),
            (x.visible = f !== null);
        }
        const u = c.joints["index-finger-tip"],
          d = c.joints["thumb-tip"],
          h = u.position.distanceTo(d.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && h > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            h <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = t.getPose(e.gripSpace, n)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      a !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && s !== null && (i = s),
        i !== null &&
          (a.matrix.fromArray(i.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          i.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(i.linearVelocity))
            : (a.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(i.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(yf)));
    }
    return (
      a !== null && (a.visible = i !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new $i();
      (n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class Mf extends ft {
  constructor(e, t, n, i, s, o, a, l, c, u) {
    if (((u = u !== void 0 ? u : yn), u !== yn && u !== $n))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && u === yn && (n = xn),
      n === void 0 && u === $n && (n = qn),
      super(null, i, s, o, a, l, u, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : rt),
      (this.minFilter = l !== void 0 ? l : rt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class Sf extends Jn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = null,
      c = null,
      u = null,
      d = null,
      h = null,
      m = null;
    const g = t.getContextAttributes();
    let p = null,
      f = null;
    const x = [],
      w = [],
      y = new Set(),
      E = new Map(),
      M = new Et();
    M.layers.enable(1), (M.viewport = new tt());
    const A = new Et();
    A.layers.enable(2), (A.viewport = new tt());
    const F = [M, A],
      _ = new bf();
    _.layers.enable(1), _.layers.enable(2);
    let T = null,
      O = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (U) {
        let V = x[U];
        return (
          V === void 0 && ((V = new Hr()), (x[U] = V)), V.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (U) {
        let V = x[U];
        return V === void 0 && ((V = new Hr()), (x[U] = V)), V.getGripSpace();
      }),
      (this.getHand = function (U) {
        let V = x[U];
        return V === void 0 && ((V = new Hr()), (x[U] = V)), V.getHandSpace();
      });
    function j(U) {
      const V = w.indexOf(U.inputSource);
      if (V === -1) return;
      const K = x[V];
      K !== void 0 && K.dispatchEvent({ type: U.type, data: U.inputSource });
    }
    function se() {
      i.removeEventListener("select", j),
        i.removeEventListener("selectstart", j),
        i.removeEventListener("selectend", j),
        i.removeEventListener("squeeze", j),
        i.removeEventListener("squeezestart", j),
        i.removeEventListener("squeezeend", j),
        i.removeEventListener("end", se),
        i.removeEventListener("inputsourceschange", N);
      for (let U = 0; U < x.length; U++) {
        const V = w[U];
        V !== null && ((w[U] = null), x[U].disconnect(V));
      }
      (T = null),
        (O = null),
        e.setRenderTarget(p),
        (h = null),
        (d = null),
        (u = null),
        (i = null),
        (f = null),
        Q.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (U) {
      (s = U),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (U) {
        (a = U),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return l || o;
      }),
      (this.setReferenceSpace = function (U) {
        l = U;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : h;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (U) {
        if (((i = U), i !== null)) {
          if (
            ((p = e.getRenderTarget()),
            i.addEventListener("select", j),
            i.addEventListener("selectstart", j),
            i.addEventListener("selectend", j),
            i.addEventListener("squeeze", j),
            i.addEventListener("squeezestart", j),
            i.addEventListener("squeezeend", j),
            i.addEventListener("end", se),
            i.addEventListener("inputsourceschange", N),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const V = {
              antialias: i.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: s,
            };
            (h = new XRWebGLLayer(i, t, V)),
              i.updateRenderState({ baseLayer: h }),
              (f = new It(h.framebufferWidth, h.framebufferHeight, {
                format: Pt,
                type: wn,
                encoding: e.outputEncoding,
                stencilBuffer: g.stencil,
              }));
          } else {
            let V = null,
              K = null,
              ne = null;
            g.depth &&
              ((ne = g.stencil ? 35056 : 33190),
              (V = g.stencil ? $n : yn),
              (K = g.stencil ? qn : xn));
            const ae = { colorFormat: 32856, depthFormat: ne, scaleFactor: s };
            (u = new XRWebGLBinding(i, t)),
              (d = u.createProjectionLayer(ae)),
              i.updateRenderState({ layers: [d] }),
              (f = new It(d.textureWidth, d.textureHeight, {
                format: Pt,
                type: wn,
                depthTexture: new Mf(
                  d.textureWidth,
                  d.textureHeight,
                  K,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  V
                ),
                stencilBuffer: g.stencil,
                encoding: e.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const H = e.properties.get(f);
            H.__ignoreDepthValues = d.ignoreDepthValues;
          }
          (f.isXRRenderTarget = !0),
            this.setFoveation(1),
            (l = null),
            (o = await i.requestReferenceSpace(a)),
            Q.setContext(i),
            Q.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function N(U) {
      for (let V = 0; V < U.removed.length; V++) {
        const K = U.removed[V],
          ne = w.indexOf(K);
        ne >= 0 && ((w[ne] = null), x[ne].disconnect(K));
      }
      for (let V = 0; V < U.added.length; V++) {
        const K = U.added[V];
        let ne = w.indexOf(K);
        if (ne === -1) {
          for (let H = 0; H < x.length; H++)
            if (H >= w.length) {
              w.push(K), (ne = H);
              break;
            } else if (w[H] === null) {
              (w[H] = K), (ne = H);
              break;
            }
          if (ne === -1) break;
        }
        const ae = x[ne];
        ae && ae.connect(K);
      }
    }
    const D = new I(),
      Y = new I();
    function J(U, V, K) {
      D.setFromMatrixPosition(V.matrixWorld),
        Y.setFromMatrixPosition(K.matrixWorld);
      const ne = D.distanceTo(Y),
        ae = V.projectionMatrix.elements,
        H = K.projectionMatrix.elements,
        Re = ae[14] / (ae[10] - 1),
        de = ae[14] / (ae[10] + 1),
        be = (ae[9] + 1) / ae[5],
        ue = (ae[9] - 1) / ae[5],
        Oe = (ae[8] - 1) / ae[0],
        we = (H[8] + 1) / H[0],
        xe = Re * Oe,
        st = Re * we,
        at = ne / (-Oe + we),
        ot = at * -Oe;
      V.matrixWorld.decompose(U.position, U.quaternion, U.scale),
        U.translateX(ot),
        U.translateZ(at),
        U.matrixWorld.compose(U.position, U.quaternion, U.scale),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
      const Mt = Re + at,
        Xe = de + at,
        Ne = xe - ot,
        Vt = st + (ne - ot),
        At = ((be * de) / Xe) * Mt,
        S = ((ue * de) / Xe) * Mt;
      U.projectionMatrix.makePerspective(Ne, Vt, At, S, Mt, Xe);
    }
    function Z(U, V) {
      V === null
        ? U.matrixWorld.copy(U.matrix)
        : U.matrixWorld.multiplyMatrices(V.matrixWorld, U.matrix),
        U.matrixWorldInverse.copy(U.matrixWorld).invert();
    }
    (this.updateCamera = function (U) {
      if (i === null) return;
      (_.near = A.near = M.near = U.near),
        (_.far = A.far = M.far = U.far),
        (T !== _.near || O !== _.far) &&
          (i.updateRenderState({ depthNear: _.near, depthFar: _.far }),
          (T = _.near),
          (O = _.far));
      const V = U.parent,
        K = _.cameras;
      Z(_, V);
      for (let ae = 0; ae < K.length; ae++) Z(K[ae], V);
      _.matrixWorld.decompose(_.position, _.quaternion, _.scale),
        U.matrix.copy(_.matrix),
        U.matrix.decompose(U.position, U.quaternion, U.scale);
      const ne = U.children;
      for (let ae = 0, H = ne.length; ae < H; ae++)
        ne[ae].updateMatrixWorld(!0);
      K.length === 2 ? J(_, M, A) : _.projectionMatrix.copy(M.projectionMatrix);
    }),
      (this.getCamera = function () {
        return _;
      }),
      (this.getFoveation = function () {
        if (d !== null) return d.fixedFoveation;
        if (h !== null) return h.fixedFoveation;
      }),
      (this.setFoveation = function (U) {
        d !== null && (d.fixedFoveation = U),
          h !== null && h.fixedFoveation !== void 0 && (h.fixedFoveation = U);
      }),
      (this.getPlanes = function () {
        return y;
      });
    let X = null;
    function te(U, V) {
      if (((c = V.getViewerPose(l || o)), (m = V), c !== null)) {
        const K = c.views;
        h !== null &&
          (e.setRenderTargetFramebuffer(f, h.framebuffer),
          e.setRenderTarget(f));
        let ne = !1;
        K.length !== _.cameras.length && ((_.cameras.length = 0), (ne = !0));
        for (let ae = 0; ae < K.length; ae++) {
          const H = K[ae];
          let Re = null;
          if (h !== null) Re = h.getViewport(H);
          else {
            const be = u.getViewSubImage(d, H);
            (Re = be.viewport),
              ae === 0 &&
                (e.setRenderTargetTextures(
                  f,
                  be.colorTexture,
                  d.ignoreDepthValues ? void 0 : be.depthStencilTexture
                ),
                e.setRenderTarget(f));
          }
          let de = F[ae];
          de === void 0 &&
            ((de = new Et()),
            de.layers.enable(ae),
            (de.viewport = new tt()),
            (F[ae] = de)),
            de.matrix.fromArray(H.transform.matrix),
            de.projectionMatrix.fromArray(H.projectionMatrix),
            de.viewport.set(Re.x, Re.y, Re.width, Re.height),
            ae === 0 && _.matrix.copy(de.matrix),
            ne === !0 && _.cameras.push(de);
        }
      }
      for (let K = 0; K < x.length; K++) {
        const ne = w[K],
          ae = x[K];
        ne !== null && ae !== void 0 && ae.update(ne, V, l || o);
      }
      if ((X && X(U, V), V.detectedPlanes)) {
        n.dispatchEvent({ type: "planesdetected", data: V.detectedPlanes });
        let K = null;
        for (const ne of y)
          V.detectedPlanes.has(ne) || (K === null && (K = []), K.push(ne));
        if (K !== null)
          for (const ne of K)
            y.delete(ne),
              E.delete(ne),
              n.dispatchEvent({ type: "planeremoved", data: ne });
        for (const ne of V.detectedPlanes)
          if (!y.has(ne))
            y.add(ne),
              E.set(ne, V.lastChangedTime),
              n.dispatchEvent({ type: "planeadded", data: ne });
          else {
            const ae = E.get(ne);
            ne.lastChangedTime > ae &&
              (E.set(ne, ne.lastChangedTime),
              n.dispatchEvent({ type: "planechanged", data: ne }));
          }
      }
      m = null;
    }
    const Q = new co();
    Q.setAnimationLoop(te),
      (this.setAnimationLoop = function (U) {
        X = U;
      }),
      (this.dispose = function () {});
  }
}
function wf(r, e) {
  function t(p, f) {
    f.color.getRGB(p.fogColor.value, ao(r)),
      f.isFog
        ? ((p.fogNear.value = f.near), (p.fogFar.value = f.far))
        : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function n(p, f, x, w, y) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial
      ? i(p, f)
      : f.isMeshToonMaterial
      ? (i(p, f), u(p, f))
      : f.isMeshPhongMaterial
      ? (i(p, f), c(p, f))
      : f.isMeshStandardMaterial
      ? (i(p, f), d(p, f), f.isMeshPhysicalMaterial && h(p, f, y))
      : f.isMeshMatcapMaterial
      ? (i(p, f), m(p, f))
      : f.isMeshDepthMaterial
      ? i(p, f)
      : f.isMeshDistanceMaterial
      ? (i(p, f), g(p, f))
      : f.isMeshNormalMaterial
      ? i(p, f)
      : f.isLineBasicMaterial
      ? (s(p, f), f.isLineDashedMaterial && o(p, f))
      : f.isPointsMaterial
      ? a(p, f, x, w)
      : f.isSpriteMaterial
      ? l(p, f)
      : f.isShadowMaterial
      ? (p.color.value.copy(f.color), (p.opacity.value = f.opacity))
      : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function i(p, f) {
    (p.opacity.value = f.opacity),
      f.color && p.diffuse.value.copy(f.color),
      f.emissive &&
        p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.bumpMap &&
        ((p.bumpMap.value = f.bumpMap),
        (p.bumpScale.value = f.bumpScale),
        f.side === Ct && (p.bumpScale.value *= -1)),
      f.displacementMap &&
        ((p.displacementMap.value = f.displacementMap),
        (p.displacementScale.value = f.displacementScale),
        (p.displacementBias.value = f.displacementBias)),
      f.emissiveMap && (p.emissiveMap.value = f.emissiveMap),
      f.normalMap &&
        ((p.normalMap.value = f.normalMap),
        p.normalScale.value.copy(f.normalScale),
        f.side === Ct && p.normalScale.value.negate()),
      f.specularMap && (p.specularMap.value = f.specularMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const x = e.get(f).envMap;
    if (
      (x &&
        ((p.envMap.value = x),
        (p.flipEnvMap.value =
          x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = f.reflectivity),
        (p.ior.value = f.ior),
        (p.refractionRatio.value = f.refractionRatio)),
      f.lightMap)
    ) {
      p.lightMap.value = f.lightMap;
      const E = r.physicallyCorrectLights !== !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * E;
    }
    f.aoMap &&
      ((p.aoMap.value = f.aoMap), (p.aoMapIntensity.value = f.aoMapIntensity));
    let w;
    f.map
      ? (w = f.map)
      : f.specularMap
      ? (w = f.specularMap)
      : f.displacementMap
      ? (w = f.displacementMap)
      : f.normalMap
      ? (w = f.normalMap)
      : f.bumpMap
      ? (w = f.bumpMap)
      : f.roughnessMap
      ? (w = f.roughnessMap)
      : f.metalnessMap
      ? (w = f.metalnessMap)
      : f.alphaMap
      ? (w = f.alphaMap)
      : f.emissiveMap
      ? (w = f.emissiveMap)
      : f.clearcoatMap
      ? (w = f.clearcoatMap)
      : f.clearcoatNormalMap
      ? (w = f.clearcoatNormalMap)
      : f.clearcoatRoughnessMap
      ? (w = f.clearcoatRoughnessMap)
      : f.iridescenceMap
      ? (w = f.iridescenceMap)
      : f.iridescenceThicknessMap
      ? (w = f.iridescenceThicknessMap)
      : f.specularIntensityMap
      ? (w = f.specularIntensityMap)
      : f.specularColorMap
      ? (w = f.specularColorMap)
      : f.transmissionMap
      ? (w = f.transmissionMap)
      : f.thicknessMap
      ? (w = f.thicknessMap)
      : f.sheenColorMap
      ? (w = f.sheenColorMap)
      : f.sheenRoughnessMap && (w = f.sheenRoughnessMap),
      w !== void 0 &&
        (w.isWebGLRenderTarget && (w = w.texture),
        w.matrixAutoUpdate === !0 && w.updateMatrix(),
        p.uvTransform.value.copy(w.matrix));
    let y;
    f.aoMap ? (y = f.aoMap) : f.lightMap && (y = f.lightMap),
      y !== void 0 &&
        (y.isWebGLRenderTarget && (y = y.texture),
        y.matrixAutoUpdate === !0 && y.updateMatrix(),
        p.uv2Transform.value.copy(y.matrix));
  }
  function s(p, f) {
    p.diffuse.value.copy(f.color), (p.opacity.value = f.opacity);
  }
  function o(p, f) {
    (p.dashSize.value = f.dashSize),
      (p.totalSize.value = f.dashSize + f.gapSize),
      (p.scale.value = f.scale);
  }
  function a(p, f, x, w) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.size.value = f.size * x),
      (p.scale.value = w * 0.5),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let y;
    f.map ? (y = f.map) : f.alphaMap && (y = f.alphaMap),
      y !== void 0 &&
        (y.matrixAutoUpdate === !0 && y.updateMatrix(),
        p.uvTransform.value.copy(y.matrix));
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color),
      (p.opacity.value = f.opacity),
      (p.rotation.value = f.rotation),
      f.map && (p.map.value = f.map),
      f.alphaMap && (p.alphaMap.value = f.alphaMap),
      f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    let x;
    f.map ? (x = f.map) : f.alphaMap && (x = f.alphaMap),
      x !== void 0 &&
        (x.matrixAutoUpdate === !0 && x.updateMatrix(),
        p.uvTransform.value.copy(x.matrix));
  }
  function c(p, f) {
    p.specular.value.copy(f.specular),
      (p.shininess.value = Math.max(f.shininess, 1e-4));
  }
  function u(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    (p.roughness.value = f.roughness),
      (p.metalness.value = f.metalness),
      f.roughnessMap && (p.roughnessMap.value = f.roughnessMap),
      f.metalnessMap && (p.metalnessMap.value = f.metalnessMap),
      e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function h(p, f, x) {
    (p.ior.value = f.ior),
      f.sheen > 0 &&
        (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        (p.sheenRoughness.value = f.sheenRoughness),
        f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap),
        f.sheenRoughnessMap &&
          (p.sheenRoughnessMap.value = f.sheenRoughnessMap)),
      f.clearcoat > 0 &&
        ((p.clearcoat.value = f.clearcoat),
        (p.clearcoatRoughness.value = f.clearcoatRoughness),
        f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap),
        f.clearcoatRoughnessMap &&
          (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap),
        f.clearcoatNormalMap &&
          (p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
          (p.clearcoatNormalMap.value = f.clearcoatNormalMap),
          f.side === Ct && p.clearcoatNormalScale.value.negate())),
      f.iridescence > 0 &&
        ((p.iridescence.value = f.iridescence),
        (p.iridescenceIOR.value = f.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1]),
        f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap),
        f.iridescenceThicknessMap &&
          (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap)),
      f.transmission > 0 &&
        ((p.transmission.value = f.transmission),
        (p.transmissionSamplerMap.value = x.texture),
        p.transmissionSamplerSize.value.set(x.width, x.height),
        f.transmissionMap && (p.transmissionMap.value = f.transmissionMap),
        (p.thickness.value = f.thickness),
        f.thicknessMap && (p.thicknessMap.value = f.thicknessMap),
        (p.attenuationDistance.value = f.attenuationDistance),
        p.attenuationColor.value.copy(f.attenuationColor)),
      (p.specularIntensity.value = f.specularIntensity),
      p.specularColor.value.copy(f.specularColor),
      f.specularIntensityMap &&
        (p.specularIntensityMap.value = f.specularIntensityMap),
      f.specularColorMap && (p.specularColorMap.value = f.specularColorMap);
  }
  function m(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function g(p, f) {
    p.referencePosition.value.copy(f.referencePosition),
      (p.nearDistance.value = f.nearDistance),
      (p.farDistance.value = f.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function Ef(r, e, t, n) {
  let i = {},
    s = {},
    o = [];
  const a = t.isWebGL2 ? r.getParameter(35375) : 0;
  function l(w, y) {
    const E = y.program;
    n.uniformBlockBinding(w, E);
  }
  function c(w, y) {
    let E = i[w.id];
    E === void 0 &&
      (g(w), (E = u(w)), (i[w.id] = E), w.addEventListener("dispose", f));
    const M = y.program;
    n.updateUBOMapping(w, M);
    const A = e.render.frame;
    s[w.id] !== A && (h(w), (s[w.id] = A));
  }
  function u(w) {
    const y = d();
    w.__bindingPointIndex = y;
    const E = r.createBuffer(),
      M = w.__size,
      A = w.usage;
    return (
      r.bindBuffer(35345, E),
      r.bufferData(35345, M, A),
      r.bindBuffer(35345, null),
      r.bindBufferBase(35345, y, E),
      E
    );
  }
  function d() {
    for (let w = 0; w < a; w++) if (o.indexOf(w) === -1) return o.push(w), w;
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."
      ),
      0
    );
  }
  function h(w) {
    const y = i[w.id],
      E = w.uniforms,
      M = w.__cache;
    r.bindBuffer(35345, y);
    for (let A = 0, F = E.length; A < F; A++) {
      const _ = E[A];
      if (m(_, A, M) === !0) {
        const T = _.__offset,
          O = Array.isArray(_.value) ? _.value : [_.value];
        let j = 0;
        for (let se = 0; se < O.length; se++) {
          const N = O[se],
            D = p(N);
          typeof N == "number"
            ? ((_.__data[0] = N), r.bufferSubData(35345, T + j, _.__data))
            : N.isMatrix3
            ? ((_.__data[0] = N.elements[0]),
              (_.__data[1] = N.elements[1]),
              (_.__data[2] = N.elements[2]),
              (_.__data[3] = N.elements[0]),
              (_.__data[4] = N.elements[3]),
              (_.__data[5] = N.elements[4]),
              (_.__data[6] = N.elements[5]),
              (_.__data[7] = N.elements[0]),
              (_.__data[8] = N.elements[6]),
              (_.__data[9] = N.elements[7]),
              (_.__data[10] = N.elements[8]),
              (_.__data[11] = N.elements[0]))
            : (N.toArray(_.__data, j),
              (j += D.storage / Float32Array.BYTES_PER_ELEMENT));
        }
        r.bufferSubData(35345, T, _.__data);
      }
    }
    r.bindBuffer(35345, null);
  }
  function m(w, y, E) {
    const M = w.value;
    if (E[y] === void 0) {
      if (typeof M == "number") E[y] = M;
      else {
        const A = Array.isArray(M) ? M : [M],
          F = [];
        for (let _ = 0; _ < A.length; _++) F.push(A[_].clone());
        E[y] = F;
      }
      return !0;
    } else if (typeof M == "number") {
      if (E[y] !== M) return (E[y] = M), !0;
    } else {
      const A = Array.isArray(E[y]) ? E[y] : [E[y]],
        F = Array.isArray(M) ? M : [M];
      for (let _ = 0; _ < A.length; _++) {
        const T = A[_];
        if (T.equals(F[_]) === !1) return T.copy(F[_]), !0;
      }
    }
    return !1;
  }
  function g(w) {
    const y = w.uniforms;
    let E = 0;
    const M = 16;
    let A = 0;
    for (let F = 0, _ = y.length; F < _; F++) {
      const T = y[F],
        O = { boundary: 0, storage: 0 },
        j = Array.isArray(T.value) ? T.value : [T.value];
      for (let se = 0, N = j.length; se < N; se++) {
        const D = j[se],
          Y = p(D);
        (O.boundary += Y.boundary), (O.storage += Y.storage);
      }
      if (
        ((T.__data = new Float32Array(
          O.storage / Float32Array.BYTES_PER_ELEMENT
        )),
        (T.__offset = E),
        F > 0)
      ) {
        A = E % M;
        const se = M - A;
        A !== 0 && se - O.boundary < 0 && ((E += M - A), (T.__offset = E));
      }
      E += O.storage;
    }
    return (
      (A = E % M), A > 0 && (E += M - A), (w.__size = E), (w.__cache = {}), this
    );
  }
  function p(w) {
    const y = { boundary: 0, storage: 0 };
    return (
      typeof w == "number"
        ? ((y.boundary = 4), (y.storage = 4))
        : w.isVector2
        ? ((y.boundary = 8), (y.storage = 8))
        : w.isVector3 || w.isColor
        ? ((y.boundary = 16), (y.storage = 12))
        : w.isVector4
        ? ((y.boundary = 16), (y.storage = 16))
        : w.isMatrix3
        ? ((y.boundary = 48), (y.storage = 48))
        : w.isMatrix4
        ? ((y.boundary = 64), (y.storage = 64))
        : w.isTexture
        ? console.warn(
            "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."
          )
        : console.warn(
            "THREE.WebGLRenderer: Unsupported uniform value type.",
            w
          ),
      y
    );
  }
  function f(w) {
    const y = w.target;
    y.removeEventListener("dispose", f);
    const E = o.indexOf(y.__bindingPointIndex);
    o.splice(E, 1), r.deleteBuffer(i[y.id]), delete i[y.id], delete s[y.id];
  }
  function x() {
    for (const w in i) r.deleteBuffer(i[w]);
    (o = []), (i = {}), (s = {});
  }
  return { bind: l, update: c, dispose: x };
}
function Tf() {
  const r = bi("canvas");
  return (r.style.display = "block"), r;
}
function go(r = {}) {
  this.isWebGLRenderer = !0;
  const e = r.canvas !== void 0 ? r.canvas : Tf(),
    t = r.context !== void 0 ? r.context : null,
    n = r.depth !== void 0 ? r.depth : !0,
    i = r.stencil !== void 0 ? r.stencil : !0,
    s = r.antialias !== void 0 ? r.antialias : !1,
    o = r.premultipliedAlpha !== void 0 ? r.premultipliedAlpha : !0,
    a = r.preserveDrawingBuffer !== void 0 ? r.preserveDrawingBuffer : !1,
    l = r.powerPreference !== void 0 ? r.powerPreference : "default",
    c =
      r.failIfMajorPerformanceCaveat !== void 0
        ? r.failIfMajorPerformanceCaveat
        : !1;
  let u;
  t !== null
    ? (u = t.getContextAttributes().alpha)
    : (u = r.alpha !== void 0 ? r.alpha : !1);
  let d = null,
    h = null;
  const m = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = En),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = Zt),
    (this.toneMappingExposure = 1);
  const p = this;
  let f = !1,
    x = 0,
    w = 0,
    y = null,
    E = -1,
    M = null;
  const A = new tt(),
    F = new tt();
  let _ = null,
    T = e.width,
    O = e.height,
    j = 1,
    se = null,
    N = null;
  const D = new tt(0, 0, T, O),
    Y = new tt(0, 0, T, O);
  let J = !1;
  const Z = new lo();
  let X = !1,
    te = !1,
    Q = null;
  const U = new Ye(),
    V = new Ce(),
    K = new I(),
    ne = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function ae() {
    return y === null ? j : 1;
  }
  let H = t;
  function Re(b, R) {
    for (let B = 0; B < b.length; B++) {
      const L = b[B],
        G = e.getContext(L, R);
      if (G !== null) return G;
    }
    return null;
  }
  try {
    const b = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: s,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: l,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${is}`),
      e.addEventListener("webglcontextlost", _e, !1),
      e.addEventListener("webglcontextrestored", pe, !1),
      e.addEventListener("webglcontextcreationerror", Pe, !1),
      H === null)
    ) {
      const R = ["webgl2", "webgl", "experimental-webgl"];
      if ((p.isWebGL1Renderer === !0 && R.shift(), (H = Re(R, b)), H === null))
        throw Re(R)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    H.getShaderPrecisionFormat === void 0 &&
      (H.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (b) {
    throw (console.error("THREE.WebGLRenderer: " + b.message), b);
  }
  let de,
    be,
    ue,
    Oe,
    we,
    xe,
    st,
    at,
    ot,
    Mt,
    Xe,
    Ne,
    Vt,
    At,
    S,
    v,
    k,
    ee,
    ie,
    oe,
    ye,
    le,
    W,
    ge;
  function ve() {
    (de = new Nd(H)),
      (be = new Dd(H, de, r)),
      de.init(be),
      (le = new xf(H, de, be)),
      (ue = new _f(H, de, be)),
      (Oe = new Bd()),
      (we = new nf()),
      (xe = new vf(H, de, ue, we, be, le, Oe)),
      (st = new Pd(p)),
      (at = new Od(p)),
      (ot = new jl(H, be)),
      (W = new Ad(H, de, ot, be)),
      (Mt = new Ud(H, ot, Oe, W)),
      (Xe = new Hd(H, Mt, ot, Oe)),
      (ie = new Gd(H, be, xe)),
      (v = new Rd(we)),
      (Ne = new tf(p, st, at, de, be, W, v)),
      (Vt = new wf(p, we)),
      (At = new sf()),
      (S = new df(de, be)),
      (ee = new Cd(p, st, at, ue, Xe, u, o)),
      (k = new gf(p, Xe, be)),
      (ge = new Ef(H, Oe, be, ue)),
      (oe = new Ld(H, de, Oe, be)),
      (ye = new zd(H, de, Oe, be)),
      (Oe.programs = Ne.programs),
      (p.capabilities = be),
      (p.extensions = de),
      (p.properties = we),
      (p.renderLists = At),
      (p.shadowMap = k),
      (p.state = ue),
      (p.info = Oe);
  }
  ve();
  const he = new Sf(p, H);
  (this.xr = he),
    (this.getContext = function () {
      return H;
    }),
    (this.getContextAttributes = function () {
      return H.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const b = de.get("WEBGL_lose_context");
      b && b.loseContext();
    }),
    (this.forceContextRestore = function () {
      const b = de.get("WEBGL_lose_context");
      b && b.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return j;
    }),
    (this.setPixelRatio = function (b) {
      b !== void 0 && ((j = b), this.setSize(T, O, !1));
    }),
    (this.getSize = function (b) {
      return b.set(T, O);
    }),
    (this.setSize = function (b, R, B) {
      if (he.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (T = b),
        (O = R),
        (e.width = Math.floor(b * j)),
        (e.height = Math.floor(R * j)),
        B !== !1 && ((e.style.width = b + "px"), (e.style.height = R + "px")),
        this.setViewport(0, 0, b, R);
    }),
    (this.getDrawingBufferSize = function (b) {
      return b.set(T * j, O * j).floor();
    }),
    (this.setDrawingBufferSize = function (b, R, B) {
      (T = b),
        (O = R),
        (j = B),
        (e.width = Math.floor(b * B)),
        (e.height = Math.floor(R * B)),
        this.setViewport(0, 0, b, R);
    }),
    (this.getCurrentViewport = function (b) {
      return b.copy(A);
    }),
    (this.getViewport = function (b) {
      return b.copy(D);
    }),
    (this.setViewport = function (b, R, B, L) {
      b.isVector4 ? D.set(b.x, b.y, b.z, b.w) : D.set(b, R, B, L),
        ue.viewport(A.copy(D).multiplyScalar(j).floor());
    }),
    (this.getScissor = function (b) {
      return b.copy(Y);
    }),
    (this.setScissor = function (b, R, B, L) {
      b.isVector4 ? Y.set(b.x, b.y, b.z, b.w) : Y.set(b, R, B, L),
        ue.scissor(F.copy(Y).multiplyScalar(j).floor());
    }),
    (this.getScissorTest = function () {
      return J;
    }),
    (this.setScissorTest = function (b) {
      ue.setScissorTest((J = b));
    }),
    (this.setOpaqueSort = function (b) {
      se = b;
    }),
    (this.setTransparentSort = function (b) {
      N = b;
    }),
    (this.getClearColor = function (b) {
      return b.copy(ee.getClearColor());
    }),
    (this.setClearColor = function () {
      ee.setClearColor.apply(ee, arguments);
    }),
    (this.getClearAlpha = function () {
      return ee.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      ee.setClearAlpha.apply(ee, arguments);
    }),
    (this.clear = function (b = !0, R = !0, B = !0) {
      let L = 0;
      b && (L |= 16384), R && (L |= 256), B && (L |= 1024), H.clear(L);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", _e, !1),
        e.removeEventListener("webglcontextrestored", pe, !1),
        e.removeEventListener("webglcontextcreationerror", Pe, !1),
        At.dispose(),
        S.dispose(),
        we.dispose(),
        st.dispose(),
        at.dispose(),
        Xe.dispose(),
        W.dispose(),
        ge.dispose(),
        Ne.dispose(),
        he.dispose(),
        he.removeEventListener("sessionstart", ce),
        he.removeEventListener("sessionend", fe),
        Q && (Q.dispose(), (Q = null)),
        Fe.stop();
    });
  function _e(b) {
    b.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (f = !0);
  }
  function pe() {
    console.log("THREE.WebGLRenderer: Context Restored."), (f = !1);
    const b = Oe.autoReset,
      R = k.enabled,
      B = k.autoUpdate,
      L = k.needsUpdate,
      G = k.type;
    ve(),
      (Oe.autoReset = b),
      (k.enabled = R),
      (k.autoUpdate = B),
      (k.needsUpdate = L),
      (k.type = G);
  }
  function Pe(b) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      b.statusMessage
    );
  }
  function ke(b) {
    const R = b.target;
    R.removeEventListener("dispose", ke), Ke(R);
  }
  function Ke(b) {
    C(b), we.remove(b);
  }
  function C(b) {
    const R = we.get(b).programs;
    R !== void 0 &&
      (R.forEach(function (B) {
        Ne.releaseProgram(B);
      }),
      b.isShaderMaterial && Ne.releaseShaderCache(b));
  }
  (this.renderBufferDirect = function (b, R, B, L, G, me) {
    R === null && (R = ne);
    const Me = G.isMesh && G.matrixWorld.determinant() < 0,
      Ee = Co(b, R, B, L, G);
    ue.setMaterial(L, Me);
    let Te = B.index,
      Ie = 1;
    L.wireframe === !0 && ((Te = Mt.getWireframeAttribute(B)), (Ie = 2));
    const Ae = B.drawRange,
      Le = B.attributes.position;
    let Ge = Ae.start * Ie,
      pt = (Ae.start + Ae.count) * Ie;
    me !== null &&
      ((Ge = Math.max(Ge, me.start * Ie)),
      (pt = Math.min(pt, (me.start + me.count) * Ie))),
      Te !== null
        ? ((Ge = Math.max(Ge, 0)), (pt = Math.min(pt, Te.count)))
        : Le != null && ((Ge = Math.max(Ge, 0)), (pt = Math.min(pt, Le.count)));
    const Ht = pt - Ge;
    if (Ht < 0 || Ht === 1 / 0) return;
    W.setup(G, L, Ee, B, Te);
    let un,
      He = oe;
    if (
      (Te !== null && ((un = ot.get(Te)), (He = ye), He.setIndex(un)), G.isMesh)
    )
      L.wireframe === !0
        ? (ue.setLineWidth(L.wireframeLinewidth * ae()), He.setMode(1))
        : He.setMode(4);
    else if (G.isLine) {
      let De = L.linewidth;
      De === void 0 && (De = 1),
        ue.setLineWidth(De * ae()),
        G.isLineSegments
          ? He.setMode(1)
          : G.isLineLoop
          ? He.setMode(2)
          : He.setMode(3);
    } else G.isPoints ? He.setMode(0) : G.isSprite && He.setMode(4);
    if (G.isInstancedMesh) He.renderInstances(Ge, Ht, G.count);
    else if (B.isInstancedBufferGeometry) {
      const De = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0,
        lr = Math.min(B.instanceCount, De);
      He.renderInstances(Ge, Ht, lr);
    } else He.render(Ge, Ht);
  }),
    (this.compile = function (b, R) {
      function B(L, G, me) {
        L.transparent === !0 && L.side === Li
          ? ((L.side = Ct),
            (L.needsUpdate = !0),
            St(L, G, me),
            (L.side = Sn),
            (L.needsUpdate = !0),
            St(L, G, me),
            (L.side = Li))
          : St(L, G, me);
      }
      (h = S.get(b)),
        h.init(),
        g.push(h),
        b.traverseVisible(function (L) {
          L.isLight &&
            L.layers.test(R.layers) &&
            (h.pushLight(L), L.castShadow && h.pushShadow(L));
        }),
        h.setupLights(p.physicallyCorrectLights),
        b.traverse(function (L) {
          const G = L.material;
          if (G)
            if (Array.isArray(G))
              for (let me = 0; me < G.length; me++) {
                const Me = G[me];
                B(Me, b, L);
              }
            else B(G, b, L);
        }),
        g.pop(),
        (h = null);
    });
  let z = null;
  function $(b) {
    z && z(b);
  }
  function ce() {
    Fe.stop();
  }
  function fe() {
    Fe.start();
  }
  const Fe = new co();
  Fe.setAnimationLoop($),
    typeof self < "u" && Fe.setContext(self),
    (this.setAnimationLoop = function (b) {
      (z = b), he.setAnimationLoop(b), b === null ? Fe.stop() : Fe.start();
    }),
    he.addEventListener("sessionstart", ce),
    he.addEventListener("sessionend", fe),
    (this.render = function (b, R) {
      if (R !== void 0 && R.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (f === !0) return;
      b.matrixWorldAutoUpdate === !0 && b.updateMatrixWorld(),
        R.parent === null &&
          R.matrixWorldAutoUpdate === !0 &&
          R.updateMatrixWorld(),
        he.enabled === !0 &&
          he.isPresenting === !0 &&
          (he.cameraAutoUpdate === !0 && he.updateCamera(R),
          (R = he.getCamera())),
        b.isScene === !0 && b.onBeforeRender(p, b, R, y),
        (h = S.get(b, g.length)),
        h.init(),
        g.push(h),
        U.multiplyMatrices(R.projectionMatrix, R.matrixWorldInverse),
        Z.setFromProjectionMatrix(U),
        (te = this.localClippingEnabled),
        (X = v.init(this.clippingPlanes, te, R)),
        (d = At.get(b, m.length)),
        d.init(),
        m.push(d),
        Je(b, R, 0, p.sortObjects),
        d.finish(),
        p.sortObjects === !0 && d.sort(se, N),
        X === !0 && v.beginShadows();
      const B = h.state.shadowsArray;
      if (
        (k.render(B, b, R),
        X === !0 && v.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        ee.render(d, b),
        h.setupLights(p.physicallyCorrectLights),
        R.isArrayCamera)
      ) {
        const L = R.cameras;
        for (let G = 0, me = L.length; G < me; G++) {
          const Me = L[G];
          nt(d, b, Me, Me.viewport);
        }
      } else nt(d, b, R);
      y !== null &&
        (xe.updateMultisampleRenderTarget(y), xe.updateRenderTargetMipmap(y)),
        b.isScene === !0 && b.onAfterRender(p, b, R),
        W.resetDefaultState(),
        (E = -1),
        (M = null),
        g.pop(),
        g.length > 0 ? (h = g[g.length - 1]) : (h = null),
        m.pop(),
        m.length > 0 ? (d = m[m.length - 1]) : (d = null);
    });
  function Je(b, R, B, L) {
    if (b.visible === !1) return;
    if (b.layers.test(R.layers)) {
      if (b.isGroup) B = b.renderOrder;
      else if (b.isLOD) b.autoUpdate === !0 && b.update(R);
      else if (b.isLight) h.pushLight(b), b.castShadow && h.pushShadow(b);
      else if (b.isSprite) {
        if (!b.frustumCulled || Z.intersectsSprite(b)) {
          L && K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(U);
          const Me = Xe.update(b),
            Ee = b.material;
          Ee.visible && d.push(b, Me, Ee, B, K.z, null);
        }
      } else if (
        (b.isMesh || b.isLine || b.isPoints) &&
        (b.isSkinnedMesh &&
          b.skeleton.frame !== Oe.render.frame &&
          (b.skeleton.update(), (b.skeleton.frame = Oe.render.frame)),
        !b.frustumCulled || Z.intersectsObject(b))
      ) {
        L && K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(U);
        const Me = Xe.update(b),
          Ee = b.material;
        if (Array.isArray(Ee)) {
          const Te = Me.groups;
          for (let Ie = 0, Ae = Te.length; Ie < Ae; Ie++) {
            const Le = Te[Ie],
              Ge = Ee[Le.materialIndex];
            Ge && Ge.visible && d.push(b, Me, Ge, B, K.z, Le);
          }
        } else Ee.visible && d.push(b, Me, Ee, B, K.z, null);
      }
    }
    const me = b.children;
    for (let Me = 0, Ee = me.length; Me < Ee; Me++) Je(me[Me], R, B, L);
  }
  function nt(b, R, B, L) {
    const G = b.opaque,
      me = b.transmissive,
      Me = b.transparent;
    h.setupLightsView(B),
      me.length > 0 && cn(G, R, B),
      L && ue.viewport(A.copy(L)),
      G.length > 0 && Ve(G, R, B),
      me.length > 0 && Ve(me, R, B),
      Me.length > 0 && Ve(Me, R, B),
      ue.buffers.depth.setTest(!0),
      ue.buffers.depth.setMask(!0),
      ue.buffers.color.setMask(!0),
      ue.setPolygonOffset(!1);
  }
  function cn(b, R, B) {
    const L = be.isWebGL2;
    Q === null &&
      (Q = new It(1, 1, {
        generateMipmaps: !0,
        type: de.has("EXT_color_buffer_half_float") ? vi : wn,
        minFilter: _i,
        samples: L && s === !0 ? 4 : 0,
      })),
      p.getDrawingBufferSize(V),
      L ? Q.setSize(V.x, V.y) : Q.setSize(Jr(V.x), Jr(V.y));
    const G = p.getRenderTarget();
    p.setRenderTarget(Q), p.clear();
    const me = p.toneMapping;
    (p.toneMapping = Zt),
      Ve(b, R, B),
      (p.toneMapping = me),
      xe.updateMultisampleRenderTarget(Q),
      xe.updateRenderTargetMipmap(Q),
      p.setRenderTarget(G);
  }
  function Ve(b, R, B) {
    const L = R.isScene === !0 ? R.overrideMaterial : null;
    for (let G = 0, me = b.length; G < me; G++) {
      const Me = b[G],
        Ee = Me.object,
        Te = Me.geometry,
        Ie = L === null ? Me.material : L,
        Ae = Me.group;
      Ee.layers.test(B.layers) && Gt(Ee, R, B, Te, Ie, Ae);
    }
  }
  function Gt(b, R, B, L, G, me) {
    b.onBeforeRender(p, R, B, L, G, me),
      b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, b.matrixWorld),
      b.normalMatrix.getNormalMatrix(b.modelViewMatrix),
      G.onBeforeRender(p, R, B, L, b, me),
      G.transparent === !0 && G.side === Li
        ? ((G.side = Ct),
          (G.needsUpdate = !0),
          p.renderBufferDirect(B, R, L, G, b, me),
          (G.side = Sn),
          (G.needsUpdate = !0),
          p.renderBufferDirect(B, R, L, G, b, me),
          (G.side = Li))
        : p.renderBufferDirect(B, R, L, G, b, me),
      b.onAfterRender(p, R, B, L, G, me);
  }
  function St(b, R, B) {
    R.isScene !== !0 && (R = ne);
    const L = we.get(b),
      G = h.state.lights,
      me = h.state.shadowsArray,
      Me = G.state.version,
      Ee = Ne.getParameters(b, G.state, me, R, B),
      Te = Ne.getProgramCacheKey(Ee);
    let Ie = L.programs;
    (L.environment = b.isMeshStandardMaterial ? R.environment : null),
      (L.fog = R.fog),
      (L.envMap = (b.isMeshStandardMaterial ? at : st).get(
        b.envMap || L.environment
      )),
      Ie === void 0 &&
        (b.addEventListener("dispose", ke),
        (Ie = new Map()),
        (L.programs = Ie));
    let Ae = Ie.get(Te);
    if (Ae !== void 0) {
      if (L.currentProgram === Ae && L.lightsStateVersion === Me)
        return vs(b, Ee), Ae;
    } else
      (Ee.uniforms = Ne.getUniforms(b)),
        b.onBuild(B, Ee, p),
        b.onBeforeCompile(Ee, p),
        (Ae = Ne.acquireProgram(Ee, Te)),
        Ie.set(Te, Ae),
        (L.uniforms = Ee.uniforms);
    const Le = L.uniforms;
    ((!b.isShaderMaterial && !b.isRawShaderMaterial) || b.clipping === !0) &&
      (Le.clippingPlanes = v.uniform),
      vs(b, Ee),
      (L.needsLights = Lo(b)),
      (L.lightsStateVersion = Me),
      L.needsLights &&
        ((Le.ambientLightColor.value = G.state.ambient),
        (Le.lightProbe.value = G.state.probe),
        (Le.directionalLights.value = G.state.directional),
        (Le.directionalLightShadows.value = G.state.directionalShadow),
        (Le.spotLights.value = G.state.spot),
        (Le.spotLightShadows.value = G.state.spotShadow),
        (Le.rectAreaLights.value = G.state.rectArea),
        (Le.ltc_1.value = G.state.rectAreaLTC1),
        (Le.ltc_2.value = G.state.rectAreaLTC2),
        (Le.pointLights.value = G.state.point),
        (Le.pointLightShadows.value = G.state.pointShadow),
        (Le.hemisphereLights.value = G.state.hemi),
        (Le.directionalShadowMap.value = G.state.directionalShadowMap),
        (Le.directionalShadowMatrix.value = G.state.directionalShadowMatrix),
        (Le.spotShadowMap.value = G.state.spotShadowMap),
        (Le.spotLightMatrix.value = G.state.spotLightMatrix),
        (Le.spotLightMap.value = G.state.spotLightMap),
        (Le.pointShadowMap.value = G.state.pointShadowMap),
        (Le.pointShadowMatrix.value = G.state.pointShadowMatrix));
    const Ge = Ae.getUniforms(),
      pt = Qi.seqWithValue(Ge.seq, Le);
    return (L.currentProgram = Ae), (L.uniformsList = pt), Ae;
  }
  function vs(b, R) {
    const B = we.get(b);
    (B.outputEncoding = R.outputEncoding),
      (B.instancing = R.instancing),
      (B.skinning = R.skinning),
      (B.morphTargets = R.morphTargets),
      (B.morphNormals = R.morphNormals),
      (B.morphColors = R.morphColors),
      (B.morphTargetsCount = R.morphTargetsCount),
      (B.numClippingPlanes = R.numClippingPlanes),
      (B.numIntersection = R.numClipIntersection),
      (B.vertexAlphas = R.vertexAlphas),
      (B.vertexTangents = R.vertexTangents),
      (B.toneMapping = R.toneMapping);
  }
  function Co(b, R, B, L, G) {
    R.isScene !== !0 && (R = ne), xe.resetTextureUnits();
    const me = R.fog,
      Me = L.isMeshStandardMaterial ? R.environment : null,
      Ee =
        y === null
          ? p.outputEncoding
          : y.isXRRenderTarget === !0
          ? y.texture.encoding
          : En,
      Te = (L.isMeshStandardMaterial ? at : st).get(L.envMap || Me),
      Ie =
        L.vertexColors === !0 &&
        !!B.attributes.color &&
        B.attributes.color.itemSize === 4,
      Ae = !!L.normalMap && !!B.attributes.tangent,
      Le = !!B.morphAttributes.position,
      Ge = !!B.morphAttributes.normal,
      pt = !!B.morphAttributes.color,
      Ht = L.toneMapped ? p.toneMapping : Zt,
      un =
        B.morphAttributes.position ||
        B.morphAttributes.normal ||
        B.morphAttributes.color,
      He = un !== void 0 ? un.length : 0,
      De = we.get(L),
      lr = h.state.lights;
    if (X === !0 && (te === !0 || b !== M)) {
      const mt = b === M && L.id === E;
      v.setState(L, b, mt);
    }
    let Qe = !1;
    L.version === De.__version
      ? ((De.needsLights && De.lightsStateVersion !== lr.state.version) ||
          De.outputEncoding !== Ee ||
          (G.isInstancedMesh && De.instancing === !1) ||
          (!G.isInstancedMesh && De.instancing === !0) ||
          (G.isSkinnedMesh && De.skinning === !1) ||
          (!G.isSkinnedMesh && De.skinning === !0) ||
          De.envMap !== Te ||
          (L.fog === !0 && De.fog !== me) ||
          (De.numClippingPlanes !== void 0 &&
            (De.numClippingPlanes !== v.numPlanes ||
              De.numIntersection !== v.numIntersection)) ||
          De.vertexAlphas !== Ie ||
          De.vertexTangents !== Ae ||
          De.morphTargets !== Le ||
          De.morphNormals !== Ge ||
          De.morphColors !== pt ||
          De.toneMapping !== Ht ||
          (be.isWebGL2 === !0 && De.morphTargetsCount !== He)) &&
        (Qe = !0)
      : ((Qe = !0), (De.__version = L.version));
    let dn = De.currentProgram;
    Qe === !0 && (dn = St(L, R, G));
    let xs = !1,
      ti = !1,
      cr = !1;
    const lt = dn.getUniforms(),
      hn = De.uniforms;
    if (
      (ue.useProgram(dn.program) && ((xs = !0), (ti = !0), (cr = !0)),
      L.id !== E && ((E = L.id), (ti = !0)),
      xs || M !== b)
    ) {
      if (
        (lt.setValue(H, "projectionMatrix", b.projectionMatrix),
        be.logarithmicDepthBuffer &&
          lt.setValue(H, "logDepthBufFC", 2 / (Math.log(b.far + 1) / Math.LN2)),
        M !== b && ((M = b), (ti = !0), (cr = !0)),
        L.isShaderMaterial ||
          L.isMeshPhongMaterial ||
          L.isMeshToonMaterial ||
          L.isMeshStandardMaterial ||
          L.envMap)
      ) {
        const mt = lt.map.cameraPosition;
        mt !== void 0 && mt.setValue(H, K.setFromMatrixPosition(b.matrixWorld));
      }
      (L.isMeshPhongMaterial ||
        L.isMeshToonMaterial ||
        L.isMeshLambertMaterial ||
        L.isMeshBasicMaterial ||
        L.isMeshStandardMaterial ||
        L.isShaderMaterial) &&
        lt.setValue(H, "isOrthographic", b.isOrthographicCamera === !0),
        (L.isMeshPhongMaterial ||
          L.isMeshToonMaterial ||
          L.isMeshLambertMaterial ||
          L.isMeshBasicMaterial ||
          L.isMeshStandardMaterial ||
          L.isShaderMaterial ||
          L.isShadowMaterial ||
          G.isSkinnedMesh) &&
          lt.setValue(H, "viewMatrix", b.matrixWorldInverse);
    }
    if (G.isSkinnedMesh) {
      lt.setOptional(H, G, "bindMatrix"),
        lt.setOptional(H, G, "bindMatrixInverse");
      const mt = G.skeleton;
      mt &&
        (be.floatVertexTextures
          ? (mt.boneTexture === null && mt.computeBoneTexture(),
            lt.setValue(H, "boneTexture", mt.boneTexture, xe),
            lt.setValue(H, "boneTextureSize", mt.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const ur = B.morphAttributes;
    if (
      ((ur.position !== void 0 ||
        ur.normal !== void 0 ||
        (ur.color !== void 0 && be.isWebGL2 === !0)) &&
        ie.update(G, B, L, dn),
      (ti || De.receiveShadow !== G.receiveShadow) &&
        ((De.receiveShadow = G.receiveShadow),
        lt.setValue(H, "receiveShadow", G.receiveShadow)),
      L.isMeshGouraudMaterial &&
        L.envMap !== null &&
        ((hn.envMap.value = Te),
        (hn.flipEnvMap.value =
          Te.isCubeTexture && Te.isRenderTargetTexture === !1 ? -1 : 1)),
      ti &&
        (lt.setValue(H, "toneMappingExposure", p.toneMappingExposure),
        De.needsLights && Ao(hn, cr),
        me && L.fog === !0 && Vt.refreshFogUniforms(hn, me),
        Vt.refreshMaterialUniforms(hn, L, j, O, Q),
        Qi.upload(H, De.uniformsList, hn, xe)),
      L.isShaderMaterial &&
        L.uniformsNeedUpdate === !0 &&
        (Qi.upload(H, De.uniformsList, hn, xe), (L.uniformsNeedUpdate = !1)),
      L.isSpriteMaterial && lt.setValue(H, "center", G.center),
      lt.setValue(H, "modelViewMatrix", G.modelViewMatrix),
      lt.setValue(H, "normalMatrix", G.normalMatrix),
      lt.setValue(H, "modelMatrix", G.matrixWorld),
      L.isShaderMaterial || L.isRawShaderMaterial)
    ) {
      const mt = L.uniformsGroups;
      for (let dr = 0, Do = mt.length; dr < Do; dr++)
        if (be.isWebGL2) {
          const bs = mt[dr];
          ge.update(bs, dn), ge.bind(bs, dn);
        } else
          console.warn(
            "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
          );
    }
    return dn;
  }
  function Ao(b, R) {
    (b.ambientLightColor.needsUpdate = R),
      (b.lightProbe.needsUpdate = R),
      (b.directionalLights.needsUpdate = R),
      (b.directionalLightShadows.needsUpdate = R),
      (b.pointLights.needsUpdate = R),
      (b.pointLightShadows.needsUpdate = R),
      (b.spotLights.needsUpdate = R),
      (b.spotLightShadows.needsUpdate = R),
      (b.rectAreaLights.needsUpdate = R),
      (b.hemisphereLights.needsUpdate = R);
  }
  function Lo(b) {
    return (
      b.isMeshLambertMaterial ||
      b.isMeshToonMaterial ||
      b.isMeshPhongMaterial ||
      b.isMeshStandardMaterial ||
      b.isShadowMaterial ||
      (b.isShaderMaterial && b.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return x;
  }),
    (this.getActiveMipmapLevel = function () {
      return w;
    }),
    (this.getRenderTarget = function () {
      return y;
    }),
    (this.setRenderTargetTextures = function (b, R, B) {
      (we.get(b.texture).__webglTexture = R),
        (we.get(b.depthTexture).__webglTexture = B);
      const L = we.get(b);
      (L.__hasExternalTextures = !0),
        L.__hasExternalTextures &&
          ((L.__autoAllocateDepthBuffer = B === void 0),
          L.__autoAllocateDepthBuffer ||
            (de.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (L.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (b, R) {
      const B = we.get(b);
      (B.__webglFramebuffer = R), (B.__useDefaultFramebuffer = R === void 0);
    }),
    (this.setRenderTarget = function (b, R = 0, B = 0) {
      (y = b), (x = R), (w = B);
      let L = !0,
        G = null,
        me = !1,
        Me = !1;
      if (b) {
        const Te = we.get(b);
        Te.__useDefaultFramebuffer !== void 0
          ? (ue.bindFramebuffer(36160, null), (L = !1))
          : Te.__webglFramebuffer === void 0
          ? xe.setupRenderTarget(b)
          : Te.__hasExternalTextures &&
            xe.rebindTextures(
              b,
              we.get(b.texture).__webglTexture,
              we.get(b.depthTexture).__webglTexture
            );
        const Ie = b.texture;
        (Ie.isData3DTexture ||
          Ie.isDataArrayTexture ||
          Ie.isCompressedArrayTexture) &&
          (Me = !0);
        const Ae = we.get(b).__webglFramebuffer;
        b.isWebGLCubeRenderTarget
          ? ((G = Ae[R]), (me = !0))
          : be.isWebGL2 && b.samples > 0 && xe.useMultisampledRTT(b) === !1
          ? (G = we.get(b).__webglMultisampledFramebuffer)
          : (G = Ae),
          A.copy(b.viewport),
          F.copy(b.scissor),
          (_ = b.scissorTest);
      } else
        A.copy(D).multiplyScalar(j).floor(),
          F.copy(Y).multiplyScalar(j).floor(),
          (_ = J);
      if (
        (ue.bindFramebuffer(36160, G) &&
          be.drawBuffers &&
          L &&
          ue.drawBuffers(b, G),
        ue.viewport(A),
        ue.scissor(F),
        ue.setScissorTest(_),
        me)
      ) {
        const Te = we.get(b.texture);
        H.framebufferTexture2D(36160, 36064, 34069 + R, Te.__webglTexture, B);
      } else if (Me) {
        const Te = we.get(b.texture),
          Ie = R || 0;
        H.framebufferTextureLayer(36160, 36064, Te.__webglTexture, B || 0, Ie);
      }
      E = -1;
    }),
    (this.readRenderTargetPixels = function (b, R, B, L, G, me, Me) {
      if (!(b && b.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let Ee = we.get(b).__webglFramebuffer;
      if ((b.isWebGLCubeRenderTarget && Me !== void 0 && (Ee = Ee[Me]), Ee)) {
        ue.bindFramebuffer(36160, Ee);
        try {
          const Te = b.texture,
            Ie = Te.format,
            Ae = Te.type;
          if (Ie !== Pt && le.convert(Ie) !== H.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Le =
            Ae === vi &&
            (de.has("EXT_color_buffer_half_float") ||
              (be.isWebGL2 && de.has("EXT_color_buffer_float")));
          if (
            Ae !== wn &&
            le.convert(Ae) !== H.getParameter(35738) &&
            !(
              Ae === bn &&
              (be.isWebGL2 ||
                de.has("OES_texture_float") ||
                de.has("WEBGL_color_buffer_float"))
            ) &&
            !Le
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          R >= 0 &&
            R <= b.width - L &&
            B >= 0 &&
            B <= b.height - G &&
            H.readPixels(R, B, L, G, le.convert(Ie), le.convert(Ae), me);
        } finally {
          const Te = y !== null ? we.get(y).__webglFramebuffer : null;
          ue.bindFramebuffer(36160, Te);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (b, R, B = 0) {
      const L = Math.pow(2, -B),
        G = Math.floor(R.image.width * L),
        me = Math.floor(R.image.height * L);
      xe.setTexture2D(R, 0),
        H.copyTexSubImage2D(3553, B, 0, 0, b.x, b.y, G, me),
        ue.unbindTexture();
    }),
    (this.copyTextureToTexture = function (b, R, B, L = 0) {
      const G = R.image.width,
        me = R.image.height,
        Me = le.convert(B.format),
        Ee = le.convert(B.type);
      xe.setTexture2D(B, 0),
        H.pixelStorei(37440, B.flipY),
        H.pixelStorei(37441, B.premultiplyAlpha),
        H.pixelStorei(3317, B.unpackAlignment),
        R.isDataTexture
          ? H.texSubImage2D(3553, L, b.x, b.y, G, me, Me, Ee, R.image.data)
          : R.isCompressedTexture
          ? H.compressedTexSubImage2D(
              3553,
              L,
              b.x,
              b.y,
              R.mipmaps[0].width,
              R.mipmaps[0].height,
              Me,
              R.mipmaps[0].data
            )
          : H.texSubImage2D(3553, L, b.x, b.y, Me, Ee, R.image),
        L === 0 && B.generateMipmaps && H.generateMipmap(3553),
        ue.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (b, R, B, L, G = 0) {
      if (p.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const me = b.max.x - b.min.x + 1,
        Me = b.max.y - b.min.y + 1,
        Ee = b.max.z - b.min.z + 1,
        Te = le.convert(L.format),
        Ie = le.convert(L.type);
      let Ae;
      if (L.isData3DTexture) xe.setTexture3D(L, 0), (Ae = 32879);
      else if (L.isDataArrayTexture) xe.setTexture2DArray(L, 0), (Ae = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      H.pixelStorei(37440, L.flipY),
        H.pixelStorei(37441, L.premultiplyAlpha),
        H.pixelStorei(3317, L.unpackAlignment);
      const Le = H.getParameter(3314),
        Ge = H.getParameter(32878),
        pt = H.getParameter(3316),
        Ht = H.getParameter(3315),
        un = H.getParameter(32877),
        He = B.isCompressedTexture ? B.mipmaps[0] : B.image;
      H.pixelStorei(3314, He.width),
        H.pixelStorei(32878, He.height),
        H.pixelStorei(3316, b.min.x),
        H.pixelStorei(3315, b.min.y),
        H.pixelStorei(32877, b.min.z),
        B.isDataTexture || B.isData3DTexture
          ? H.texSubImage3D(Ae, G, R.x, R.y, R.z, me, Me, Ee, Te, Ie, He.data)
          : B.isCompressedArrayTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            H.compressedTexSubImage3D(
              Ae,
              G,
              R.x,
              R.y,
              R.z,
              me,
              Me,
              Ee,
              Te,
              He.data
            ))
          : H.texSubImage3D(Ae, G, R.x, R.y, R.z, me, Me, Ee, Te, Ie, He),
        H.pixelStorei(3314, Le),
        H.pixelStorei(32878, Ge),
        H.pixelStorei(3316, pt),
        H.pixelStorei(3315, Ht),
        H.pixelStorei(32877, un),
        G === 0 && L.generateMipmaps && H.generateMipmap(Ae),
        ue.unbindTexture();
    }),
    (this.initTexture = function (b) {
      b.isCubeTexture
        ? xe.setTextureCube(b, 0)
        : b.isData3DTexture
        ? xe.setTexture3D(b, 0)
        : b.isDataArrayTexture || b.isCompressedArrayTexture
        ? xe.setTexture2DArray(b, 0)
        : xe.setTexture2D(b, 0),
        ue.unbindTexture();
    }),
    (this.resetState = function () {
      (x = 0), (w = 0), (y = null), ue.reset(), W.reset();
    }),
    typeof __THREE_DEVTOOLS__ < "u" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class Cf extends go {}
Cf.prototype.isWebGL1Renderer = !0;
class Af extends yt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.backgroundIntensity = this.backgroundIntensity),
      t
    );
  }
  get autoUpdate() {
    return (
      console.warn(
        "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
      ),
      this.matrixWorldAutoUpdate
    );
  }
  set autoUpdate(e) {
    console.warn(
      "THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."
    ),
      (this.matrixWorldAutoUpdate = e);
  }
}
const Da = {
  enabled: !1,
  files: {},
  add: function (r, e) {
    this.enabled !== !1 && (this.files[r] = e);
  },
  get: function (r) {
    if (this.enabled !== !1) return this.files[r];
  },
  remove: function (r) {
    delete this.files[r];
  },
  clear: function () {
    this.files = {};
  },
};
class Lf {
  constructor(e, t, n) {
    const i = this;
    let s = !1,
      o = 0,
      a = 0,
      l;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (u) {
        a++, s === !1 && i.onStart !== void 0 && i.onStart(u, o, a), (s = !0);
      }),
      (this.itemEnd = function (u) {
        o++,
          i.onProgress !== void 0 && i.onProgress(u, o, a),
          o === a && ((s = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (u) {
        i.onError !== void 0 && i.onError(u);
      }),
      (this.resolveURL = function (u) {
        return l ? l(u) : u;
      }),
      (this.setURLModifier = function (u) {
        return (l = u), this;
      }),
      (this.addHandler = function (u, d) {
        return c.push(u, d), this;
      }),
      (this.removeHandler = function (u) {
        const d = c.indexOf(u);
        return d !== -1 && c.splice(d, 2), this;
      }),
      (this.getHandler = function (u) {
        for (let d = 0, h = c.length; d < h; d += 2) {
          const m = c[d],
            g = c[d + 1];
          if ((m.global && (m.lastIndex = 0), m.test(u))) return g;
        }
        return null;
      });
  }
}
const Df = new Lf();
class _o {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Df),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class Rf extends _o {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const s = this,
      o = Da.get(e);
    if (o !== void 0)
      return (
        s.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), s.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = bi("img");
    function l() {
      u(), Da.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(d) {
      u(), i && i(d), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function u() {
      a.removeEventListener("load", l, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", l, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      s.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class Pf extends _o {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new ft(),
      o = new Rf(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (s.image = a), (s.needsUpdate = !0), t !== void 0 && t(s);
        },
        n,
        i
      ),
      s
    );
  }
}
class If {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = Ra()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = Ra();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function Ra() {
  return (typeof performance > "u" ? Date : performance).now();
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: is } })
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = is));
const cs = {
  uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`,
};
class Ai {
  constructor() {
    (this.enabled = !0),
      (this.needsSwap = !0),
      (this.clear = !1),
      (this.renderToScreen = !1);
  }
  setSize() {}
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {}
}
const Ff = new uo(-1, 1, 1, -1, 0, 1),
  us = new sn();
us.setAttribute("position", new Kt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
us.setAttribute("uv", new Kt([0, 2, 0, 0, 2, 0], 2));
class vo {
  constructor(e) {
    this._mesh = new Bt(us, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Ff);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class xo extends Ai {
  constructor(e, t) {
    super(),
      (this.textureID = t !== void 0 ? t : "tDiffuse"),
      e instanceof ht
        ? ((this.uniforms = e.uniforms), (this.material = e))
        : e &&
          ((this.uniforms = er.clone(e.uniforms)),
          (this.material = new ht({
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
          }))),
      (this.fsQuad = new vo(this.material));
  }
  render(e, t, n) {
    this.uniforms[this.textureID] &&
      (this.uniforms[this.textureID].value = n.texture),
      (this.fsQuad.material = this.material),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(t),
          this.clear &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class Pa extends Ai {
  constructor(e, t) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.clear = !0),
      (this.needsSwap = !1),
      (this.inverse = !1);
  }
  render(e, t, n) {
    const i = e.getContext(),
      s = e.state;
    s.buffers.color.setMask(!1),
      s.buffers.depth.setMask(!1),
      s.buffers.color.setLocked(!0),
      s.buffers.depth.setLocked(!0);
    let o, a;
    this.inverse ? ((o = 0), (a = 1)) : ((o = 1), (a = 0)),
      s.buffers.stencil.setTest(!0),
      s.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE),
      s.buffers.stencil.setFunc(i.ALWAYS, o, 4294967295),
      s.buffers.stencil.setClear(a),
      s.buffers.stencil.setLocked(!0),
      e.setRenderTarget(n),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      e.setRenderTarget(t),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      s.buffers.color.setLocked(!1),
      s.buffers.depth.setLocked(!1),
      s.buffers.stencil.setLocked(!1),
      s.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295),
      s.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP),
      s.buffers.stencil.setLocked(!0);
  }
}
class Of extends Ai {
  constructor() {
    super(), (this.needsSwap = !1);
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Nf {
  constructor(e, t) {
    if (((this.renderer = e), t === void 0)) {
      const n = e.getSize(new Ce());
      (this._pixelRatio = e.getPixelRatio()),
        (this._width = n.width),
        (this._height = n.height),
        (t = new It(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        )),
        (t.texture.name = "EffectComposer.rt1");
    } else
      (this._pixelRatio = 1),
        (this._width = t.width),
        (this._height = t.height);
    (this.renderTarget1 = t),
      (this.renderTarget2 = t.clone()),
      (this.renderTarget2.texture.name = "EffectComposer.rt2"),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2),
      (this.renderToScreen = !0),
      (this.passes = []),
      (this.copyPass = new xo(cs)),
      (this.clock = new If());
  }
  swapBuffers() {
    const e = this.readBuffer;
    (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
  }
  addPass(e) {
    this.passes.push(e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled) return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, s = this.passes.length; i < s; i++) {
      const o = this.passes[i];
      if (o.enabled !== !1) {
        if (
          ((o.renderToScreen =
            this.renderToScreen && this.isLastEnabledPass(i)),
          o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
          o.needsSwap)
        ) {
          if (n) {
            const a = this.renderer.getContext(),
              l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295),
              this.copyPass.render(
                this.renderer,
                this.writeBuffer,
                this.readBuffer,
                e
              ),
              l.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Pa !== void 0 &&
          (o instanceof Pa ? (n = !0) : o instanceof Of && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new Ce());
      (this._pixelRatio = this.renderer.getPixelRatio()),
        (this._width = t.width),
        (this._height = t.height),
        (e = this.renderTarget1.clone()),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        );
    }
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      (this.renderTarget1 = e),
      (this.renderTarget2 = e.clone()),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2);
  }
  setSize(e, t) {
    (this._width = e), (this._height = t);
    const n = this._width * this._pixelRatio,
      i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let s = 0; s < this.passes.length; s++) this.passes[s].setSize(n, i);
  }
  setPixelRatio(e) {
    (this._pixelRatio = e), this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      this.copyPass.dispose();
  }
}
class Uf extends Ai {
  constructor(e, t, n, i, s) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.overrideMaterial = n),
      (this.clearColor = i),
      (this.clearAlpha = s !== void 0 ? s : 0),
      (this.clear = !0),
      (this.clearDepth = !1),
      (this.needsSwap = !1),
      (this._oldClearColor = new Ue());
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let s, o;
    this.overrideMaterial !== void 0 &&
      ((o = this.scene.overrideMaterial),
      (this.scene.overrideMaterial = this.overrideMaterial)),
      this.clearColor &&
        (e.getClearColor(this._oldClearColor),
        (s = e.getClearAlpha()),
        e.setClearColor(this.clearColor, this.clearAlpha)),
      this.clearDepth && e.clearDepth(),
      e.setRenderTarget(this.renderToScreen ? null : n),
      this.clear &&
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
      e.render(this.scene, this.camera),
      this.clearColor && e.setClearColor(this._oldClearColor, s),
      this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = o),
      (e.autoClear = i);
  }
}
const zf = {
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new Ue(0) },
    defaultOpacity: { value: 0 },
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
};
class Kn extends Ai {
  constructor(e, t, n, i) {
    super(),
      (this.strength = t !== void 0 ? t : 1),
      (this.radius = n),
      (this.threshold = i),
      (this.resolution = e !== void 0 ? new Ce(e.x, e.y) : new Ce(256, 256)),
      (this.clearColor = new Ue(0, 0, 0)),
      (this.renderTargetsHorizontal = []),
      (this.renderTargetsVertical = []),
      (this.nMips = 5);
    let s = Math.round(this.resolution.x / 2),
      o = Math.round(this.resolution.y / 2);
    (this.renderTargetBright = new It(s, o)),
      (this.renderTargetBright.texture.name = "UnrealBloomPass.bright"),
      (this.renderTargetBright.texture.generateMipmaps = !1);
    for (let d = 0; d < this.nMips; d++) {
      const h = new It(s, o);
      (h.texture.name = "UnrealBloomPass.h" + d),
        (h.texture.generateMipmaps = !1),
        this.renderTargetsHorizontal.push(h);
      const m = new It(s, o);
      (m.texture.name = "UnrealBloomPass.v" + d),
        (m.texture.generateMipmaps = !1),
        this.renderTargetsVertical.push(m),
        (s = Math.round(s / 2)),
        (o = Math.round(o / 2));
    }
    const a = zf;
    (this.highPassUniforms = er.clone(a.uniforms)),
      (this.highPassUniforms.luminosityThreshold.value = i),
      (this.highPassUniforms.smoothWidth.value = 0.01),
      (this.materialHighPassFilter = new ht({
        uniforms: this.highPassUniforms,
        vertexShader: a.vertexShader,
        fragmentShader: a.fragmentShader,
        defines: {},
      })),
      (this.separableBlurMaterials = []);
    const l = [3, 5, 7, 9, 11];
    (s = Math.round(this.resolution.x / 2)),
      (o = Math.round(this.resolution.y / 2));
    for (let d = 0; d < this.nMips; d++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),
        (this.separableBlurMaterials[d].uniforms.texSize.value = new Ce(s, o)),
        (s = Math.round(s / 2)),
        (o = Math.round(o / 2));
    (this.compositeMaterial = this.getCompositeMaterial(this.nMips)),
      (this.compositeMaterial.uniforms.blurTexture1.value =
        this.renderTargetsVertical[0].texture),
      (this.compositeMaterial.uniforms.blurTexture2.value =
        this.renderTargetsVertical[1].texture),
      (this.compositeMaterial.uniforms.blurTexture3.value =
        this.renderTargetsVertical[2].texture),
      (this.compositeMaterial.uniforms.blurTexture4.value =
        this.renderTargetsVertical[3].texture),
      (this.compositeMaterial.uniforms.blurTexture5.value =
        this.renderTargetsVertical[4].texture),
      (this.compositeMaterial.uniforms.bloomStrength.value = t),
      (this.compositeMaterial.uniforms.bloomRadius.value = 0.1),
      (this.compositeMaterial.needsUpdate = !0);
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    (this.compositeMaterial.uniforms.bloomFactors.value = c),
      (this.bloomTintColors = [
        new I(1, 1, 1),
        new I(1, 1, 1),
        new I(1, 1, 1),
        new I(1, 1, 1),
        new I(1, 1, 1),
      ]),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors);
    const u = cs;
    (this.copyUniforms = er.clone(u.uniforms)),
      (this.copyUniforms.opacity.value = 1),
      (this.materialCopy = new ht({
        uniforms: this.copyUniforms,
        vertexShader: u.vertexShader,
        fragmentShader: u.fragmentShader,
        blending: Xr,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
      })),
      (this.enabled = !0),
      (this.needsSwap = !1),
      (this._oldClearColor = new Ue()),
      (this.oldClearAlpha = 1),
      (this.basic = new as()),
      (this.fsQuad = new vo(null));
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++)
      this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(),
      this.materialCopy.dispose(),
      this.basic.dispose(),
      this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2),
      i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let s = 0; s < this.nMips; s++)
      this.renderTargetsHorizontal[s].setSize(n, i),
        this.renderTargetsVertical[s].setSize(n, i),
        (this.separableBlurMaterials[s].uniforms.texSize.value = new Ce(n, i)),
        (n = Math.round(n / 2)),
        (i = Math.round(i / 2));
  }
  render(e, t, n, i, s) {
    e.getClearColor(this._oldClearColor),
      (this.oldClearAlpha = e.getClearAlpha());
    const o = e.autoClear;
    (e.autoClear = !1),
      e.setClearColor(this.clearColor, 0),
      s && e.state.buffers.stencil.setTest(!1),
      this.renderToScreen &&
        ((this.fsQuad.material = this.basic),
        (this.basic.map = n.texture),
        e.setRenderTarget(null),
        e.clear(),
        this.fsQuad.render(e)),
      (this.highPassUniforms.tDiffuse.value = n.texture),
      (this.highPassUniforms.luminosityThreshold.value = this.threshold),
      (this.fsQuad.material = this.materialHighPassFilter),
      e.setRenderTarget(this.renderTargetBright),
      e.clear(),
      this.fsQuad.render(e);
    let a = this.renderTargetBright;
    for (let l = 0; l < this.nMips; l++)
      (this.fsQuad.material = this.separableBlurMaterials[l]),
        (this.separableBlurMaterials[l].uniforms.colorTexture.value =
          a.texture),
        (this.separableBlurMaterials[l].uniforms.direction.value =
          Kn.BlurDirectionX),
        e.setRenderTarget(this.renderTargetsHorizontal[l]),
        e.clear(),
        this.fsQuad.render(e),
        (this.separableBlurMaterials[l].uniforms.colorTexture.value =
          this.renderTargetsHorizontal[l].texture),
        (this.separableBlurMaterials[l].uniforms.direction.value =
          Kn.BlurDirectionY),
        e.setRenderTarget(this.renderTargetsVertical[l]),
        e.clear(),
        this.fsQuad.render(e),
        (a = this.renderTargetsVertical[l]);
    (this.fsQuad.material = this.compositeMaterial),
      (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
      (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors),
      e.setRenderTarget(this.renderTargetsHorizontal[0]),
      e.clear(),
      this.fsQuad.render(e),
      (this.fsQuad.material = this.materialCopy),
      (this.copyUniforms.tDiffuse.value =
        this.renderTargetsHorizontal[0].texture),
      s && e.state.buffers.stencil.setTest(!0),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(n), this.fsQuad.render(e)),
      e.setClearColor(this._oldClearColor, this.oldClearAlpha),
      (e.autoClear = o);
  }
  getSeperableBlurMaterial(e) {
    return new ht({
      defines: { KERNEL_RADIUS: e, SIGMA: e },
      uniforms: {
        colorTexture: { value: null },
        texSize: { value: new Ce(0.5, 0.5) },
        direction: { value: new Ce(0.5, 0.5) },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`,
    });
  }
  getCompositeMaterial(e) {
    return new ht({
      defines: { NUM_MIPS: e },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`,
    });
  }
}
Kn.BlurDirectionX = new Ce(1, 0);
Kn.BlurDirectionY = new Ce(0, 1);
class Bf extends Et {
  constructor(e, t, n, i) {
    super(e, t, n, i),
      (this.time = 0),
      (this.theta = 0),
      (this.angularVelocity = 0),
      (this.maxAngularVelocity = 0),
      (this.velocity = new I()),
      this.position.set(0, 0, 1),
      (this.direction = new I()),
      (this.moving = !1),
      (this.timeDilation = !1),
      (this.incline = (-5 * Math.PI) / 180);
  }
  set distance(e) {
    (this.r = e),
      (this.maxAngularVelocity = 1 / Math.sqrt(2 * (e - 1)) / this.r),
      this.position.normalize().multiplyScalar(e);
  }
  get distance() {
    return this.r;
  }
  setDirection(e, t) {
    let n = new I(0, 0, -1),
      i = new Qn(0, 0, 0, "YXZ");
    i.set(e, t, 0);
    let s = new I();
    s.copy(n).applyEuler(i), (this.direction = s.normalize());
  }
  update(e) {
    this.timeDilation
      ? (this.delta = Math.sqrt(
          (e * e * (1 - this.angularVelocity * this.angularVelocity)) /
            (1 - 1 / this.r)
        ))
      : (this.delta = e),
      (this.theta += this.angularVelocity * this.delta);
    let t = Math.cos(this.theta),
      n = Math.sin(this.theta);
    this.position.set(this.r * n, 0, this.r * t),
      this.velocity.set(t * this.angularVelocity, 0, -n * this.angularVelocity);
    let i = new Ye().makeRotationX(this.incline);
    this.position.applyMatrix4(i),
      this.velocity.applyMatrix4(i),
      this.moving
        ? this.angularVelocity < this.maxAngularVelocity
          ? (this.angularVelocity += this.delta / this.r)
          : (this.angularVelocity = this.maxAngularVelocity)
        : this.angularVelocity > 0
        ? (this.angularVelocity -= this.delta / this.r)
        : ((this.angularVelocity = 0), this.velocity.set(0, 0, 0)),
      (this.time += this.delta);
  }
}
function ci(r) {
  return r !== document;
}
class kf {
  constructor(e, t) {
    (this.domElement = t), (this.observer = e);
    let n = new Ye().makeRotationZ(this.observer.incline);
    this.observer.up.applyMatrix4(n),
      (this.domElement = t !== void 0 ? t : document),
      (this.enabled = !0),
      (this.lookSpeed = 0.005),
      (this.lookVertical = !0),
      (this.offsetX = 0),
      (this.offsetY = 0),
      (this.lastX = 0),
      (this.lastY = 0),
      (this.pitch = 0),
      (this.yaw = 0),
      (this.roll = -1),
      (this.viewHalfX = 0),
      (this.viewHalfY = 0),
      ci(this.domElement) && this.domElement.setAttribute("tabindex", "-1"),
      this.addMouseEventHandlers(),
      this.handleResize();
  }
  handleResize() {
    ci(this.domElement)
      ? ((this.viewHalfX = this.domElement.offsetWidth / 2),
        (this.viewHalfY = this.domElement.offsetHeight / 2))
      : ((this.viewHalfX = window.innerWidth / 2),
        (this.viewHalfY = window.innerHeight / 2)),
      this.observer.setDirection(this.pitch, this.yaw);
  }
  update(e) {
    this.enabled !== !1 &&
      (this.observer.angularVelocity > 0 &&
        (this.yaw += this.observer.angularVelocity * e),
      this.mouseDragOn &&
        ((this.yaw += this.lookSpeed * this.offsetX),
        this.lookVertical &&
          ((this.pitch += this.lookSpeed * this.offsetY),
          (this.pitch = Math.min(
            Math.PI / 2 - 0.01,
            Math.max(-Math.PI / 2 + 0.01, this.pitch)
          ))),
        (this.offsetX /= 2),
        (this.offsetY /= 2)),
      this.observer.setDirection(this.pitch, this.yaw));
  }
  addMouseEventHandlers() {
    this.domElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    }),
      this.domElement.addEventListener("mousemove", (e) => {
        if (this.mouseDragOn) {
          let t, n;
          ci(this.domElement)
            ? ((t = e.pageX - this.domElement.offsetLeft - this.viewHalfX),
              (n = e.pageY - this.domElement.offsetTop - this.viewHalfY))
            : ((t = e.pageX - this.viewHalfX), (n = e.pageY - this.viewHalfY)),
            (this.offsetX = t - this.lastX),
            (this.offsetY = n - this.lastY),
            (this.lastX = t),
            (this.lastY = n);
        }
      }),
      this.domElement.addEventListener("mousedown", (e) => {
        ci(this.domElement) && this.domElement.focus(),
          e.preventDefault(),
          e.stopPropagation(),
          (this.mouseDragOn = !0),
          ci(this.domElement)
            ? ((this.lastX =
                e.pageX - this.domElement.offsetLeft - this.viewHalfX),
              (this.lastY =
                e.pageY - this.domElement.offsetTop - this.viewHalfY))
            : ((this.lastX = e.pageX - this.viewHalfX),
              (this.lastY = e.pageY - this.viewHalfY));
      }),
      this.domElement.addEventListener("mouseup", (e) => {
        e.preventDefault(),
          e.stopPropagation(),
          (this.mouseDragOn = !1),
          (this.offsetX = 0),
          (this.offsetY = 0);
      });
  }
}
class ds {
  constructor(e = 0, t = 0) {
    (ds.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t) {
    return (this.x = e.getX(t)), (this.y = e.getY(t)), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      s = this.x - e.x,
      o = this.y - e.y;
    return (this.x = s * n - o * i + e.x), (this.y = s * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
const Ia = `//#define STEP 0.04
//#define NSTEPS 700
#define PI 3.141592653589793238462643383279
#define DEG_TO_RAD (PI/180.0)
#define ROT_Y(a) mat3(1, 0, 0, 0, cos(a), sin(a), 0, -sin(a), cos(a))
#define ROT_Z(a) mat3(cos(a), -sin(a), 0, sin(a), cos(a), 0, 0, 0, 1)


uniform float time;
uniform vec2 resolution;

uniform vec3 cam_pos;
uniform vec3 cam_dir;
uniform vec3 cam_up;
uniform float fov;
uniform vec3 cam_vel;

const float MIN_TEMPERATURE = 1000.0;
const float TEMPERATURE_RANGE = 39000.0;

uniform bool accretion_disk;
uniform bool use_disk_texture;
const float DISK_IN = 2.0;
const float DISK_WIDTH = 4.0;

uniform bool doppler_shift;
uniform bool lorentz_transform;
uniform bool beaming;

uniform sampler2D bg_texture;
uniform sampler2D star_texture;
uniform sampler2D disk_texture;

vec2 square_frame(vec2 screen_size){
  vec2 position = 2.0 * (gl_FragCoord.xy / screen_size.xy) - 1.0; 
  // first make pixels arranged in 0..1
  // then by multiplying by 2 and subtracting 1, put them in -1..1
  
  return position;
}

vec2 to_spherical(vec3 cartesian_coord){
  // spherical projection
  // polar angles are directly used as horizontal and vertical coordinates
  // here angle to y-axis mapped to latitude (looking vertically 180 degrees)
  // xz plane to longitude (looking horizontally 360 degrees)
  vec2 uv = vec2(atan(cartesian_coord.z,cartesian_coord.x), asin(cartesian_coord.y)); 
  uv *= vec2(1.0/(2.0*PI), 1.0/PI); //long, lat
  uv += 0.5;
  return uv;
}

vec3 lorentz_transform_velocity(vec3 u, vec3 v){ 
  // u = ray
  // v = observer
  float speed = length(v);
  if (speed > 0.0){
    float gamma = 1.0/sqrt(1.0-dot(v,v));
    
    float denominator = 1.0 - dot(v,u);
    
    vec3 new_u = (u/gamma - v + (gamma/(gamma+1.0)) * dot(u,v)*v)/denominator;
    return new_u;
  }
  return u;
}

vec3 temp_to_color(float temp_kelvin){
  vec3 color;
  // 1k ~ 40k rescale by dividing 100
  temp_kelvin = clamp(temp_kelvin, 1000.0, 40000.0) / 100.0;
  if (temp_kelvin <= 66.0){
    color.r = 255.0;
    color.g = temp_kelvin;
    color.g = 99.4708025861 * log(color.g) - 161.1195681661;
    if (color.g < 0.0) color.g = 0.0;
    if (color.g > 255.0)  color.g = 255.0;
  } else {
    color.r = temp_kelvin - 60.0;
    if (color.r < 0.0) color.r = 0.0;
    color.r = 329.698727446 * pow(color.r, -0.1332047592);
    if (color.r < 0.0) color.r = 0.0;
    if (color.g > 255.0) color.r = 255.0;
    color.g = temp_kelvin - 60.0;
    if (color.g < 0.0) color.g = 0.0;
    color.g = 288.1221695283 * pow(color.g, -0.0755148492);
    if (color.g > 255.0)  color.g = 255.0;  
  }
  if (temp_kelvin >= 66.0){
    color.b = 255.0;
  } else if (temp_kelvin <= 19.0){
    color.b = 0.0;
  } else {
    color.b = temp_kelvin - 10.0;
    color.b = 138.5177312231 * log(color.b) - 305.0447927307;
    if (color.b < 0.0) color.b = 0.0;
    if (color.b > 255.0) color.b = 255.0;
  }
  color /= 255.0; // make it 0..1
  return color;
}

// https://gist.github.com/fieldOfView/5106319
// https://gamedev.stackexchange.com/questions/93032/what-causes-this-distortion-in-my-perspective-projection-at-steep-view-angles
// for reference
void main()	{
  // z towards you, y towards up, x towards your left
  //  float hfov = (2.0 * ((uv.x+0.5)/resolution.x) - 1.0) * d * resolution.x/resolution.y;
  // float vfov = (1.0 - 2.0 * ((uv.y+0.5)/resolution.y)) * d;
  //  float d = tan(fov*DEG_TO_RAD / 2.0);

  float uvfov = tan(fov / 2.0 * DEG_TO_RAD);
  vec2 uv = square_frame(resolution); 

  uv *= vec2(resolution.x/resolution.y, 1.0);
  vec3 forward = normalize(cam_dir); // 
  vec3 up = normalize(cam_up);
  vec3 nright = normalize(cross(forward, up));
  up = cross(nright, forward);
  // generate ray
  vec3 pixel_pos =cam_pos + forward +
                 nright*uv.x*uvfov+ up*uv.y*uvfov;
  
  vec3 ray_dir = normalize(pixel_pos - cam_pos); // 
  
  

  // light aberration alters ray path 
  if (lorentz_transform)
    ray_dir = lorentz_transform_velocity(ray_dir, cam_vel);

  
  // initial color
  vec4 color = vec4(0.0,0.0,0.0,1.0);

  // geodesic by leapfrog integration

  vec3 point = cam_pos;
  vec3 velocity = ray_dir;
  vec3 c = cross(point,velocity);
  float h2 = dot(c,c);

  
  // for doppler effect
  float ray_gamma = 1.0/sqrt(1.0-dot(cam_vel,cam_vel));
  float ray_doppler_factor = ray_gamma * (1.0 + dot(ray_dir, -cam_vel));
    
  float ray_intensity = 1.0;
  if (beaming)
    ray_intensity /= pow(ray_doppler_factor , 3.0);
  
  
  vec3 oldpoint; 
  float pointsqr;
  
  float distance = length(point);

  // Leapfrog geodesic
  for (int i=0; i<NSTEPS;i++){ 
    oldpoint = point; // remember previous point for finding intersection
    point += velocity * STEP;
    vec3 accel = -1.5 * h2 * point / pow(dot(point,point),2.5);
    velocity += accel * STEP;    
    
    // distance from origin
    distance = length(point);
    if ( distance < 0.0) break;
    
    bool horizon_mask = distance < 1.0 && length(oldpoint) > 1.0;// intersecting eventhorizon
    // does it enter event horizon?
    if (horizon_mask) {
      vec4 black = vec4(0.0,0.0,0.0,1.0);
      color += black;
      break;
    }
    
    // intersect accretion disk
    if (accretion_disk){
      if (oldpoint.y * point.y < 0.0){
        // move along y axis
        float lambda = - oldpoint.y/velocity.y;
        vec3 intersection = oldpoint + lambda*velocity;
        float r = length(intersection);//dot(intersection,intersection);
        if (DISK_IN <= r&&r <= DISK_IN+DISK_WIDTH ){
          float phi = atan(intersection.x, intersection.z);
          
          vec3 disk_velocity = vec3(-intersection.x, 0.0, intersection.z)/sqrt(2.0*(r-1.0))/(r*r); 
          phi -= time;//length(r);
          phi = mod(phi , PI*2.0);
          float disk_gamma = 1.0/sqrt(1.0-dot(disk_velocity, disk_velocity));
          float disk_doppler_factor = disk_gamma*(1.0+dot(ray_dir/distance, disk_velocity)); // from source 
          
          if (use_disk_texture){
          // texture
            vec2 tex_coord = vec2(mod(phi,2.0*PI)/(2.0*PI),1.0-(r-DISK_IN)/(DISK_WIDTH));
            vec4 disk_color = texture2D(disk_texture, tex_coord) / (ray_doppler_factor * disk_doppler_factor);
            float disk_alpha = clamp(dot(disk_color,disk_color)/4.5,0.0,1.0);

            if (beaming)
              disk_alpha /= pow(disk_doppler_factor,3.0);
            
            color += vec4(disk_color)*disk_alpha;
          } else {
          
          // use blackbody 
          float disk_temperature = 10000.0*(pow(r/DISK_IN, -3.0/4.0));
          
            //doppler effect
          if (doppler_shift)
            disk_temperature /= ray_doppler_factor*disk_doppler_factor;

          vec3 disk_color = temp_to_color(disk_temperature);
          float disk_alpha = clamp(dot(disk_color,disk_color)/3.0,0.0,1.0);
          
          if (beaming)
            disk_alpha /= pow(disk_doppler_factor,3.0);
            
          
          color += vec4(disk_color, 1.0)*disk_alpha;
          
          }
        }
      }
    }
    
  }
  
  if (distance > 1.0){
    ray_dir = normalize(point - oldpoint);
    vec2 tex_coord = to_spherical(ray_dir * ROT_Z(45.0 * DEG_TO_RAD));
    // taken from source
    // red = temp
    // green = lum
    // blue = vel 
    vec4 star_color = texture2D(star_texture, tex_coord);
    if (star_color.g > 0.0){
      float star_temperature = (MIN_TEMPERATURE + TEMPERATURE_RANGE*star_color.r);
      // arbitrarily sets background stars' velocity for random shifts
      float star_velocity = star_color.b - 0.5;
      float star_doppler_factor = sqrt((1.0+star_velocity)/(1.0-star_velocity));
      if (doppler_shift)
        star_temperature /= ray_doppler_factor*star_doppler_factor;
      
      color += vec4(temp_to_color(star_temperature),1.0)* star_color.g;
    }

    color += texture2D(bg_texture, tex_coord) * 0.25;
// gl_FragColor = color;
  }
  gl_FragColor = color*ray_intensity;
}`,
  Vf = "/assets/star_noise-JiKuM4qU.png",
  Gf = "/assets/milkyway-_uw3Xqbw.jpg",
  Hf = "/assets/accretion_disk-5lsL-0Gz.png";
function Wf() {
  const r = new go();
  return (
    r.setClearColor(0, 1),
    r.setSize(window.innerWidth, window.innerHeight),
    (r.autoClear = !1),
    r
  );
}
function Xf(r) {
  const e = new Af(),
    t = new os();
  t.position.z = 1;
  const n = new Nf(r),
    i = new Uf(e, t),
    s = new Kn(new ds(128, 128), 0.8, 2, 0),
    o = new xo(cs);
  return (
    (o.renderToScreen = !0),
    n.addPass(i),
    n.addPass(s),
    n.addPass(o),
    { scene: e, composer: n, bloomPass: s }
  );
}
function qf(r) {
  const e = new Bf(60, window.innerWidth / window.innerHeight, 1, 8e4),
    t = new kf(e, r.domElement);
  return { observer: e, cameraControl: t };
}
function Yf() {
  const r = new Map(),
    e = new Pf();
  return (
    t("bg1", Gf, rt),
    t("star", Vf, dt),
    t("disk", Hf, dt),
    (window.onbeforeunload = () => {
      for (const n of r.values()) n.dispose();
    }),
    r
  );
  function t(n, i, s, o = Tt) {
    r.set(n, null),
      e.load(i, (a) => {
        (a.magFilter = s),
          (a.minFilter = s),
          (a.wrapT = o),
          (a.wrapS = o),
          r.set(n, a);
      });
  }
}
async function jf(r) {
  var a;
  const e =
    (a = document.getElementById("vertexShader")) == null
      ? void 0
      : a.textContent;
  if (!e) throw new Error("Error reading vertex shader!");
  const t = o("medium"),
    n = new ht({ uniforms: r, vertexShader: e, fragmentShader: t + Ia });
  n.needsUpdate = !0;
  const i = new Bt(new ar(2, 2), n);
  async function s(l) {
    const c = o(l);
    (n.fragmentShader = c + Ia), (n.needsUpdate = !0);
  }
  function o(l) {
    let c, u;
    switch (l) {
      case "low":
        (c = 0.1), (u = 300);
        break;
      case "medium":
        (c = 0.05), (u = 600);
        break;
      case "high":
        (c = 0.02), (u = 1e3);
        break;
      default:
        (c = 0.05), (u = 600);
    }
    return `
  #define STEP ${c} 
  #define NSTEPS ${u} 
`;
  }
  return { mesh: i, changePerformanceQuality: s };
}
var $f =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Zf(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var bo = { exports: {} };
(function (r, e) {
  (function (t, n) {
    r.exports = n();
  })($f, function () {
    var t = function () {
      function n(m) {
        return o.appendChild(m.dom), m;
      }
      function i(m) {
        for (var g = 0; g < o.children.length; g++)
          o.children[g].style.display = g === m ? "block" : "none";
        s = m;
      }
      var s = 0,
        o = document.createElement("div");
      (o.style.cssText =
        "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000"),
        o.addEventListener(
          "click",
          function (m) {
            m.preventDefault(), i(++s % o.children.length);
          },
          !1
        );
      var a = (performance || Date).now(),
        l = a,
        c = 0,
        u = n(new t.Panel("FPS", "#0ff", "#002")),
        d = n(new t.Panel("MS", "#0f0", "#020"));
      if (self.performance && self.performance.memory)
        var h = n(new t.Panel("MB", "#f08", "#201"));
      return (
        i(0),
        {
          REVISION: 16,
          dom: o,
          addPanel: n,
          showPanel: i,
          begin: function () {
            a = (performance || Date).now();
          },
          end: function () {
            c++;
            var m = (performance || Date).now();
            if (
              (d.update(m - a, 200),
              m > l + 1e3 &&
                (u.update((1e3 * c) / (m - l), 100), (l = m), (c = 0), h))
            ) {
              var g = performance.memory;
              h.update(g.usedJSHeapSize / 1048576, g.jsHeapSizeLimit / 1048576);
            }
            return m;
          },
          update: function () {
            a = this.end();
          },
          domElement: o,
          setMode: i,
        }
      );
    };
    return (
      (t.Panel = function (n, i, s) {
        var o = 1 / 0,
          a = 0,
          l = Math.round,
          c = l(window.devicePixelRatio || 1),
          u = 80 * c,
          d = 48 * c,
          h = 3 * c,
          m = 2 * c,
          g = 3 * c,
          p = 15 * c,
          f = 74 * c,
          x = 30 * c,
          w = document.createElement("canvas");
        (w.width = u),
          (w.height = d),
          (w.style.cssText = "width:80px;height:48px");
        var y = w.getContext("2d");
        return (
          (y.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif"),
          (y.textBaseline = "top"),
          (y.fillStyle = s),
          y.fillRect(0, 0, u, d),
          (y.fillStyle = i),
          y.fillText(n, h, m),
          y.fillRect(g, p, f, x),
          (y.fillStyle = s),
          (y.globalAlpha = 0.9),
          y.fillRect(g, p, f, x),
          {
            dom: w,
            update: function (E, M) {
              (o = Math.min(o, E)),
                (a = Math.max(a, E)),
                (y.fillStyle = s),
                (y.globalAlpha = 1),
                y.fillRect(0, 0, u, p),
                (y.fillStyle = i),
                y.fillText(
                  l(E) + " " + n + " (" + l(o) + "-" + l(a) + ")",
                  h,
                  m
                ),
                y.drawImage(w, g + c, p, f - c, x, g, p, f - c, x),
                y.fillRect(g + f - c, p, c, x),
                (y.fillStyle = s),
                (y.globalAlpha = 0.9),
                y.fillRect(g + f - c, p, c, l((1 - E / M) * x));
            },
          }
        );
      }),
      t
    );
  });
})(bo);
var Kf = bo.exports;
const Jf = Zf(Kf);
function Qf() {
  const r = new Jf();
  return (
    (r.dom.style.position = "absolute"),
    (r.dom.style.left = "0px"),
    (r.dom.style.top = "0px"),
    r
  );
}
function ep(r) {
  if (r && !(typeof window > "u")) {
    var e = document.createElement("style");
    return (
      e.setAttribute("type", "text/css"),
      (e.innerHTML = r),
      document.head.appendChild(e),
      r
    );
  }
}
function Wn(r, e) {
  var t = r.__state.conversionName.toString(),
    n = Math.round(r.r),
    i = Math.round(r.g),
    s = Math.round(r.b),
    o = r.a,
    a = Math.round(r.h),
    l = r.s.toFixed(1),
    c = r.v.toFixed(1);
  if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") {
    for (var u = r.hex.toString(16); u.length < 6; ) u = "0" + u;
    return "#" + u;
  } else {
    if (t === "CSS_RGB") return "rgb(" + n + "," + i + "," + s + ")";
    if (t === "CSS_RGBA")
      return "rgba(" + n + "," + i + "," + s + "," + o + ")";
    if (t === "HEX") return "0x" + r.hex.toString(16);
    if (t === "RGB_ARRAY") return "[" + n + "," + i + "," + s + "]";
    if (t === "RGBA_ARRAY") return "[" + n + "," + i + "," + s + "," + o + "]";
    if (t === "RGB_OBJ") return "{r:" + n + ",g:" + i + ",b:" + s + "}";
    if (t === "RGBA_OBJ")
      return "{r:" + n + ",g:" + i + ",b:" + s + ",a:" + o + "}";
    if (t === "HSV_OBJ") return "{h:" + a + ",s:" + l + ",v:" + c + "}";
    if (t === "HSVA_OBJ")
      return "{h:" + a + ",s:" + l + ",v:" + c + ",a:" + o + "}";
  }
  return "unknown format";
}
var Fa = Array.prototype.forEach,
  ui = Array.prototype.slice,
  q = {
    BREAK: {},
    extend: function (e) {
      return (
        this.each(
          ui.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (i) {
                this.isUndefined(t[i]) || (e[i] = t[i]);
              }.bind(this)
            );
          },
          this
        ),
        e
      );
    },
    defaults: function (e) {
      return (
        this.each(
          ui.call(arguments, 1),
          function (t) {
            var n = this.isObject(t) ? Object.keys(t) : [];
            n.forEach(
              function (i) {
                this.isUndefined(e[i]) && (e[i] = t[i]);
              }.bind(this)
            );
          },
          this
        ),
        e
      );
    },
    compose: function () {
      var e = ui.call(arguments);
      return function () {
        for (var t = ui.call(arguments), n = e.length - 1; n >= 0; n--)
          t = [e[n].apply(this, t)];
        return t[0];
      };
    },
    each: function (e, t, n) {
      if (e) {
        if (Fa && e.forEach && e.forEach === Fa) e.forEach(t, n);
        else if (e.length === e.length + 0) {
          var i = void 0,
            s = void 0;
          for (i = 0, s = e.length; i < s; i++)
            if (i in e && t.call(n, e[i], i) === this.BREAK) return;
        } else for (var o in e) if (t.call(n, e[o], o) === this.BREAK) return;
      }
    },
    defer: function (e) {
      setTimeout(e, 0);
    },
    debounce: function (e, t, n) {
      var i = void 0;
      return function () {
        var s = this,
          o = arguments;
        function a() {
          (i = null), n || e.apply(s, o);
        }
        var l = n || !i;
        clearTimeout(i), (i = setTimeout(a, t)), l && e.apply(s, o);
      };
    },
    toArray: function (e) {
      return e.toArray ? e.toArray() : ui.call(e);
    },
    isUndefined: function (e) {
      return e === void 0;
    },
    isNull: function (e) {
      return e === null;
    },
    isNaN: (function (r) {
      function e(t) {
        return r.apply(this, arguments);
      }
      return (
        (e.toString = function () {
          return r.toString();
        }),
        e
      );
    })(function (r) {
      return isNaN(r);
    }),
    isArray:
      Array.isArray ||
      function (r) {
        return r.constructor === Array;
      },
    isObject: function (e) {
      return e === Object(e);
    },
    isNumber: function (e) {
      return e === e + 0;
    },
    isString: function (e) {
      return e === e + "";
    },
    isBoolean: function (e) {
      return e === !1 || e === !0;
    },
    isFunction: function (e) {
      return e instanceof Function;
    },
  },
  tp = [
    {
      litmus: q.isString,
      conversions: {
        THREE_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
            return t === null
              ? !1
              : {
                  space: "HEX",
                  hex: parseInt(
                    "0x" +
                      t[1].toString() +
                      t[1].toString() +
                      t[2].toString() +
                      t[2].toString() +
                      t[3].toString() +
                      t[3].toString(),
                    0
                  ),
                };
          },
          write: Wn,
        },
        SIX_CHAR_HEX: {
          read: function (e) {
            var t = e.match(/^#([A-F0-9]{6})$/i);
            return t === null
              ? !1
              : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) };
          },
          write: Wn,
        },
        CSS_RGB: {
          read: function (e) {
            var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
            return t === null
              ? !1
              : {
                  space: "RGB",
                  r: parseFloat(t[1]),
                  g: parseFloat(t[2]),
                  b: parseFloat(t[3]),
                };
          },
          write: Wn,
        },
        CSS_RGBA: {
          read: function (e) {
            var t = e.match(
              /^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/
            );
            return t === null
              ? !1
              : {
                  space: "RGB",
                  r: parseFloat(t[1]),
                  g: parseFloat(t[2]),
                  b: parseFloat(t[3]),
                  a: parseFloat(t[4]),
                };
          },
          write: Wn,
        },
      },
    },
    {
      litmus: q.isNumber,
      conversions: {
        HEX: {
          read: function (e) {
            return { space: "HEX", hex: e, conversionName: "HEX" };
          },
          write: function (e) {
            return e.hex;
          },
        },
      },
    },
    {
      litmus: q.isArray,
      conversions: {
        RGB_ARRAY: {
          read: function (e) {
            return e.length !== 3
              ? !1
              : { space: "RGB", r: e[0], g: e[1], b: e[2] };
          },
          write: function (e) {
            return [e.r, e.g, e.b];
          },
        },
        RGBA_ARRAY: {
          read: function (e) {
            return e.length !== 4
              ? !1
              : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] };
          },
          write: function (e) {
            return [e.r, e.g, e.b, e.a];
          },
        },
      },
    },
    {
      litmus: q.isObject,
      conversions: {
        RGBA_OBJ: {
          read: function (e) {
            return q.isNumber(e.r) &&
              q.isNumber(e.g) &&
              q.isNumber(e.b) &&
              q.isNumber(e.a)
              ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a }
              : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b, a: e.a };
          },
        },
        RGB_OBJ: {
          read: function (e) {
            return q.isNumber(e.r) && q.isNumber(e.g) && q.isNumber(e.b)
              ? { space: "RGB", r: e.r, g: e.g, b: e.b }
              : !1;
          },
          write: function (e) {
            return { r: e.r, g: e.g, b: e.b };
          },
        },
        HSVA_OBJ: {
          read: function (e) {
            return q.isNumber(e.h) &&
              q.isNumber(e.s) &&
              q.isNumber(e.v) &&
              q.isNumber(e.a)
              ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a }
              : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v, a: e.a };
          },
        },
        HSV_OBJ: {
          read: function (e) {
            return q.isNumber(e.h) && q.isNumber(e.s) && q.isNumber(e.v)
              ? { space: "HSV", h: e.h, s: e.s, v: e.v }
              : !1;
          },
          write: function (e) {
            return { h: e.h, s: e.s, v: e.v };
          },
        },
      },
    },
  ],
  di = void 0,
  Zi = void 0,
  tr = function () {
    Zi = !1;
    var e = arguments.length > 1 ? q.toArray(arguments) : arguments[0];
    return (
      q.each(tp, function (t) {
        if (t.litmus(e))
          return (
            q.each(t.conversions, function (n, i) {
              if (((di = n.read(e)), Zi === !1 && di !== !1))
                return (
                  (Zi = di),
                  (di.conversionName = i),
                  (di.conversion = n),
                  q.BREAK
                );
            }),
            q.BREAK
          );
      }),
      Zi
    );
  },
  Oa = void 0,
  yi = {
    hsv_to_rgb: function (e, t, n) {
      var i = Math.floor(e / 60) % 6,
        s = e / 60 - Math.floor(e / 60),
        o = n * (1 - t),
        a = n * (1 - s * t),
        l = n * (1 - (1 - s) * t),
        c = [
          [n, l, o],
          [a, n, o],
          [o, n, l],
          [o, a, n],
          [l, o, n],
          [n, o, a],
        ][i];
      return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 };
    },
    rgb_to_hsv: function (e, t, n) {
      var i = Math.min(e, t, n),
        s = Math.max(e, t, n),
        o = s - i,
        a = void 0,
        l = void 0;
      if (s !== 0) l = o / s;
      else return { h: NaN, s: 0, v: 0 };
      return (
        e === s
          ? (a = (t - n) / o)
          : t === s
          ? (a = 2 + (n - e) / o)
          : (a = 4 + (e - t) / o),
        (a /= 6),
        a < 0 && (a += 1),
        { h: a * 360, s: l, v: s / 255 }
      );
    },
    rgb_to_hex: function (e, t, n) {
      var i = this.hex_with_component(0, 2, e);
      return (
        (i = this.hex_with_component(i, 1, t)),
        (i = this.hex_with_component(i, 0, n)),
        i
      );
    },
    component_from_hex: function (e, t) {
      return (e >> (t * 8)) & 255;
    },
    hex_with_component: function (e, t, n) {
      return (n << (Oa = t * 8)) | (e & ~(255 << Oa));
    },
  },
  np =
    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
      ? function (r) {
          return typeof r;
        }
      : function (r) {
          return r &&
            typeof Symbol == "function" &&
            r.constructor === Symbol &&
            r !== Symbol.prototype
            ? "symbol"
            : typeof r;
        },
  Ft = function (r, e) {
    if (!(r instanceof e))
      throw new TypeError("Cannot call a class as a function");
  },
  Ot = (function () {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    return function (e, t, n) {
      return t && r(e.prototype, t), n && r(e, n), e;
    };
  })(),
  rn = function r(e, t, n) {
    e === null && (e = Function.prototype);
    var i = Object.getOwnPropertyDescriptor(e, t);
    if (i === void 0) {
      var s = Object.getPrototypeOf(e);
      return s === null ? void 0 : r(s, t, n);
    } else {
      if ("value" in i) return i.value;
      var o = i.get;
      return o === void 0 ? void 0 : o.call(n);
    }
  },
  an = function (r, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " + typeof e
      );
    (r.prototype = Object.create(e && e.prototype, {
      constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
    })),
      e &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(r, e)
          : (r.__proto__ = e));
  },
  on = function (r, e) {
    if (!r)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e && (typeof e == "object" || typeof e == "function") ? e : r;
  },
  je = (function () {
    function r() {
      if (
        (Ft(this, r),
        (this.__state = tr.apply(this, arguments)),
        this.__state === !1)
      )
        throw new Error("Failed to interpret color arguments");
      this.__state.a = this.__state.a || 1;
    }
    return (
      Ot(r, [
        {
          key: "toString",
          value: function () {
            return Wn(this);
          },
        },
        {
          key: "toHexString",
          value: function () {
            return Wn(this, !0);
          },
        },
        {
          key: "toOriginal",
          value: function () {
            return this.__state.conversion.write(this);
          },
        },
      ]),
      r
    );
  })();
function hs(r, e, t) {
  Object.defineProperty(r, e, {
    get: function () {
      return this.__state.space === "RGB"
        ? this.__state[e]
        : (je.recalculateRGB(this, e, t), this.__state[e]);
    },
    set: function (i) {
      this.__state.space !== "RGB" &&
        (je.recalculateRGB(this, e, t), (this.__state.space = "RGB")),
        (this.__state[e] = i);
    },
  });
}
function fs(r, e) {
  Object.defineProperty(r, e, {
    get: function () {
      return this.__state.space === "HSV"
        ? this.__state[e]
        : (je.recalculateHSV(this), this.__state[e]);
    },
    set: function (n) {
      this.__state.space !== "HSV" &&
        (je.recalculateHSV(this), (this.__state.space = "HSV")),
        (this.__state[e] = n);
    },
  });
}
je.recalculateRGB = function (r, e, t) {
  if (r.__state.space === "HEX")
    r.__state[e] = yi.component_from_hex(r.__state.hex, t);
  else if (r.__state.space === "HSV")
    q.extend(r.__state, yi.hsv_to_rgb(r.__state.h, r.__state.s, r.__state.v));
  else throw new Error("Corrupted color state");
};
je.recalculateHSV = function (r) {
  var e = yi.rgb_to_hsv(r.r, r.g, r.b);
  q.extend(r.__state, { s: e.s, v: e.v }),
    q.isNaN(e.h)
      ? q.isUndefined(r.__state.h) && (r.__state.h = 0)
      : (r.__state.h = e.h);
};
je.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"];
hs(je.prototype, "r", 2);
hs(je.prototype, "g", 1);
hs(je.prototype, "b", 0);
fs(je.prototype, "h");
fs(je.prototype, "s");
fs(je.prototype, "v");
Object.defineProperty(je.prototype, "a", {
  get: function () {
    return this.__state.a;
  },
  set: function (e) {
    this.__state.a = e;
  },
});
Object.defineProperty(je.prototype, "hex", {
  get: function () {
    return (
      this.__state.space !== "HEX" &&
        ((this.__state.hex = yi.rgb_to_hex(this.r, this.g, this.b)),
        (this.__state.space = "HEX")),
      this.__state.hex
    );
  },
  set: function (e) {
    (this.__state.space = "HEX"), (this.__state.hex = e);
  },
});
var ln = (function () {
    function r(e, t) {
      Ft(this, r),
        (this.initialValue = e[t]),
        (this.domElement = document.createElement("div")),
        (this.object = e),
        (this.property = t),
        (this.__onChange = void 0),
        (this.__onFinishChange = void 0);
    }
    return (
      Ot(r, [
        {
          key: "onChange",
          value: function (t) {
            return (this.__onChange = t), this;
          },
        },
        {
          key: "onFinishChange",
          value: function (t) {
            return (this.__onFinishChange = t), this;
          },
        },
        {
          key: "setValue",
          value: function (t) {
            return (
              (this.object[this.property] = t),
              this.__onChange && this.__onChange.call(this, t),
              this.updateDisplay(),
              this
            );
          },
        },
        {
          key: "getValue",
          value: function () {
            return this.object[this.property];
          },
        },
        {
          key: "updateDisplay",
          value: function () {
            return this;
          },
        },
        {
          key: "isModified",
          value: function () {
            return this.initialValue !== this.getValue();
          },
        },
      ]),
      r
    );
  })(),
  ip = {
    HTMLEvents: ["change"],
    MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"],
    KeyboardEvents: ["keydown"],
  },
  yo = {};
q.each(ip, function (r, e) {
  q.each(r, function (t) {
    yo[t] = e;
  });
});
var rp = /(\d+(\.\d+)?)px/;
function Nt(r) {
  if (r === "0" || q.isUndefined(r)) return 0;
  var e = r.match(rp);
  return q.isNull(e) ? 0 : parseFloat(e[1]);
}
var P = {
    makeSelectable: function (e, t) {
      e === void 0 ||
        e.style === void 0 ||
        ((e.onselectstart = t
          ? function () {
              return !1;
            }
          : function () {}),
        (e.style.MozUserSelect = t ? "auto" : "none"),
        (e.style.KhtmlUserSelect = t ? "auto" : "none"),
        (e.unselectable = t ? "on" : "off"));
    },
    makeFullscreen: function (e, t, n) {
      var i = n,
        s = t;
      q.isUndefined(s) && (s = !0),
        q.isUndefined(i) && (i = !0),
        (e.style.position = "absolute"),
        s && ((e.style.left = 0), (e.style.right = 0)),
        i && ((e.style.top = 0), (e.style.bottom = 0));
    },
    fakeEvent: function (e, t, n, i) {
      var s = n || {},
        o = yo[t];
      if (!o) throw new Error("Event type " + t + " not supported.");
      var a = document.createEvent(o);
      switch (o) {
        case "MouseEvents": {
          var l = s.x || s.clientX || 0,
            c = s.y || s.clientY || 0;
          a.initMouseEvent(
            t,
            s.bubbles || !1,
            s.cancelable || !0,
            window,
            s.clickCount || 1,
            0,
            0,
            l,
            c,
            !1,
            !1,
            !1,
            !1,
            0,
            null
          );
          break;
        }
        case "KeyboardEvents": {
          var u = a.initKeyboardEvent || a.initKeyEvent;
          q.defaults(s, {
            cancelable: !0,
            ctrlKey: !1,
            altKey: !1,
            shiftKey: !1,
            metaKey: !1,
            keyCode: void 0,
            charCode: void 0,
          }),
            u(
              t,
              s.bubbles || !1,
              s.cancelable,
              window,
              s.ctrlKey,
              s.altKey,
              s.shiftKey,
              s.metaKey,
              s.keyCode,
              s.charCode
            );
          break;
        }
        default: {
          a.initEvent(t, s.bubbles || !1, s.cancelable || !0);
          break;
        }
      }
      q.defaults(a, i), e.dispatchEvent(a);
    },
    bind: function (e, t, n, i) {
      var s = i || !1;
      return (
        e.addEventListener
          ? e.addEventListener(t, n, s)
          : e.attachEvent && e.attachEvent("on" + t, n),
        P
      );
    },
    unbind: function (e, t, n, i) {
      var s = i || !1;
      return (
        e.removeEventListener
          ? e.removeEventListener(t, n, s)
          : e.detachEvent && e.detachEvent("on" + t, n),
        P
      );
    },
    addClass: function (e, t) {
      if (e.className === void 0) e.className = t;
      else if (e.className !== t) {
        var n = e.className.split(/ +/);
        n.indexOf(t) === -1 &&
          (n.push(t),
          (e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")));
      }
      return P;
    },
    removeClass: function (e, t) {
      if (t)
        if (e.className === t) e.removeAttribute("class");
        else {
          var n = e.className.split(/ +/),
            i = n.indexOf(t);
          i !== -1 && (n.splice(i, 1), (e.className = n.join(" ")));
        }
      else e.className = void 0;
      return P;
    },
    hasClass: function (e, t) {
      return (
        new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1
      );
    },
    getWidth: function (e) {
      var t = getComputedStyle(e);
      return (
        Nt(t["border-left-width"]) +
        Nt(t["border-right-width"]) +
        Nt(t["padding-left"]) +
        Nt(t["padding-right"]) +
        Nt(t.width)
      );
    },
    getHeight: function (e) {
      var t = getComputedStyle(e);
      return (
        Nt(t["border-top-width"]) +
        Nt(t["border-bottom-width"]) +
        Nt(t["padding-top"]) +
        Nt(t["padding-bottom"]) +
        Nt(t.height)
      );
    },
    getOffset: function (e) {
      var t = e,
        n = { left: 0, top: 0 };
      if (t.offsetParent)
        do
          (n.left += t.offsetLeft),
            (n.top += t.offsetTop),
            (t = t.offsetParent);
        while (t);
      return n;
    },
    isActive: function (e) {
      return e === document.activeElement && (e.type || e.href);
    },
  },
  ps = (function (r) {
    an(e, r);
    function e(t, n) {
      Ft(this, e);
      var i = on(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
        ),
        s = i;
      (i.__prev = i.getValue()),
        (i.__checkbox = document.createElement("input")),
        i.__checkbox.setAttribute("type", "checkbox");
      function o() {
        s.setValue(!s.__prev);
      }
      return (
        P.bind(i.__checkbox, "change", o, !1),
        i.domElement.appendChild(i.__checkbox),
        i.updateDisplay(),
        i
      );
    }
    return (
      Ot(e, [
        {
          key: "setValue",
          value: function (n) {
            var i = rn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "setValue",
              this
            ).call(this, n);
            return (
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue()),
              (this.__prev = this.getValue()),
              i
            );
          },
        },
        {
          key: "updateDisplay",
          value: function () {
            return (
              this.getValue() === !0
                ? (this.__checkbox.setAttribute("checked", "checked"),
                  (this.__checkbox.checked = !0),
                  (this.__prev = !0))
                : ((this.__checkbox.checked = !1), (this.__prev = !1)),
              rn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                "updateDisplay",
                this
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(ln),
  Mo = (function (r) {
    an(e, r);
    function e(t, n, i) {
      Ft(this, e);
      var s = on(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
        ),
        o = i,
        a = s;
      if (((s.__select = document.createElement("select")), q.isArray(o))) {
        var l = {};
        q.each(o, function (c) {
          l[c] = c;
        }),
          (o = l);
      }
      return (
        q.each(o, function (c, u) {
          var d = document.createElement("option");
          (d.innerHTML = u),
            d.setAttribute("value", c),
            a.__select.appendChild(d);
        }),
        s.updateDisplay(),
        P.bind(s.__select, "change", function () {
          var c = this.options[this.selectedIndex].value;
          a.setValue(c);
        }),
        s.domElement.appendChild(s.__select),
        s
      );
    }
    return (
      Ot(e, [
        {
          key: "setValue",
          value: function (n) {
            var i = rn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "setValue",
              this
            ).call(this, n);
            return (
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue()),
              i
            );
          },
        },
        {
          key: "updateDisplay",
          value: function () {
            return P.isActive(this.__select)
              ? this
              : ((this.__select.value = this.getValue()),
                rn(
                  e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                  "updateDisplay",
                  this
                ).call(this));
          },
        },
      ]),
      e
    );
  })(ln),
  So = (function (r) {
    an(e, r);
    function e(t, n) {
      Ft(this, e);
      var i = on(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
        ),
        s = i;
      function o() {
        s.setValue(s.__input.value);
      }
      function a() {
        s.__onFinishChange && s.__onFinishChange.call(s, s.getValue());
      }
      return (
        (i.__input = document.createElement("input")),
        i.__input.setAttribute("type", "text"),
        P.bind(i.__input, "keyup", o),
        P.bind(i.__input, "change", o),
        P.bind(i.__input, "blur", a),
        P.bind(i.__input, "keydown", function (l) {
          l.keyCode === 13 && this.blur();
        }),
        i.updateDisplay(),
        i.domElement.appendChild(i.__input),
        i
      );
    }
    return (
      Ot(e, [
        {
          key: "updateDisplay",
          value: function () {
            return (
              P.isActive(this.__input) ||
                (this.__input.value = this.getValue()),
              rn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                "updateDisplay",
                this
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(ln);
function Na(r) {
  var e = r.toString();
  return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0;
}
var ms = (function (r) {
  an(e, r);
  function e(t, n, i) {
    Ft(this, e);
    var s = on(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
      ),
      o = i || {};
    return (
      (s.__min = o.min),
      (s.__max = o.max),
      (s.__step = o.step),
      q.isUndefined(s.__step)
        ? s.initialValue === 0
          ? (s.__impliedStep = 1)
          : (s.__impliedStep =
              Math.pow(
                10,
                Math.floor(Math.log(Math.abs(s.initialValue)) / Math.LN10)
              ) / 10)
        : (s.__impliedStep = s.__step),
      (s.__precision = Na(s.__impliedStep)),
      s
    );
  }
  return (
    Ot(e, [
      {
        key: "setValue",
        value: function (n) {
          var i = n;
          return (
            this.__min !== void 0 && i < this.__min
              ? (i = this.__min)
              : this.__max !== void 0 && i > this.__max && (i = this.__max),
            this.__step !== void 0 &&
              i % this.__step !== 0 &&
              (i = Math.round(i / this.__step) * this.__step),
            rn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "setValue",
              this
            ).call(this, i)
          );
        },
      },
      {
        key: "min",
        value: function (n) {
          return (this.__min = n), this;
        },
      },
      {
        key: "max",
        value: function (n) {
          return (this.__max = n), this;
        },
      },
      {
        key: "step",
        value: function (n) {
          return (
            (this.__step = n),
            (this.__impliedStep = n),
            (this.__precision = Na(n)),
            this
          );
        },
      },
    ]),
    e
  );
})(ln);
function sp(r, e) {
  var t = Math.pow(10, e);
  return Math.round(r * t) / t;
}
var Mi = (function (r) {
  an(e, r);
  function e(t, n, i) {
    Ft(this, e);
    var s = on(
      this,
      (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i)
    );
    s.__truncationSuspended = !1;
    var o = s,
      a = void 0;
    function l() {
      var g = parseFloat(o.__input.value);
      q.isNaN(g) || o.setValue(g);
    }
    function c() {
      o.__onFinishChange && o.__onFinishChange.call(o, o.getValue());
    }
    function u() {
      c();
    }
    function d(g) {
      var p = a - g.clientY;
      o.setValue(o.getValue() + p * o.__impliedStep), (a = g.clientY);
    }
    function h() {
      P.unbind(window, "mousemove", d), P.unbind(window, "mouseup", h), c();
    }
    function m(g) {
      P.bind(window, "mousemove", d),
        P.bind(window, "mouseup", h),
        (a = g.clientY);
    }
    return (
      (s.__input = document.createElement("input")),
      s.__input.setAttribute("type", "text"),
      P.bind(s.__input, "change", l),
      P.bind(s.__input, "blur", u),
      P.bind(s.__input, "mousedown", m),
      P.bind(s.__input, "keydown", function (g) {
        g.keyCode === 13 &&
          ((o.__truncationSuspended = !0),
          this.blur(),
          (o.__truncationSuspended = !1),
          c());
      }),
      s.updateDisplay(),
      s.domElement.appendChild(s.__input),
      s
    );
  }
  return (
    Ot(e, [
      {
        key: "updateDisplay",
        value: function () {
          return (
            (this.__input.value = this.__truncationSuspended
              ? this.getValue()
              : sp(this.getValue(), this.__precision)),
            rn(
              e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
              "updateDisplay",
              this
            ).call(this)
          );
        },
      },
    ]),
    e
  );
})(ms);
function Ua(r, e, t, n, i) {
  return n + (i - n) * ((r - e) / (t - e));
}
var nr = (function (r) {
    an(e, r);
    function e(t, n, i, s, o) {
      Ft(this, e);
      var a = on(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, {
            min: i,
            max: s,
            step: o,
          })
        ),
        l = a;
      (a.__background = document.createElement("div")),
        (a.__foreground = document.createElement("div")),
        P.bind(a.__background, "mousedown", c),
        P.bind(a.__background, "touchstart", h),
        P.addClass(a.__background, "slider"),
        P.addClass(a.__foreground, "slider-fg");
      function c(p) {
        document.activeElement.blur(),
          P.bind(window, "mousemove", u),
          P.bind(window, "mouseup", d),
          u(p);
      }
      function u(p) {
        p.preventDefault();
        var f = l.__background.getBoundingClientRect();
        return l.setValue(Ua(p.clientX, f.left, f.right, l.__min, l.__max)), !1;
      }
      function d() {
        P.unbind(window, "mousemove", u),
          P.unbind(window, "mouseup", d),
          l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      function h(p) {
        p.touches.length === 1 &&
          (P.bind(window, "touchmove", m), P.bind(window, "touchend", g), m(p));
      }
      function m(p) {
        var f = p.touches[0].clientX,
          x = l.__background.getBoundingClientRect();
        l.setValue(Ua(f, x.left, x.right, l.__min, l.__max));
      }
      function g() {
        P.unbind(window, "touchmove", m),
          P.unbind(window, "touchend", g),
          l.__onFinishChange && l.__onFinishChange.call(l, l.getValue());
      }
      return (
        a.updateDisplay(),
        a.__background.appendChild(a.__foreground),
        a.domElement.appendChild(a.__background),
        a
      );
    }
    return (
      Ot(e, [
        {
          key: "updateDisplay",
          value: function () {
            var n = (this.getValue() - this.__min) / (this.__max - this.__min);
            return (
              (this.__foreground.style.width = n * 100 + "%"),
              rn(
                e.prototype.__proto__ || Object.getPrototypeOf(e.prototype),
                "updateDisplay",
                this
              ).call(this)
            );
          },
        },
      ]),
      e
    );
  })(ms),
  gs = (function (r) {
    an(e, r);
    function e(t, n, i) {
      Ft(this, e);
      var s = on(
          this,
          (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
        ),
        o = s;
      return (
        (s.__button = document.createElement("div")),
        (s.__button.innerHTML = i === void 0 ? "Fire" : i),
        P.bind(s.__button, "click", function (a) {
          return a.preventDefault(), o.fire(), !1;
        }),
        P.addClass(s.__button, "button"),
        s.domElement.appendChild(s.__button),
        s
      );
    }
    return (
      Ot(e, [
        {
          key: "fire",
          value: function () {
            this.__onChange && this.__onChange.call(this),
              this.getValue().call(this.object),
              this.__onFinishChange &&
                this.__onFinishChange.call(this, this.getValue());
          },
        },
      ]),
      e
    );
  })(ln),
  ir = (function (r) {
    an(e, r);
    function e(t, n) {
      Ft(this, e);
      var i = on(
        this,
        (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)
      );
      (i.__color = new je(i.getValue())), (i.__temp = new je(0));
      var s = i;
      (i.domElement = document.createElement("div")),
        P.makeSelectable(i.domElement, !1),
        (i.__selector = document.createElement("div")),
        (i.__selector.className = "selector"),
        (i.__saturation_field = document.createElement("div")),
        (i.__saturation_field.className = "saturation-field"),
        (i.__field_knob = document.createElement("div")),
        (i.__field_knob.className = "field-knob"),
        (i.__field_knob_border = "2px solid "),
        (i.__hue_knob = document.createElement("div")),
        (i.__hue_knob.className = "hue-knob"),
        (i.__hue_field = document.createElement("div")),
        (i.__hue_field.className = "hue-field"),
        (i.__input = document.createElement("input")),
        (i.__input.type = "text"),
        (i.__input_textShadow = "0 1px 1px "),
        P.bind(i.__input, "keydown", function (p) {
          p.keyCode === 13 && d.call(this);
        }),
        P.bind(i.__input, "blur", d),
        P.bind(i.__selector, "mousedown", function () {
          P.addClass(this, "drag").bind(window, "mouseup", function () {
            P.removeClass(s.__selector, "drag");
          });
        }),
        P.bind(i.__selector, "touchstart", function () {
          P.addClass(this, "drag").bind(window, "touchend", function () {
            P.removeClass(s.__selector, "drag");
          });
        });
      var o = document.createElement("div");
      q.extend(i.__selector.style, {
        width: "122px",
        height: "102px",
        padding: "3px",
        backgroundColor: "#222",
        boxShadow: "0px 1px 3px rgba(0,0,0,0.3)",
      }),
        q.extend(i.__field_knob.style, {
          position: "absolute",
          width: "12px",
          height: "12px",
          border: i.__field_knob_border + (i.__color.v < 0.5 ? "#fff" : "#000"),
          boxShadow: "0px 1px 3px rgba(0,0,0,0.5)",
          borderRadius: "12px",
          zIndex: 1,
        }),
        q.extend(i.__hue_knob.style, {
          position: "absolute",
          width: "15px",
          height: "2px",
          borderRight: "4px solid #fff",
          zIndex: 1,
        }),
        q.extend(i.__saturation_field.style, {
          width: "100px",
          height: "100px",
          border: "1px solid #555",
          marginRight: "3px",
          display: "inline-block",
          cursor: "pointer",
        }),
        q.extend(o.style, {
          width: "100%",
          height: "100%",
          background: "none",
        }),
        za(o, "top", "rgba(0,0,0,0)", "#000"),
        q.extend(i.__hue_field.style, {
          width: "15px",
          height: "100px",
          border: "1px solid #555",
          cursor: "ns-resize",
          position: "absolute",
          top: "3px",
          right: "3px",
        }),
        op(i.__hue_field),
        q.extend(i.__input.style, {
          outline: "none",
          textAlign: "center",
          color: "#fff",
          border: 0,
          fontWeight: "bold",
          textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)",
        }),
        P.bind(i.__saturation_field, "mousedown", a),
        P.bind(i.__saturation_field, "touchstart", a),
        P.bind(i.__field_knob, "mousedown", a),
        P.bind(i.__field_knob, "touchstart", a),
        P.bind(i.__hue_field, "mousedown", l),
        P.bind(i.__hue_field, "touchstart", l);
      function a(p) {
        m(p),
          P.bind(window, "mousemove", m),
          P.bind(window, "touchmove", m),
          P.bind(window, "mouseup", c),
          P.bind(window, "touchend", c);
      }
      function l(p) {
        g(p),
          P.bind(window, "mousemove", g),
          P.bind(window, "touchmove", g),
          P.bind(window, "mouseup", u),
          P.bind(window, "touchend", u);
      }
      function c() {
        P.unbind(window, "mousemove", m),
          P.unbind(window, "touchmove", m),
          P.unbind(window, "mouseup", c),
          P.unbind(window, "touchend", c),
          h();
      }
      function u() {
        P.unbind(window, "mousemove", g),
          P.unbind(window, "touchmove", g),
          P.unbind(window, "mouseup", u),
          P.unbind(window, "touchend", u),
          h();
      }
      function d() {
        var p = tr(this.value);
        p !== !1
          ? ((s.__color.__state = p), s.setValue(s.__color.toOriginal()))
          : (this.value = s.__color.toString());
      }
      function h() {
        s.__onFinishChange &&
          s.__onFinishChange.call(s, s.__color.toOriginal());
      }
      i.__saturation_field.appendChild(o),
        i.__selector.appendChild(i.__field_knob),
        i.__selector.appendChild(i.__saturation_field),
        i.__selector.appendChild(i.__hue_field),
        i.__hue_field.appendChild(i.__hue_knob),
        i.domElement.appendChild(i.__input),
        i.domElement.appendChild(i.__selector),
        i.updateDisplay();
      function m(p) {
        p.type.indexOf("touch") === -1 && p.preventDefault();
        var f = s.__saturation_field.getBoundingClientRect(),
          x = (p.touches && p.touches[0]) || p,
          w = x.clientX,
          y = x.clientY,
          E = (w - f.left) / (f.right - f.left),
          M = 1 - (y - f.top) / (f.bottom - f.top);
        return (
          M > 1 ? (M = 1) : M < 0 && (M = 0),
          E > 1 ? (E = 1) : E < 0 && (E = 0),
          (s.__color.v = M),
          (s.__color.s = E),
          s.setValue(s.__color.toOriginal()),
          !1
        );
      }
      function g(p) {
        p.type.indexOf("touch") === -1 && p.preventDefault();
        var f = s.__hue_field.getBoundingClientRect(),
          x = (p.touches && p.touches[0]) || p,
          w = x.clientY,
          y = 1 - (w - f.top) / (f.bottom - f.top);
        return (
          y > 1 ? (y = 1) : y < 0 && (y = 0),
          (s.__color.h = y * 360),
          s.setValue(s.__color.toOriginal()),
          !1
        );
      }
      return i;
    }
    return (
      Ot(e, [
        {
          key: "updateDisplay",
          value: function () {
            var n = tr(this.getValue());
            if (n !== !1) {
              var i = !1;
              q.each(
                je.COMPONENTS,
                function (a) {
                  if (
                    !q.isUndefined(n[a]) &&
                    !q.isUndefined(this.__color.__state[a]) &&
                    n[a] !== this.__color.__state[a]
                  )
                    return (i = !0), {};
                },
                this
              ),
                i && q.extend(this.__color.__state, n);
            }
            q.extend(this.__temp.__state, this.__color.__state),
              (this.__temp.a = 1);
            var s = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0,
              o = 255 - s;
            q.extend(this.__field_knob.style, {
              marginLeft: 100 * this.__color.s - 7 + "px",
              marginTop: 100 * (1 - this.__color.v) - 7 + "px",
              backgroundColor: this.__temp.toHexString(),
              border:
                this.__field_knob_border + "rgb(" + s + "," + s + "," + s + ")",
            }),
              (this.__hue_knob.style.marginTop =
                (1 - this.__color.h / 360) * 100 + "px"),
              (this.__temp.s = 1),
              (this.__temp.v = 1),
              za(
                this.__saturation_field,
                "left",
                "#fff",
                this.__temp.toHexString()
              ),
              (this.__input.value = this.__color.toString()),
              q.extend(this.__input.style, {
                backgroundColor: this.__color.toHexString(),
                color: "rgb(" + s + "," + s + "," + s + ")",
                textShadow:
                  this.__input_textShadow +
                  "rgba(" +
                  o +
                  "," +
                  o +
                  "," +
                  o +
                  ",.7)",
              });
          },
        },
      ]),
      e
    );
  })(ln),
  ap = ["-moz-", "-o-", "-webkit-", "-ms-", ""];
function za(r, e, t, n) {
  (r.style.background = ""),
    q.each(ap, function (i) {
      r.style.cssText +=
        "background: " +
        i +
        "linear-gradient(" +
        e +
        ", " +
        t +
        " 0%, " +
        n +
        " 100%); ";
    });
}
function op(r) {
  (r.style.background = ""),
    (r.style.cssText +=
      "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);"),
    (r.style.cssText +=
      "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
    (r.style.cssText +=
      "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
    (r.style.cssText +=
      "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"),
    (r.style.cssText +=
      "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);");
}
var lp = {
    load: function (e, t) {
      var n = t || document,
        i = n.createElement("link");
      (i.type = "text/css"),
        (i.rel = "stylesheet"),
        (i.href = e),
        n.getElementsByTagName("head")[0].appendChild(i);
    },
    inject: function (e, t) {
      var n = t || document,
        i = document.createElement("style");
      (i.type = "text/css"), (i.innerHTML = e);
      var s = n.getElementsByTagName("head")[0];
      try {
        s.appendChild(i);
      } catch {}
    },
  },
  cp = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,
  up = function (e, t) {
    var n = e[t];
    return q.isArray(arguments[2]) || q.isObject(arguments[2])
      ? new Mo(e, t, arguments[2])
      : q.isNumber(n)
      ? q.isNumber(arguments[2]) && q.isNumber(arguments[3])
        ? q.isNumber(arguments[4])
          ? new nr(e, t, arguments[2], arguments[3], arguments[4])
          : new nr(e, t, arguments[2], arguments[3])
        : q.isNumber(arguments[4])
        ? new Mi(e, t, {
            min: arguments[2],
            max: arguments[3],
            step: arguments[4],
          })
        : new Mi(e, t, { min: arguments[2], max: arguments[3] })
      : q.isString(n)
      ? new So(e, t)
      : q.isFunction(n)
      ? new gs(e, t, "")
      : q.isBoolean(n)
      ? new ps(e, t)
      : null;
  };
function dp(r) {
  setTimeout(r, 1e3 / 60);
}
var hp =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    dp,
  fp = (function () {
    function r() {
      Ft(this, r),
        (this.backgroundElement = document.createElement("div")),
        q.extend(this.backgroundElement.style, {
          backgroundColor: "rgba(0,0,0,0.8)",
          top: 0,
          left: 0,
          display: "none",
          zIndex: "1000",
          opacity: 0,
          WebkitTransition: "opacity 0.2s linear",
          transition: "opacity 0.2s linear",
        }),
        P.makeFullscreen(this.backgroundElement),
        (this.backgroundElement.style.position = "fixed"),
        (this.domElement = document.createElement("div")),
        q.extend(this.domElement.style, {
          position: "fixed",
          display: "none",
          zIndex: "1001",
          opacity: 0,
          WebkitTransition:
            "-webkit-transform 0.2s ease-out, opacity 0.2s linear",
          transition: "transform 0.2s ease-out, opacity 0.2s linear",
        }),
        document.body.appendChild(this.backgroundElement),
        document.body.appendChild(this.domElement);
      var e = this;
      P.bind(this.backgroundElement, "click", function () {
        e.hide();
      });
    }
    return (
      Ot(r, [
        {
          key: "show",
          value: function () {
            var t = this;
            (this.backgroundElement.style.display = "block"),
              (this.domElement.style.display = "block"),
              (this.domElement.style.opacity = 0),
              (this.domElement.style.webkitTransform = "scale(1.1)"),
              this.layout(),
              q.defer(function () {
                (t.backgroundElement.style.opacity = 1),
                  (t.domElement.style.opacity = 1),
                  (t.domElement.style.webkitTransform = "scale(1)");
              });
          },
        },
        {
          key: "hide",
          value: function () {
            var t = this,
              n = function i() {
                (t.domElement.style.display = "none"),
                  (t.backgroundElement.style.display = "none"),
                  P.unbind(t.domElement, "webkitTransitionEnd", i),
                  P.unbind(t.domElement, "transitionend", i),
                  P.unbind(t.domElement, "oTransitionEnd", i);
              };
            P.bind(this.domElement, "webkitTransitionEnd", n),
              P.bind(this.domElement, "transitionend", n),
              P.bind(this.domElement, "oTransitionEnd", n),
              (this.backgroundElement.style.opacity = 0),
              (this.domElement.style.opacity = 0),
              (this.domElement.style.webkitTransform = "scale(1.1)");
          },
        },
        {
          key: "layout",
          value: function () {
            (this.domElement.style.left =
              window.innerWidth / 2 - P.getWidth(this.domElement) / 2 + "px"),
              (this.domElement.style.top =
                window.innerHeight / 2 -
                P.getHeight(this.domElement) / 2 +
                "px");
          },
        },
      ]),
      r
    );
  })(),
  pp =
    ep(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);
lp.inject(pp);
var Ba = "dg",
  ka = 72,
  Va = 20,
  Si = "Default",
  pi = (function () {
    try {
      return !!window.localStorage;
    } catch {
      return !1;
    }
  })(),
  mi = void 0,
  Ga = !0,
  Vn = void 0,
  Wr = !1,
  wo = [],
  ze = function r(e) {
    var t = this,
      n = e || {};
    (this.domElement = document.createElement("div")),
      (this.__ul = document.createElement("ul")),
      this.domElement.appendChild(this.__ul),
      P.addClass(this.domElement, Ba),
      (this.__folders = {}),
      (this.__controllers = []),
      (this.__rememberedObjects = []),
      (this.__rememberedObjectIndecesToControllers = []),
      (this.__listening = []),
      (n = q.defaults(n, {
        closeOnTop: !1,
        autoPlace: !0,
        width: r.DEFAULT_WIDTH,
      })),
      (n = q.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace })),
      q.isUndefined(n.load)
        ? (n.load = { preset: Si })
        : n.preset && (n.load.preset = n.preset),
      q.isUndefined(n.parent) && n.hideable && wo.push(this),
      (n.resizable = q.isUndefined(n.parent) && n.resizable),
      n.autoPlace && q.isUndefined(n.scrollable) && (n.scrollable = !0);
    var i = pi && localStorage.getItem(Gn(this, "isLocal")) === "true",
      s = void 0,
      o = void 0;
    if (
      (Object.defineProperties(this, {
        parent: {
          get: function () {
            return n.parent;
          },
        },
        scrollable: {
          get: function () {
            return n.scrollable;
          },
        },
        autoPlace: {
          get: function () {
            return n.autoPlace;
          },
        },
        closeOnTop: {
          get: function () {
            return n.closeOnTop;
          },
        },
        preset: {
          get: function () {
            return t.parent ? t.getRoot().preset : n.load.preset;
          },
          set: function (h) {
            t.parent ? (t.getRoot().preset = h) : (n.load.preset = h),
              vp(this),
              t.revert();
          },
        },
        width: {
          get: function () {
            return n.width;
          },
          set: function (h) {
            (n.width = h), ns(t, h);
          },
        },
        name: {
          get: function () {
            return n.name;
          },
          set: function (h) {
            (n.name = h), o && (o.innerHTML = n.name);
          },
        },
        closed: {
          get: function () {
            return n.closed;
          },
          set: function (h) {
            (n.closed = h),
              n.closed
                ? P.addClass(t.__ul, r.CLASS_CLOSED)
                : P.removeClass(t.__ul, r.CLASS_CLOSED),
              this.onResize(),
              t.__closeButton &&
                (t.__closeButton.innerHTML = h ? r.TEXT_OPEN : r.TEXT_CLOSED);
          },
        },
        load: {
          get: function () {
            return n.load;
          },
        },
        useLocalStorage: {
          get: function () {
            return i;
          },
          set: function (h) {
            pi &&
              ((i = h),
              h ? P.bind(window, "unload", s) : P.unbind(window, "unload", s),
              localStorage.setItem(Gn(t, "isLocal"), h));
          },
        },
      }),
      q.isUndefined(n.parent))
    ) {
      if (
        ((this.closed = n.closed || !1),
        P.addClass(this.domElement, r.CLASS_MAIN),
        P.makeSelectable(this.domElement, !1),
        pi && i)
      ) {
        t.useLocalStorage = !0;
        var a = localStorage.getItem(Gn(this, "gui"));
        a && (n.load = JSON.parse(a));
      }
      (this.__closeButton = document.createElement("div")),
        (this.__closeButton.innerHTML = r.TEXT_CLOSED),
        P.addClass(this.__closeButton, r.CLASS_CLOSE_BUTTON),
        n.closeOnTop
          ? (P.addClass(this.__closeButton, r.CLASS_CLOSE_TOP),
            this.domElement.insertBefore(
              this.__closeButton,
              this.domElement.childNodes[0]
            ))
          : (P.addClass(this.__closeButton, r.CLASS_CLOSE_BOTTOM),
            this.domElement.appendChild(this.__closeButton)),
        P.bind(this.__closeButton, "click", function () {
          t.closed = !t.closed;
        });
    } else {
      n.closed === void 0 && (n.closed = !0);
      var l = document.createTextNode(n.name);
      P.addClass(l, "controller-name"), (o = _s(t, l));
      var c = function (h) {
        return h.preventDefault(), (t.closed = !t.closed), !1;
      };
      P.addClass(this.__ul, r.CLASS_CLOSED),
        P.addClass(o, "title"),
        P.bind(o, "click", c),
        n.closed || (this.closed = !1);
    }
    n.autoPlace &&
      (q.isUndefined(n.parent) &&
        (Ga &&
          ((Vn = document.createElement("div")),
          P.addClass(Vn, Ba),
          P.addClass(Vn, r.CLASS_AUTO_PLACE_CONTAINER),
          document.body.appendChild(Vn),
          (Ga = !1)),
        Vn.appendChild(this.domElement),
        P.addClass(this.domElement, r.CLASS_AUTO_PLACE)),
      this.parent || ns(t, n.width)),
      (this.__resizeHandler = function () {
        t.onResizeDebounced();
      }),
      P.bind(window, "resize", this.__resizeHandler),
      P.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler),
      P.bind(this.__ul, "transitionend", this.__resizeHandler),
      P.bind(this.__ul, "oTransitionEnd", this.__resizeHandler),
      this.onResize(),
      n.resizable && _p(this),
      (s = function () {
        pi &&
          localStorage.getItem(Gn(t, "isLocal")) === "true" &&
          localStorage.setItem(Gn(t, "gui"), JSON.stringify(t.getSaveObject()));
      }),
      (this.saveToLocalStorageIfPossible = s);
    function u() {
      var d = t.getRoot();
      (d.width += 1),
        q.defer(function () {
          d.width -= 1;
        });
    }
    n.parent || u();
  };
ze.toggleHide = function () {
  (Wr = !Wr),
    q.each(wo, function (r) {
      r.domElement.style.display = Wr ? "none" : "";
    });
};
ze.CLASS_AUTO_PLACE = "a";
ze.CLASS_AUTO_PLACE_CONTAINER = "ac";
ze.CLASS_MAIN = "main";
ze.CLASS_CONTROLLER_ROW = "cr";
ze.CLASS_TOO_TALL = "taller-than-window";
ze.CLASS_CLOSED = "closed";
ze.CLASS_CLOSE_BUTTON = "close-button";
ze.CLASS_CLOSE_TOP = "close-top";
ze.CLASS_CLOSE_BOTTOM = "close-bottom";
ze.CLASS_DRAG = "drag";
ze.DEFAULT_WIDTH = 245;
ze.TEXT_CLOSED = "Close Controls";
ze.TEXT_OPEN = "Open Controls";
ze._keydownHandler = function (r) {
  document.activeElement.type !== "text" &&
    (r.which === ka || r.keyCode === ka) &&
    ze.toggleHide();
};
P.bind(window, "keydown", ze._keydownHandler, !1);
q.extend(ze.prototype, {
  add: function (e, t) {
    return gi(this, e, t, {
      factoryArgs: Array.prototype.slice.call(arguments, 2),
    });
  },
  addColor: function (e, t) {
    return gi(this, e, t, { color: !0 });
  },
  remove: function (e) {
    this.__ul.removeChild(e.__li),
      this.__controllers.splice(this.__controllers.indexOf(e), 1);
    var t = this;
    q.defer(function () {
      t.onResize();
    });
  },
  destroy: function () {
    if (this.parent)
      throw new Error(
        "Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead."
      );
    this.autoPlace && Vn.removeChild(this.domElement);
    var e = this;
    q.each(this.__folders, function (t) {
      e.removeFolder(t);
    }),
      P.unbind(window, "keydown", ze._keydownHandler, !1),
      Ha(this);
  },
  addFolder: function (e) {
    if (this.__folders[e] !== void 0)
      throw new Error(
        'You already have a folder in this GUI by the name "' + e + '"'
      );
    var t = { name: e, parent: this };
    (t.autoPlace = this.autoPlace),
      this.load &&
        this.load.folders &&
        this.load.folders[e] &&
        ((t.closed = this.load.folders[e].closed),
        (t.load = this.load.folders[e]));
    var n = new ze(t);
    this.__folders[e] = n;
    var i = _s(this, n.domElement);
    return P.addClass(i, "folder"), n;
  },
  removeFolder: function (e) {
    this.__ul.removeChild(e.domElement.parentElement),
      delete this.__folders[e.name],
      this.load &&
        this.load.folders &&
        this.load.folders[e.name] &&
        delete this.load.folders[e.name],
      Ha(e);
    var t = this;
    q.each(e.__folders, function (n) {
      e.removeFolder(n);
    }),
      q.defer(function () {
        t.onResize();
      });
  },
  open: function () {
    this.closed = !1;
  },
  close: function () {
    this.closed = !0;
  },
  hide: function () {
    this.domElement.style.display = "none";
  },
  show: function () {
    this.domElement.style.display = "";
  },
  onResize: function () {
    var e = this.getRoot();
    if (e.scrollable) {
      var t = P.getOffset(e.__ul).top,
        n = 0;
      q.each(e.__ul.childNodes, function (i) {
        (e.autoPlace && i === e.__save_row) || (n += P.getHeight(i));
      }),
        window.innerHeight - t - Va < n
          ? (P.addClass(e.domElement, ze.CLASS_TOO_TALL),
            (e.__ul.style.height = window.innerHeight - t - Va + "px"))
          : (P.removeClass(e.domElement, ze.CLASS_TOO_TALL),
            (e.__ul.style.height = "auto"));
    }
    e.__resize_handle &&
      q.defer(function () {
        e.__resize_handle.style.height = e.__ul.offsetHeight + "px";
      }),
      e.__closeButton && (e.__closeButton.style.width = e.width + "px");
  },
  onResizeDebounced: q.debounce(function () {
    this.onResize();
  }, 50),
  remember: function () {
    if (
      (q.isUndefined(mi) && ((mi = new fp()), (mi.domElement.innerHTML = cp)),
      this.parent)
    )
      throw new Error("You can only call remember on a top level GUI.");
    var e = this;
    q.each(Array.prototype.slice.call(arguments), function (t) {
      e.__rememberedObjects.length === 0 && gp(e),
        e.__rememberedObjects.indexOf(t) === -1 &&
          e.__rememberedObjects.push(t);
    }),
      this.autoPlace && ns(this, this.width);
  },
  getRoot: function () {
    for (var e = this; e.parent; ) e = e.parent;
    return e;
  },
  getSaveObject: function () {
    var e = this.load;
    return (
      (e.closed = this.closed),
      this.__rememberedObjects.length > 0 &&
        ((e.preset = this.preset),
        e.remembered || (e.remembered = {}),
        (e.remembered[this.preset] = Ki(this))),
      (e.folders = {}),
      q.each(this.__folders, function (t, n) {
        e.folders[n] = t.getSaveObject();
      }),
      e
    );
  },
  save: function () {
    this.load.remembered || (this.load.remembered = {}),
      (this.load.remembered[this.preset] = Ki(this)),
      es(this, !1),
      this.saveToLocalStorageIfPossible();
  },
  saveAs: function (e) {
    this.load.remembered ||
      ((this.load.remembered = {}), (this.load.remembered[Si] = Ki(this, !0))),
      (this.load.remembered[e] = Ki(this)),
      (this.preset = e),
      ts(this, e, !0),
      this.saveToLocalStorageIfPossible();
  },
  revert: function (e) {
    q.each(
      this.__controllers,
      function (t) {
        this.getRoot().load.remembered
          ? Eo(e || this.getRoot(), t)
          : t.setValue(t.initialValue),
          t.__onFinishChange && t.__onFinishChange.call(t, t.getValue());
      },
      this
    ),
      q.each(this.__folders, function (t) {
        t.revert(t);
      }),
      e || es(this.getRoot(), !1);
  },
  listen: function (e) {
    var t = this.__listening.length === 0;
    this.__listening.push(e), t && To(this.__listening);
  },
  updateDisplay: function () {
    q.each(this.__controllers, function (e) {
      e.updateDisplay();
    }),
      q.each(this.__folders, function (e) {
        e.updateDisplay();
      });
  },
});
function _s(r, e, t) {
  var n = document.createElement("li");
  return (
    e && n.appendChild(e),
    t ? r.__ul.insertBefore(n, t) : r.__ul.appendChild(n),
    r.onResize(),
    n
  );
}
function Ha(r) {
  P.unbind(window, "resize", r.__resizeHandler),
    r.saveToLocalStorageIfPossible &&
      P.unbind(window, "unload", r.saveToLocalStorageIfPossible);
}
function es(r, e) {
  var t = r.__preset_select[r.__preset_select.selectedIndex];
  e ? (t.innerHTML = t.value + "*") : (t.innerHTML = t.value);
}
function mp(r, e, t) {
  if (
    ((t.__li = e),
    (t.__gui = r),
    q.extend(t, {
      options: function (o) {
        if (arguments.length > 1) {
          var a = t.__li.nextElementSibling;
          return (
            t.remove(),
            gi(r, t.object, t.property, {
              before: a,
              factoryArgs: [q.toArray(arguments)],
            })
          );
        }
        if (q.isArray(o) || q.isObject(o)) {
          var l = t.__li.nextElementSibling;
          return (
            t.remove(),
            gi(r, t.object, t.property, { before: l, factoryArgs: [o] })
          );
        }
      },
      name: function (o) {
        return (t.__li.firstElementChild.firstElementChild.innerHTML = o), t;
      },
      listen: function () {
        return t.__gui.listen(t), t;
      },
      remove: function () {
        return t.__gui.remove(t), t;
      },
    }),
    t instanceof nr)
  ) {
    var n = new Mi(t.object, t.property, {
      min: t.__min,
      max: t.__max,
      step: t.__step,
    });
    q.each(
      ["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"],
      function (s) {
        var o = t[s],
          a = n[s];
        t[s] = n[s] = function () {
          var l = Array.prototype.slice.call(arguments);
          return a.apply(n, l), o.apply(t, l);
        };
      }
    ),
      P.addClass(e, "has-slider"),
      t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild);
  } else if (t instanceof Mi) {
    var i = function (o) {
      if (q.isNumber(t.__min) && q.isNumber(t.__max)) {
        var a = t.__li.firstElementChild.firstElementChild.innerHTML,
          l = t.__gui.__listening.indexOf(t) > -1;
        t.remove();
        var c = gi(r, t.object, t.property, {
          before: t.__li.nextElementSibling,
          factoryArgs: [t.__min, t.__max, t.__step],
        });
        return c.name(a), l && c.listen(), c;
      }
      return o;
    };
    (t.min = q.compose(i, t.min)), (t.max = q.compose(i, t.max));
  } else
    t instanceof ps
      ? (P.bind(e, "click", function () {
          P.fakeEvent(t.__checkbox, "click");
        }),
        P.bind(t.__checkbox, "click", function (s) {
          s.stopPropagation();
        }))
      : t instanceof gs
      ? (P.bind(e, "click", function () {
          P.fakeEvent(t.__button, "click");
        }),
        P.bind(e, "mouseover", function () {
          P.addClass(t.__button, "hover");
        }),
        P.bind(e, "mouseout", function () {
          P.removeClass(t.__button, "hover");
        }))
      : t instanceof ir &&
        (P.addClass(e, "color"),
        (t.updateDisplay = q.compose(function (s) {
          return (e.style.borderLeftColor = t.__color.toString()), s;
        }, t.updateDisplay)),
        t.updateDisplay());
  t.setValue = q.compose(function (s) {
    return (
      r.getRoot().__preset_select && t.isModified() && es(r.getRoot(), !0), s
    );
  }, t.setValue);
}
function Eo(r, e) {
  var t = r.getRoot(),
    n = t.__rememberedObjects.indexOf(e.object);
  if (n !== -1) {
    var i = t.__rememberedObjectIndecesToControllers[n];
    if (
      (i === void 0 &&
        ((i = {}), (t.__rememberedObjectIndecesToControllers[n] = i)),
      (i[e.property] = e),
      t.load && t.load.remembered)
    ) {
      var s = t.load.remembered,
        o = void 0;
      if (s[r.preset]) o = s[r.preset];
      else if (s[Si]) o = s[Si];
      else return;
      if (o[n] && o[n][e.property] !== void 0) {
        var a = o[n][e.property];
        (e.initialValue = a), e.setValue(a);
      }
    }
  }
}
function gi(r, e, t, n) {
  if (e[t] === void 0)
    throw new Error('Object "' + e + '" has no property "' + t + '"');
  var i = void 0;
  if (n.color) i = new ir(e, t);
  else {
    var s = [e, t].concat(n.factoryArgs);
    i = up.apply(r, s);
  }
  n.before instanceof ln && (n.before = n.before.__li),
    Eo(r, i),
    P.addClass(i.domElement, "c");
  var o = document.createElement("span");
  P.addClass(o, "property-name"), (o.innerHTML = i.property);
  var a = document.createElement("div");
  a.appendChild(o), a.appendChild(i.domElement);
  var l = _s(r, a, n.before);
  return (
    P.addClass(l, ze.CLASS_CONTROLLER_ROW),
    i instanceof ir ? P.addClass(l, "color") : P.addClass(l, np(i.getValue())),
    mp(r, l, i),
    r.__controllers.push(i),
    i
  );
}
function Gn(r, e) {
  return document.location.href + "." + e;
}
function ts(r, e, t) {
  var n = document.createElement("option");
  (n.innerHTML = e),
    (n.value = e),
    r.__preset_select.appendChild(n),
    t && (r.__preset_select.selectedIndex = r.__preset_select.length - 1);
}
function Wa(r, e) {
  e.style.display = r.useLocalStorage ? "block" : "none";
}
function gp(r) {
  var e = (r.__save_row = document.createElement("li"));
  P.addClass(r.domElement, "has-save"),
    r.__ul.insertBefore(e, r.__ul.firstChild),
    P.addClass(e, "save-row");
  var t = document.createElement("span");
  (t.innerHTML = "&nbsp;"), P.addClass(t, "button gears");
  var n = document.createElement("span");
  (n.innerHTML = "Save"), P.addClass(n, "button"), P.addClass(n, "save");
  var i = document.createElement("span");
  (i.innerHTML = "New"), P.addClass(i, "button"), P.addClass(i, "save-as");
  var s = document.createElement("span");
  (s.innerHTML = "Revert"), P.addClass(s, "button"), P.addClass(s, "revert");
  var o = (r.__preset_select = document.createElement("select"));
  if (
    (r.load && r.load.remembered
      ? q.each(r.load.remembered, function (d, h) {
          ts(r, h, h === r.preset);
        })
      : ts(r, Si, !1),
    P.bind(o, "change", function () {
      for (var d = 0; d < r.__preset_select.length; d++)
        r.__preset_select[d].innerHTML = r.__preset_select[d].value;
      r.preset = this.value;
    }),
    e.appendChild(o),
    e.appendChild(t),
    e.appendChild(n),
    e.appendChild(i),
    e.appendChild(s),
    pi)
  ) {
    var a = document.getElementById("dg-local-explain"),
      l = document.getElementById("dg-local-storage"),
      c = document.getElementById("dg-save-locally");
    (c.style.display = "block"),
      localStorage.getItem(Gn(r, "isLocal")) === "true" &&
        l.setAttribute("checked", "checked"),
      Wa(r, a),
      P.bind(l, "change", function () {
        (r.useLocalStorage = !r.useLocalStorage), Wa(r, a);
      });
  }
  var u = document.getElementById("dg-new-constructor");
  P.bind(u, "keydown", function (d) {
    d.metaKey && (d.which === 67 || d.keyCode === 67) && mi.hide();
  }),
    P.bind(t, "click", function () {
      (u.innerHTML = JSON.stringify(r.getSaveObject(), void 0, 2)),
        mi.show(),
        u.focus(),
        u.select();
    }),
    P.bind(n, "click", function () {
      r.save();
    }),
    P.bind(i, "click", function () {
      var d = prompt("Enter a new preset name.");
      d && r.saveAs(d);
    }),
    P.bind(s, "click", function () {
      r.revert();
    });
}
function _p(r) {
  var e = void 0;
  (r.__resize_handle = document.createElement("div")),
    q.extend(r.__resize_handle.style, {
      width: "6px",
      marginLeft: "-3px",
      height: "200px",
      cursor: "ew-resize",
      position: "absolute",
    });
  function t(s) {
    return (
      s.preventDefault(),
      (r.width += e - s.clientX),
      r.onResize(),
      (e = s.clientX),
      !1
    );
  }
  function n() {
    P.removeClass(r.__closeButton, ze.CLASS_DRAG),
      P.unbind(window, "mousemove", t),
      P.unbind(window, "mouseup", n);
  }
  function i(s) {
    return (
      s.preventDefault(),
      (e = s.clientX),
      P.addClass(r.__closeButton, ze.CLASS_DRAG),
      P.bind(window, "mousemove", t),
      P.bind(window, "mouseup", n),
      !1
    );
  }
  P.bind(r.__resize_handle, "mousedown", i),
    P.bind(r.__closeButton, "mousedown", i),
    r.domElement.insertBefore(
      r.__resize_handle,
      r.domElement.firstElementChild
    );
}
function ns(r, e) {
  (r.domElement.style.width = e + "px"),
    r.__save_row && r.autoPlace && (r.__save_row.style.width = e + "px"),
    r.__closeButton && (r.__closeButton.style.width = e + "px");
}
function Ki(r, e) {
  var t = {};
  return (
    q.each(r.__rememberedObjects, function (n, i) {
      var s = {},
        o = r.__rememberedObjectIndecesToControllers[i];
      q.each(o, function (a, l) {
        s[l] = e ? a.initialValue : a.getValue();
      }),
        (t[i] = s);
    }),
    t
  );
}
function vp(r) {
  for (var e = 0; e < r.__preset_select.length; e++)
    r.__preset_select[e].value === r.preset &&
      (r.__preset_select.selectedIndex = e);
}
function To(r) {
  r.length !== 0 &&
    hp.call(window, function () {
      To(r);
    }),
    q.each(r, function (e) {
      e.updateDisplay();
    });
}
var xp = { Color: je, math: yi, interpret: tr },
  bp = {
    Controller: ln,
    BooleanController: ps,
    OptionController: Mo,
    StringController: So,
    NumberController: ms,
    NumberControllerBox: Mi,
    NumberControllerSlider: nr,
    FunctionController: gs,
    ColorController: ir,
  },
  yp = { dom: P },
  Mp = { GUI: ze },
  Sp = ze,
  wp = { color: xp, controllers: bp, dom: yp, gui: Mp, GUI: Sp };
function Ep(r, e) {
  const t = new wp.GUI(),
    n = a(),
    i = l(),
    s = c(),
    o = u();
  d();
  function a() {
    const h = { resolution: 1, quality: "medium" },
      m = t.addFolder("Performance");
    return (
      m.add(h, "resolution", [0.25, 0.5, 1, 2, 4]),
      m.add(h, "quality", ["low", "medium", "high"]).onChange(r),
      m.open(),
      h
    );
  }
  function l() {
    const h = { strength: 1, radius: 0.5, threshold: 0.6 },
      m = t.addFolder("Bloom");
    return (
      m.add(h, "strength", 0, 3),
      m.add(h, "radius", 0, 1),
      m.add(h, "threshold", 0, 1),
      h
    );
  }
  function c() {
    const h = { distance: 10, orbit: !0, fov: 90 },
      m = t.addFolder("Observer");
    return (
      m.add(h, "distance", 2, 14),
      m.add(h, "fov", 30, 90),
      m.add(h, "orbit"),
      m.open(),
      h
    );
  }
  function u() {
    const h = {
      lorentz_transform: !0,
      accretion_disk: !0,
      use_disk_texture: !0,
      doppler_shift: !0,
      beaming: !0,
    };
    let m = t.addFolder("Effects");
    return (
      m.add(h, "lorentz_transform"),
      m.add(h, "doppler_shift"),
      m.add(h, "beaming"),
      m.add(h, "accretion_disk"),
      m.add(h, "use_disk_texture"),
      m.open(),
      h
    );
  }
  function d() {
    const h = { "save as an image": e };
    t.add(h, "save as an image");
  }
  return {
    performanceConfig: n,
    bloomConfig: i,
    effectConfig: o,
    cameraConfig: s,
  };
}
(async () => {
  let r = Date.now(),
    e = 0,
    t = 0;
  const n = {
      time: { type: "f", value: 0 },
      resolution: { type: "v2", value: new Ce() },
      accretion_disk: { type: "b", value: !1 },
      use_disk_texture: { type: "b", value: !0 },
      lorentz_transform: { type: "b", value: !1 },
      doppler_shift: { type: "b", value: !1 },
      beaming: { type: "b", value: !1 },
      cam_pos: { type: "v3", value: new I() },
      cam_vel: { type: "v3", value: new I() },
      cam_dir: { type: "v3", value: new I() },
      cam_up: { type: "v3", value: new I() },
      fov: { type: "f", value: 0 },
      bg_texture: { type: "t", value: null },
      star_texture: { type: "t", value: null },
      disk_texture: { type: "t", value: null },
    },
    i = Wf(),
    { composer: s, bloomPass: o, scene: a } = Xf(i);
  document.body.appendChild(i.domElement);
  const l = Yf(),
    { mesh: c, changePerformanceQuality: u } = await jf(n);
  a.add(c);
  const { observer: d, cameraControl: h } = qf(i);
  a.add(d);
  const {
      cameraConfig: m,
      effectConfig: g,
      performanceConfig: p,
      bloomConfig: f,
    } = Ep(u, M),
    x = Qf();
  document.body.appendChild(x.dom), w();
  function w() {
    (e = (Date.now() - r) / 1e3),
      (t += e),
      x.update(),
      i.setPixelRatio(window.devicePixelRatio * p.resolution),
      i.setSize(window.innerWidth, window.innerHeight),
      s.setSize(
        window.innerWidth * p.resolution,
        window.innerHeight * p.resolution
      ),
      d.update(e),
      h.update(e),
      E(),
      y(),
      requestAnimationFrame(w),
      (r = Date.now());
  }
  function y() {
    s.render();
  }
  function E() {
    (n.time.value = t),
      (n.resolution.value.x = window.innerWidth * p.resolution),
      (n.resolution.value.y = window.innerHeight * p.resolution),
      (n.cam_pos.value = d.position),
      (n.cam_dir.value = d.direction),
      (n.cam_up.value = d.up),
      (n.fov.value = d.fov),
      (n.cam_vel.value = d.velocity),
      (n.bg_texture.value = l.get("bg1")),
      (n.star_texture.value = l.get("star")),
      (n.disk_texture.value = l.get("disk")),
      (o.strength = f.strength),
      (o.radius = f.radius),
      (o.threshold = f.threshold),
      (d.distance = m.distance),
      (d.moving = m.orbit),
      (d.fov = m.fov),
      (n.lorentz_transform.value = g.lorentz_transform),
      (n.accretion_disk.value = g.accretion_disk),
      (n.use_disk_texture.value = g.use_disk_texture),
      (n.doppler_shift.value = g.doppler_shift),
      (n.beaming.value = g.beaming);
  }
  function M() {
    y(),
      i.domElement.toBlob((A) => {
        if (!A) return;
        let F = window.URL || window.webkitURL,
          _ = document.createElement("a");
        (_.href = F.createObjectURL(A)),
          (_.download = `blackhole-image-${new Date(Date.now())
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")}.png`),
          document.body.appendChild(_),
          _.click(),
          document.body.removeChild(_);
      });
  }
})();
