import React from 'react';
import { useTranslation } from 'react-google-multi-lang';

const CustomLanguageSwitcher = () => {
  const { setLanguage } = useTranslation();

  return (
    <div>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('es')}>Spanish</button>
      <button onClick={() => setLanguage('fr')}>French</button>
    </div>
  );
};

export default CustomLanguageSwitcher;