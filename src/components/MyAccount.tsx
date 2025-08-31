import { useState } from 'react';
import Header from './Header';

type MyAccountProps = {
  onBackToHome: () => void;
  onLogout: () => void;
};

type BusinessData = {
  name: string;
  category: string;
  type: 'online' | 'presencial';
  location: string;
  description: string;
  whatsapp: string;
  instagram: string;
  photo: string | null;
};

function MetricCard({ icon, label, value, color = '#005a22' }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="bg-gray-50 p-3 rounded-lg text-center">
      <div className="flex justify-center mb-1" style={{ color }}>
        {icon}
      </div>
      <div className="text-lg font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-xs text-gray-600 leading-tight">{label}</div>
    </div>
  );
}

function BusinessCard({ business, onEdit }: {
  business: BusinessData;
  onEdit: () => void;
}) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
          {business.photo ? (
            <img src={business.photo} alt={business.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h2M7 3v18M15 3v18" />
              </svg>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-[#005a22] mb-1">{business.name}</h2>
          <p className="text-gray-600 text-sm mb-2">{business.category}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              business.type === 'online' 
                ? 'bg-orange-100 text-[#ff6c0e]' 
                : 'bg-green-100 text-[#005a22]'
            }`}>
              {business.type === 'online' ? 'Online' : 'Presencial'}
            </span>
            <span className="text-gray-500 text-sm">{business.location}</span>
          </div>
          <p className="text-gray-700 text-sm">{business.description}</p>
        </div>
      </div>

      {/* Dashboard de métricas */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <MetricCard
          icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
          label="Exibições do seu negócio em buscas"
          value="1.247"
          color="#005a22"
        />
        <MetricCard
          icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          label="Cliques no seu negócio"
          value="89"
          color="#ff6c0e"
        />
        <MetricCard
          icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
          label="Cliques no botão de WhatsApp"
          value="23"
          color="#b0ff0b"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {business.whatsapp && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.351"/>
            </svg>
            {business.whatsapp}
          </div>
        )}
        {business.instagram && (
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.132-1.551l3.132-1.551v3.102zm-.794-4.629L4.523 10.79c.611-2.806 3.132-4.874 6.132-4.874s5.521 2.068 6.132 4.874l-3.132 1.569-2.806-1.395-2.194 1.395z"/>
            </svg>
            @{business.instagram}
          </div>
        )}
      </div>
      
      <button
        onClick={onEdit}
        className="w-full bg-[#005a22] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#008934] transition-colors"
      >
        Editar Negócio
      </button>
    </div>
  );
}

function EditBusinessForm({ business, onSave, onCancel }: {
  business: BusinessData;
  onSave: (data: BusinessData) => void;
  onCancel: () => void;
}) {
  const [formData, setFormData] = useState<BusinessData>(business);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 mb-6">
      <h3 className="text-lg font-bold text-[#005a22] mb-4">Editar Informações</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-[#005a22] mb-2">Nome do negócio</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Categoria</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          >
            <option value="Restaurantes">Restaurantes</option>
            <option value="Beleza e Estética">Beleza e Estética</option>
            <option value="Saúde">Saúde</option>
            <option value="Turismo">Turismo</option>
            <option value="Outros">Outros</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Descrição</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            rows={3}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22] resize-none"
          />
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">WhatsApp</label>
          <input
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Instagram</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-400">@</span>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData(prev => ({ ...prev, instagram: e.target.value }))}
              className="w-full p-3 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-[#005a22] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#008934] transition-colors"
          >
            Salvar
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default function MyAccount({ onBackToHome, onLogout }: MyAccountProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [business, setBusiness] = useState<BusinessData>({
    name: 'Sabor do Brasil',
    category: 'Restaurantes',
    type: 'presencial',
    location: 'Valência, Espanha',
    description: 'Autêntica culinária brasileira no coração de Valência.',
    whatsapp: '+34 123 456 789',
    instagram: 'sabordoBrasil',
    photo: null
  });

  const handleSave = (data: BusinessData) => {
    setBusiness(data);
    setIsEditing(false);
  };

  const handleAddNewBusiness = () => {
    alert('Recurso em construção, em breve você poderá adicionar mais de um negócio');
  };

  const handleShare = () => {
    const text = `Conheça meu negócio no Imigrei: ${business.name}. Acesse: https://imigrei.com/negocio/${business.name.toLowerCase().replace(/\s+/g, '-')}`;
    
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Texto copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onLogoClick={onBackToHome}
        onLoginClick={onLogout}
      />
      
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#005a22]">Minha Conta</h1>
          <button
            onClick={onLogout}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            Sair
          </button>
        </div>



        {/* Card do negócio */}
        {isEditing ? (
          <EditBusinessForm
            business={business}
            onSave={handleSave}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <BusinessCard
            business={business}
            onEdit={() => setIsEditing(true)}
          />
        )}

        {/* Botão Adicionar Novo Negócio */}
        <div className="mb-6">
          <button
            onClick={handleAddNewBusiness}
            className="w-full bg-white border-2 border-dashed border-gray-300 text-gray-600 py-4 px-6 rounded-xl font-medium hover:border-gray-400 hover:text-gray-700 transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Adicionar um novo negócio
          </button>
        </div>

        {/* Área de compartilhamento */}
        <div className="bg-[#fff8e2] p-6 rounded-xl">
          <h3 className="font-bold text-[#005a22] mb-4">Compartilhar Negócio</h3>
          <p className="text-gray-600 text-sm mb-4">
            Divulgue seu negócio e alcance mais brasileiros na sua região
          </p>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 mb-1">Link do seu negócio:</p>
              <p className="text-sm text-[#005a22] break-all">
                https://imigrei.com/negocio/{business.name.toLowerCase().replace(/\s+/g, '-')}
              </p>
            </div>
            
            <button
              onClick={handleShare}
              className="w-full bg-[#ff6c0e] text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.351"/>
              </svg>
              Compartilhar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}