import React, { useState } from 'react';
import { Shield, AlertCircle } from 'lucide-react';
import ConfirmationModal from './ConfirmationModal';
import SuccessModal from './SuccessModal';

const ethicsViolations = [
  'Hırsızlık & rüşvet',
  'Çıkar çatışması',
  'Finansal kayıtların tahrif edilmesi',
  'Fiziksel/sözlü taciz',
  'Mobbing(psikolojik bezdirme)',
  'Ayrımcılık',
  'Şirket varlıklarının usulsüz biçimde kullanılması/şirket varlıklarına zarar verilmesi',
  'Şirket itibarına gölge düşürülmesi',
  'Şirket içi kurallarına veya yasal düzenlemelere aykırı diğer davranışlar'
];

export default function ReportForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    acceptedRules: false,
    content: '',
    location: '',
    date: '',
    shareInfo: '',
    connection: '',
    name: '',
    email: '',
    phone: '',
    otherDetail: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmSubmission = () => {
    setShowConfirmation(false);
    setShowSuccess(true);
  };

  if (step === 1) {
    return (
      <div className="max-w-3xl mx-auto card animate-slide-up">
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
          Genel Bilgilendirme
        </h2>
        <p className="text-secondary mb-6 text-sm sm:text-base">
          Bu sayfa, aşağıda yer verilen etik değerlerin ihlaline dair konuların bildirilmesi 
          amacıyla kullanılmaktadır. Lütfen bildirimde bulunmak istediğiniz konunun bu 
          kapsama girdiğini teyit ediniz.
        </p>
        <div className="space-y-3 mb-8">
          {ethicsViolations.map((violation, index) => (
            <div key={index} className="flex items-start text-secondary text-sm sm:text-base">
              <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0 mr-2" />
              <span>{violation}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => setStep(2)}
            className="btn-primary"
          >
            Evet
          </button>
          <button
            onClick={() => window.history.back()}
            className="btn-secondary"
          >
            Hayır
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto card animate-slide-up">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">Bildirim</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Olayın İçeriği</h3>
          <div>
            <label className="block text-secondary mb-2 text-sm">
              Bildirimde bulunmak istediğiniz konuyu tüm detayları ile belirtiniz.❗
            </label>
            <textarea
              required
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="input-field h-32"
            />
          </div>
          <div>
            <label className="block text-secondary mb-2 text-sm">
              Olayın gerçekleştiği yeri belirtiniz.❗
            </label>
            <input
              required
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-secondary mb-2 text-sm">
              Olayın gerçekleştiği zamanı belirtiniz.❗
            </label>
            <input
              required
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">Kendinizi Tanıtın</h3>
          <div className="space-y-2">
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="shareInfo"
                  value="share"
                  checked={formData.shareInfo === 'share'}
                  onChange={handleInputChange}
                  className="form-radio text-primary"
                />
                <span className="ml-2 text-secondary text-sm">
                  İsim ve iletişim bilgilerimin Şirket yönetimi ile paylaşılmasını istiyorum.
                </span>
              </label>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="shareInfo"
                  value="anonymous"
                  checked={formData.shareInfo === 'anonymous'}
                  onChange={handleInputChange}
                  className="form-radio text-primary"
                />
                <span className="ml-2 text-secondary text-sm">
                  İsim ve iletişim bilgilerimi paylaşmak istemiyorum.
                </span>
              </label>
            </div>
          </div>

          {formData.shareInfo === 'share' && (
            <div className="space-y-4 animate-fade-in">
              <div>
                <label className="block text-secondary mb-2 text-sm">İsim - Soyisim❗</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-secondary mb-2 text-sm">E-Mail❗</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-secondary mb-2 text-sm">Telefon No:❗</label>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>
          )}

          <div className="space-y-4">
            <label className="block text-secondary text-sm">Şirket ile bağlantınızı belirtiniz</label>
            <div className="space-y-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="connection"
                  value="current"
                  checked={formData.connection === 'current'}
                  onChange={handleInputChange}
                  className="form-radio text-primary"
                />
                <span className="ml-2 text-secondary text-sm">Şirket çalışanıyım.</span>
              </label>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="connection"
                    value="former"
                    checked={formData.connection === 'former'}
                    onChange={handleInputChange}
                    className="form-radio text-primary"
                  />
                  <span className="ml-2 text-secondary text-sm">Eski bir şirket çalışanıyım.</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="connection"
                    value="other"
                    checked={formData.connection === 'other'}
                    onChange={handleInputChange}
                    className="form-radio text-primary"
                  />
                  <span className="ml-2 text-secondary text-sm">Diğer(Örn: Müşteri, Tedarikçi, Danışman vb.)</span>
                </label>
              </div>
            </div>
          </div>

          {formData.connection === 'other' && (
            <div className="animate-fade-in">
              <label className="block text-secondary mb-2 text-sm">Belirtiniz❗</label>
              <input
                required
                type="text"
                name="otherDetail"
                value={formData.otherDetail}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          )}
        </div>

        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="btn-primary"
          >
            Gönder
          </button>
        </div>
      </form>

      <ConfirmationModal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        onConfirm={confirmSubmission}
        formData={formData}
      />

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => {
          setShowSuccess(false);
          window.location.href = '/';
        }}
      />
    </div>
  );
}