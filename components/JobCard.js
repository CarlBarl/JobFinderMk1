import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { sv } from 'date-fns/locale';

export default function JobCard({ job }) {
  // Handle potential date objects that might come as {min, max}
  const getValidDate = (dateField) => {
    if (!dateField) return null;
    if (typeof dateField === 'string') return new Date(dateField);
    if (dateField.min) return new Date(dateField.min);
    return null;
  };

  const publishedDate = getValidDate(job.publication_date);
  const applicationDeadline = getValidDate(job.application_deadline);
  
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-soft-lg transition-all duration-200 border border-gray-100 overflow-hidden group">
      <Link href={`/job/${job.id}`}>
        <div className="p-6">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                {job.headline}
              </h2>
              <p className="text-gray-600 mt-1">
                {job.employer?.name || 'Företag ej angivet'}
              </p>
            </div>
            
            {job.logotype_url && (
              <img
                src={job.logotype_url}
                alt={`${job.employer?.name} logotyp`}
                className="w-12 h-12 object-contain"
              />
            )}
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {job.workplace_address?.municipality && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm bg-gray-100 text-gray-800">
                <svg className="w-4 h-4 mr-1.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {job.workplace_address.municipality}
              </span>
            )}
            
            {job.scope_of_work && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm bg-primary-50 text-primary-700">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {typeof job.scope_of_work === 'object' ? job.scope_of_work.min : job.scope_of_work}
              </span>
            )}
            
            {job.remote && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm bg-green-50 text-green-700">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Distansarbete
              </span>
            )}
          </div>
          
          <div className="mt-4 text-sm text-gray-500 flex items-center gap-4">
            {publishedDate && (
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Publicerad {formatDistanceToNow(publishedDate, { locale: sv, addSuffix: true })}
              </span>
            )}
            
            {applicationDeadline && (
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sista ansökningsdag {formatDistanceToNow(applicationDeadline, { locale: sv, addSuffix: true })}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}