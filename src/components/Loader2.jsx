export default function Loader2() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="flex items-center justify-center mb-6">
        <svg 
          className="spinning-loader"
          width="64" 
          height="64" 
          viewBox="0 0 96 96" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M88 48C88 70.0914 70.0914 88 48 88C25.9086 88 8 70.0914 8 48C8 25.9086 25.9086 8 48 8C70.0914 8 88 25.9086 88 48ZM16 48C16 65.6731 30.3269 80 48 80C65.6731 80 80 65.6731 80 48C80 30.3269 65.6731 16 48 16C30.3269 16 16 30.3269 16 48Z" 
            fill="#EDE7F6"
          />
          <path 
            d="M22.5442 22.5442C20.9821 20.9821 20.9705 18.4316 22.6808 17.0333C25.7019 14.5631 29.074 12.5437 32.6927 11.0448C37.5457 9.03463 42.7471 8 48 8C53.2529 8 58.4543 9.03463 63.3073 11.0448C66.926 12.5437 70.2981 14.5631 73.3192 17.0333C75.0295 18.4316 75.018 20.9821 73.4559 22.5442C71.8938 24.1063 69.3745 24.0832 67.6298 22.728C65.376 20.9775 62.8935 19.5325 60.2459 18.4359C56.3635 16.8277 52.2023 16 48 16C43.7977 16 39.6366 16.8277 35.7541 18.4359C33.1066 19.5325 30.624 20.9775 28.3702 22.728C26.6256 24.0832 24.1063 24.1062 22.5442 22.5442Z" 
            fill="#8338EC"
          />
        </svg>
      </div>
      
      {/* Text below loader */}
      <h2 className="font-['Bacasime_Antique',sans-serif] text-3xl md:text-4xl lg:text-5xl text-center">
        <span 
          className="shimmer-text"
        >
          I create beautiful experiences using AI
        </span>
      </h2>
      
      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .spinning-loader {
          animation: spin 1.5s linear infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .shimmer-text {
          background: linear-gradient(
            90deg,
            #8338EC 0%,
            #8338EC 30%,
            #B923FF 50%,
            #8338EC 70%,
            #8338EC 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
