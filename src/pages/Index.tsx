
import React from "react";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Добро пожаловать в MEMELAND</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Первый в мире токен, который превратится в настоящий остров в океане. И это не шутка.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#33C3F0]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/a05e31f2-80db-498f-a410-a0695917768f.png" 
                  alt="Icon" 
                  className="w-10 h-10"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Физический остров</h3>
              <p className="text-gray-600">Реальный участок земли, который вы можете посетить</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/0948e6fc-821e-4024-b542-ae6ba48806c8.jpeg" 
                  alt="Icon" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Экзотическая жизнь</h3>
              <p className="text-gray-600">Уникальная экосистема с плавающими свиньями</p>
            </div>
            
            <div className="bg-[#F8F9FA] p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#6E59A5]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/6427af35-b9a0-4461-93d1-836a4ef4f6ee.jpeg" 
                  alt="Icon" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Местное население</h3>
              <p className="text-gray-600">Дружелюбные соседи и увлекательная культура</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-[#1A1F2C] text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2025 MEMELAND. Все права защищены.</p>
          <p className="text-sm text-white/60">
            Не является финансовым советом. Инвестируйте с умом.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
