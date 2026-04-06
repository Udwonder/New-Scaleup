import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Copy, Check } from 'lucide-react';

const bankDetails = {
  GBP: { sign: '£', name: 'Sterling Bank Plc', accountName: 'Scaleup Foundation LTD GTE', accountNumber: '0132115220', branch: 'Jabi Branch', branchCode: '232080157', swift: 'NAMENGLA', sortCode: '232010017' },
  EUR: { sign: '€', name: 'Sterling Bank Plc', accountName: 'Scaleup Foundation LTD GTE', accountNumber: '0132115330', branch: 'Jabi Branch', branchCode: '232080157', swift: 'NAMENGLA', sortCode: '232010017' },
  USD: { sign: '$', name: 'Sterling Bank Plc', accountName: 'Scaleup Foundation LTD GTE', accountNumber: '0132115055', branch: 'Jabi Branch', branchCode: '232080157', swift: 'NAMENGLA', sortCode: '232010017' },
  NGN: { sign: '₦', name: 'Sterling Bank Plc', accountName: 'Scaleup Foundation LTD GTE', accountNumber: '0131896117', branch: 'Jabi Branch', branchCode: '232080157', swift: 'NAMENGLA', sortCode: '232010017' },
};

export function DonateModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [activeCurrency, setActiveCurrency] = useState<keyof typeof bankDetails>('NGN');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl w-full max-w-2xl shadow-2xl relative">
              <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 dark:hover:text-white"><X size={24} /></button>
              <h2 className="text-3xl font-bold text-brand-blue dark:text-white mb-8 text-center">Select Currency</h2>
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                {Object.keys(bankDetails).map((currency) => (
                  <button
                    key={currency}
                    onClick={() => setActiveCurrency(currency as keyof typeof bankDetails)}
                    className={`py-4 rounded-2xl text-2xl font-bold transition-all ${activeCurrency === currency ? 'bg-brand-green text-brand-blue shadow-lg' : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'}`}
                  >
                    {currency}
                  </button>
                ))}
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-brand-blue dark:text-white">{activeCurrency} Account Details</h3>
                  <button onClick={() => copyToClipboard(bankDetails[activeCurrency].accountNumber)} className="flex items-center gap-2 text-sm text-brand-green font-semibold">
                    {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy Number'}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  {Object.entries(bankDetails[activeCurrency]).map(([key, value]) => key !== 'sign' && (
                    <div key={key} className="border-b border-slate-200 dark:border-slate-700 pb-2">
                      <span className="block text-slate-500 dark:text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-semibold text-slate-900 dark:text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
