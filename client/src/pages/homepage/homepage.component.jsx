import React, { Profiler } from 'react';
import Directory from '../../components/directory/directory.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
	return (
		<HomePageContainer>
			<Profiler
				id='directory'
				onRender={(id, phase, actualDuration) => {
					console.log({ id, phase, actualDuration });
				}}
			>
				<Directory />
			</Profiler>
		</HomePageContainer>
	);
};

// Profiler is included in dev tools to collect timing information about components

export default HomePage;
