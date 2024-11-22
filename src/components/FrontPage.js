import React, { useState } from 'react';
import { Translate } from '../utils/Translation_Template';

const FrontPage = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null); 
  const [hide, setHide] = useState(true);
  const [searched, setSearched] = useState(false);

  const handleInput = (e) => {
    setSearch(e.target.value);
    setSearched(false);
  };

  const handleTranslation = () =>{
    setHide(!hide)
  }

  const buttonSearch = () => {
    const trimmedSearch = search.trim();
    const translation = Translate.find(
      (item) => item.English.toLowerCase() === trimmedSearch.toLowerCase()
    );
    setResult(translation);
  };

  return (
    <div>
      <div className="app">
        <h1>Dictionary App</h1>
        <div className="container">
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search Words"
              onChange={handleInput}
            />
            <button onClick={buttonSearch}>Search</button>
            <div className="response">
              {result ? (
                <div>
                  // <p><strong>English:</strong> {result.English}</p>
                  <p><strong>Hungarian:</strong> {result.Hungarian}</p>
                  { !hide && (
                    <>
                      <p><strong>Spanish:</strong> {result.Spanish}</p>
                      <p><strong>Chinese:</strong> {result.Chinese}</p>
                      <p><strong>Portuguese:</strong> {result.Portuguese}</p>
                    </>
                  )}
                  <button onClick={handleTranslation}>
                    {hide ? 'Show More Translations' : 'Show Less'}
                  </button>
                </div>
              ) : (
                search && <p>No translation found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
