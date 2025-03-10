// components/SearchForm.js
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SearchForm({ initialValues = {} }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState(initialValues.q || '');
  const [isRemote, setIsRemote] = useState(initialValues.remote === 'true');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Build query params, removing empty values
    const params = {};
    
    if (searchQuery.trim()) {
      params.q = searchQuery.trim();
    }
    
    if (isRemote) {
      params.remote = 'true';
    }
    
    // Only navigate if we have search parameters
    if (Object.keys(params).length > 0) {
      router.push({
        pathname: '/search',
        query: params
      });
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Sök efter jobbtitel, nyckelord eller plats..."
          className="w-full px-4 py-3 rounded-xl border-2 border-transparent bg-white/80 backdrop-blur-sm focus:border-primary-300 focus:bg-white focus:ring focus:ring-primary-200 transition-all duration-200"
        />
      </div>
      
      <div className="flex items-center gap-2">
        <label className="flex items-center gap-2 text-white cursor-pointer">
          <input
            type="checkbox"
            checked={isRemote}
            onChange={(e) => setIsRemote(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span>Distansarbete</span>
        </label>
      </div>
      
      <button
        type="submit"
        className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 focus:ring focus:ring-primary-200 transition-all duration-200"
      >
        Sök jobb
      </button>
    </form>
  );
}