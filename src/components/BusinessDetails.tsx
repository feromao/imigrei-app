import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import BusinessCard from './BusinessCard';
import type { Negocio } from './BusinessCard';

type BusinessDetailsProps = {
  onBackToSearch: () => void;
  onBackToHome: () => void;
};

// SVG Icons inline
function StarIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M8 1L10.163 5.526L15 6.11L11.5 9.474L12.326 14.274L8 12L3.674 14.274L4.5 9.474L1 6.11L5.837 5.526L8 1Z" fill="#F5C518" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" fill="#005A22" />
      <circle cx="8" cy="6" r="2" fill="white" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="#005A22" strokeWidth="2" fill="none" />
      <path d="M8 3v5l3 3" stroke="#005A22" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M15 11.5c0 .83-.67 1.5-1.5 1.5S12 12.33 12 11.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" fill="#25D366" />
      <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 2h-9z" stroke="#25D366" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="#005A22" strokeWidth="2" fill="none" />
      <path d="M1 8h14M8 1a7 7 0 0 1 0 14A7 7 0 0 1 8 1z" stroke="#005A22" strokeWidth="2" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M6 12L2 8L6 4M2 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="size-4 text-[#0D9942]" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8" fill="#0D9942" />
      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Components
function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex items-center gap-2 text-[#005a22] hover:text-green-700 transition-colors mb-6"
    >
      <ArrowLeftIcon />
      <span className="text-[14px] font-medium">Voltar aos resultados</span>
    </button>
  );
}

function BusinessHeader() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
      {/* Business Image */}
      <div className="relative w-full lg:w-[300px] h-[200px] lg:h-[300px] bg-gray-200 rounded-lg overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
          <rect width="300" height="300" fill="#f3f4f6"/>
          <circle cx="150" cy="120" r="40" fill="#005A22"/>
          <rect x="120" y="180" width="60" height="30" rx="4" fill="#ff6c0e"/>
          <text x="150" y="200" textAnchor="middle" fill="white" fontSize="12">SABOR</text>
          <text x="150" y="220" textAnchor="middle" fill="white" fontSize="8">DO BRASIL</text>
        </svg>
      </div>

      {/* Business Info */}
      <div className="flex-1">
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h1 className="text-2xl lg:text-3xl font-bold text-[#005a22] mb-2">
                Sabor do Brasil
              </h1>
              <p className="text-[16px] text-[#005a22] mb-1">
                Restaurante Brasileiro
              </p>
            </div>
          </div>

          {/* Rating and location */}
          <div className="flex flex-wrap items-center gap-4 text-[14px] text-[#005a22]">
            <div className="flex items-center gap-1">
              <StarIcon />
              <span className="font-medium">4.8</span>
              <span className="text-gray-600">(127 avaliações)</span>
            </div>
            <div className="flex items-center gap-1">
              <LocationIcon />
              <span>Valência, Espanha</span>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-1 text-[#0d9942] text-[14px]">
            <CheckIcon />
            <span className="font-semibold">Aberto agora</span>
            <span className="text-gray-600 ml-2">Fecha às 22:00</span>
          </div>

          {/* Description */}
          <p className="text-[14px] text-gray-700 leading-relaxed">
            Autêntica culinária brasileira no coração de Valência. Sabores que transportam você direto para o Brasil, 
            com pratos tradicionais preparados com ingredientes frescos e muito carinho. 
            Um pedacinho do nosso país em terras espanholas.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-4">
            <button className="bg-[#ff6c0e] text-white px-6 py-3 rounded-[24px] text-[14px] font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
              <PhoneIcon />
              WhatsApp
            </button>
            <button className="bg-white text-[#005a22] border border-[#005a22] px-6 py-3 rounded-[24px] text-[14px] font-medium hover:bg-green-50 transition-colors flex items-center gap-2">
              <WebIcon />
              Website
            </button>
            <button className="bg-white text-black border border-black px-6 py-3 rounded-[24px] text-[14px] font-medium hover:bg-gray-50 transition-colors">
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <h2 className="text-[18px] font-bold text-[#005a22] mb-4">{title}</h2>
      {children}
    </div>
  );
}

function ContactInfo() {
  return (
    <InfoSection title="Informações de Contato">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center gap-3">
          <PhoneIcon />
          <div>
            <p className="text-[14px] font-medium text-[#005a22]">WhatsApp</p>
            <p className="text-[14px] text-gray-600">+34 123 456 789</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <WebIcon />
          <div>
            <p className="text-[14px] font-medium text-[#005a22]">Website</p>
            <p className="text-[14px] text-gray-600">www.sabordoBrasil.es</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <LocationIcon />
          <div>
            <p className="text-[14px] font-medium text-[#005a22]">Endereço</p>
            <p className="text-[14px] text-gray-600">Calle Brasil, 123<br />46001 Valencia, España</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ClockIcon />
          <div>
            <p className="text-[14px] font-medium text-[#005a22]">Horário</p>
            <p className="text-[14px] text-gray-600">Seg-Dom: 12:00-22:00</p>
          </div>
        </div>
      </div>
    </InfoSection>
  );
}

function ServicesList() {
  const services = [
    'Pratos tradicionais brasileiros',
    'Feijoada aos sábados',
    'Caipirinha e drinks brasileiros',
    'Delivery e take away',
    'Reservas para grupos',
    'Eventos e comemorações'
  ];

  return (
    <InfoSection title="Serviços Oferecidos">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckIcon />
            <span className="text-[14px] text-gray-700">{service}</span>
          </div>
        ))}
      </div>
    </InfoSection>
  );
}

function ReviewsSection() {
  const reviews = [
    {
      name: "Maria Silva",
      rating: 5,
      date: "Há 2 semanas",
      comment: "Comida incrível! Me senti em casa no Brasil. A feijoada é perfeita!"
    },
    {
      name: "João Santos", 
      rating: 5,
      date: "Há 1 mês",
      comment: "Melhor restaurante brasileiro de Valencia. Atendimento excelente e sabores autênticos."
    },
    {
      name: "Ana Costa",
      rating: 4,
      date: "Há 2 meses", 
      comment: "Muito bom! Recomendo a caipirinha e o bobó de camarão."
    }
  ];

  return (
    <InfoSection title="Avaliações">
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-medium text-[#005a22]">{review.name}</span>
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
              <span className="text-[12px] text-gray-500">{review.date}</span>
            </div>
            <p className="text-[14px] text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </InfoSection>
  );
}

function SimilarBusinesses() {
  const businesses: Negocio[] = [
    { 
      id: 101,
      nome: "Casa do Açaí", 
      categoria: "Açaí e Sucos", 
      cidade: "Valencia",
      descricao: "Os melhores açaís e sucos naturais da cidade",
      contato: "contato@casadoacai.es",
      logo: ""
    },
    { 
      id: 102,
      nome: "Churrascaria Gaúcha", 
      categoria: "Churrascaria", 
      cidade: "Valencia",
      descricao: "Carnes nobres no estilo gaúcho tradicional",
      contato: "reservas@gaucha.es",
      logo: ""
    },
    { 
      id: 103,
      nome: "Brigadeiro & Cia", 
      categoria: "Doces Brasileiros", 
      cidade: "Valencia",
      descricao: "Doces brasileiros artesanais feitos com amor",
      contato: "pedidos@brigadeiro.es",
      logo: ""
    }
  ];

  return (
    <InfoSection title="Negócios Similares">
      <div className="grid grid-cols-1 gap-4">
        {businesses.map((business) => (
          <BusinessCard 
            key={business.id} 
            negocio={business} 
            variant="list"
            onViewDetails={() => {}}
          />
        ))}
      </div>
    </InfoSection>
  );
}

export default function BusinessDetails({ onBackToSearch, onBackToHome }: BusinessDetailsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onLogoClick={onBackToHome} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BackButton onClick={onBackToSearch} />
        
        <BusinessHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <ContactInfo />
            <ServicesList />
            <ReviewsSection />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SimilarBusinesses />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}