import React from 'react';
import { CheckCircle, Clock, Copy } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  const reportCode = 'ETH2024002';
  const currentDate = new Date().toLocaleDateString('tr-TR');

  const handleCopyCode = () => {
    navigator.clipboard.writeText(reportCode);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-surface rounded-xl p-6 sm:p-8 max-w-2xl w-full mx-auto animate-slide-up">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-16 h-16 text-success" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
            Bildiriminiz Başarıyla Gönderildi
          </h3>
          <p className="text-secondary text-center mb-8">
            Bildiriminiz alınmıştır. En kısa sürede değerlendirilecektir.
          </p>

          <div className="space-y-6">
            <div className="flex items-center justify-between bg-primary/5 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium text-gray-800">Bildirim Alındı</span>
              </div>
              <span className="text-secondary text-sm">Tarih: {currentDate}</span>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Erişim Kodunuz</h4>
                <div className="flex items-center gap-3">
                  <code className="bg-white px-4 py-2 rounded border text-primary font-mono flex-1">
                    {reportCode}
                  </code>
                  <button
                    onClick={handleCopyCode}
                    className="p-2 text-secondary hover:text-primary transition-colors"
                    title="Kopyala"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-secondary text-sm mt-2">
                  Lütfen bu kodu saklayınız. Bildiriminizin durumunu sorgulamak için kullanabilirsiniz.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Sonraki Adımlar</h4>
                <ul className="text-secondary text-sm space-y-2">
                  <li>• Bildiriminiz etik komitesi tarafından incelenecektir.</li>
                  <li>• Gerekli görülmesi halinde ek bilgi talep edilebilir.</li>
                  <li>• Bildiriminizin durumunu erişim kodunuz ile sorgulayabilirsiniz.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={onClose}
              className="btn-primary"
            >
              Tamam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}