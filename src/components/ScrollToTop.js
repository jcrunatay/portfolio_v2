import { useEffect } from 'react';

function ScrollToTopOnRefresh() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
    };

    scrollToTop(); // Call the function when the component is mounted

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run this effect once (similar to componentDidMount)

  return null; // This component doesn't render anything
}

export default ScrollToTopOnRefresh;