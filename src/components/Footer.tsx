export default function Footer() {
  return (
    <footer className="relative py-6 text-white w-full">
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: 'url(/images/background1.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Vedant Sahai. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}