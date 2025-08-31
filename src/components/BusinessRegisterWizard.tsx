import { useState } from 'react';
import Header from './Header';
import { Checkbox } from './ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { signInWithGoogle } from '@/features/auth/auth';
import { useAuth } from '@/hooks/useAuth';
import { toast } from 'sonner';

type BusinessRegisterWizardProps = {
  onBackToHome: () => void;
  onSuccess: () => void;
  onLogin: () => void;
};

type BusinessType = 'online' | 'presencial' | 'hibrido' | null;

type ScheduleDay = {
  enabled: boolean;
  from: string;
  to: string;
};

type FormData = {
  businessType: BusinessType;
  countries: string[];
  address: string;
  selectedCountry: string;
  businessName: string;
  category: string;
  photo: File | null;
  description: string;
  whatsapp: string;
  instagram: string;
  schedule: {
    monday: ScheduleDay;
    tuesday: ScheduleDay;
    wednesday: ScheduleDay;
    thursday: ScheduleDay;
    friday: ScheduleDay;
    saturday: ScheduleDay;
    sunday: ScheduleDay;
  };
  website: string;
  services: string[];
};

const COUNTRIES_BY_CONTINENT = {
  'Continente Americano': [
    'Argentina', 'Bolívia', 'Canadá', 'Chile', 'Colômbia', 'Costa Rica', 'Cuba', 'Equador', 
    'El Salvador', 'Estados Unidos', 'Guatemala', 'Guiana', 'Guiana Francesa', 'Haiti', 
    'Honduras', 'Jamaica', 'México', 'Nicarágua', 'Panamá', 'Paraguai', 'Peru', 
    'República Dominicana', 'Suriname', 'Trinidad e Tobago', 'Uruguai', 'Venezuela'
  ],
  'Europa': [
    'Alemanha', 'Albânia', 'Andorra', 'Áustria', 'Bélgica', 'Bielorrússia', 'Bósnia e Herzegovina', 
    'Bulgária', 'Croácia', 'Dinamarca', 'Eslováquia', 'Eslovênia', 'Espanha', 'Estônia', 
    'Finlândia', 'França', 'Grécia', 'Hungria', 'Irlanda', 'Islândia', 'Itália', 'Kosovo', 
    'Letônia', 'Liechtenstein', 'Lituânia', 'Luxemburgo', 'Malta', 'Moldávia', 'Mônaco', 
    'Montenegro', 'Noruega', 'Países Baixos', 'Polônia', 'Portugal', 'Reino Unido', 
    'República Tcheca', 'Romênia', 'Rússia', 'San Marino', 'Sérvia', 'Suécia', 'Suíça', 
    'Ucrânia', 'Vaticano'
  ],
  'África': [
    'África do Sul', 'Angola', 'Argélia', 'Benin', 'Botsuana', 'Burkina Faso', 'Burundi', 
    'Cabo Verde', 'Camarões', 'Chade', 'Comores', 'Costa do Marfim', 'Djibuti', 'Egito', 
    'Eritreia', 'Etiópia', 'Gabão', 'Gâmbia', 'Gana', 'Guiné', 'Guiné-Bissau', 'Guiné Equatorial', 
    'Lesoto', 'Libéria', 'Líbia', 'Madagáscar', 'Malauí', 'Mali', 'Marrocos', 'Maurício', 
    'Mauritânia', 'Moçambique', 'Namíbia', 'Níger', 'Nigéria', 'Quênia', 'República Centro-Africana', 
    'República Democrática do Congo', 'República do Congo', 'Ruanda', 'São Tomé e Príncipe', 
    'Senegal', 'Serra Leoa', 'Seicheles', 'Somália', 'Suazilândia', 'Sudão', 'Sudão do Sul', 
    'Tanzânia', 'Togo', 'Tunísia', 'Uganda', 'Zâmbia', 'Zimbábue'
  ],
  'Ásia': [
    'Afeganistão', 'Arábia Saudita', 'Armênia', 'Azerbaijão', 'Bahrein', 'Bangladesh', 'Brunei', 
    'Butão', 'Camboja', 'Catar', 'Cazaquistão', 'China', 'Chipre', 'Coreia do Norte', 'Coreia do Sul', 
    'Emirados Árabes Unidos', 'Filipinas', 'Geórgia', 'Iêmen', 'Índia', 'Indonésia', 'Irã', 'Iraque', 
    'Israel', 'Japão', 'Jordânia', 'Kuwait', 'Laos', 'Líbano', 'Malásia', 'Maldivas', 'Mianmar', 
    'Mongólia', 'Nepal', 'Omã', 'Paquistão', 'Quirguistão', 'Singapura', 'Síria', 'Sri Lanka', 
    'Tailândia', 'Tajiquistão', 'Timor-Leste', 'Turcomenistão', 'Turquia', 'Uzbequistão', 'Vietnã'
  ],
  'Oceania': [
    'Austrália', 'Fiji', 'Ilhas Marshall', 'Ilhas Salomão', 'Kiribati', 'Micronésia', 'Nauru', 
    'Nova Zelândia', 'Palau', 'Papua-Nova Guiné', 'Samoa', 'Tonga', 'Tuvalu', 'Vanuatu'
  ]
};

const ALL_COUNTRIES = Object.values(COUNTRIES_BY_CONTINENT).flat();

const COUNTRIES = [
  'Espanha', 'Portugal', 'Irlanda', 'Malta', 'França', 'Alemanha', 
  'Reino Unido', 'Itália', 'Países Baixos', 'Bélgica', 'Suíça', 'Áustria'
];

const CATEGORIES = [
  'Restaurantes', 'Beleza e Estética', 'Saúde', 'Turismo', 'Educação',
  'Tecnologia', 'Consultoria', 'Limpeza', 'Transporte', 'Comércio',
  'Serviços Gerais', 'Arte e Cultura', 'Esportes', 'Outros'
];

function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => (
        <div
          key={i}
          className={`h-2 w-8 rounded-full transition-colors ${
            i + 1 <= currentStep ? 'bg-[#005a22]' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function Step1({ formData, setFormData, onNext }: {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}) {
  const [openContinents, setOpenContinents] = useState<Record<string, boolean>>({});

  const handleBusinessTypeSelect = (type: BusinessType) => {
    setFormData({ 
      businessType: type, 
      countries: [], 
      address: '', 
      selectedCountry: '',
      businessName: '',
      category: '',
      photo: null,
      description: '',
      whatsapp: '',
      instagram: '',
      schedule: {
        monday: { enabled: false, from: '09:00', to: '18:00' },
        tuesday: { enabled: false, from: '09:00', to: '18:00' },
        wednesday: { enabled: false, from: '09:00', to: '18:00' },
        thursday: { enabled: false, from: '09:00', to: '18:00' },
        friday: { enabled: false, from: '09:00', to: '18:00' },
        saturday: { enabled: false, from: '09:00', to: '18:00' },
        sunday: { enabled: false, from: '09:00', to: '18:00' }
      },
      website: '',
      services: ['']
    });
  };

  const handleCountryToggle = (country: string) => {
    const newCountries = formData.countries.includes(country)
      ? formData.countries.filter(c => c !== country)
      : [...formData.countries, country];
    setFormData({ countries: newCountries });
  };

  const handleSelectAllCountries = () => {
    setFormData({ countries: ALL_COUNTRIES });
  };

  const handleDeselectAllCountries = () => {
    setFormData({ countries: [] });
  };

  const handleSelectContinentCountries = (continentCountries: string[]) => {
    const newCountries = [...new Set([...formData.countries, ...continentCountries])];
    setFormData({ countries: newCountries });
  };

  const handleDeselectContinentCountries = (continentCountries: string[]) => {
    const newCountries = formData.countries.filter(c => !continentCountries.includes(c));
    setFormData({ countries: newCountries });
  };

  const toggleContinent = (continent: string) => {
    setOpenContinents(prev => ({
      ...prev,
      [continent]: !prev[continent]
    }));
  };

  const canProceed = formData.businessType && (
    (formData.businessType === 'online' && formData.countries.length > 0) ||
    ((formData.businessType === 'presencial' || formData.businessType === 'hibrido') && formData.selectedCountry && formData.address.trim())
  );

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#005a22] mb-4">
          Que tipo de atendimento você oferece?
        </h1>
        <p className="text-gray-600">
          Nos conte como seu negócio opera para configurarmos da melhor forma
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => handleBusinessTypeSelect('presencial')}
          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
            formData.businessType === 'presencial'
              ? 'border-[#005a22] bg-[#fff8e2]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="font-bold text-lg text-[#005a22] mb-2">Atendimento somente Presencial</div>
          <div className="text-gray-600 text-sm text-[14px] text-[13px]">
            Loja física, restaurante, salão, serviço presencial
          </div>
        </button>

        <button
          onClick={() => handleBusinessTypeSelect('hibrido')}
          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
            formData.businessType === 'hibrido'
              ? 'border-[#b0ff0b] bg-green-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="font-bold text-lg text-[#005a22] mb-2">Atendimento Presencial e Online</div>
          <div className="text-gray-600 text-sm text-[14px]">
            Combina atendimento físico e serviços remotos
          </div>
        </button>

        <button
          onClick={() => handleBusinessTypeSelect('online')}
          className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
            formData.businessType === 'online'
              ? 'border-[#ff6c0e] bg-orange-50'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="font-bold text-lg text-[#ff6c0e] mb-2">Atendimento somente Online</div>
          <div className="text-gray-600 text-sm text-[14px]">
            Serviços remotos, e-commerce, consultoria digital
          </div>
        </button>
      </div>

      {formData.businessType === 'online' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-[#005a22] text-[14px]">Quais países você atende?</h3>
            <div className="text-sm text-gray-600 text-[14px]">
              {formData.countries.length} selecionado{formData.countries.length !== 1 ? 's' : ''}
            </div>
          </div>
          


          {Object.entries(COUNTRIES_BY_CONTINENT).map(([continent, countries]) => (
            <Collapsible 
              key={continent} 
              open={openContinents[continent]} 
              onOpenChange={() => toggleContinent(continent)}
            >
              <CollapsibleTrigger className="w-full">
                <div className="flex items-center justify-between py-3 px-1 hover:bg-gray-50 rounded-lg transition-colors">
                  <h4 className="font-medium text-[#005a22] text-sm text-[14px]">
                    {continent}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 text-[12px]">
                      {countries.filter(c => formData.countries.includes(c)).length}/{countries.length}
                    </span>
                    <svg 
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        openContinents[continent] ? 'rotate-180' : ''
                      }`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-3">
                <div className="flex gap-2 px-1">
                  <button
                    onClick={() => handleSelectContinentCountries(countries)}
                    className="flex-1 py-1.5 px-3 bg-[#005a22] text-white rounded-md text-xs hover:bg-[#008934] transition-colors text-[12px]"
                  >
                    Selecionar todos
                  </button>
                  <button
                    onClick={() => handleDeselectContinentCountries(countries)}
                    className="flex-1 py-1.5 px-3 bg-gray-200 text-gray-700 rounded-md text-xs hover:bg-gray-300 transition-colors text-[12px]"
                  >
                    Limpar seleção
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {countries.map(country => (
                    <button
                      key={country}
                      onClick={() => handleCountryToggle(country)}
                      className={`p-2 rounded-md border transition-all text-xs text-left ${
                        formData.countries.includes(country)
                          ? 'border-[#ff6c0e] bg-orange-50 text-[#ff6c0e]'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {country}
                    </button>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      )}

      {(formData.businessType === 'presencial' || formData.businessType === 'hibrido') && (
        <div className="space-y-4">
          <div>
            <label className="block font-medium text-[#005a22] mb-2">País</label>
            <select
              value={formData.selectedCountry}
              onChange={(e) => setFormData({ selectedCountry: e.target.value })}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
            >
              <option value="">Selecione o país</option>
              {COUNTRIES.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block font-medium text-[#005a22] mb-2">Endereço</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ address: e.target.value })}
              placeholder="Rua, número, bairro, cidade"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
            />
          </div>
        </div>
      )}

      <button
        onClick={onNext}
        disabled={!canProceed}
        className="w-full bg-[#005a22] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#008934] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Continuar
      </button>
    </div>
  );
}

function Step2({ onNext }: { onNext: () => void }) {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleGoogleLogin = async () => {
    setIsLoading(true);
    
    try {
      await signInWithGoogle();
      onNext();
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#005a22] mb-4">
          Entre com sua conta
        </h1>
        <p className="text-gray-600">
          Usamos o Google para manter seus dados seguros
        </p>
      </div>

      <div className="bg-[#fff8e2] p-6 rounded-xl">
        <button
          onClick={handleGoogleLogin}
          disabled={isLoading}
          className="w-full bg-white border border-gray-300 py-4 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-gray-300 border-t-[#005a22] rounded-full animate-spin" />
          ) : (
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          )}
          {isLoading ? 'Entrando...' : 'Continuar com Google'}
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        Ao continuar, você aceita nossos{' '}
        <a href="#" className="text-[#005a22] underline">Termos de Uso</a>
        {' '}e{' '}
        <a href="#" className="text-[#005a22] underline">Política de Privacidade</a>
      </p>
    </div>
  );
}

function Step3({ formData, setFormData, onFinish }: {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  onFinish: () => void;
}) {
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ photo: file });
  };

  const handleServiceChange = (index: number, value: string) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData({ services: newServices });
  };

  const addService = () => {
    setFormData({ services: [...formData.services, ''] });
  };

  const removeService = (index: number) => {
    if (formData.services.length > 1) {
      const newServices = formData.services.filter((_, i) => i !== index);
      setFormData({ services: newServices });
    }
  };

  const hasValidServices = formData.services.some(service => service.trim() !== '');
  const canFinish = formData.businessName.trim() && formData.category && formData.description.trim() && formData.whatsapp.trim() && hasValidServices;

  const handleScheduleToggle = (day: keyof typeof formData.schedule) => {
    setFormData({
      schedule: {
        ...formData.schedule,
        [day]: {
          ...formData.schedule[day],
          enabled: !formData.schedule[day].enabled
        }
      }
    });
  };

  const handleScheduleTimeChange = (day: keyof typeof formData.schedule, field: 'from' | 'to', value: string) => {
    setFormData({
      schedule: {
        ...formData.schedule,
        [day]: {
          ...formData.schedule[day],
          [field]: value
        }
      }
    });
  };

  const repeatFirstSchedule = () => {
    const firstEnabledDay = Object.entries(formData.schedule).find(([_, day]) => day.enabled);
    if (firstEnabledDay) {
      const [_, scheduleData] = firstEnabledDay;
      const updatedSchedule = { ...formData.schedule };
      
      Object.keys(updatedSchedule).forEach(day => {
        if (updatedSchedule[day as keyof typeof updatedSchedule].enabled) {
          updatedSchedule[day as keyof typeof updatedSchedule] = {
            enabled: true,
            from: scheduleData.from,
            to: scheduleData.to
          };
        }
      });
      
      setFormData({ schedule: updatedSchedule });
    }
  };

  const dayNames = {
    monday: 'Segunda',
    tuesday: 'Terça',
    wednesday: 'Quarta',
    thursday: 'Quinta',
    friday: 'Sexta',
    saturday: 'Sábado',
    sunday: 'Domingo'
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#005a22] mb-4">
          Informações do negócio
        </h1>
        <p className="text-gray-600">
          Agora vamos completar o perfil do seu negócio
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block font-medium text-[#005a22] mb-2">Nome do negócio *</label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ businessName: e.target.value })}
            placeholder="Ex: Sabor do Brasil"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Categoria *</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ category: e.target.value })}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          >
            <option value="">Selecione uma categoria</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Logo ou foto</label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
              id="photo-upload"
            />
            <label htmlFor="photo-upload" className="cursor-pointer">
              {formData.photo ? (
                <div className="text-[#005a22]">
                  ✓ {formData.photo.name}
                </div>
              ) : (
                <div>
                  <div className="text-gray-400 mb-2">📷</div>
                  <div className="text-sm text-gray-600">
                    Toque para adicionar uma foto
                  </div>
                </div>
              )}
            </label>
          </div>
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Descrição curta *</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ description: e.target.value })}
            placeholder="Descreva brevemente seu negócio..."
            rows={3}
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22] resize-none"
          />
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">WhatsApp *</label>
          <input
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ whatsapp: e.target.value })}
            placeholder="Ex: +34 123 456 789"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
          <p className="text-xs text-gray-500 mt-1">Inclua o código do país</p>
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Instagram</label>
          <div className="relative">
            <span className="absolute left-4 top-4 text-gray-400">@</span>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({ instagram: e.target.value })}
              placeholder="seuusuario"
              className="w-full p-4 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-[#005a22] mb-2">Website</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ website: e.target.value })}
            placeholder="https://www.seusite.com"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block font-medium text-[#005a22]">Horário de atendimento</label>
            {Object.values(formData.schedule).some(day => day.enabled) && (
              <button
                type="button"
                onClick={repeatFirstSchedule}
                className="text-[#005a22] text-sm underline hover:no-underline"
              >
                repetir
              </button>
            )}
          </div>
          <div className="space-y-3">
            {Object.entries(formData.schedule).map(([dayKey, dayData]) => (
              <div key={dayKey} className="space-y-2">
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={dayData.enabled}
                    onCheckedChange={() => handleScheduleToggle(dayKey as keyof typeof formData.schedule)}
                  />
                  <span className="font-medium text-sm w-16">
                    {dayNames[dayKey as keyof typeof dayNames]}
                  </span>
                  {dayData.enabled && (
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-sm text-gray-600">De</span>
                      <input
                        type="time"
                        value={dayData.from}
                        onChange={(e) => handleScheduleTimeChange(dayKey as keyof typeof formData.schedule, 'from', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#005a22]"
                      />
                      <span className="text-sm text-gray-600">até</span>
                      <input
                        type="time"
                        value={dayData.to}
                        onChange={(e) => handleScheduleTimeChange(dayKey as keyof typeof formData.schedule, 'to', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#005a22]"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block font-medium text-[#005a22]">Serviços oferecidos *</label>
            <button
              type="button"
              onClick={addService}
              className="bg-[#005a22] text-white px-3 py-1 rounded-md text-sm hover:bg-[#008934] transition-colors flex items-center gap-1"
            >
              + Adicionar
            </button>
          </div>
          <div className="space-y-2">
            {formData.services.map((service, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={service}
                  onChange={(e) => handleServiceChange(index, e.target.value)}
                  placeholder={`Serviço ${index + 1}`}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
                />
                {formData.services.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeService(index)}
                    className="bg-red-500 text-white px-3 py-3 rounded-lg text-sm hover:bg-red-600 transition-colors flex items-center justify-center"
                  >
                    -
                  </button>
                )}
              </div>
            ))}
          </div>
          {!hasValidServices && (
            <p className="text-red-500 text-sm mt-1">É necessário adicionar pelo menos um serviço</p>
          )}
        </div>
      </div>

      <button
        onClick={onFinish}
        disabled={!canFinish}
        className="w-full bg-[#005a22] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#008934] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Finalizar Cadastro
      </button>
    </div>
  );
}

function SuccessStep({ onViewBusiness, onShare }: {
  onViewBusiness: () => void;
  onShare: () => void;
}) {
  return (
    <div className="space-y-8 text-center">
      <div className="text-6xl">🎉</div>
      
      <div>
        <h1 className="text-2xl font-bold text-[#005a22] mb-4">
          Seu negócio está no ar!
        </h1>
        <p className="text-gray-600">
          Agora ele já pode ser encontrado por brasileiros na sua região. É 100% gratuito!
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={onViewBusiness}
          className="w-full bg-[#005a22] text-white py-4 px-6 rounded-xl font-medium hover:bg-[#008934] transition-colors"
        >
          Ver meu negócio
        </button>
        
        <button
          onClick={onShare}
          className="w-full bg-[#ff6c0e] text-white py-4 px-6 rounded-xl font-medium hover:bg-orange-600 transition-colors"
        >
          Compartilhar no WhatsApp
        </button>
      </div>
    </div>
  );
}

export default function BusinessRegisterWizard({ onBackToHome, onSuccess, onLogin }: BusinessRegisterWizardProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    businessType: null,
    countries: [],
    address: '',
    selectedCountry: '',
    businessName: '',
    category: '',
    photo: null,
    description: '',
    whatsapp: '',
    instagram: '',
    schedule: {
      monday: { enabled: false, from: '09:00', to: '18:00' },
      tuesday: { enabled: false, from: '09:00', to: '18:00' },
      wednesday: { enabled: false, from: '09:00', to: '18:00' },
      thursday: { enabled: false, from: '09:00', to: '18:00' },
      friday: { enabled: false, from: '09:00', to: '18:00' },
      saturday: { enabled: false, from: '09:00', to: '18:00' },
      sunday: { enabled: false, from: '09:00', to: '18:00' }
    },
    website: '',
    services: ['']
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleFinish = () => {
    setCurrentStep(4); // Success step
  };

  const handleShare = () => {
    const text = `Meu negócio agora está no Imigrei, a maior plataforma de negócios brasileiros no exterior. Acesse: https://imigrei.com/negocio/${formData.businessName.toLowerCase().replace(/\s+/g, '-')}`;
    
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Texto copiado para a área de transferência!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={onBackToHome} />
      
      <div className="max-w-md mx-auto px-4 py-8">
        {currentStep <= 3 && (
          <StepIndicator currentStep={currentStep} totalSteps={3} />
        )}

        {currentStep === 1 && (
          <Step1
            formData={formData}
            setFormData={updateFormData}
            onNext={handleNext}
          />
        )}

        {currentStep === 2 && (
          <Step2 onNext={handleNext} />
        )}

        {currentStep === 3 && (
          <Step3
            formData={formData}
            setFormData={updateFormData}
            onFinish={handleFinish}
          />
        )}

        {currentStep === 4 && (
          <SuccessStep
            onViewBusiness={onSuccess}
            onShare={handleShare}
          />
        )}
      </div>
    </div>
  );
}