import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedElementProps {
    children: ReactNode;
}

export const AnimatedElementRight: React.FC<AnimatedElementProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div
            ref={ref}
            className={`absolute bottom-10 right-7 w-[12%] text-center p-2 transition-transform duration-500  ${
                inView ? 'opacity-100 translate-x-15' : 'opacity-0 translate-x-5'
            }`}
        >
            {children}
        </div>
    );
};
