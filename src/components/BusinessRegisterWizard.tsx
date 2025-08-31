import { useState } from 'react';
import Header from './Header';
import { Checkbox } from './ui/checkbox';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { signInWithGoogle } from '@/features/auth/auth';

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
    'Alemanha', 'Andorra', 'Áustria', 'Bélgica', 'Bulgária', 'Chipre', 'Croácia', 'Dinamarca', 
    'Espanha', 'Estônia', 'Finlândia', 'França', 'Grécia', 'Hungria', 'Irlanda', 'Islândia', 
    'Itália', 'Letônia', 'Liechtenstein', 'Lituânia', 'Luxemburgo', 'Malta', 'Moldávia', 
    'Mônaco', 'Montenegro', 'Noruega', 'Países Baixos', 'Polônia', 'Portugal', 'Reino Unido', 
    'República Tcheca', 'Romênia', 'Rússia', 'San Marino', 'Sérvia', 'Suécia', 'Suíça', 'Ucrânia'
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

const CATEGORIES = [
  'Restaurante e Alimentação',
  'Beleza e Estética',
  'Construção e Reforma',
  'Tecnologia e Informática',
  'Saúde e Bem-estar',
  'Educação e Cursos',
  'Consultoria e Serviços',
  'Comércio e Varejo',
  'Turismo e Viagem',
  'Arte e Cultura',
  'Transporte e Logística',
  'Imobiliário',
  'Financeiro e Contabilidade',
  'Jurídico',
  'Marketing e Publicidade',
  'Automóveis',
  'Pets e Animais',
  'Esportes e Lazer',
  'Moda e Vestuário',
  'Casa e Decoração',
  'Fotografia e Vídeo',
  'Música e Entretenimento',
  'Serviços Domésticos',
  'Agricultura e Pecuária',
  'Indústria e Manufatura'
];

function StepIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex space-x-2">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i + 1 <= currentStep 
                ? 'bg-[#005a22]' 
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function Step1({ formData, setFormData, onNext }: {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
  onNext: () => void;
}) {
  const handleBusinessTypeSelect = (type: BusinessType) => {
    setFormData({ businessType: type });
  };

  const handleCountryToggle = (country: string) => {
    const currentCountries = formData.countries || [];
    const isSelected = currentCountries.includes(country);
    
    if (isSelected) {
      setFormData({ 
        countries: currentCountries.filter(c => c !== country) 
      });
    } else {
      setFormData({ 
        countries: [...currentCountries, country] 
      });
    }
  };

  const canProceed = formData.businessType && 
    (formData.businessType === 'online' || 
     (formData.businessType === 'presencial' && formData.address) || 
     (formData.businessType === 'hibrido' && formData.address));

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#005a22] mb-4">
          Qual o tipo do seu negócio?
        </h1>
        <p className="text-gray-600">
          Isso nos ajuda a personalizar sua experiência
        </p>
      </div>

      <div className="space-y-4">
        <button
          onClick={() => handleBusinessTypeSelect('online')}
          className={`w-full p-6 rounded-xl border-2 text-left transition-colors ${
            formData.businessType === 'online'
              ? 'border-[#005a22] bg-[#f0f8f0]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="text-2xl">💻</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Negócio Online</h3>
              <p className="text-gray-600 text-sm">
                Atende clientes remotamente através da internet
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleBusinessTypeSelect('presencial')}
          className={`w-full p-6 rounded-xl border-2 text-left transition-colors ${
            formData.businessType === 'presencial'
              ? 'border-[#005a22] bg-[#f0f8f0]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="text-2xl">🏪</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Negócio Presencial</h3>
              <p className="text-gray-600 text-sm">
                Tem endereço físico onde atende clientes
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => handleBusinessTypeSelect('hibrido')}
          className={`w-full p-6 rounded-xl border-2 text-left transition-colors ${
            formData.businessType === 'hibrido'
              ? 'border-[#005a22] bg-[#f0f8f0]'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="text-2xl">🌐</div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Híbrido</h3>
              <p className="text-gray-600 text-sm">
                Combina atendimento presencial e online
              </p>
            </div>
          </div>
        </button>
      </div>

      {(formData.businessType === 'presencial' || formData.businessType === 'hibrido') && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Endereço do seu negócio
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ address: e.target.value })}
              placeholder="Digite o endereço completo"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
            />
          </div>
        </div>
      )}

      {formData.businessType && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Em quais países você atende?</h3>
          <p className="text-gray-600 text-sm">Selecione um ou mais países</p>
          
          <div className="space-y-4">
            {Object.entries(COUNTRIES_BY_CONTINENT).map(([continent, countries]) => (
              <Collapsible key={continent}>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg text-left font-medium hover:bg-gray-100">
                  <span>{continent}</span>
                  <span className="text-xl">▼</span>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 p-4 border border-gray-200 rounded-b-lg">
                  {countries.map((country) => (
                    <div key={country} className="flex items-center space-x-2">
                      <Checkbox
                        id={country}
                        checked={formData.countries?.includes(country) || false}
                        onCheckedChange={() => handleCountryToggle(country)}
                      />
                      <label htmlFor={country} className="text-sm cursor-pointer">
                        {country}
                      </label>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
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
      alert('Erro ao fazer login. Tente novamente.');
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
    const newServices = formData.services.filter((_, i) => i !== index);
    setFormData({ services: newServices });
  };

  const handleScheduleChange = (day: keyof FormData['schedule'], field: keyof ScheduleDay, value: string | boolean) => {
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

  const hasValidServices = formData.services.some(service => service.trim() !== '');
  const canFinish = formData.businessName && formData.category && formData.description && hasValidServices;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-[#005a22] mb-4">
          Dados do seu negócio
        </h1>
        <p className="text-gray-600">
          Preencha as informações para finalizar o cadastro
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nome do negócio *
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ businessName: e.target.value })}
            placeholder="Digite o nome do seu negócio"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Categoria *
          </label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ category: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          >
            <option value="">Selecione uma categoria</option>
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Foto do negócio
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
          {formData.photo && (
            <p className="text-sm text-gray-600 mt-1">
              Arquivo selecionado: {formData.photo.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descrição do negócio *
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ description: e.target.value })}
            placeholder="Descreva seu negócio, o que você oferece..."
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            WhatsApp
          </label>
          <input
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ whatsapp: e.target.value })}
            placeholder="(11) 99999-9999"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Instagram
          </label>
          <input
            type="text"
            value={formData.instagram}
            onChange={(e) => setFormData({ instagram: e.target.value })}
            placeholder="@seuusuario"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ website: e.target.value })}
            placeholder="https://seusite.com"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#005a22]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Horário de funcionamento
          </label>
          <div className="space-y-3">
            {Object.entries(formData.schedule).map(([day, schedule]) => (
              <div key={day} className="flex items-center gap-3">
                <div className="flex items-center">
                  <Checkbox
                    id={day}
                    checked={schedule.enabled}
                    onCheckedChange={(checked) => handleScheduleChange(day as keyof FormData['schedule'], 'enabled', checked as boolean)}
                  />
                  <label htmlFor={day} className="ml-2 text-sm capitalize w-16">
                    {day === 'monday' ? 'Seg' :
                     day === 'tuesday' ? 'Ter' :
                     day === 'wednesday' ? 'Qua' :
                     day === 'thursday' ? 'Qui' :
                     day === 'friday' ? 'Sex' :
                     day === 'saturday' ? 'Sáb' : 'Dom'}
                  </label>
                </div>
                {schedule.enabled && (
                  <>
                    <input
                      type="time"
                      value={schedule.from}
                      onChange={(e) => handleScheduleChange(day as keyof FormData['schedule'], 'from', e.target.value)}
                      className="p-2 border border-gray-300 rounded text-sm"
                    />
                    <span className="text-sm">às</span>
                    <input
                      type="time"
                      value={schedule.to}
                      onChange={(e) => handleScheduleChange(day as keyof FormData['schedule'], 'to', e.target.value)}
                      className="p-2 border border-gray-300 rounded text-sm"
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Serviços oferecidos *
            </label>
            <button
              type="button"
              onClick={addService}
              className="bg-[#005a22] text-white px-3 py-1 rounded text-sm hover:bg-[#008934] transition-colors"
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
          Parabéns!
        </h1>
        <p className="text-gray-600">
          Seu negócio foi cadastrado com sucesso no Imigrei
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
          className="w-full border-2 border-[#005a22] text-[#005a22] py-4 px-6 rounded-xl font-medium hover:bg-[#f0f8f0] transition-colors"
        >
          Compartilhar
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