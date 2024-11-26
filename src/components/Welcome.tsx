import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Search } from 'lucide-react';
import QueryResultModal from './QueryResultModal';

export default function Welcome() {
  const navigate = useNavigate();
  const [accessCode, setAccessCode] = useState('');
  const [showQueryResult, setShowQueryResult] = useState(false);

  const handleQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessCode.trim()) {
      setShowQueryResult(true);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="card">
        <div className="flex items-center justify-center mb-6">
          <AlertTriangle className="w-12 h-12 text-accent" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Bildirimde Bulunun
        </h1>
        <p className="text-secondary mb-8 text-center text-sm sm:text-base">
          Maruz kaldığınız ya da gözlemlediğiniz, etik ihlal olarak değerlendirilebileceğini 
          düşündüğünüz durumu bildirmek için aşağıdaki butona tıklayınız.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/report')}
            className="btn-primary"
          >
            Yeni Bildirim
          </button>
        </div>
      </div>

      <div className="card">
        <div className="flex items-center justify-center mb-6">
          <Search className="w-12 h-12 text-primary" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-4">
          Bildiriminizin Durumu Hakkında Bilgi Alın
        </h2>
        <p className="text-secondary mb-6 text-center text-sm sm:text-base">
          Daha önce bildirimde bulunduğunuz konunun durumu hakkında bilgi almak için 
          lütfen sizinle daha önce paylaşılan Erişim Kodu ile giriş yapınız.
        </p>
        <form onSubmit={handleQuery} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Erişim Kodunuz"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className="input-field"
              required
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Sorgula
            </button>
          </div>
        </form>
      </div>

      <QueryResultModal
        isOpen={showQueryResult}
        onClose={() => setShowQueryResult(false)}
        accessCode={accessCode}
      />
    </div>
  );
}