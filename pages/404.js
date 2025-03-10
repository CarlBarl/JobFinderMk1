// pages/404.js
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout 
      title="Sidan hittades inte | StudentJobs"
      description="Sidan du letar efter kunde inte hittas."
    >
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Sidan hittades inte</h2>
          <p className="text-lg text-gray-600 mb-8">
            Sidan du letar efter existerar inte eller har flyttats.
          </p>
          <div className="space-x-4">
            <Link 
              href="/"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Till startsidan
            </Link>
            <Link 
              href="/search"
              className="inline-block bg-gray-200 text-gray-800 py-3 px-6 rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Sök jobb
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}