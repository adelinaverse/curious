import { useEffect, useRef, useState } from 'react';
import { truthLabels, type Card } from '../content';
import { meshColours, themeOf } from './bits';

const W = 1080, H = 1350;

// Draws a watermarked share image of a card.
function draw(canvas: HTMLCanvasElement, card: Card) {
  const ctx = canvas.getContext('2d')!;
  const { base, blobs } = meshColours(card.id, themeOf(card.theme).hue);
  canvas.width = W;
  canvas.height = H;
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, W, H);
  blobs.forEach((b, i) => {
    const x = b.x * W, y = b.y * H, r = (i === 3 ? 0.3 : 0.7) * H;
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, b.c);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  });
  const shade = ctx.createLinearGradient(0, H * 0.35, 0, H);
  shade.addColorStop(0, 'rgba(0,0,0,0)');
  shade.addColorStop(1, 'rgba(0,0,0,0.75)');
  ctx.fillStyle = shade;
  ctx.fillRect(0, 0, W, H);

  ctx.fillStyle = 'rgba(255,255,255,0.75)';
  ctx.font = '600 32px "Schibsted Grotesk", sans-serif';
  ctx.fillText(`${themeOf(card.theme).name}    ${truthLabels[card.truth].name}`, 90, 150);

  ctx.fillStyle = '#fff';
  ctx.font = '700 78px "Schibsted Grotesk", sans-serif';
  const lines = wrap(ctx, card.hook, W - 180);
  const top = H - 220 - lines.length * 88;
  lines.forEach((l, i) => ctx.fillText(l, 90, top + i * 88));

  ctx.font = '500 44px "Schibsted Grotesk", sans-serif';
  ctx.fillText('curio', 90, H - 96);
  const w = ctx.measureText('curio').width;
  ctx.font = '800 44px "Schibsted Grotesk", sans-serif';
  ctx.fillText('US', 90 + w, H - 96);
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = '500 30px "Schibsted Grotesk", sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('The feed you steer', W - 90, H - 100);
  ctx.textAlign = 'left';
}

function wrap(ctx: CanvasRenderingContext2D, text: string, max: number) {
  const out: string[] = [];
  let line = '';
  for (const word of text.split(' ')) {
    const t = line ? `${line} ${word}` : word;
    if (ctx.measureText(t).width > max && line) { out.push(line); line = word; }
    else line = t;
  }
  if (line) out.push(line);
  return out;
}

export function Share({ card }: { card: Card }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!ref.current) return;
      draw(ref.current, card);
      setUrl(ref.current.toDataURL('image/png'));
    });
  }, [card]);

  const share = async () => {
    try {
      const blob = await (await fetch(url)).blob();
      const file = new File([blob], `curious-${card.id}.png`, { type: 'image/png' });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], text: card.hook });
        return;
      }
    } catch {
      /* fall through to download */
    }
    const a = document.createElement('a');
    a.href = url;
    a.download = `curious-${card.id}.png`;
    a.click();
    setStatus('Image saved');
  };

  return (
    <div className="share">
      <h2 className="sheet-title">Share this card</h2>
      <canvas ref={ref} className="share-canvas" aria-label="Preview of the share image" />
      <button className="btn btn-dark wide" disabled={!url} onClick={share}>Share image</button>
      {status && <p className="note center">{status}</p>}
    </div>
  );
}
