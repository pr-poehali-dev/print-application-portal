import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/f852e29c-5898-484f-aa36-6ff95298b897/files/f86c0a90-78e5-47bb-9cad-15acb80c7c5b.jpg";

const services = [
  { icon: "Megaphone", title: "Наружная реклама", desc: "Билборды, ситилайты, вывески, баннеры — под ключ с монтажом" },
  { icon: "Layers", title: "Широкоформатная печать", desc: "Плакаты, баннеры, постеры, фотообои любых размеров" },
  { icon: "Box", title: "Брендирование", desc: "Транспорт, витрины, интерьеры, выставочные стенды" },
  { icon: "PenTool", title: "Разработка дизайна", desc: "Фирменный стиль, логотипы, макеты — от идеи до готового файла" },
  { icon: "Tag", title: "POS-материалы", desc: "Шелфтокеры, воблеры, стопперы, ценники и диспенсеры" },
  { icon: "Zap", title: "Световые конструкции", desc: "Лайтбоксы, неоновые вывески, LED-панели и объёмные буквы" },
];

const portfolio = [
  { title: "Брендирование сети «Магнолия»", cat: "Наружная реклама", year: "2024", accent: true },
  { title: "Стенд на выставке «Иннопром»", cat: "Выставочный стенд", year: "2024", accent: false },
  { title: "Интерьер офиса Сбербанк", cat: "Брендирование", year: "2023", accent: false },
  { title: "Автопарк ТК «Globaltrans»", cat: "Транспорт", year: "2024", accent: true },
  { title: "POS-кампания «Lays»", cat: "POS-материалы", year: "2023", accent: false },
  { title: "Световая вывеска «MedClinic»", cat: "Световые конструкции", year: "2024", accent: false },
];

const reviews = [
  { name: "Роман Захаров", role: "Директор по маркетингу, Магнолия", rating: 5, text: "Сделали брендирование 12 точек за три недели. Качество печати и монтажа — на высшем уровне. Всё чётко, без лишних слов." },
  { name: "Екатерина Лобова", role: "Ивент-директор, PRO Event", rating: 5, text: "Заказывали стенд под «Иннопром». Команда вникла в задачу с первого брифа, предложила свои идеи. Стенд получил несколько комплиментов от организаторов." },
  { name: "Андрей Мельник", role: "Владелец, MedClinic", rating: 5, text: "Световая вывеска горит уже год без единого нарекания. Быстро, профессионально, гарантия соблюдена." },
  { name: "Ольга Терёхина", role: "Бренд-менеджер, Lays Russia", rating: 4, text: "Производство POS в сжатые сроки — сделали возможным то, что казалось нереальным. Рекомендуем." },
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
        <svg key={i} className={`w-4 h-4 ${i <= rating ? "text-yellow-400" : "text-zinc-700"}`} fill="currentColor" viewBox="0 0 20 20">
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
    <div className="font-body bg-zinc-950 text-white min-h-screen">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            <span className="text-yellow-400">БРЕНД</span>
            <span className="text-white"> ЗОНА</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="text-sm tracking-wide text-zinc-400 hover:text-yellow-400 transition-colors">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#order")}
              className="text-sm font-bold tracking-widest px-5 py-2 bg-yellow-400 text-black hover:bg-yellow-300 transition-colors uppercase">
              Заказать
            </button>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left text-sm text-zinc-300">
                {l.label}
              </button>
            ))}
            <button onClick={() => scrollTo("#order")}
              className="text-sm font-bold tracking-widest px-5 py-3 bg-yellow-400 text-black text-center uppercase">
              Заказать
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-16 min-h-screen flex flex-col relative overflow-hidden">
        {/* bg image */}
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/40" />
        </div>

        <div className="relative flex-1 flex items-center px-6 md:px-16 py-24 max-w-7xl mx-auto w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-yellow-400 text-xs tracking-[0.2em] uppercase font-medium">Рекламно-производственная компания</span>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.95] text-white mb-6 uppercase tracking-tight">
              ДЕЛАЕМ<br />
              <span className="text-yellow-400">БРЕНДЫ</span><br />
              ВИДИМЫМИ
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md mb-10">
              Полный цикл рекламного производства — от разработки дизайна до монтажа на объекте. Работаем по всей России.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button onClick={() => scrollTo("#order")}
                className="px-8 py-4 bg-yellow-400 text-black text-sm font-black tracking-widest uppercase hover:bg-yellow-300 transition-colors">
                Оформить заявку
              </button>
              <button onClick={() => scrollTo("#portfolio")}
                className="px-8 py-4 border border-zinc-600 text-white text-sm font-bold tracking-widest uppercase hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                Наши работы
              </button>
            </div>
          </div>
        </div>

        {/* stats bar */}
        <div className="relative grid grid-cols-3 border-t border-zinc-800">
          {[["10+", "лет на рынке"], ["500+", "клиентов"], ["2000+", "проектов"]].map(([num, label]) => (
            <div key={label} className="py-6 px-8 text-center border-r last:border-r-0 border-zinc-800">
              <div className="font-display text-3xl md:text-4xl font-black text-yellow-400">{num}</div>
              <div className="text-xs tracking-wider text-zinc-500 uppercase mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-12 h-1 bg-yellow-400 mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-8 uppercase leading-tight">
              Производим.<br />
              <span className="text-yellow-400">Монтируем.</span><br />
              Отвечаем.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              «Бренд Зона» — это полный производственный цикл под одной крышей. Мы не перепродаём чужую работу — проектируем, печатаем и монтируем сами.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-10">
              Более 10 лет на рынке, 2000+ реализованных проектов для федеральных сетей, малого бизнеса и крупных ивент-агентств.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Собственное\nпроизводство", "Printer"],
                ["Монтаж\nпо России", "MapPin"],
                ["Срочные\nзаказы 24 ч", "Zap"],
                ["Гарантия\nна работы", "ShieldCheck"],
              ].map(([text, icon]) => (
                <div key={text} className="flex items-start gap-3 bg-zinc-800 p-4">
                  <Icon name={icon} size={18} className="text-yellow-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-300 whitespace-pre-line leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-800 overflow-hidden">
              <img src={HERO_IMAGE} alt="Производство" className="w-full h-full object-cover opacity-70" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-black p-6 font-display font-black text-center">
              <div className="text-4xl">№1</div>
              <div className="text-xs uppercase tracking-wider mt-1">в вашем городе</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <div className="w-12 h-1 bg-yellow-400 mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase">Услуги</h2>
            </div>
            <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">
              Всё что нужно для рекламы — от разработки до монтажа
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800">
            {services.map((s, i) => (
              <div key={s.title} className="bg-zinc-950 p-8 group hover:bg-zinc-900 transition-colors cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <Icon name={s.icon} size={22} className="text-yellow-400" />
                  </div>
                  <span className="text-zinc-700 font-display font-black text-3xl">0{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3 uppercase">{s.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 w-0 group-hover:w-8 h-0.5 bg-yellow-400 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 md:py-32 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="w-12 h-1 bg-yellow-400 mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase">Портфолио</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((p) => (
              <div key={p.title}
                className={`group cursor-pointer relative overflow-hidden ${p.accent ? "md:col-span-1" : ""}`}>
                <div className={`aspect-[4/3] flex flex-col justify-between p-6 border transition-all duration-300
                  ${p.accent
                    ? "bg-yellow-400 border-yellow-400 hover:bg-yellow-300"
                    : "bg-zinc-800 border-zinc-700 hover:border-yellow-400"}`}>
                  <div className={`text-xs tracking-widest uppercase font-medium ${p.accent ? "text-black/60" : "text-zinc-500"}`}>
                    {p.cat} · {p.year}
                  </div>
                  <div>
                    <h3 className={`font-display text-xl font-black uppercase leading-tight ${p.accent ? "text-black" : "text-white"}`}>
                      {p.title}
                    </h3>
                    <div className={`mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${p.accent ? "text-black/70" : "text-yellow-400"}`}>
                      <span>Смотреть</span>
                      <Icon name="ArrowRight" size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 md:py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="w-12 h-1 bg-yellow-400 mb-6" />
              <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase">Отзывы</h2>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 px-6 py-4">
              <div className="font-display text-5xl font-black text-yellow-400">4.9</div>
              <div>
                <StarRating rating={5} />
                <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">из 5 · 97 отзывов</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviews.map((r) => (
              <div key={r.name} className="bg-zinc-900 border border-zinc-800 p-8 hover:border-yellow-400/30 transition-colors">
                <StarRating rating={r.rating} />
                <p className="text-zinc-300 text-sm leading-relaxed my-6">"{r.text}"</p>
                <div className="border-t border-zinc-800 pt-4">
                  <div className="font-bold text-white text-sm">{r.name}</div>
                  <div className="text-xs text-zinc-500 mt-0.5">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section id="order" className="py-24 md:py-32 px-6 bg-yellow-400">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-1 bg-black mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-black text-black uppercase mb-4">Оформить заявку</h2>
          <p className="text-black/60 mb-12">Оставьте контакты — перезвоним в течение 15 минут и рассчитаем стоимость.</p>

          {sent ? (
            <div className="bg-black text-white p-10 text-center">
              <Icon name="CheckCircle" size={40} className="text-yellow-400 mx-auto mb-4" />
              <p className="font-display text-2xl font-black uppercase mb-2">Заявка принята!</p>
              <p className="text-zinc-400 text-sm">Перезвоним в течение 15 минут</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold tracking-widest uppercase text-black/60">Имя</label>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  placeholder="Иван Иванов"
                  className="bg-black/10 border border-black/20 px-4 py-3 text-black placeholder-black/30 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold tracking-widest uppercase text-black/60">Телефон</label>
                <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="bg-black/10 border border-black/20 px-4 py-3 text-black placeholder-black/30 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-bold tracking-widest uppercase text-black/60">Услуга</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  className="bg-yellow-400 border border-black/20 px-4 py-3 text-sm text-black focus:outline-none focus:border-black transition-colors appearance-none">
                  <option value="">Выберите услугу...</option>
                  {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-xs font-bold tracking-widest uppercase text-black/60">Комментарий</label>
                <textarea value={form.comment} onChange={e => setForm({ ...form, comment: e.target.value })}
                  rows={4} placeholder="Расскажите о вашем проекте..."
                  className="bg-black/10 border border-black/20 px-4 py-3 text-black placeholder-black/30 text-sm focus:outline-none focus:border-black transition-colors resize-none" />
              </div>
              <div className="md:col-span-2">
                <button type="submit"
                  className="px-10 py-4 bg-black text-yellow-400 text-sm font-black tracking-widest uppercase hover:bg-zinc-900 transition-colors">
                  Отправить заявку →
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 md:py-32 px-6 bg-zinc-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="w-12 h-1 bg-yellow-400 mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-black text-white uppercase mb-2">Контакты</h2>
            <p className="text-zinc-500 text-sm">Всегда на связи</p>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["г. Москва", "ул. Рекламная, 5, стр. 2"] },
              { icon: "Phone", title: "Телефон", lines: ["+7 (495) 000-00-00", "Пн–Пт, 9:00–19:00"] },
              { icon: "Mail", title: "Email", lines: ["info@brand-zona.ru", "Ответим за 1 час"] },
              { icon: "Clock", title: "Режим работы", lines: ["Пн–Пт: 9:00–19:00", "Сб: 10:00–16:00"] },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 bg-zinc-800 p-5">
                <div className="w-10 h-10 bg-yellow-400/10 flex items-center justify-center shrink-0 text-yellow-400">
                  <Icon name={c.icon} size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-1">{c.title}</div>
                  {c.lines.map(l => <div key={l} className="text-sm text-white">{l}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-8 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600 tracking-wide">
          <span className="font-display text-base font-black">
            <span className="text-yellow-400">БРЕНД</span> ЗОНА
          </span>
          <span>© 2024 Бренд Зона. Все права защищены.</span>
          <div className="flex gap-6">
            <button onClick={() => scrollTo("#about")} className="hover:text-yellow-400 transition-colors">О нас</button>
            <button onClick={() => scrollTo("#services")} className="hover:text-yellow-400 transition-colors">Услуги</button>
            <button onClick={() => scrollTo("#contacts")} className="hover:text-yellow-400 transition-colors">Контакты</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
