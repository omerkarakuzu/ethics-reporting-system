import React from 'react';
import { X, Clock, CheckCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  accessCode: string;
}

// Sample data for demonstration
const sampleReport = {
  code: 'ETH2024001',
  status: 'İncelemede',
  date: '2024-03-15',
  type: 'Çıkar çatışması',
  description: 'Departman yöneticisinin, yakın akrabasının sahibi olduğu şirketten hizmet alımı yapması.',
  lastUpdate: '2024-03-18',
  updates: [
    {
      date: '2024-03-15',
      status: 'Bildirim alındı',
      detail: 'Bildiriminiz başarıyla alındı ve kayıt altına alındı.'
    },
    {
      date: '2024-03-16',
      status: 'İncelemeye alındı',
      detail: 'Bildiriminiz etik komitesi tarafından incelemeye alındı.'
    },
    {
      date: '2024-03-18',
      status: 'İncelemede',
      detail: 'İlgili departmanlardan bilgi ve belge talep edildi.'
    }
  ]
};

export default function QueryResultModal({ isOpen, onClose, accessCode }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-surface rounded-xl p-6 sm:p-8 max-w-2xl w-full mx-auto max-h-[90vh] overflow-y-auto animate-slide-up">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Bildirim Detayları</h3>
              <p className="text-secondary text-sm">Erişim Kodu: {sampleReport.code}</p>
            </div>
            <button onClick={onClose} className="text-secondary hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between bg-primary/5 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <span className="font-medium text-gray-800">{sampleReport.status}</span>
              </div>
              <span className="text-secondary text-sm">Son güncelleme: {sampleReport.lastUpdate}</span>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">Bildirim Tipi</h4>
                <p className="text-secondary">{sampleReport.type}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700">Bildirim İçeriği</h4>
                <p className="text-secondary">{sampleReport.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-4">İşlem Geçmişi</h4>
                <div className="space-y-4">
                  {sampleReport.updates.map((update, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        {index !== sampleReport.updates.length - 1 && (
                          <div className="w-0.5 h-full bg-primary/10 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-800">{update.status}</span>
                          <span className="text-secondary text-sm">{update.date}</span>
                        </div>
                        <p className="text-secondary text-sm">{update.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}