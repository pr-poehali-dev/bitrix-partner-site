import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-bitrix-blue" size={32} />
              <span className="text-xl font-bold text-gray-900">
                Быстрые Решения
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#solutions"
                className="text-gray-600 hover:text-bitrix-blue transition-colors"
              >
                Решения
              </a>
              <a
                href="#cases"
                className="text-gray-600 hover:text-bitrix-blue transition-colors"
              >
                Кейсы
              </a>
              <a
                href="#team"
                className="text-gray-600 hover:text-bitrix-blue transition-colors"
              >
                Команда
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-bitrix-blue transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-bitrix-blue hover:bg-blue-700">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge
              variant="outline"
              className="mb-4 border-bitrix-blue text-bitrix-blue"
            >
              Сертифицированный партнер Битрикс24
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Быстрые решения для
              <br />
              <span className="text-bitrix-blue">бизнеса на Битрикс24</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы помогаем компаниям автоматизировать процессы, внедрять
              CRM-системы и достигать максимальной эффективности с помощью
              Битрикс24
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button size="lg" className="bg-bitrix-blue hover:bg-blue-700">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на консультацию
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать презентацию
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-bitrix-blue mb-2">
                  200+
                </div>
                <div className="text-gray-600">Внедренных проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bitrix-blue mb-2">
                  5 лет
                </div>
                <div className="text-gray-600">Опыт работы</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bitrix-blue mb-2">
                  98%
                </div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши решения
            </h2>
            <p className="text-xl text-gray-600">
              Комплексные услуги для автоматизации вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Settings"
                  className="text-bitrix-blue mb-4"
                  size={48}
                />
                <CardTitle>Внедрение CRM</CardTitle>
                <CardDescription>
                  Настройка и внедрение Битрикс24 CRM под ваши бизнес-процессы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Анализ текущих процессов</li>
                  <li>• Настройка воронок продаж</li>
                  <li>• Обучение сотрудников</li>
                  <li>• Техническая поддержка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Workflow"
                  className="text-bitrix-blue mb-4"
                  size={48}
                />
                <CardTitle>Автоматизация процессов</CardTitle>
                <CardDescription>
                  Создание автоматических бизнес-процессов и роботов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Бизнес-процессы</li>
                  <li>• Роботы и триггеры</li>
                  <li>• Интеграции с внешними системами</li>
                  <li>• Отчеты и аналитика</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Users"
                  className="text-bitrix-blue mb-4"
                  size={48}
                />
                <CardTitle>Корпоративное обучение</CardTitle>
                <CardDescription>
                  Обучение команды эффективной работе с Битрикс24
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Групповые тренинги</li>
                  <li>• Индивидуальные консультации</li>
                  <li>• Методические материалы</li>
                  <li>• Сертификация пользователей</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Кейсы наших клиентов
            </h2>
            <p className="text-xl text-gray-600">
              Реальные результаты внедрения Битрикс24
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">ТД "Строймаркет"</CardTitle>
                    <CardDescription>Строительные материалы</CardDescription>
                  </div>
                  <Badge variant="secondary">B2B</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Автоматизация продаж и складского учета для сети строительных
                  магазинов
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      +45%
                    </div>
                    <div className="text-sm text-gray-600">Рост продаж</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">-30%</div>
                    <div className="text-sm text-gray-600">Время обработки</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Срок внедрения: 2 месяца
                  </span>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">ООО "ТехСервис"</CardTitle>
                    <CardDescription>IT-услуги</CardDescription>
                  </div>
                  <Badge variant="secondary">B2B</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Внедрение CRM для управления проектами и клиентской базой
                </p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      +60%
                    </div>
                    <div className="text-sm text-gray-600">Конверсия лидов</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">-50%</div>
                    <div className="text-sm text-gray-600">Время на отчеты</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Срок внедрения: 3 месяца
                  </span>
                  <Button variant="outline" size="sm">
                    Подробнее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600">
              Эксперты по автоматизации бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-bitrix-blue to-blue-600 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <CardTitle>Алексей Петров</CardTitle>
                <CardDescription>Руководитель проектов</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  5+ лет опыта внедрения CRM-систем. Сертифицированный
                  администратор Битрикс24
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Битрикс24</Badge>
                  <Badge variant="secondary">CRM</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <CardTitle>Мария Сидорова</CardTitle>
                <CardDescription>Технический директор</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Эксперт по интеграциям и автоматизации. Разработчик решений
                  для Битрикс24
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">API</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" className="text-white" size={32} />
                </div>
                <CardTitle>Дмитрий Козлов</CardTitle>
                <CardDescription>Специалист по обучению</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Обучил более 500 пользователей работе с Битрикс24.
                  Тренер-консультант
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="secondary">Обучение</Badge>
                  <Badge variant="secondary">Консультации</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600">
              Получите бесплатную консультацию по внедрению Битрикс24
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-bitrix-blue" size={20} />
                  <span className="text-gray-700">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="text-bitrix-blue" size={20} />
                  <span className="text-gray-700">info@fast-solutions.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-bitrix-blue" size={20} />
                  <span className="text-gray-700">
                    г. Москва, ул. Тверская, 15
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-bitrix-blue" size={20} />
                  <span className="text-gray-700">Пн-Пт: 9:00 - 18:00</span>
                </div>
              </div>
              <Separator className="my-6" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Мы в социальных сетях
                </h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    Telegram
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Phone" size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в течение 30 минут
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bitrix-blue"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Компания
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bitrix-blue"
                      placeholder="Название компании"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bitrix-blue"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bitrix-blue"
                    placeholder="email@company.ru"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bitrix-blue"
                    placeholder="Расскажите о вашей задаче..."
                  />
                </div>
                <Button className="w-full bg-bitrix-blue hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" className="text-bitrix-blue" size={24} />
                <span className="text-xl font-bold">Быстрые Решения</span>
              </div>
              <p className="text-gray-400">
                Ваш надежный партнер в автоматизации бизнеса с помощью Битрикс24
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Внедрение CRM
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Автоматизация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Обучение
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Команда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Карьера
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@fast-solutions.ru</p>
                <p>г. Москва, ул. Тверская, 15</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Быстрые Решения. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
