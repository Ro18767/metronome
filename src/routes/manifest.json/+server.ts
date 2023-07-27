import { json } from '@sveltejs/kit';
import { base } from '$app/paths';

export const prerender = true;

export const GET = async () => {
	return json({
		short_name: 'Metronome',
		name: 'Metronome',
		start_url: `${base}/`,
		icons: [
			{
				src: 'logo_512.png',
				type: 'image/png',
				sizes: '512x512'
			}
		],
		background_color: '#e4e6ee',
		display: 'standalone',
		scope: `${base}/`,
		theme_color: '#e4e6ee',
		description: 'Basically is a metronome.'
	});
};
