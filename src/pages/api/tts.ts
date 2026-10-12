import type { APIRoute } from 'astro';
import * as googleTTS from 'google-tts-api';

export const prerender = false;

export const ALL: APIRoute = async (context) => {
  const req = context.request;
  const currentUrl = new URL(req.url);
  let text = currentUrl.searchParams.get('text');
  let lang = currentUrl.searchParams.get('lang') || 'es';
  let slow = currentUrl.searchParams.get('slow') === 'true';

  if (req.method === 'POST') {
    try {
      const body = await req.json();
      if (body.text) text = body.text;
      if (body.lang) lang = body.lang;
      if (body.slow !== undefined) slow = body.slow;
    } catch {}
  }

  if (!text || text.trim().length === 0) {
    return new Response(JSON.stringify({ 
      error: 'Texto requerido', 
      debugReceivedUrl: req.url,
      debugSearchParams: Object.fromEntries(currentUrl.searchParams.entries())
    }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    if (text.length <= 200) {
      const base64 = await googleTTS.getAudioBase64(text, {
        lang,
        slow,
        host: 'https://translate.google.com',
        timeout: 10000,
      });

      const buffer = Buffer.from(base64, 'base64');
      return new Response(buffer, {
        status: 200,
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Disposition': `attachment; filename="audio-${Date.now()}.mp3"`,
        },
      });
    }

    const results = await googleTTS.getAllAudioBase64(text, {
      lang,
      slow,
      host: 'https://translate.google.com',
      timeout: 15000,
      splitPunct: '.,!?:;\n',
    });

    const buffers = results.map((item) => Buffer.from(item.base64, 'base64'));
    const finalBuffer = Buffer.concat(buffers);

    return new Response(finalBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': `attachment; filename="audio-${Date.now()}.mp3"`,
      },
    });
  } catch (error: any) {
    console.error('Error generando audio TTS:', error);
    return new Response(JSON.stringify({ error: 'Error al generar audio: ' + (error?.message || error) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
