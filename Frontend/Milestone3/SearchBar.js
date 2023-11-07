import react, {useState} from 'react';
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
    const [query, setQuery] = useState('');
    const handleInputChange = (e) => {
        setQuery(e.target.value);
      };
    
      const handleSearch = () => {
        // Pass the search query to the parent component or function
        onSearch(query);
      };
    
      return (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search public works records"
            value={query}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      );
    };
    
    export default SearchBar;