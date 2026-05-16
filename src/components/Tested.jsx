import React from 'react';
import { 
  Wallet, 
  Percent, 
  CreditCard, 
  Plane, 
  FileText, 
  RefreshCw, 
  Calendar, 
  Clock, 
  Headset, 
  Users 
} from 'lucide-react';

const GUARANTEES = [
  {
    id: 1,
    title: "Secure Your Spot with 20% Down",
    MainIcon: Wallet,
    BadgeIcon: Percent,
  },
  {
    id: 2,
    title: "Easy 0% Interest Payment Plans",
    MainIcon: CreditCard,
    BadgeIcon: Plane,
  },
  {
    id: 3,
    title: "Risk-Free Group Cancellations",
    MainIcon: FileText,
    BadgeIcon: RefreshCw,
  },
  {
    id: 4,
    title: "Zero-Fee Date Changes & Rescheduling",
    MainIcon: Calendar,
    BadgeIcon: Clock,
  },
  {
    id: 5,
    title: "24/7 Expert Trip Captains Support",
    MainIcon: Headset,
    BadgeIcon: Users,
  }
];

export default function ServiceFooter() {
  return (
    // A soft, warm background color similar to the reference, but elevated.
    <div className="w-full bg-[#FCFAEF] py-16 px-4 font-sans border-t border-amber-100/50">
      
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Main Section Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 md:mb-16 tracking-tight text-center">
          Book with Confidence
        </h2>
        
        {/* Flex container to achieve the "3 on top, 2 on bottom" look automatically on desktop.
          On mobile, these will naturally stack.
        */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12 max-w-5xl w-full">
          
          {GUARANTEES.map((item) => {
            const MainIcon = item.MainIcon;
            const BadgeIcon = item.BadgeIcon;
            
            return (
              <div 
                key={item.id} 
                className="flex items-center gap-5 w-full sm:w-[45%] lg:w-[28%] group cursor-default"
              >
                {/* Custom Layered Icon Concept */}
                <div className="relative shrink-0">
                  {/* Main Background Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100/80 border border-emerald-200/50 flex items-center justify-center text-emerald-700 shadow-sm group-hover:scale-105 group-hover:bg-emerald-200/60 transition-all duration-300">
                    <MainIcon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  
                  {/* Secondary Badge Icon (mimicking the complex illustrations) */}
                  <div className="absolute -bottom-1 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-[#FCFAEF] group-hover:rotate-12 transition-transform duration-300">
                    <BadgeIcon className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                  </div>
                </div>
                
                {/* Text Content */}
                <h4 className="text-[15px] font-semibold text-slate-800 leading-snug">
                  {item.title}
                </h4>
              </div>
            );
          })}
          
        </div>

        {/* T&C Footer Note */}
        <div className="w-full mt-16 flex justify-end">
          <span className="text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer transition-colors">
            T&C applied*
          </span>
        </div>

      </div>
    </div>
  );
}