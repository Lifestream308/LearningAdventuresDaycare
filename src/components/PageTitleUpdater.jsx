import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitleUpdater = () => {
  const location = useLocation(); 

  useEffect(() => {

    switch (location.pathname) {
      case '/':
        document.title = 'Home | Learning Time Adventures';
        break;
      case '/about':
        document.title = 'About Us | Learning Time Adventures';
        break;
      case '/contact':
        document.title = 'Contact Us | Learning Time Adventures';
        break;
      case '/sitemap':
        document.title = 'Sitemap | Learning Time Adventures';
        break;
      default:
        document.title = 'Learning Time Adventures';
        break;
    }
  }, [location]); 

  return null; 
};

export default PageTitleUpdater;
