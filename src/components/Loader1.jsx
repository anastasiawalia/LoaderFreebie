export default function Loader1() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
      <div className="flex items-center justify-center space-x-2 mb-6">
        <div 
          className="w-3 h-3 bg-[#8338EC] rounded-full"
          style={{
            animation: 'dotLoader 1.4s infinite ease-in-out',
            animationDelay: '0s'
          }}
        ></div>
        <div 
          className="w-3 h-3 bg-[#8338EC] rounded-full"
          style={{
            animation: 'dotLoader 1.4s infinite ease-in-out',
            animationDelay: '0.2s'
          }}
        ></div>
        <div 
          className="w-3 h-3 bg-[#8338EC] rounded-full"
          style={{
            animation: 'dotLoader 1.4s infinite ease-in-out',
            animationDelay: '0.4s'
          }}
        ></div>
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
        @keyframes dotLoader {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1.2);
            opacity: 1;
          }
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
