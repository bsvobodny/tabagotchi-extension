import React, { useEffect, useState } from 'react';

function App() {
  const [tabsCount, setTabsCount] = useState(0);
  const [textLang, setTextLang] = useState('');
  const [locationResult, setLocationResult] = useState('');

  useEffect(() => {
    // Count number of open tabs
    chrome.tabs.query({ windowType: 'normal' }, (tabs) => {
      const count = tabs.length;
      setTabsCount(count);
    });

    // Get language of current tab
    getUserLanguage()
      .then((language) => {
        let langText = `You speak ${getLanguageNameFromCode(language)}`;
        setTextLang(langText);
      })
      .catch((error) => {
        console.error("Error detecting language:", error);
      });

    // Fetch GeoLocation
    fetchGeoLocation();
  }, []);

  const getUserLanguage = () => {
    return new Promise((resolve, reject) => {
      chrome.tabs.detectLanguage((language) => {
        resolve(language);
      });
    });
  };

  const getLanguageNameFromCode = (languageCode) => {
    // Simple language code to language name mapping example
    const languageCodeToName = {
      en: 'English',
      fr: 'French',
      es: 'Spanish',
      de: 'German',
      // Add more language codes and corresponding language names as needed
    };

    return languageCodeToName[languageCode] || 'Unknown';
  };

  const fetchGeoLocation = () => {
    // Implement the fetchGeoLocation function here
    // For simplicity, we'll set a dummy location result
    setLocationResult('United States');
  };

  const h3Style = {
    color: 'blue',
  };

  const level0 = {
    width: '1px',
    height: '1px',
    transform: 'scale(20)',
    background: 'transparent',
    boxShadow: '8px 0px #000000, 9px 0px #000000, 10px 0px #000000, 11px 0px #000000, 12px 0px #000000, 13px 0px #000000, 14px 0px #000000, 15px 0px #000000, 16px 0px #000000, 17px 0px #000000, 18px 0px #000000, 7px 1px #000000, 19px 1px #000000, 6px 2px #000000, 11px 2px #000000, 13px 2px #000000, 15px 2px #000000, 20px 2px #000000, 6px 3px #000000, 9px 3px #000000, 12px 3px #000000, 13px 3px #000000, 14px 3px #000000, 17px 3px #000000, 20px 3px #000000, 6px 4px #000000, 10px 4px #000000, 13px 4px #000000, 16px 4px #000000, 20px 4px #000000, 6px 5px #000000, 8px 5px #000000, 11px 5px #000000, 12px 5px #000000, 13px 5px #000000, 14px 5px #000000, 15px 5px #000000, 18px 5px #000000, 20px 5px #000000, 7px 6px #000000, 9px 6px #000000, 13px 6px #000000, 17px 6px #000000, 19px 6px #000000, 8px 7px #000000, 10px 7px #000000, 11px 7px #000000, 12px 7px #000000, 13px 7px #000000, 14px 7px #000000, 15px 7px #000000, 16px 7px #000000, 18px 7px #000000, 9px 8px #000000, 13px 8px #000000, 17px 8px #000000, 10px 9px #000000, 11px 9px #000000, 12px 9px #000000, 13px 9px #000000, 14px 9px #000000, 15px 9px #000000, 16px 9px #000000, 10px 10px #000000, 11px 10px #000000, 12px 10px #000000, 13px 10px #000000, 14px 10px #000000, 15px 10px #000000, 16px 10px #000000, 6px 11px #000000, 7px 11px #000000, 8px 11px #000000, 9px 11px #000000, 10px 11px #000000, 11px 11px #000000, 12px 11px #000000, 13px 11px #000000, 14px 11px #000000, 15px 11px #000000, 16px 11px #000000, 17px 11px #000000, 18px 11px #000000, 19px 11px #000000, 20px 11px #000000, 6px 12px #000000, 7px 12px #000000, 8px 12px #000000, 9px 12px #000000, 10px 12px #000000, 11px 12px #000000, 12px 12px #000000, 13px 12px #000000, 14px 12px #000000, 15px 12px #000000, 16px 12px #000000, 17px 12px #000000, 18px 12px #000000, 19px 12px #000000, 20px 12px #000000, 4px 13px #000000, 5px 13px #000000, 6px 13px #000000, 7px 13px #000000, 8px 13px #000000, 11px 13px #000000, 12px 13px #000000, 13px 13px #000000, 14px 13px #000000, 15px 13px #000000, 16px 13px #000000, 19px 13px #000000, 20px 13px #000000, 21px 13px #000000, 22px 13px #000000, 4px 14px #000000, 5px 14px #000000, 6px 14px #000000, 7px 14px #000000, 8px 14px #000000, 11px 14px #000000, 12px 14px #000000, 13px 14px #000000, 14px 14px #000000, 15px 14px #000000, 16px 14px #000000, 19px 14px #000000, 20px 14px #000000, 21px 14px #000000, 22px 14px #000000, 4px 15px #000000, 5px 15px #000000, 6px 15px #000000, 7px 15px #000000, 8px 15px #000000, 11px 15px #000000, 12px 15px #000000, 13px 15px #000000, 14px 15px #000000, 15px 15px #000000, 16px 15px #000000, 19px 15px #000000, 20px 15px #000000, 21px 15px #000000, 22px 15px #000000, 4px 16px #000000, 5px 16px #000000, 6px 16px #000000, 7px 16px #000000, 8px 16px #000000, 9px 16px #000000, 10px 16px #000000, 11px 16px #000000, 12px 16px #000000, 13px 16px #000000, 14px 16px #000000, 15px 16px #000000, 16px 16px #000000, 17px 16px #000000, 18px 16px #000000, 19px 16px #000000, 20px 16px #000000, 21px 16px #000000, 22px 16px #000000, 3px 17px #000000, 4px 17px #000000, 5px 17px #000000, 6px 17px #000000, 7px 17px #000000, 8px 17px #000000, 9px 17px #000000, 10px 17px #000000, 11px 17px #000000, 12px 17px #000000, 13px 17px #000000, 14px 17px #000000, 15px 17px #000000, 16px 17px #000000, 17px 17px #000000, 18px 17px #000000, 19px 17px #000000, 20px 17px #000000, 21px 17px #000000, 22px 17px #000000, 23px 17px #000000, 3px 18px #000000, 4px 18px #000000, 5px 18px #000000, 6px 18px #000000, 7px 18px #000000, 8px 18px #000000, 9px 18px #000000, 11px 18px #000000, 12px 18px #000000, 13px 18px #000000, 14px 18px #000000, 15px 18px #000000, 17px 18px #000000, 18px 18px #000000, 19px 18px #000000, 20px 18px #000000, 21px 18px #000000, 22px 18px #000000, 23px 18px #000000, 3px 19px #000000, 4px 19px #000000, 5px 19px #000000, 6px 19px #000000, 7px 19px #000000, 8px 19px #000000, 9px 19px #000000, 10px 19px #000000, 16px 19px #000000, 17px 19px #000000, 18px 19px #000000, 19px 19px #000000, 20px 19px #000000, 21px 19px #000000, 22px 19px #000000, 23px 19px #000000, 4px 20px #000000, 5px 20px #000000, 6px 20px #000000, 7px 20px #000000, 8px 20px #000000, 9px 20px #000000, 10px 20px #000000, 11px 20px #000000, 15px 20px #000000, 16px 20px #000000, 17px 20px #000000, 18px 20px #000000, 19px 20px #000000, 20px 20px #000000, 21px 20px #000000, 22px 20px #000000, 5px 21px #000000, 6px 21px #000000, 7px 21px #000000, 8px 21px #000000, 9px 21px #000000, 10px 21px #000000, 11px 21px #000000, 12px 21px #000000, 13px 21px #000000, 14px 21px #000000, 15px 21px #000000, 16px 21px #000000, 17px 21px #000000, 18px 21px #000000, 19px 21px #000000, 20px 21px #000000, 21px 21px #000000, 5px 22px #000000, 6px 22px #000000, 7px 22px #000000, 8px 22px #000000, 9px 22px #000000, 10px 22px #000000, 11px 22px #000000, 12px 22px #000000, 13px 22px #000000, 14px 22px #000000, 15px 22px #000000, 16px 22px #000000, 17px 22px #000000, 18px 22px #000000, 19px 22px #000000, 20px 22px #000000, 21px 22px #000000, 9px 23px #000000, 17px 23px #000000, 9px 24px #000000, 17px 24px #000000, 9px 25px #000000, 17px 25px #000000, 7px 26px #000000, 8px 26px #000000, 9px 26px #000000, 10px 26px #000000, 11px 26px #000000, 15px 26px #000000, 16px 26px #000000, 17px 26px #000000, 18px 26px #000000, 19px 26px #000000'
  }

  
  return (
    <main>
      <h3>New Tab Page!</h3>
      <img alt="Tabagotchi logo"></img>
      <div>Search Bar</div>
      <input type="text"/>
      <div>Latests tabs</div>

      <div style={level0}></div>
 


      <div>Search Bar</div>
      <div>
        <p>You have {tabsCount} tab{tabsCount !== 1 ? 's' : ''} open</p>
      </div>
      <div>
        <p>{textLang}</p>
      </div>
      <div>
        <p>Location: {locationResult}</p>
      </div>
      <h6>v 0.0.0</h6>
    </main>
  );
}

export default App;
