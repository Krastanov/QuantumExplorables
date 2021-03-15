function roughmeasure(rc, x1, y1, x2, y2, options={}) {
  var n = ((x1-x2)**2+(y1-y2)**2)**0.5;
  var orthx = (y1-y2)/n*5;
  var orthy = (x1-x2)/n*5;
  rc.line(x1,y1,x2,y2, {strokeLineDash: [5,5], stroke: 'lightgrey', ...options});
  rc.line(x1-orthx,y1-orthy,x1+orthx,y1+orthy, {stroke: 'lightgrey', ...options});
  rc.line(x2-orthx,y2-orthy,x2+orthx,y2+orthy, {stroke: 'lightgrey', ...options});
}

function rougharrow(rc, x1, y1, x2, y2, options={}) {
  var n = ((x1-x2)**2+(y1-y2)**2)**0.5;
  var orthx = (y1-y2)/n*15;
  var orthy = (x1-x2)/n*15;
  ax = (orthx+orthy) / 2**0.5;
  ay = (orthx-orthy) / 2**0.5;
  rc.line(x1,y1,x2,y2, options);
  rc.line(x2-ay,y2+ax,x2,y2, options);
  rc.line(x2+ax,y2+ay,x2,y2, options);
}

function prepcanvas(id) {
  const e = document.getElementById(id);
  const c = e.getContext('2d');
  c.font = '14px "Indie Flower"';
  c.textAlign = 'center';
  const r = rough.canvas(e);
  return {e:e, c:c, r:r};
}

