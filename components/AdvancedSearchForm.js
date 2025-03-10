// components/AdvancedSearchForm.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { 
  searchStudentJobs, 
  findInternships,
  findRecentGraduateJobs,
  findSeasonalJobs, 
  findFlexibleHourJobs,
  findNoExperienceJobs
} from '../lib/advancedSearch';

export default function AdvancedSearchForm() {
  const router = useRouter();
  const [searchType, setSearchType] = useState('student');
  const [loading, setLoading] = useState(false);
  const [field, setField] = useState('');
  const [location, setLocation] = useState('');
  const [options, setOptions] = useState({
    partTime: false,
    entryLevel: false,
    remote: false,
    internship: false,
    paid: false,
    flexible: false,
    noExperience: false
  });

  const handleOptionChange = (option) => {
    setOptions({
      ...options,
      [option]: !options[option]
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      let results;
      
      switch (searchType) {
        case 'student':
          results = await searchStudentJobs({
            keyword: '',
            location,
            field,
            partTime: options.partTime,
            entryLevel: options.entryLevel,
            remote: options.remote,
            internship: options.internship
          });
          break;
          
        case 'internship':
          results = await findInternships(field, location, options.paid);
          break;
          
        case 'graduate':
          results = await findRecentGraduateJobs(field, location);
          break;
          
        case 'seasonal':
          results = await findSeasonalJobs(location, field);
          break;
          
        case 'flexible':
          results = await findFlexibleHourJobs(location);
          break;
          
        case 'noExperience':
          results = await findNoExperienceJobs(field, location);
          break;
      }
      
      if (results) {
        sessionStorage.setItem('advancedSearchResults', JSON.stringify(results));
        router.push('/advanced-results');
      }
    } catch (error) {
      console.error('Sökfel:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Söktyp</label>
        <select 
          value={searchType} 
          onChange={(e) => setSearchType(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        >
          <option value="student">Studentjobb</option>
          <option value="internship">Praktikplatser</option>
          <option value="graduate">Nyexaminerade</option>
          <option value="seasonal">Säsongsarbete</option>
          <option value="flexible">Flexibla arbetstider</option>
          <option value="noExperience">Ingen erfarenhet krävs</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Bransch/Område</label>
        <input
          type="text"
          value={field}
          onChange={(e) => setField(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="t.ex. IT, Vård, Marknadsföring"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Plats</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          placeholder="t.ex. Stockholm, Göteborg"
        />
      </div>
      
      <div className="space-y-4">
        <p className="block text-sm font-medium text-gray-700">Alternativ</p>
        
        <div className="flex flex-wrap gap-4">
          {searchType === 'student' && (
            <>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={options.partTime}
                  onChange={() => handleOptionChange('partTime')}
                  className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-700">Deltid</span>
              </label>
              
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={options.entryLevel}
                  onChange={() => handleOptionChange('entryLevel')}
                  className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-700">Första jobbet</span>
              </label>
              
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={options.internship}
                  onChange={() => handleOptionChange('internship')}
                  className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                />
                <span className="ml-2 text-sm text-gray-700">Praktik</span>
              </label>
            </>
          )}
          
          {searchType === 'internship' && (
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={options.paid}
                onChange={() => handleOptionChange('paid')}
                className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-700">Endast betald praktik</span>
            </label>
          )}
          
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={options.remote}
              onChange={() => handleOptionChange('remote')}
              className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            />
            <span className="ml-2 text-sm text-gray-700">Distansarbete</span>
          </label>
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Söker...' : 'Sök jobb'}
        </button>
      </div>
    </form>
  );
}