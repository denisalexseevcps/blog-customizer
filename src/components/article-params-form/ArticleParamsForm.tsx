import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import {Text} from 'components/text';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { useState,useEffect,useRef } from 'react';
import { useOutsideClickClose  } from '../select/hooks/useOutsideClickClose';
import clsx from 'clsx';

import {
	fontColors,
	contentWidthArr,
	backgroundColors,
	fontFamilyOptions,
	defaultArticleState,
	fontSizeOptions,
	ArticleStateType
} from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';

interface ArticleParamsFormProps {
	articleState: ArticleStateType;
	setArticleState: (param: ArticleStateType) => void;
}


export const ArticleParamsForm = ( {articleState,	setArticleState} : ArticleParamsFormProps ) => {

	// const toggler = () => {
	// 	pops.onToggle(pops.openFrm);
	// };

	const [openFrm, setOpenFrm] = useState(false);

	// const toggler = () => setOpenFrm(!openFrm);
	// const onToggle = (param: boolean) => setOpenFrm(param);

	const buttSubmit = (props: ArticleStateType) => setArticleState(props);

	const buttReset = (props: ArticleStateType) => setArticleState(props);
	const formRef = useRef(null);

	const [stateFont, setStateFont] = useState(
		defaultArticleState.fontFamilyOption);
	const [stateSize,setStateSize]= useState(
		defaultArticleState.fontSizeOption);
	const [stateColor, setStateColor] = useState(
		defaultArticleState.fontColor);
	const [stateBgrColor, setStateBgrColor] = useState(
		defaultArticleState.backgroundColor);
	const [stateWidthCnt,setStateWidthCnt] = useState(
		defaultArticleState.contentWidth);

		useEffect(() => {
			if (!openFrm) return;
		}, [openFrm]);

		// useEffect(() => {
		// 	const openMenu = (event: KeyboardEvent) => {
		// 		if (event.key === 'Escape' && openFrm === true) setOpenFrm(false);
		// 	};
		// 	document.addEventListener('keydown', openMenu);
		// 	return () => document.removeEventListener('keydown', openMenu);
		// }, [openFrm]);

		const submitStyle = (e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			// console.log({fontFamilyOption: stateFont,
			// 	fontColor: stateColor,
			// 	backgroundColor:stateBgrColor,
			// 	contentWidth:stateWidthCnt,
			// 	fontSizeOption:stateSize});
			buttSubmit({fontFamilyOption: stateFont,
				fontColor: stateColor,
				backgroundColor:stateBgrColor,
				contentWidth:stateWidthCnt,
				fontSizeOption:stateSize} );
		};

		useOutsideClickClose({isOpen : openFrm, rootRef: formRef, onClose: () => setOpenFrm(false), onChange : setOpenFrm});


		const resetStyles = () => {
			setStateFont(
				defaultArticleState.fontFamilyOption);
			setStateSize(
				defaultArticleState.fontSizeOption);
			setStateColor(
				defaultArticleState.fontColor);
			setStateBgrColor(
				defaultArticleState.backgroundColor);
			setStateWidthCnt(
				defaultArticleState.contentWidth);
			//setParams(defaultArticleState);
			buttReset(defaultArticleState);
		};


	return (
		<>
			<ArrowButton setClick={setOpenFrm} menuOpen={openFrm}  />
			<aside ref={formRef}
			className={clsx(styles.container, openFrm && styles.container_open)}  >
				<form
					onSubmit={submitStyle} onReset={resetStyles}  className={styles.form} >
					<Text as='h1' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='шрифт'
						selected={stateFont}
						options={fontFamilyOptions}
						onChange={(selected) => setStateFont(selected)}
					/>
					<RadioGroup
							name={stateSize.className}
							options={fontSizeOptions}
							selected={stateSize}
							onChange={(selected) => setStateSize(selected)}
							title={'Размер шрифта'}
						/>
					<Select
						title='цвет шрифта'
						selected={stateColor}
						options={fontColors}
						onChange={(selected) => setStateColor(selected)}
					/>
					<Separator />
					<Select
						title='цвет фона'
						selected={stateBgrColor}
						options={backgroundColors}
						onChange={(selected) => setStateBgrColor(selected)}
					/>
					<Select
						title='ширина контента'
						selected={stateWidthCnt}
						options={contentWidthArr}
						onChange={(selected) => setStateWidthCnt(selected)}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
