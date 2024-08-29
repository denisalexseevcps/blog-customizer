import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */

export type PopsArrowButton = {
	setClick? : (state: boolean) => void;
	menuOpen: boolean;
};

export const ArrowButton = (props:PopsArrowButton) => {

	const clickMouse = (e: React.MouseEvent) => {
		e.preventDefault();
		props.setClick?.(!props.menuOpen);
	};
	console.log(props)
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={clickMouse}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			// className={styles.container}>
			// <img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: props.menuOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]:  props.menuOpen,
				})}
			/>
		</div>
	);
};
