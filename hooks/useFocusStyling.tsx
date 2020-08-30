import { useEffect } from 'react';

export const useFocusStyling: () => void = () => {
    useEffect(() => {
        const onMouseDown = () => document.body.classList.add('using-mouse');
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.keyCode === 9) {
                document.body.classList.remove('using-mouse');
            }
        };

        document.body.addEventListener('mousedown', onMouseDown);
        document.body.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.removeEventListener('mousedown', onMouseDown);
            document.body.removeEventListener('keydown', onKeyDown);
        };
    }, []);
};