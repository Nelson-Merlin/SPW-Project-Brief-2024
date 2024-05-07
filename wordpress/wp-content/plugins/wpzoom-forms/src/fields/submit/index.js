import { registerBlockType } from '@wordpress/blocks';
import json from './block.json';
import Edit from './edit';
import Save from './save';

const { name } = json;

registerBlockType(
	name,
	{
		icon: ( <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="20 20 70 70"><path d="M61.562,51.911l19.186,7.403l-4.458,4.459l5.413,5.414L80.27,70.62l-1.433,1.433l-5.414-5.412l-4.458,4.457 L61.562,51.911 M61.562,48.911c-0.781,0-1.549,0.306-2.121,0.878c-0.84,0.839-1.105,2.094-0.678,3.202l7.402,19.187 c0.365,0.947,1.186,1.646,2.178,1.855c0.206,0.043,0.414,0.064,0.621,0.064c0.787,0,1.553-0.31,2.121-0.879l2.337-2.336l3.293,3.292 c0.586,0.585,1.354,0.878,2.121,0.878s1.535-0.293,2.121-0.879l1.433-1.433l1.435-1.433c1.171-1.173,1.171-3.072-0.001-4.242 l-3.292-3.293l2.337-2.336c0.718-0.719,1.023-1.75,0.812-2.742c-0.209-0.993-0.906-1.812-1.854-2.178l-19.186-7.404 C62.292,48.977,61.925,48.911,61.562,48.911L61.562,48.911z M83.559,33.948H25.441c-2.721,0-4.924,2.206-4.924,4.925v19.7 c0,2.72,2.203,4.925,4.924,4.925h35.77l-1.158-3H25.441c-1.061,0-1.924-0.864-1.924-1.925v-19.7c0-1.062,0.863-1.925,1.924-1.925 h58.118c1.062,0,1.924,0.864,1.924,1.925v19.7c0,0.329-0.09,0.636-0.237,0.907c-0.04,1.121-0.499,2.199-1.315,3.016l-1.002,1.002 h0.631c2.721,0,4.926-2.206,4.926-4.925v-19.7C88.482,36.154,86.277,33.948,83.559,33.948z"/></svg> ),
		edit: Edit,
		save: Save
	}
);