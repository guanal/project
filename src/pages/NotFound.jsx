import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-600 dark:text-primary-400 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound