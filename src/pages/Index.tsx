import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/f852e29c-5898-484f-aa36-6ff95298b897/files/3b6e924c-9e26-466a-895a-8bf79b77750b.jpg";

const services = [
  { icon: "BookOpen", title: "Книги и каталоги", desc: "Издание книг, буклетов, каталогов продукции любого тиража" },
  { icon: "FileText", title: "Деловая печать", desc: "Визитки, бланки, конверты, папки — корпоративная полиграфия" },
  { icon: "Image", title: "Широкоформатная", desc: "Баннеры, постеры, плакаты, фотообои и стенды" },
  { icon: "Package", title: "Упаковка", desc: "Коробки, этикетки, пакеты с вашим фирменным стилем" },
  { icon: "Printer", title: "Оперативная печать", desc: "Срочные тиражи за 24 часа — без потери качества" },
  { icon: "Layers", title: "Послепечатная обработка", desc: "Ламинация, тиснение, вырубка, брошюровка" },
];

const portfolio = [
  { title: "Годовой отчёт «ТехноГрупп»", cat: "Корпоративная полиграфия", year: "2024", color: "bg-stone-100" },
  { title: "Упаковка «Fleur Naturelle»", cat: "Упаковка", year: "2024", color: "bg-amber-50" },
  { title: "Книга «Архитектура Москвы»", cat: "Книгоиздание", year: "2023", color: "bg-zinc-100" },
  { title: "Каталог Nóva Home", cat: "Каталоги", year: "2023", color: "bg-stone-50" },
  { title: "Баннерная кампания «Росбанк»", cat: "Широкоформатная", year: "2024", color: "bg-amber-50" },
  { title: "Серия плакатов для МГУ", cat: "Постеры", year: "2023", color: "bg-zinc-100" },
];

const reviews = [
  { name: "Алексей Воронов", role: "Директор по маркетингу, ТехноГрупп", rating: 5, text: "Работаем с типографией уже три года. Качество неизменно высокое, сроки всегда соблюдаются. Особенно ценим внимательность к деталям при печати корпоративных материалов." },
  { name: "Марина Степанова", role: "Владелец, Fleur Naturelle", rating: 5, text: "Заказывала упаковку для своей линейки косметики. Результат превзошёл ожидания — цвета точные, тиснение безупречное. Клиенты постоянно спрашивают, где мы это сделали." },
  { name: "Дмитрий Ковалёв", role: "Издатель", rating: 5, text: "Напечатали тираж в 2000 экземпляров за пять дней. Без каких-либо ошибок. Теперь только к ним." },
  { name: "Светлана Ильина", role: "Ивент-менеджер, EventPro", rating: 4, text: "Оперативная работа с нестандартными форматами. Всегда идут навстречу при срочных заказах и помогают с версткой." },
];

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i <= rating ? "text-amber-500" : "text-stone-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-body bg-cream text-charcoal min-h-screen">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl tracking-widest uppercase text-charcoal">
            Литера
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-sm tracking-wide text-stone-500 hover:text-charcoal transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#order")}
              className="text-sm tracking-wide px-5 py-2 bg-charcoal text-cream hover:bg-stone-700 transition-colors">
              Заказать
            </button>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-sm tracking-wide text-stone-600">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#order")}
              className="text-sm tracking-wide px-5 py-2 bg-charcoal text-cream text-center">
              Заказать
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex flex-col">
        <div className="flex-1 grid md:grid-cols-2">
          <div className="flex flex-col justify-center px-8 md:px-16 py-20 md:py-32">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-6">Типография · Москва · с 1998</span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-charcoal mb-8">
              Печать,<br />
              которую<br />
              <em className="not-italic text-amber-700">помнят</em>
            </h1>
            <p className="text-stone-500 text-lg leading-relaxed max-w-sm mb-10">
              Профессиональная полиграфия для бизнеса — от визиток до книжных тиражей.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => scrollTo("#order")}
                className="px-8 py-3 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-stone-700 transition-colors">
                Оформить заявку
              </button>
              <button onClick={() => scrollTo("#portfolio")}
                className="px-8 py-3 border border-stone-300 text-charcoal text-sm tracking-widest uppercase hover:border-charcoal transition-colors">
                Портфолио
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden min-h-[400px]">
            <img src={HERO_IMAGE} alt="Типография Литера" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream/30 to-transparent" />
          </div>
        </div>
        <div className="grid grid-cols-3 border-t border-stone-200">
          {[["26", "лет на рынке"], ["1200+", "проектов"], ["98%", "рекомендуют нас"]].map(([num, label]) => (
            <div key={label} className="py-8 px-8 text-center border-r last:border-r-0 border-stone-200">
              <div className="font-display text-3xl md:text-4xl text-charcoal">{num}</div>
              <div className="text-xs tracking-wider text-stone-400 uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 block">О типографии</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
              Мастерство,<br />отточенное<br />десятилетиями
            </h2>
            <p className="text-stone-500 leading-relaxed mb-6">
              С 1998 года мы создаём полиграфию, которая работает на ваш бизнес. За это время выпустили более 1200 проектов — от небольших визиток до многотомных энциклопедий.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10">
              Собственный парк оборудования Heidelberg, профессиональные препресс-специалисты и контроль качества на каждом этапе — вот почему нам доверяют крупнейшие компании России.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[["Heidelberg", "Оборудование"], ["ISO 9001", "Сертификация"], ["24 ч", "Срочный тираж"], ["Москва", "Доставка"]].map(([val, lbl]) => (
                <div key={lbl} className="border-l-2 border-amber-600 pl-4">
                  <div className="font-display text-xl text-charcoal">{val}</div>
                  <div className="text-xs text-stone-400 tracking-wide uppercase">{lbl}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-stone-200 aspect-square rounded-sm" />
            <div className="bg-amber-100 aspect-[3/4] rounded-sm mt-8" />
            <div className="bg-zinc-200 aspect-[3/4] rounded-sm -mt-8" />
            <div className="bg-stone-100 aspect-square rounded-sm" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 block">Что мы делаем</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal">Услуги</h2>
            </div>
            <p className="text-stone-400 max-w-xs text-sm leading-relaxed">
              Полный цикл полиграфического производства — под одной крышей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
            {services.map((s) => (
              <div key={s.title} className="bg-cream p-8 group hover:bg-stone-50 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center mb-6 text-amber-700">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="font-display text-xl text-charcoal mb-3">{s.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 block">Наши работы</span>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Портфолио</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((p) => (
              <div key={p.title} className={`${p.color} p-8 group cursor-pointer hover:shadow-sm transition-shadow`}>
                <div className="aspect-[4/3] mb-6 bg-stone-200 rounded-sm overflow-hidden flex items-center justify-center">
                  <Icon name="ImageOff" size={32} className="text-stone-300" fallback="ImageOff" />
                </div>
                <div className="text-xs tracking-widest uppercase text-stone-400 mb-2">{p.cat} · {p.year}</div>
                <h3 className="font-display text-lg text-charcoal">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 block">Что говорят клиенты</span>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal">Отзывы</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="font-display text-5xl text-charcoal">4.9</div>
              <div>
                <StarRating rating={5} />
                <div className="text-xs text-stone-400 mt-1">из 5 · 148 отзывов</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="border border-stone-200 p-8 hover:border-stone-300 transition-colors">
                <StarRating rating={r.rating} />
                <p className="text-stone-500 text-sm leading-relaxed my-6">"{r.text}"</p>
                <div>
                  <div className="font-medium text-charcoal text-sm">{r.name}</div>
                  <div className="text-xs text-stone-400 mt-0.5">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="py-24 md:py-32 px-6 bg-charcoal text-cream">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 block">Начать работу</span>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">Оформить заявку</h2>
          <p className="text-stone-400 mb-12">Оставьте контакты — мы свяжемся в течение часа и рассчитаем стоимость.</p>

          {sent ? (
            <div className="border border-stone-600 p-10 text-center">
              <Icon name="CheckCircle" size={40} className="text-amber-500 mx-auto mb-4" />
              <p className="font-display text-2xl mb-2">Заявка принята</p>
              <p className="text-stone-400 text-sm">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xs tracking-widest uppercase text-stone-400">Имя</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="bg-transparent border border-stone-600 px-4 py-3 text-cream placeholder-stone-600 text-sm focus:outline-none focus:border-stone-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs tracking-widest uppercase text-stone-400">Телефон</label>
                <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="bg-transparent border border-stone-600 px-4 py-3 text-cream placeholder-stone-600 text-sm focus:outline-none focus:border-stone-400 transition-colors" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs tracking-widest uppercase text-stone-400">Услуга</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="bg-charcoal border border-stone-600 px-4 py-3 text-sm text-cream focus:outline-none focus:border-stone-400 transition-colors appearance-none">
                  <option value="">Выберите услугу...</option>
                  {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs tracking-widest uppercase text-stone-400">Комментарий</label>
                <textarea value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                  rows={4} placeholder="Расскажите о вашем проекте..."
                  className="bg-transparent border border-stone-600 px-4 py-3 text-cream placeholder-stone-600 text-sm focus:outline-none focus:border-stone-400 transition-colors resize-none" />
              </div>
              <div className="md:col-span-2">
                <button type="submit"
                  className="px-10 py-4 bg-cream text-charcoal text-sm tracking-widest uppercase hover:bg-stone-100 transition-colors font-medium">
                  Отправить заявку
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <span className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4 block">Контакты</span>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-8">Свяжитесь<br />с нами</h2>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["г. Москва", "ул. Полиграфическая, 12"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 123-45-67", "Пн–Пт, 9:00–18:00"] },
              { icon: "Mail", title: "Email", lines: ["info@litera-print.ru", "Ответим в течение часа"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 9:00–19:00", "Сб: 10:00–16:00"] },
            ].map((c) => (
              <div key={c.title} className="flex gap-4">
                <div className="w-10 h-10 border border-stone-200 flex items-center justify-center shrink-0 text-amber-700">
                  <Icon name={c.icon} size={18} />
                </div>
                <div>
                  <div className="text-xs tracking-widest uppercase text-stone-400 mb-1">{c.title}</div>
                  {c.lines.map(l => <div key={l} className="text-sm text-charcoal">{l}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-stone-200 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400 tracking-wide">
          <span className="font-display text-base text-charcoal">Литера</span>
          <span>© 2024 Типография Литера. Все права защищены.</span>
          <div className="flex gap-6">
            <button onClick={() => scrollTo("#about")} className="hover:text-charcoal transition-colors">О нас</button>
            <button onClick={() => scrollTo("#services")} className="hover:text-charcoal transition-colors">Услуги</button>
            <button onClick={() => scrollTo("#contacts")} className="hover:text-charcoal transition-colors">Контакты</button>
          </div>
        </div>
      </footer>

    </div>
  );
}