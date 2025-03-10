import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import SearchForm from '../components/SearchForm';
import JobCard from '../components/JobCard';
import { searchJobSearchAPI } from '../lib/jobApi';

export default function SearchPage({ initialResults, searchParams }) {
  const router = useRouter();
  const [jobs, setJobs] = useState(initialResults?.hits || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle total coming as either a number or an object with min/max
  const getTotalValue = (total) => {
    if (typeof total === 'number') return total;
    if (typeof total === 'object') {
      if (total?.value !== undefined) return total.value;
      if (total?.min !== undefined) return total.min;
    }
    return 0;
  };

  const [totalJobs, setTotalJobs] = useState(getTotalValue(initialResults?.total));
  
  // Pagination settings
  const jobsPerPage = 15;
  const currentPage = parseInt(router.query.page || '1', 10);
  const totalPages = Math.ceil(totalJobs / jobsPerPage);

  useEffect(() => {
    if (!router.isReady) return;
    
    // Reset jobs when search parameters change
    if (JSON.stringify(router.query) !== JSON.stringify(searchParams)) {
      setJobs([]);
    }
  }, [router.isReady, router.query, searchParams]);
  
  useEffect(() => {
    if (!router.isReady) return;
    
    const fetchJobs = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const offset = (currentPage - 1) * jobsPerPage;
        
        const data = await searchJobSearchAPI({
          q: router.query.q || '',
          remote: router.query.remote === 'true',
          limit: jobsPerPage,
          offset
        });

        if (data.error) {
          setError(data.error);
          setJobs([]);
          setTotalJobs(0);
        } else {
          setJobs(data.hits || []);
          setTotalJobs(getTotalValue(data.total));
          setError(null);
        }
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Det gick inte att hämta jobben. Försök igen senare.');
        setJobs([]);
        setTotalJobs(0);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobs();
  }, [router.isReady, router.query, currentPage]);
  
  const changePage = (newPage) => {
    const query = {
      ...router.query,
      page: newPage.toString()
    };
    
    if (newPage === 1) {
      delete query.page;
    }
    
    router.push({
      pathname: router.pathname,
      query
    }, undefined, { scroll: true });
  };
  
  const getPageNumbers = () => {
    const pageNumbers = [];
    pageNumbers.push(1);
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pageNumbers.push(i);
    }
    
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return [...new Set(pageNumbers)].sort((a, b) => a - b);
  };
  
  const pageNumbers = getPageNumbers();
  
  return (
    <Layout 
      title={`${router.query.q ? `${router.query.q} - ` : ''}Studentjobb i Sverige`}
      description="Sökresultat för studentjobb, praktikplatser och deltidsarbete"
    >
      {/* Search Form Section */}
      <section className="bg-primary-600/95 py-6 sticky top-0 z-20 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <SearchForm initialValues={router.query} />
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Results Summary */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">
              {loading ? (
                'Söker...'
              ) : error ? (
                'Sökfel'
              ) : totalJobs > 0 ? (
                `${totalJobs.toLocaleString()} jobb hittades${router.query.q ? ` för "${router.query.q}"` : ''}`
              ) : (
                `Inga jobb hittades${router.query.q ? ` för "${router.query.q}"` : ''}`
              )}
            </h1>
            
            {!error && totalJobs > 0 && (
              <p className="text-gray-600">
                Visar {(currentPage - 1) * jobsPerPage + 1} - {Math.min(currentPage * jobsPerPage, totalJobs)} av {totalJobs.toLocaleString()} jobb
              </p>
            )}
          </div>
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-6">
              {error}
            </div>
          )}
          
          {/* Loading State */}
          {loading && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          )}
          
          {/* No Results */}
          {!loading && jobs.length === 0 && !error && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">Inga jobb hittades</h3>
              <p className="mt-1 text-gray-500">Prova att justera din sökning eller sök efter något annat.</p>
            </div>
          )}
          
          {/* Job Results */}
          {!loading && jobs.length > 0 && (
            <div className="space-y-6 mb-8">
              {jobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && !loading && (
            <div className="flex justify-center mt-8 pb-4">
              <nav className="flex items-center gap-2" aria-label="Pagination">
                <button
                  onClick={() => currentPage > 1 && changePage(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                    currentPage <= 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  <span className="sr-only">Föregående</span>
                  ←
                </button>
                
                {pageNumbers.map((number, index) => {
                  const showEllipsisBefore = index > 0 && pageNumbers[index - 1] !== number - 1;
                  
                  return (
                    <div key={number} className="flex items-center">
                      {showEllipsisBefore && (
                        <span className="px-4 py-2 text-sm text-gray-700">...</span>
                      )}
                      
                      <button
                        onClick={() => changePage(number)}
                        className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                          currentPage === number
                            ? 'z-10 bg-primary-600 text-white border-primary-600'
                            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                        }`}
                      >
                        {number}
                      </button>
                    </div>
                  );
                })}
                
                <button
                  onClick={() => currentPage < totalPages && changePage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg ${
                    currentPage >= totalPages
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  <span className="sr-only">Nästa</span>
                  →
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const results = await searchJobSearchAPI({
      q: query.q || '',
      remote: query.remote === 'true',
      limit: 15,
      offset: ((parseInt(query.page || '1', 10) - 1) * 15)
    });
    
    return {
      props: {
        initialResults: results,
        searchParams: query
      }
    };
  } catch (error) {
    console.error('Search error:', error);
    return {
      props: {
        initialResults: { hits: [], total: 0, error: error.message },
        searchParams: query
      }
    };
  }
}