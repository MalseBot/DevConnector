/** @format */

import type { Route } from './+types/home';
import { Fragment } from 'react/jsx-runtime';
export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Dev Connector' },
		{ name: 'description', content: 'Social Home for Developers' },
	];
}

const Home = () => (
	<Fragment>
		<h1>Hello world</h1>
	</Fragment>
);

export default Home;
