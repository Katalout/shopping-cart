import './AnimateThis.css';
import { useEffect, useState } from 'react';

const AnimateThis = ({ content }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(false);

        const animationTimer = setTimeout(() => {
            setIsActive(true);
        }, 10);

        return () => clearTimeout(animationTimer);
    }, [content]);

    return (
        <span className='cartCount'>
            <span className={isActive ? 'active' : ''}>
                {content}
            </span>
        </span>
    );
};

export default AnimateThis;