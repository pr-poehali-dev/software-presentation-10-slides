import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  gradient: string;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Программное Обеспечение Компьютера',
      subtitle: 'Полное руководство по архитектуре и типам ПО',
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge className="px-6 py-3 text-lg bg-primary/20 hover:bg-primary/30 transition-all hover:scale-110">
              <Icon name="Cpu" className="mr-2" size={20} />
              Системное ПО
            </Badge>
            <Badge className="px-6 py-3 text-lg bg-secondary/20 hover:bg-secondary/30 transition-all hover:scale-110">
              <Icon name="AppWindow" className="mr-2" size={20} />
              Прикладное ПО
            </Badge>
            <Badge className="px-6 py-3 text-lg bg-accent/20 hover:bg-accent/30 transition-all hover:scale-110">
              <Icon name="Shield" className="mr-2" size={20} />
              Безопасность
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Современный взгляд на программное обеспечение, его структуру и применение в реальных условиях
          </p>
        </div>
      ),
      gradient: 'from-primary via-secondary to-accent'
    },
    {
      id: 2,
      title: 'Архитектура Программного Обеспечения',
      content: (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
            <Icon name="Layers" className="mb-4 text-primary" size={48} />
            <h3 className="text-2xl font-bold mb-3">Многоуровневая структура</h3>
            <p className="text-muted-foreground mb-4">Программное обеспечение организовано в виде иерархии слоев, каждый из которых выполняет свои функции</p>
            <a 
              href="https://ru.wikipedia.org/wiki/Многоуровневая_архитектура" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline inline-flex items-center gap-1 transition-all hover:gap-2"
            >
              Подробнее <Icon name="ExternalLink" size={16} />
            </a>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur border-secondary/30 hover:border-secondary transition-all hover:scale-105 hover:shadow-xl hover:shadow-secondary/20">
            <Icon name="GitBranch" className="mb-4 text-secondary" size={48} />
            <h3 className="text-2xl font-bold mb-3">Модульность</h3>
            <p className="text-muted-foreground mb-4">Разделение на независимые модули упрощает разработку, тестирование и поддержку</p>
            <a 
              href="https://ru.wikipedia.org/wiki/Модульное_программирование" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 underline inline-flex items-center gap-1 transition-all hover:gap-2"
            >
              Подробнее <Icon name="ExternalLink" size={16} />
            </a>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur border-accent/30 hover:border-accent transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/20">
            <Icon name="Workflow" className="mb-4 text-accent" size={48} />
            <h3 className="text-2xl font-bold mb-3">Взаимодействие</h3>
            <p className="text-muted-foreground mb-4">Компоненты ПО взаимодействуют через API, протоколы и интерфейсы</p>
            <a 
              href="https://ru.wikipedia.org/wiki/API" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 underline inline-flex items-center gap-1 transition-all hover:gap-2"
            >
              Подробнее <Icon name="ExternalLink" size={16} />
            </a>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/20">
            <Icon name="Zap" className="mb-4 text-primary" size={48} />
            <h3 className="text-2xl font-bold mb-3">Производительность</h3>
            <p className="text-muted-foreground mb-4">Оптимизация кода и архитектуры для эффективного использования ресурсов</p>
            <a 
              href="https://ru.wikipedia.org/wiki/Оптимизация_программного_обеспечения" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 underline inline-flex items-center gap-1 transition-all hover:gap-2"
            >
              Подробнее <Icon name="ExternalLink" size={16} />
            </a>
          </Card>
        </div>
      ),
      gradient: 'from-primary to-secondary'
    },
    {
      id: 3,
      title: 'Системное Программное Обеспечение',
      content: (
        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02]">
            <div className="flex items-start gap-4">
              <Icon name="Monitor" className="text-primary flex-shrink-0" size={56} />
              <div>
                <h3 className="text-3xl font-bold mb-2">Операционные Системы</h3>
                <p className="text-lg text-muted-foreground mb-4">Управляют аппаратным обеспечением и предоставляют интерфейс для других программ</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.microsoft.com/windows" target="_blank" rel="noopener noreferrer">
                    <Badge className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all hover:scale-110 cursor-pointer">
                      <Icon name="MonitorSmartphone" className="mr-2" size={16} />
                      Windows 11
                    </Badge>
                  </a>
                  <a href="https://www.apple.com/macos" target="_blank" rel="noopener noreferrer">
                    <Badge className="px-4 py-2 bg-gray-700 hover:bg-gray-800 transition-all hover:scale-110 cursor-pointer">
                      <Icon name="Apple" className="mr-2" size={16} />
                      macOS Sonoma
                    </Badge>
                  </a>
                  <a href="https://ubuntu.com" target="_blank" rel="noopener noreferrer">
                    <Badge className="px-4 py-2 bg-orange-600 hover:bg-orange-700 transition-all hover:scale-110 cursor-pointer">
                      <Icon name="Terminal" className="mr-2" size={16} />
                      Linux Ubuntu
                    </Badge>
                  </a>
                </div>
              </div>
            </div>
          </Card>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5 bg-card/50 backdrop-blur hover:bg-card/70 transition-all hover:scale-105 hover:shadow-lg">
              <Icon name="HardDrive" className="mb-3 text-secondary" size={40} />
              <h4 className="text-xl font-bold mb-2">Драйверы устройств</h4>
              <p className="text-muted-foreground text-sm">Обеспечивают взаимодействие ОС с периферийными устройствами</p>
            </Card>
            <Card className="p-5 bg-card/50 backdrop-blur hover:bg-card/70 transition-all hover:scale-105 hover:shadow-lg">
              <Icon name="Settings" className="mb-3 text-accent" size={40} />
              <h4 className="text-xl font-bold mb-2">Системные утилиты</h4>
              <p className="text-muted-foreground text-sm">Инструменты для настройки и обслуживания системы</p>
            </Card>
          </div>
        </div>
      ),
      gradient: 'from-secondary to-primary'
    },
    {
      id: 4,
      title: 'Прикладное Программное Обеспечение',
      content: (
        <div className="grid md:grid-cols-3 gap-5 animate-fade-in">
          <Card className="p-5 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-blue-500/50 hover:border-blue-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
            <Icon name="FileText" className="mb-3 text-blue-400" size={40} />
            <h3 className="text-xl font-bold mb-2">Офисные приложения</h3>
            <p className="text-sm text-muted-foreground mb-3">Текстовые редакторы, электронные таблицы, презентации</p>
            <div className="space-y-2">
              <a href="https://www.microsoft.com/microsoft-365" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-blue-600 transition-all cursor-pointer">Microsoft 365</Badge>
              </a>
              <a href="https://www.google.com/docs/about" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-blue-600 transition-all cursor-pointer">Google Docs</Badge>
              </a>
            </div>
          </Card>
          <Card className="p-5 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-purple-500/50 hover:border-purple-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30">
            <Icon name="Palette" className="mb-3 text-purple-400" size={40} />
            <h3 className="text-xl font-bold mb-2">Графические редакторы</h3>
            <p className="text-sm text-muted-foreground mb-3">Создание и обработка изображений, видео</p>
            <div className="space-y-2">
              <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-purple-600 transition-all cursor-pointer">Adobe Photoshop</Badge>
              </a>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-purple-600 transition-all cursor-pointer">Figma</Badge>
              </a>
            </div>
          </Card>
          <Card className="p-5 bg-gradient-to-br from-green-500/20 to-green-700/20 border-green-500/50 hover:border-green-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-green-500/30">
            <Icon name="Globe" className="mb-3 text-green-400" size={40} />
            <h3 className="text-xl font-bold mb-2">Веб-браузеры</h3>
            <p className="text-sm text-muted-foreground mb-3">Доступ к интернету и веб-приложениям</p>
            <div className="space-y-2">
              <a href="https://www.google.com/chrome" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-green-600 transition-all cursor-pointer">Google Chrome</Badge>
              </a>
              <a href="https://www.mozilla.org/firefox" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-green-600 transition-all cursor-pointer">Firefox</Badge>
              </a>
            </div>
          </Card>
          <Card className="p-5 bg-gradient-to-br from-orange-500/20 to-orange-700/20 border-orange-500/50 hover:border-orange-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30">
            <Icon name="MessageSquare" className="mb-3 text-orange-400" size={40} />
            <h3 className="text-xl font-bold mb-2">Мессенджеры</h3>
            <p className="text-sm text-muted-foreground mb-3">Коммуникация и обмен сообщениями</p>
            <div className="space-y-2">
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-orange-600 transition-all cursor-pointer">WhatsApp</Badge>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-orange-600 transition-all cursor-pointer">Telegram</Badge>
              </a>
            </div>
          </Card>
          <Card className="p-5 bg-gradient-to-br from-red-500/20 to-red-700/20 border-red-500/50 hover:border-red-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-red-500/30">
            <Icon name="Music" className="mb-3 text-red-400" size={40} />
            <h3 className="text-xl font-bold mb-2">Медиа-проигрыватели</h3>
            <p className="text-sm text-muted-foreground mb-3">Воспроизведение аудио и видео</p>
            <div className="space-y-2">
              <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-red-600 transition-all cursor-pointer">Spotify</Badge>
              </a>
              <a href="https://www.videolan.org/vlc" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-red-600 transition-all cursor-pointer">VLC Player</Badge>
              </a>
            </div>
          </Card>
          <Card className="p-5 bg-gradient-to-br from-cyan-500/20 to-cyan-700/20 border-cyan-500/50 hover:border-cyan-400 transition-all hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30">
            <Icon name="Code" className="mb-3 text-cyan-400" size={40} />
            <h3 className="text-xl font-bold mb-2">Среды разработки</h3>
            <p className="text-sm text-muted-foreground mb-3">Инструменты для программирования</p>
            <div className="space-y-2">
              <a href="https://code.visualstudio.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-cyan-600 transition-all cursor-pointer">VS Code</Badge>
              </a>
              <a href="https://www.jetbrains.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="w-full justify-center hover:bg-cyan-600 transition-all cursor-pointer">JetBrains</Badge>
              </a>
            </div>
          </Card>
        </div>
      ),
      gradient: 'from-accent to-primary'
    },
    {
      id: 5,
      title: 'Служебные Программы и Утилиты',
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-5">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all hover:scale-105 hover:shadow-xl">
              <Icon name="Trash2" className="mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-3">Очистка диска</h3>
              <p className="text-muted-foreground mb-4">Удаление временных файлов и освобождение пространства</p>
              <div className="space-y-2">
                <a href="https://www.ccleaner.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="hover:bg-primary/80 transition-all cursor-pointer">CCleaner</Badge>
                </a>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur border-secondary/30 hover:border-secondary transition-all hover:scale-105 hover:shadow-xl">
              <Icon name="Wrench" className="mb-4 text-secondary" size={48} />
              <h3 className="text-2xl font-bold mb-3">Дефрагментация</h3>
              <p className="text-muted-foreground mb-4">Оптимизация расположения файлов на диске</p>
              <div className="space-y-2">
                <Badge className="bg-secondary/50">Встроено в Windows</Badge>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur border-accent/30 hover:border-accent transition-all hover:scale-105 hover:shadow-xl">
              <Icon name="Archive" className="mb-4 text-accent" size={48} />
              <h3 className="text-2xl font-bold mb-3">Архиваторы</h3>
              <p className="text-muted-foreground mb-4">Сжатие и упаковка файлов</p>
              <div className="flex gap-2">
                <a href="https://www.7-zip.org" target="_blank" rel="noopener noreferrer">
                  <Badge className="hover:bg-accent/80 transition-all cursor-pointer">7-Zip</Badge>
                </a>
                <a href="https://www.winrar.com" target="_blank" rel="noopener noreferrer">
                  <Badge className="hover:bg-accent/80 transition-all cursor-pointer">WinRAR</Badge>
                </a>
              </div>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all hover:scale-105 hover:shadow-xl">
              <Icon name="HardDriveDownload" className="mb-4 text-primary" size={48} />
              <h3 className="text-2xl font-bold mb-3">Резервное копирование</h3>
              <p className="text-muted-foreground mb-4">Создание копий важных данных</p>
              <div className="space-y-2">
                <a href="https://www.acronis.com" target="_blank" rel="noopener noreferrer">
                  <Badge className="hover:bg-primary/80 transition-all cursor-pointer">Acronis True Image</Badge>
                </a>
              </div>
            </Card>
          </div>
        </div>
      ),
      gradient: 'from-primary via-accent to-secondary'
    },
    {
      id: 6,
      title: 'Лицензирование Программного Обеспечения',
      content: (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="p-6 bg-gradient-to-br from-green-500/20 to-green-700/20 border-green-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-green-500/30">
            <Icon name="Lock" className="mb-4 text-green-400" size={48} />
            <h3 className="text-2xl font-bold mb-3">Проприетарное ПО</h3>
            <p className="text-muted-foreground mb-4">Закрытый исходный код, платная лицензия</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Техническая поддержка производителя</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Гарантия качества и безопасности</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="X" className="text-red-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Ограничения на использование</span>
              </li>
            </ul>
            <div className="mt-4">
              <a href="https://www.microsoft.com/licensing" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 underline inline-flex items-center gap-1 transition-all hover:gap-2">
                Пример: Microsoft <Icon name="ExternalLink" size={16} />
              </a>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-blue-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/30">
            <Icon name="Unlock" className="mb-4 text-blue-400" size={48} />
            <h3 className="text-2xl font-bold mb-3">Open Source (FOSS)</h3>
            <p className="text-muted-foreground mb-4">Открытый исходный код, свободное использование</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Бесплатное использование и модификация</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Поддержка сообщества</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" className="text-blue-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Прозрачность и безопасность</span>
              </li>
            </ul>
            <div className="mt-4">
              <a href="https://opensource.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 transition-all hover:gap-2">
                Подробнее об Open Source <Icon name="ExternalLink" size={16} />
              </a>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur hover:scale-105 transition-all">
            <Icon name="Users" className="mb-4 text-purple-400" size={48} />
            <h3 className="text-2xl font-bold mb-3">Freeware</h3>
            <p className="text-muted-foreground">Бесплатное ПО с ограничениями на коммерческое использование</p>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur hover:scale-105 transition-all">
            <Icon name="Timer" className="mb-4 text-orange-400" size={48} />
            <h3 className="text-2xl font-bold mb-3">Shareware / Trial</h3>
            <p className="text-muted-foreground">Пробная версия с ограничением по времени или функционалу</p>
          </Card>
        </div>
      ),
      gradient: 'from-secondary to-accent'
    },
    {
      id: 7,
      title: 'Информационная Безопасность',
      content: (
        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 border-red-500/50 hover:shadow-2xl hover:shadow-red-500/30 transition-all hover:scale-[1.02]">
            <div className="flex items-start gap-4">
              <Icon name="ShieldAlert" className="text-red-400 flex-shrink-0" size={56} />
              <div>
                <h3 className="text-3xl font-bold mb-2">Антивирусное ПО</h3>
                <p className="text-lg text-muted-foreground mb-4">Защита от вирусов, троянов и вредоносного кода</p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.kaspersky.ru" target="_blank" rel="noopener noreferrer">
                    <Badge className="px-4 py-2 bg-red-600 hover:bg-red-700 transition-all hover:scale-110 cursor-pointer">
                      <Icon name="Shield" className="mr-2" size={16} />
                      Kaspersky
                    </Badge>
                  </a>
                  <a href="https://www.drweb.ru" target="_blank" rel="noopener noreferrer">
                    <Badge className="px-4 py-2 bg-green-600 hover:bg-green-700 transition-all hover:scale-110 cursor-pointer">
                      <Icon name="Shield" className="mr-2" size={16} />
                      Dr.Web
                    </Badge>
                  </a>
                  <a href="https://www.eset.com" target="_blank" rel="noopener noreferrer">
                    <Badge className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-all hover:scale-110 cursor-pointer">
                      <Icon name="Shield" className="mr-2" size={16} />
                      ESET NOD32
                    </Badge>
                  </a>
                </div>
              </div>
            </div>
          </Card>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="p-5 bg-card/50 backdrop-blur border-blue-500/30 hover:border-blue-500 transition-all hover:scale-105 hover:shadow-lg">
              <Icon name="Lock" className="mb-3 text-blue-400" size={40} />
              <h4 className="text-xl font-bold mb-2">Шифрование данных</h4>
              <p className="text-sm text-muted-foreground mb-3">Защита конфиденциальной информации</p>
              <a href="https://www.veracrypt.fr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm underline inline-flex items-center gap-1">
                VeraCrypt <Icon name="ExternalLink" size={14} />
              </a>
            </Card>
            <Card className="p-5 bg-card/50 backdrop-blur border-purple-500/30 hover:border-purple-500 transition-all hover:scale-105 hover:shadow-lg">
              <Icon name="KeyRound" className="mb-3 text-purple-400" size={40} />
              <h4 className="text-xl font-bold mb-2">Менеджеры паролей</h4>
              <p className="text-sm text-muted-foreground mb-3">Безопасное хранение учетных данных</p>
              <a href="https://1password.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 text-sm underline inline-flex items-center gap-1">
                1Password <Icon name="ExternalLink" size={14} />
              </a>
            </Card>
            <Card className="p-5 bg-card/50 backdrop-blur border-orange-500/30 hover:border-orange-500 transition-all hover:scale-105 hover:shadow-lg">
              <Icon name="ShieldCheck" className="mb-3 text-orange-400" size={40} />
              <h4 className="text-xl font-bold mb-2">Межсетевые экраны</h4>
              <p className="text-sm text-muted-foreground mb-3">Фильтрация сетевого трафика</p>
              <Badge className="bg-orange-500/50">Windows Defender</Badge>
            </Card>
          </div>
        </div>
      ),
      gradient: 'from-accent to-secondary'
    },
    {
      id: 8,
      title: 'Облачные Технологии и Сервисы',
      content: (
        <div className="space-y-6 animate-fade-in">
          <div className="text-center mb-6">
            <Icon name="Cloud" className="mx-auto mb-4 text-primary animate-pulse" size={64} />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Современные облачные платформы предоставляют доступ к вычислительным ресурсам, хранилищам данных и приложениям через интернет
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-blue-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-blue-500/30">
              <Icon name="Database" className="mb-4 text-blue-400" size={48} />
              <h3 className="text-xl font-bold mb-3">Облачные хранилища</h3>
              <p className="text-sm text-muted-foreground mb-4">Хранение и синхронизация файлов</p>
              <div className="space-y-2">
                <a href="https://www.google.com/drive" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-blue-600 transition-all cursor-pointer">Google Drive</Badge>
                </a>
                <a href="https://www.dropbox.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-blue-600 transition-all cursor-pointer">Dropbox</Badge>
                </a>
                <a href="https://yandex.ru/cloud" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-blue-600 transition-all cursor-pointer">Яндекс.Диск</Badge>
                </a>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-purple-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-purple-500/30">
              <Icon name="Server" className="mb-4 text-purple-400" size={48} />
              <h3 className="text-xl font-bold mb-3">Облачные платформы</h3>
              <p className="text-sm text-muted-foreground mb-4">Инфраструктура и вычисления</p>
              <div className="space-y-2">
                <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-purple-600 transition-all cursor-pointer">Amazon AWS</Badge>
                </a>
                <a href="https://azure.microsoft.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-purple-600 transition-all cursor-pointer">Microsoft Azure</Badge>
                </a>
                <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-purple-600 transition-all cursor-pointer">Google Cloud</Badge>
                </a>
              </div>
            </Card>
            <Card className="p-6 bg-gradient-to-br from-green-500/20 to-green-700/20 border-green-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-green-500/30">
              <Icon name="AppWindow" className="mb-4 text-green-400" size={48} />
              <h3 className="text-xl font-bold mb-3">SaaS-приложения</h3>
              <p className="text-sm text-muted-foreground mb-4">Программы как сервис</p>
              <div className="space-y-2">
                <a href="https://www.office.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-green-600 transition-all cursor-pointer">Microsoft 365</Badge>
                </a>
                <a href="https://www.salesforce.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-green-600 transition-all cursor-pointer">Salesforce</Badge>
                </a>
                <a href="https://slack.com" target="_blank" rel="noopener noreferrer" className="block">
                  <Badge className="w-full justify-center hover:bg-green-600 transition-all cursor-pointer">Slack</Badge>
                </a>
              </div>
            </Card>
          </div>
          <Card className="p-5 bg-card/50 backdrop-blur">
            <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Icon name="CheckCircle" className="text-primary" size={24} />
              Преимущества облачных технологий
            </h4>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Доступ из любой точки мира</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Автоматическое резервное копирование</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Масштабируемость ресурсов</span>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Check" className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                <span>Экономия на оборудовании</span>
              </div>
            </div>
          </Card>
        </div>
      ),
      gradient: 'from-primary to-secondary'
    },
    {
      id: 9,
      title: 'Современные Тренды в ПО',
      content: (
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          <Card className="p-6 bg-gradient-to-br from-pink-500/20 to-purple-700/20 border-pink-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-pink-500/30">
            <Icon name="Brain" className="mb-4 text-pink-400" size={52} />
            <h3 className="text-2xl font-bold mb-3">Искусственный Интеллект</h3>
            <p className="text-muted-foreground mb-4">ИИ интегрируется в различные приложения для автоматизации и улучшения функционала</p>
            <div className="space-y-2">
              <a href="https://openai.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="hover:bg-pink-600 transition-all cursor-pointer">
                  <Icon name="Sparkles" className="mr-2" size={14} />
                  ChatGPT
                </Badge>
              </a>
              <a href="https://www.midjourney.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="hover:bg-pink-600 transition-all cursor-pointer">
                  <Icon name="Image" className="mr-2" size={14} />
                  Midjourney
                </Badge>
              </a>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 border-cyan-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-cyan-500/30">
            <Icon name="Box" className="mb-4 text-cyan-400" size={52} />
            <h3 className="text-2xl font-bold mb-3">Контейнеризация</h3>
            <p className="text-muted-foreground mb-4">Изоляция и упаковка приложений для удобного развертывания</p>
            <div className="space-y-2">
              <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="hover:bg-cyan-600 transition-all cursor-pointer">
                  <Icon name="Container" className="mr-2" size={14} />
                  Docker
                </Badge>
              </a>
              <a href="https://kubernetes.io" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="hover:bg-cyan-600 transition-all cursor-pointer">
                  <Icon name="Network" className="mr-2" size={14} />
                  Kubernetes
                </Badge>
              </a>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-green-500/20 to-teal-700/20 border-green-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-green-500/30">
            <Icon name="Blocks" className="mb-4 text-green-400" size={52} />
            <h3 className="text-2xl font-bold mb-3">Low-Code/No-Code</h3>
            <p className="text-muted-foreground mb-4">Создание приложений без глубоких знаний программирования</p>
            <div className="space-y-2">
              <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="hover:bg-green-600 transition-all cursor-pointer">Notion</Badge>
              </a>
              <a href="https://bubble.io" target="_blank" rel="noopener noreferrer" className="block">
                <Badge className="hover:bg-green-600 transition-all cursor-pointer">Bubble</Badge>
              </a>
            </div>
          </Card>
          <Card className="p-6 bg-gradient-to-br from-orange-500/20 to-red-700/20 border-orange-500/50 hover:scale-105 transition-all hover:shadow-2xl hover:shadow-orange-500/30">
            <Icon name="Smartphone" className="mb-4 text-orange-400" size={52} />
            <h3 className="text-2xl font-bold mb-3">Progressive Web Apps</h3>
            <p className="text-muted-foreground mb-4">Веб-приложения с возможностями нативных мобильных приложений</p>
            <div className="space-y-2">
              <a href="https://web.dev/progressive-web-apps" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm underline inline-flex items-center gap-1">
                Узнать больше <Icon name="ExternalLink" size={14} />
              </a>
            </div>
          </Card>
        </div>
      ),
      gradient: 'from-accent via-primary to-secondary'
    },
    {
      id: 10,
      title: 'Заключение',
      content: (
        <div className="space-y-8 animate-fade-in text-center">
          <Icon name="Rocket" className="mx-auto text-primary animate-pulse" size={80} />
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold">Программное обеспечение - основа цифрового мира</h3>
            <p className="text-xl text-muted-foreground">
              От операционных систем до облачных сервисов, ПО продолжает эволюционировать, 
              делая наши устройства мощнее, а работу - эффективнее
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <Card className="p-5 bg-primary/10 border-primary/30 hover:scale-105 transition-all">
                <Icon name="TrendingUp" className="mx-auto mb-3 text-primary" size={40} />
                <h4 className="font-bold text-lg mb-2">Постоянное развитие</h4>
                <p className="text-sm text-muted-foreground">Новые технологии появляются каждый день</p>
              </Card>
              <Card className="p-5 bg-secondary/10 border-secondary/30 hover:scale-105 transition-all">
                <Icon name="Users" className="mx-auto mb-3 text-secondary" size={40} />
                <h4 className="font-bold text-lg mb-2">Сообщество</h4>
                <p className="text-sm text-muted-foreground">Миллионы разработчиков создают ПО</p>
              </Card>
              <Card className="p-5 bg-accent/10 border-accent/30 hover:scale-105 transition-all">
                <Icon name="Lightbulb" className="mx-auto mb-3 text-accent" size={40} />
                <h4 className="font-bold text-lg mb-2">Инновации</h4>
                <p className="text-sm text-muted-foreground">ИИ и автоматизация меняют индустрию</p>
              </Card>
            </div>
            <div className="pt-8 space-y-4">
              <h4 className="text-xl font-bold">Полезные ресурсы для изучения</h4>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://habr.com" target="_blank" rel="noopener noreferrer">
                  <Badge className="px-4 py-2 text-base hover:scale-110 transition-all cursor-pointer">
                    <Icon name="BookOpen" className="mr-2" size={16} />
                    Habr
                  </Badge>
                </a>
                <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
                  <Badge className="px-4 py-2 text-base hover:scale-110 transition-all cursor-pointer">
                    <Icon name="HelpCircle" className="mr-2" size={16} />
                    Stack Overflow
                  </Badge>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Badge className="px-4 py-2 text-base hover:scale-110 transition-all cursor-pointer">
                    <Icon name="Github" className="mr-2" size={16} />
                    GitHub
                  </Badge>
                </a>
                <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">
                  <Badge className="px-4 py-2 text-base hover:scale-110 transition-all cursor-pointer">
                    <Icon name="GraduationCap" className="mr-2" size={16} />
                    Coursera
                  </Badge>
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
      gradient: 'from-primary via-secondary to-accent'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-hidden">
      <div className={`min-h-screen bg-gradient-to-br ${slides[currentSlide].gradient} p-8 flex flex-col transition-all duration-500`}>
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Presentation" className="text-primary" size={32} />
              <span className="text-2xl font-bold">Презентация ПО</span>
            </div>
            <div className="flex items-center gap-3 bg-card/30 backdrop-blur px-4 py-2 rounded-full">
              <Icon name="Layers" size={20} />
              <span className="font-semibold">
                {currentSlide + 1} / {slides.length}
              </span>
            </div>
          </div>

          <div className="flex-1 mb-8 flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            {slides[currentSlide].subtitle && (
              <p className="text-2xl text-center text-muted-foreground mb-8 animate-fade-in">
                {slides[currentSlide].subtitle}
              </p>
            )}
            <div className="mt-8">
              {slides[currentSlide].content}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="lg"
              className="hover:scale-110 transition-all hover:bg-primary/20"
              disabled={currentSlide === 0}
            >
              <Icon name="ChevronLeft" className="mr-2" size={20} />
              Назад
            </Button>

            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                    index === currentSlide
                      ? 'bg-primary w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                  }`}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              variant="outline"
              size="lg"
              className="hover:scale-110 transition-all hover:bg-primary/20"
              disabled={currentSlide === slides.length - 1}
            >
              Далее
              <Icon name="ChevronRight" className="ml-2" size={20} />
            </Button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Используйте клавиши ← → для навигации
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
