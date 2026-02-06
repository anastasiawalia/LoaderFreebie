export default function Loader3() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="flex items-center justify-center mb-6">
        <svg 
          width="64" 
          height="64" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 17L9 13.7498V11M9 11V6.92685C9 6.35868 9.32102 5.83927 9.82921 5.58519L14.8292 3.08533C15.8266 2.58669 17 3.31193 17 4.42699V6.07295C17 6.64111 16.679 7.1605 16.1708 7.41459L9 11Z" 
            stroke="#8338EC" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
          <circle 
            cx="6" 
            cy="17" 
            r="3" 
            stroke="#8338EC" 
            strokeWidth="1.5"
          />
          <path 
            className="sparkle-1"
            d="M17.5 14.1133C18.1932 15.6069 19.3922 16.8066 20.8857 17.5C19.3925 18.1932 18.1932 19.3925 17.5 20.8857C16.8066 19.3922 15.6069 18.1932 14.1133 17.5C15.6072 16.8067 16.8067 15.6072 17.5 14.1133Z" 
            stroke="#8338EC" 
            strokeWidth="1.5" 
            strokeLinejoin="round"
          />
          <path 
            className="sparkle-2"
            d="M20 8C19.9404 8 19.8809 8.02993 19.8511 8.09975L19.7816 8.28928C19.5236 8.97756 18.9876 9.52619 18.2928 9.78554L18.1042 9.85536C17.9653 9.90524 17.9653 10.0948 18.1042 10.1446L18.2928 10.2145C18.9777 10.4738 19.5236 11.0125 19.7816 11.7107L19.8511 11.9002C19.8809 11.9701 19.9404 12 20 12C20.0596 12 20.1191 11.9701 20.1489 11.9002L20.2184 11.7107C20.4764 11.0224 21.0124 10.4738 21.7072 10.2145L21.8958 10.1446C22.0347 10.0948 22.0347 9.90524 21.8958 9.85536L21.7072 9.78554C21.0223 9.52619 20.4764 8.98753 20.2184 8.28928L20.1489 8.09975C20.1191 8.02993 20.0596 8 20 8Z" 
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
        @keyframes sparkle {
          0%, 100% {
            opacity: 0.7;
            transform: scale(0.98);
          }
          50% {
            opacity: 1;
            transform: scale(1.02);
          }
        }
        
        .sparkle-1 {
          animation: sparkle 2s ease-in-out infinite;
          animation-delay: 0s;
        }
        
        .sparkle-2 {
          animation: sparkle 2s ease-in-out infinite;
          animation-delay: 1s;
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
