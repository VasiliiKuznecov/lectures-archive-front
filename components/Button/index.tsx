import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';

import styles from './Button.module.css';

type ButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({ className, children, onClick }) => {
    return (
        <button
            className={classNames(styles.button, className)}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;