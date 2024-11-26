import React from 'react';
import { X } from 'lucide-react';

interface FormData {
  content: string;
  location: string;
  date: string;
  shareInfo: string;
  connection: string;
  name?: string;
  email?: string;
  phone?: string;
  otherDetail?: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  formData: FormData;
}

export default function ConfirmationModal({ isOpen, onClose, onConfirm, formData }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-surface rounded-xl p-6 sm:p-8 max-w-2xl w-full mx-auto max-h-[90vh] overflow-y-auto animate-slide-up">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-800">Bildirim Özeti</h3>
            <button onClick={onClose} className="text-secondary hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-700">Olay Detayları</h4>
              <p className="text-secondary whitespace-pre-wrap text-sm">{formData.content}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700">Olay Yeri</h4>
              <p className="text-secondary text-sm">{formData.location}</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700">Olay Tarihi</h4>
              <p className="text-secondary text-sm">{formData.date}</p>
            </div>

            {formData.shareInfo === 'share' && (
              <div>
                <h4 className="font-semibold text-gray-700">Kişisel Bilgiler</h4>
                <p className="text-secondary text-sm">İsim: {formData.name}</p>
                <p className="text-secondary text-sm">E-mail: {formData.email}</p>
                <p className="text-secondary text-sm">Telefon: {formData.phone}</p>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-gray-700">Şirket Bağlantısı</h4>
              <p className="text-secondary text-sm">
                {formData.connection === 'current'
                  ? 'Şirket çalışanı'
                  : formData.connection === 'former'
                  ? 'Eski şirket çalışanı'
                  : `Diğer: ${formData.otherDetail}`}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
            <button
              onClick={onClose}
              className="btn-secondary"
            >
              Düzenle
            </button>
            <button
              onClick={onConfirm}
              className="btn-primary"
            >
              Onayla ve Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}