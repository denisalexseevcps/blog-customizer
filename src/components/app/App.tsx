import clsx from 'clsx';
import { StrictMode, CSSProperties, useState } from 'react';
import { Article } from '../article';
import { ArticleParamsForm } from '../article-params-form';
import { defaultArticleState, ArticleStateType } from '../../constants/articleProps';
import '../../styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {
	const [defaultAppState, changeAppState] = useState(defaultArticleState);


	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': defaultAppState.fontFamilyOption.value,
					'--font-size': defaultAppState.fontSizeOption.value,
					'--font-color': defaultAppState.fontColor.value,
					'--container-width': defaultAppState.contentWidth.value,
					'--bg-color': defaultAppState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm articleState={defaultAppState} setArticleState={changeAppState}/>
			<Article />
		</div>
	);
};