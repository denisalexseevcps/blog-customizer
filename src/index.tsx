import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, ArticleStateType } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [defaultAppState, changeAppState] = useState(defaultArticleState);
	const [openFrm, setOpenFrm] = useState(false);

	const toggler = () => setOpenFrm(!openFrm);

	const buttSubmit = (props: ArticleStateType) => changeAppState(props);

	const buttReset = (props: ArticleStateType) => changeAppState(props);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': defaultAppState.fontFamilyOption.value,
					'--font-size': defaultAppState.fontSizeOption.value,
					'--font-color': defaultAppState.fontColor.value,
					'--container-width': defaultAppState.contentWidth.value,
					'--bg-color': defaultAppState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onSubmit={buttSubmit}
				onReset={buttReset}
				onToggle={toggler}
				openFrm={openFrm}/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
