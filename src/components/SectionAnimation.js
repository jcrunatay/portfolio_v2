import  { useEffect } from 'react';


export default function SectionAnimation(props){

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: props.threshold
        };
    
        const observer = new IntersectionObserver(([entry],obs) => {
            if (entry.isIntersecting && !props.hasAnimated) {
                props.setIsVisible(true);
                /* props.setHasAnimated(true); */
                obs.unobserve(entry.target);
            }
        }, options);
    
        if (props.elementRef.current) {
            observer.observe(props.elementRef.current);
        }

        // Store a reference to the current element to avoid warning
        const currentRef = props.elementRef.current;
    
        return () => {
            if (currentRef) {
            observer.unobserve(currentRef);
            }
        };
        }, [props,props.hasAnimated]);

    return;
}