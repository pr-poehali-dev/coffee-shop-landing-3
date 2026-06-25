import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const HERO = 'https://cdn.poehali.dev/projects/9b9ed1f4-e193-4471-895e-fd1dfaa0de72/files/40b2ecba-e761-464d-881f-c5842104d98f.jpg';
const ABOUT_IMG = 'https://cdn.poehali.dev/projects/9b9ed1f4-e193-4471-895e-fd1dfaa0de72/files/de478500-516f-45a4-a410-cd32e5024474.jpg';
const FLATLAY = 'https://cdn.poehali.dev/projects/9b9ed1f4-e193-4471-895e-fd1dfaa0de72/files/877ce4f9-9f9f-4d86-bff7-835e8e4e3648.jpg';

const NAV = [
  { id: 'home', label: 'Главная' },
  { id: 'menu', label: 'Меню' },
  { id: 'about', label: 'О нас' },
  { id: 'gallery', label: 'Галерея' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const MENU = [
  {
    cat: 'Кофе',
    icon: 'Coffee',
    items: [
      { name: 'Эспрессо', desc: 'Плотный, с карамельной горчинкой', price: '180 ₽' },
      { name: 'Капучино', desc: 'Бархатная молочная пенка', price: '260 ₽' },
      { name: 'Флэт Уайт', desc: 'Двойной шот и нежное молоко', price: '290 ₽' },
      { name: 'Раф «Тёплый Дом»', desc: 'Сливки, ваниль, корица', price: '320 ₽' },
    ],
  },
  {
    cat: 'Выпечка',
    icon: 'Croissant',
    items: [
      { name: 'Круассан', desc: 'Слоёный, на сливочном масле', price: '170 ₽' },
      { name: 'Синнабон', desc: 'С корицей и сливочной глазурью', price: '220 ₽' },
      { name: 'Чизкейк', desc: 'Нежный, на песочной основе', price: '290 ₽' },
      { name: 'Тарт с грушей', desc: 'Карамель и розмарин', price: '310 ₽' },
    ],
  },
];

const GALLERY = [HERO, ABOUT_IMG, FLATLAY, FLATLAY, HERO, ABOUT_IMG];

const REVIEWS = [
  { name: 'Анна К.', text: 'Самый уютный уголок в городе. Пахнет домом и свежей выпечкой.', stars: 5 },
  { name: 'Дмитрий П.', text: 'Раф здесь — отдельный вид искусства. Возвращаюсь каждое утро.', stars: 5 },
  { name: 'Мария В.', text: 'Тёплый свет, мягкие диваны и лучший капучино. Влюбилась.', stars: 5 },
];

const TIMES = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
            <Icon name="Coffee" className="text-accent" size={26} />
            <span className="font-display text-2xl font-semibold tracking-tight">Тёплый Дом</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('booking')} className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
            Забронировать
          </Button>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  scrollTo(n.id);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-3 text-sm hover:bg-secondary"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO} alt="Кофейня" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20" />
        </div>
        <div className="container mx-auto relative px-4">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 text-accent font-medium tracking-widest uppercase text-xs mb-5">
              <span className="w-8 h-px bg-accent" /> Кофейня с душой
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-semibold leading-[0.95] mb-6">
              Здесь пахнет <span className="italic text-accent">домом</span> и свежим кофе
            </h1>
            <p className="text-lg text-muted-foreground mb-9 max-w-lg">
              Тёплое дерево, мягкий свет и авторский кофе. Место, куда хочется
              возвращаться каждое утро.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('booking')} size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
                <Icon name="CalendarHeart" size={18} className="mr-2" /> Забронировать столик
              </Button>
              <Button onClick={() => scrollTo('menu')} size="lg" variant="outline" className="rounded-full px-8 border-primary/30">
                Посмотреть меню
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-xs">Наше меню</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mt-3">Что мы готовим с любовью</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {MENU.map((group) => (
              <div key={group.cat}>
                <h3 className="font-display text-3xl font-semibold mb-7 flex items-center gap-3">
                  <Icon name={group.icon} className="text-accent" size={26} />
                  {group.cat}
                </h3>
                <div className="space-y-6">
                  {group.items.map((it) => (
                    <div key={it.name} className="flex items-baseline gap-3">
                      <div>
                        <p className="font-semibold text-lg">{it.name}</p>
                        <p className="text-sm text-muted-foreground">{it.desc}</p>
                      </div>
                      <span className="flex-1 border-b border-dashed border-border mx-2 translate-y-[-4px]" />
                      <span className="font-display text-xl font-semibold text-accent whitespace-nowrap">{it.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={ABOUT_IMG} alt="Бариста" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-2xl p-6 shadow-xl hidden sm:block">
              <p className="font-display text-4xl font-semibold">8 лет</p>
              <p className="text-sm opacity-90">варим кофе для вас</p>
            </div>
          </div>
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-xs">О нас</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mt-3 mb-6">
              Маленькая кофейня с большим сердцем
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              «Тёплый Дом» начался с простой идеи — создать место, где каждый
              чувствует себя как дома. Деревянные столы, любимые книги на полках и
              кофе, обжаренный вручную.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Мы знаем своих гостей по именам и помним их любимый напиток.
              Заходите — мы уже завариваем.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: 'Leaf', t: 'Своя обжарка' },
                { icon: 'Heart', t: 'С заботой' },
                { icon: 'Croissant', t: 'Свежая выпечка' },
              ].map((f) => (
                <div key={f.t} className="text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-secondary flex items-center justify-center mb-2">
                    <Icon name={f.icon} className="text-accent" size={22} />
                  </div>
                  <p className="text-sm font-medium">{f.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent font-medium tracking-widest uppercase text-xs">Галерея</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mt-3">Атмосфера в кадрах</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY.map((src, i) => (
              <div key={i} className="overflow-hidden rounded-xl aspect-square">
                <img src={src} alt={`Фото ${i + 1}`} className="w-full h-full object-cover hover-scale" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-accent font-medium tracking-widest uppercase text-xs">Отзывы</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mt-3">Что говорят гости</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card border border-border rounded-2xl p-7 shadow-sm">
                <div className="flex gap-1 mb-4 text-accent">
                  {Array.from({ length: r.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">«{r.text}»</p>
                <p className="font-display text-xl font-semibold">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-24 wood-texture relative grain">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-xl mx-auto bg-card rounded-3xl p-8 md:p-10 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-accent font-medium tracking-widest uppercase text-xs">Бронирование</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3">Забронируйте столик</h2>
              <p className="text-muted-foreground mt-2 text-sm">Оставьте заявку — мы перезвоним для подтверждения</p>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Input type="date" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Время" />
                  </SelectTrigger>
                  <SelectContent>
                    {TIMES.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Гостей" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6].map((g) => (
                      <SelectItem key={g} value={String(g)}>{g} чел.</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Textarea placeholder="Пожелания (необязательно)" rows={3} />
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                <Icon name="CalendarCheck" size={18} className="mr-2" /> Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-stretch">
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-xs">Контакты</span>
            <h2 className="font-display text-5xl md:text-6xl font-semibold mt-3 mb-8">Заходите в гости</h2>
            <div className="space-y-5">
              {[
                { icon: 'MapPin', t: 'Адрес', v: 'г. Москва, ул. Уютная, 12' },
                { icon: 'Clock', t: 'Часы работы', v: 'Ежедневно 09:00 — 22:00' },
                { icon: 'Phone', t: 'Телефон', v: '+7 (495) 123-45-67' },
                { icon: 'Mail', t: 'Почта', v: 'hello@teplydom.cafe' },
              ].map((c) => (
                <div key={c.t} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Icon name={c.icon} className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">{c.t}</p>
                    <p className="text-muted-foreground">{c.v}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {[
                { icon: 'Instagram', href: '#' },
                { icon: 'Facebook', href: '#' },
                { icon: 'Send', href: '#' },
              ].map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Icon name={s.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl min-h-[360px] border border-border">
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?ll=37.617700%2C55.755800&z=15"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="wood-texture text-background py-10 relative grain">
        <div className="container mx-auto px-4 relative flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-background">
            <Icon name="Coffee" size={22} />
            <span className="font-display text-xl font-semibold">Тёплый Дом</span>
          </div>
          <p className="text-sm text-background/70">© 2026 Кофейня «Тёплый Дом». Сделано с любовью.</p>
        </div>
      </footer>
    </div>
  );
}
