import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { SearchParams } from '../App';

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (params: SearchParams) => void;
  initialQuery: string;
};

export default function SearchModal({ isOpen, onClose, onSearch, initialQuery }: SearchModalProps) {
  const [locationType, setLocationType] = useState<'city' | 'online'>('city');
  const [cityName, setCityName] = useState<string>('');

  const resetModal = () => {
    setLocationType('city');
    setCityName('');
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  const handleSearch = () => {
    const searchParams: SearchParams = {
      query: '',
      location: locationType === 'city' ? cityName : undefined,
      category: initialQuery, // O initialQuery é a categoria quando vem dos chips
      isOnline: locationType === 'online'
    };

    onSearch(searchParams);
    handleClose();
  };

  const canSearch = locationType === 'online' || (locationType === 'city' && cityName.trim() !== '');

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#005a22] tracking-[0.45px] text-center text-[20px] font-medium">
            De qual lugar?
          </DialogTitle>
          <DialogDescription className="text-[#005a22]/70 tracking-[0.45px] text-center text-[14px]">
            Escolha se você procura atendimento em uma cidade específica ou serviços online.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-4">
            {/* Opção: Em uma cidade específica */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <input
                    type="radio"
                    id="city"
                    name="location"
                    value="city"
                    checked={locationType === 'city'}
                    onChange={() => setLocationType('city')}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-full border-2 transition-all cursor-pointer ${
                    locationType === 'city' 
                      ? 'border-[#ff6c0e] bg-[#ff6c0e]' 
                      : 'border-[#005a22] bg-white hover:border-[#ff6c0e]'
                  }`}
                  onClick={() => setLocationType('city')}>
                    {locationType === 'city' && (
                      <div className="w-full h-full rounded-full bg-[#ff6c0e] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                </div>
                <Label htmlFor="city" className="text-[#005a22] tracking-[0.45px] text-[14px] cursor-pointer"
                       onClick={() => setLocationType('city')}>
                  Em uma cidade específica
                </Label>
              </div>
              
              {locationType === 'city' && (
                <div className="ml-8">
                  <Input
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="Digite o nome da cidade..."
                    className="border-[#ff6c0e] focus:ring-[#ff6c0e] focus:border-[#ff6c0e] tracking-[0.45px]"
                  />
                </div>
              )}
            </div>

            {/* Opção: Qualquer lugar (online) */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="radio"
                  id="online"
                  name="location"
                  value="online"
                  checked={locationType === 'online'}
                  onChange={() => setLocationType('online')}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 transition-all cursor-pointer ${
                  locationType === 'online' 
                    ? 'border-[#ff6c0e] bg-[#ff6c0e]' 
                    : 'border-[#005a22] bg-white hover:border-[#ff6c0e]'
                }`}
                onClick={() => setLocationType('online')}>
                  {locationType === 'online' && (
                    <div className="w-full h-full rounded-full bg-[#ff6c0e] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  )}
                </div>
              </div>
              <Label htmlFor="online" className="text-[#005a22] tracking-[0.45px] text-[14px] cursor-pointer"
                     onClick={() => setLocationType('online')}>
                Qualquer lugar (atendimento online)
              </Label>
            </div>
          </div>

          <div className="flex justify-center py-[10px] px-[0px] mx-[0px] m-[0px]">
            <Button
              className="bg-[#ff6c0e] hover:bg-orange-600 text-white disabled:opacity-50 disabled:cursor-not-allowed px-8 py-3 rounded-[50px] tracking-[0.45px] transition-colors px-[28px] py-[24px] text-[16px]"
              onClick={handleSearch}
              disabled={!canSearch}
            >
              Vamos lá!
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}