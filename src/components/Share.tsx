import { useEffect, useRef, useState } from 'react';
import { truthLabels, type Card } from '../content';
import { themeOf } from './bits';

const W = 1080, H = 1350;

// Draws a watermarked share image of a card.
function draw(canvas: HTMLCanvasElement, card: Card) {
  const ctx = canvas.getContext('2d')!;
  const hue = themeOf(card.theme).hue;
  canvas.width = W;
  canvas.height = H;
  ctx.fillStyle = '#1E2A78';
  ctx.fillRect(0, 0, W, H);
  const g = ctx.createRadialGradient(780, 300, 20, 780, 300, 900);
  g.addColorStop(0, `hsla(${hue}, 70%, 55%, 0.55)`);
  g.addColorStop(1, 'hsla(230, 60%, 20%, 0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = `hsla(${hue}, 85%, 82%, 0.35)`;
  for (let r = 60; r < 700; r += 70) {
    ctx.beginPath();
    ctx.arc(780, 300, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.fillStyle = '#F2C14E';
  ctx.beginPath();
  ctx.arc(780, 300, 12, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#A9B0E0';
  ctx.font = '500 34px Figtree, sans-serif';
  ctx.fillText(`${themeOf(card.theme).name}  /  ${truthLabels[card.truth].name}`, 90, 640);

  ctx.fillStyle = '#F5F3FF';
  ctx.font = '76px Gloock, Georgia, serif';
  const lines = wrap(ctx, card.hook, W - 180);
  lines.forEach((l, i) => ctx.fillText(l, 90, 740 + i * 92));

  ctx.fillStyle = '#F5F3FF';
  ctx.font = '60px Gloock, Georgia, serif';
  ctx.fillText('Curio', 90, H - 100);
  const w = ctx.measureText('Curio').width;
  ctx.fillStyle = '#F2C14E';
  ctx.fillText('US', 90 + w, H - 100);
  ctx.fillStyle = '#A9B0E0';
  ctx.font = '500 30px Figtree, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('A feed you steer', W - 90, H - 108);
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
      <button className="btn btn-gold wide" disabled={!url} onClick={share}>Share image</button>
      {status && <p className="note center">{status}</p>}
    </div>
  );
}
