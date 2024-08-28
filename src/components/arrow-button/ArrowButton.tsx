import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;
export type PopsArrowButton = {
	setClick?: OnClick;
	menuOpen: boolean;
};

export const ArrowButton = (pops:PopsArrowButton) => {
	// const clickMouse = () => {
	// 	setClick?.(!menuOpen);
	// };
	console.log(pops)
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={pops.setClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			// className={styles.container}>
			// <img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
			className={clsx({
				[styles.container]: true,
				[styles.container_open]: pops.menuOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrow_open]:  pops.menuOpen,
				})}
			/>
		</div>
	);
};
