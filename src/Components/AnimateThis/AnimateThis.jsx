import './AnimateThis.css';
import { useEffect, useState } from 'react';

const AnimateThis = ({ content }) => {
    const [isActive, setIsActive] = useState(false);

    // Trigger animation when "content" prop changes
    useEffect(() => {
        // Reset animation (remove "active" class)
        setIsActive(false);

        // Step 2: Wait for the DOM to update, then re-add "active" class to trigger transition
        const animationTimer = setTimeout(() => {
            setIsActive(true);
        }, 10); // 10ms delay ensures the original is applied first

        // Cleanup: Clear timer if component unmounts mid-animation
        return () => clearTimeout(animationTimer);
    }, [content]); // Re-run effect when "content" changes

    return (
        <span className='cartCount'>
            <span className={isActive ? 'active' : ''}>
                {content}
            </span>
        </span>
    );
};

export default AnimateThis;