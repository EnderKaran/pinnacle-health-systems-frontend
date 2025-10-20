# Pinnacle Health Systems - Frontend

Modern, dinamik ve kullanıcı odaklı bir sağlık randevu platformu ön yüzü. Bu proje, React ekosisteminin en iyi pratikleri ve modern tasarım araçları kullanılarak, kullanıcıların sağlık hizmetlerine kolayca erişimini sağlamak amacıyla geliştirilmiştir.

## Ekran Görüntüsü
<img width="1911" height="874" alt="image" src="https://github.com/user-attachments/assets/5af70588-daa4-4c36-bd33-6278f5e87db2" />

---

## Proje Özellikleri

- **Çok Sayfalı Yapı:** `React Router` ile yönetilen 4 ana sayfa:
  - **Ana Sayfa:** Karşılama (Hero), öne çıkan doktorlar, popüler uzmanlıklar ve dinamik istatistikler.
  - **Hakkımızda:** Kurumun misyonu, değerleri, animasyonlu tarihçe zaman çizelgesi ve ekibini tanıtan kapsamlı bir sayfa.
  - **Doktor Bul:** Gelişmiş, anlık çalışan arama ve filtreleme özellikleri ile sayfalama (pagination).
  - **İletişim:** `Formik` ve `Yup` ile yönetilen, doğrulamalı (validation) profesyonel iletişim formu.
- **Gelişmiş Doktor Arama:** İsim, uzmanlık alanı ve şehre göre anlık (client-side) arama ve filtreleme motoru.
- **İnteraktif Oylama Sistemi:** Hasta yorumları bölümünde, kullanıcının verdiği oyu `localStorage` kullanarak kalıcı hale getiren interaktif bir yıldızlama sistemi.
- **Modern Animasyonlar:** `Framer Motion` ve [**Magic UI**](https://magicui.design/) kütüphanelerinden ilham alan, akıcı ve performansı optimize edilmiş animasyonlarla zenginleştirilmiş bir kullanıcı deneyimi.
- **Tam Duyarlılık (Responsive Design):** Mobil, tablet ve masaüstü cihazlarla tam uyumlu, akıcı bir tasarım.
- **Çapraz Tarayıcı Uyumluluğu (Cross-Browser Compatibility):** Modern tarayıcıların (Chrome, Firefox, Safari, Edge) en güncel sürümlerinde tutarlı bir şekilde çalışacak şekilde test edilmiştir.

---

# Yeni Eklenen Sayfalar ve Kullanılan Kütüphaneler

Proje, kurumsal ve destekleyici içerikleri barındıran, her biri farklı bir modern UI kütüphanesinin gücünden faydalanan yeni sayfalarla zenginleştirilmiştir.  
Bu yaklaşım, projenin teknoloji yelpazesini genişletirken, her bir göreve en uygun aracın seçilmesi prensibini benimser.

---

## Yardım Merkezi (Help Center)

**Kullanılan Kütüphaneler:** `DaisyUI`, `React Icons`  
**Uygulanan Mantık:** Kullanıcının aradığı cevabı en hızlı şekilde bulmasını hedefleyen, üç aşamalı sağlam bir tasarıma sahiptir:

- **Etkileşimli Arama:** Kullanıcıyı büyük bir arama çubuğu ile karşılar.  
- **Kategorik Kılavuz:** İkonlarla zenginleştirilmiş DaisyUI kartları, sık karşılaşılan sorunları (“Hesap Yönetimi”, “Randevular” vb.) kategorilere ayırarak görsel bir navigasyon sunar.  
- **Doğrudan Destek:** Aradığını bulamayan kullanıcıları, net bir **“İletişime Geçin”** butonu ile destek ekibine yönlendirir.

---

## Basın (Press)

**Kullanılan Kütüphaneler:** `Magic UI`, `DaisyUI`, `Framer Motion`  
**Uygulanan Mantık:** Basın bültenleri ve haberler, `Framer Motion`’ın `staggerChildren` animasyonu ile canlandırılmış bir grid yapısında sunulur.  
Her bir haber, `DaisyUI`’ın `card` bileşeni ile tutarlı bir şekilde tasarlanmıştır.  
Sayfanın sonunda, basın mensupları için kurumsal materyallerin indirilebileceği özel bir **Medya Kiti** bölümü bulunur.

---

## Sık Sorulan Sorular (SSS)

**Kullanılan Kütüphane:** `Headless UI`  
**Uygulanan Mantık:** Kullanıcıların sorulara hızlıca yanıt bulabilmesi için bir akordiyon menü yapısı kullanılmıştır.  
`Headless UI`’ın `Disclosure` bileşeni, tamamen erişilebilir (accessible) ve stil içermeyen bir akordiyon iskeleti sunar.  
Bu iskelet, projenin mevcut estetiğine uygun olarak `Tailwind CSS` ile sıfırdan ve tam kontrolle stillendirilmiştir.  
Bu sayede, karmaşık UI mantığı (açma/kapama, klavye navigasyonu) kütüphaneye bırakılırken, tasarım tamamen özgün kalmıştır.

---

## Kariyer (Careers)

**Kullanılan Kütüphane:** `DaisyUI`  
**Uygulanan Mantık:** Açık pozisyonları listelemek için `DaisyUI`’ın sunduğu hazır bileşen sınıflarından (`card`, `badge`, `btn`) faydalanılmıştır.  
`DaisyUI`, `Tailwind CSS`’e semantik sınıf adları ekleyerek, standart UI elemanlarının çok hızlı bir şekilde ve tutarlı bir tema ile oluşturulmasını sağlar.  
Sayfadaki filtreleme mantığı, React’in `useState` hook’u ile yönetilmektedir.

---

## Ortaklarımız (Partners)

**Kullanılan Kütüphane:** `Magic UI` (*Marquee Bileşeni*)  
**Uygulanan Mantık:** Statik bir liste yerine, ortak logolarını (veya isimlerini) göstermek için sonsuz kayan bir animasyon (`marquee`) kullanılmıştır.  
`Magic UI`’dan ilham alınan ve `Framer Motion` ile güçlendirilen bu bileşen, sayfaya modern ve dinamik bir hava katmaktadır.  
İki şeridin zıt yönlerde hareket etmesi, görsel derinliği artırır.

---

## Gizlilik Politikası & Kullanım Koşulları

**Kullanılan Kütüphane:** `@tailwindcss/typography`  
**Uygulanan Mantık:** Bu metin ağırlıklı sayfalar için en temiz ve profesyonel çözüm tercih edilmiştir.  
`@tailwindcss/typography` eklentisinin sunduğu `prose` sınıfı, standart HTML etiketlerini (`h2`, `p`, `ul` vb.) otomatik olarak okunaklı ve estetik bir şekilde biçimlendirir.  
Bu sayede, her bir metin elemanını manuel olarak stillendirme ihtiyacı ortadan kalkar ve tüm yasal metin sayfalarında tam bir tasarım tutarlılığı sağlanır.

---

## Tasarım ve UI/UX Süreci

Bu projenin kullanıcı arayüzü, modern tasarım araçları ve metodolojileri kullanılarak özenle oluşturulmuştur:

- **UI Tasarımı:** Arayüzün temel tasarımı ve bileşenlerin yerleşimi, yapay zeka destekli UI tasarım platformları olan [**Ready AI**](https://www.ready.io/) ve [**Stitch**](https://stitch.so/) kullanılarak oluşturulmuştur. Bu araçlar, hızlı prototipleme ve modern tasarım trendlerine uygun bir görünüm elde etmemizi sağlamıştır.
- **Görsel Üretimi:** Projede kullanılan "Hakkımızda" ve "İletişim" gibi sayfalardaki özgün arka plan görselleri, Google'ın **Nano Banana** görsel üretim modeli ile oluşturulmuştur.
- **Bileşen Kütüphanesi:** Projedeki animasyonlu bileşenler (örn: `BlurIn`) ve genel estetik, **Magic UI** kütüphanesinden ilham alınarak geliştirilmiştir.

---

##  Teknik Mimarisi ve React Tasarım Desenleri

Proje, bakımı kolay, ölçeklenebilir ve performanslı bir kod tabanı oluşturmak amacıyla aşağıdaki React tasarım desenleri (Design Patterns) üzerine inşa edilmiştir:

1.  **Bileşen Tabanlı Mimari (Component-Based Architecture):** Arayüz, her biri kendi sorumluluğuna sahip, yeniden kullanılabilir ve bağımsız bileşenlere (`DoctorCard`, `PageHero`, `Pagination` vb.) ayrılmıştır.
2.  **Sunum ve Konteyner Bileşenleri (Presentational and Container Components):** Sayfa bileşenleri (`DoctorsPage`, `AboutPage`), veri çekme ve state yönetimi gibi mantıksal işlemleri üstlenirken (`Container`), `DoctorCard` gibi alt bileşenler sadece veriyi göstermeye (`Presentational`) odaklanmıştır.
3.  **Hook'lar ile State Yönetimi (`useState`, `useEffect`):** Bileşenlerin durumu, fonksiyonel bileşenlerin gücünü ortaya çıkaran `useState` ve `useEffect` gibi React Hook'ları ile yönetilmiştir.
4.  **Kontrollü Bileşenler (Controlled Components):** Projedeki tüm form elemanları (`İletişim` ve `Doktor Arama` formları), state'e bağlı ve React tarafından kontrol edilen "kontrollü bileşenler" olarak tasarlanmıştır. Bu, form verilerinin tahmin edilebilir ve yönetilebilir olmasını sağlar.
5.  **Render Props (Formik ile):** `Formik` kütüphanesi, formun durumunu ve yardımcı fonksiyonları alt bileşenlere aktarmak için "Render Props" desenini etkin bir şekilde kullanır.

---

##  Kullanılan Teknolojiler

- **Frontend:** React, Vite, Tailwind CSS
- **Routing:** React Router DOM
- **Animasyon:** Framer Motion, Magic UI
- **Form Yönetimi:** Formik, Yup
- **UI Bileşenleri & İkonlar:** Swiper.js, React Icons
- **Dağıtım (Deployment):** gh-pages

---

## Kurulum ve Başlatma

1.  **Depoyu klonlayın:**
    ```bash
    git clone https://github.com/EnderKaran/pinnacle-health-systems-frontend.git
    cd pinnacle-health-systems-frontend
    ```
2.  **Paketleri yükleyin:**
    ```bash
    npm install
    ```
3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    ```

---

## Proje Dosya Yapısı

Proje, modüler ve anlaşılır bir dosya yapısına sahiptir:

```
/
├── public/                 # Favicon gibi statik varlıklar
├── src/
│   ├── assets/             # Resimler, fontlar vb.
│   ├── components/         # Yeniden kullanılabilir React bileşenleri (Navbar, DoctorCard vb.)
│   │   └── magicui/        # Özel animasyon bileşenleri
│   ├── lib/                # Yardımcı fonksiyonlar (örn: utils.js)
│   ├── pages/              # Her bir sayfayı temsil eden ana bileşenler (HomePage, AboutPage vb.)
│   ├── App.jsx             # Ana layout ve Rota (Route) tanımlamaları
│   ├── index.css           # Global stil tanımlamaları
│   └── main.jsx            # React uygulamasının başlangıç noktası
├── .gitignore              # Git tarafından takip edilmeyecek dosyalar
├── index.html              # Ana HTML dosyası
├── package.json            # Proje bağımlılıkları ve script'ler
├── vite.config.js          # Vite yapılandırma dosyası
└── README.md               # Bu dosya
```

---

## 👤 İletişim

**Ender Karan**

- **GitHub:** `(https://github.com/EnderKaran)`
- **LinkedIn:** `(https://www.linkedin.com/in/ender-karan-52303b187)`

Proje ile ilgili herhangi bir soru veya geri bildirim için bana ulaşmaktan çekinmeyin!
