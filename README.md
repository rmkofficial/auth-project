
# Kimlik Doğrulama Projesi

Bu proje, React (frontend) ve Node.js/Express (backend) kullanılarak oluşturulmuş basit bir kimlik doğrulama uygulamasıdır. Kullanıcılar, projeye kayıt olabilir, giriş yapabilir, profil bilgilerini güncelleyebilir ve çıkış yapabilirler.


## Özellikler

- Kullanıcı Kaydı: Kullanıcılar, ad, e-posta ve şifre ile yeni bir hesap oluşturabilirler.
- Kullanıcı Girişi: Kullanıcılar, e-posta ve şifre ile giriş yapabilirler.
- JWT ile Kimlik Doğrulama: Giriş yaptıktan sonra, kullanıcılar JSON Web Token (JWT) kullanılarak kimlik doğrulaması yapılır.
- Profil Yönetimi: Kullanıcılar, profil bilgilerini (ad, bio, konum) güncelleyebilirler.
- Korumalı Rotalar: Belirli rotalar yalnızca kimliği doğrulanmış kullanıcılar tarafından erişilebil
- Çıkış Yapma: Kullanıcılar hesaplarından çıkış yapabilirler.

  
## Kullanılan Teknolojiler

**Frontend:** React

**Backend:** Node.js, Express.js, MongoDB (Mongoose)

**Kimlik Doğrulama:** JSON Web Token (JWT)

**Stil:** Material-UI

  
## Kurulum

**Gereksinimler:**

- Bilgisayarınızda kurulu Node.js ve npm olmalıdır.

- MongoDB veritabanı (Bulut tabanlı bir veritabanı için MongoDB Atlas kullanabilirsiniz).

Projeyi klonlayın

```bash
  git clone https://github.com/kullaniciadi/auth-project.git
  cd auth-project
```

**Backend Kurulumu:**

1. Backend dizinine gidin:
```bash
  cd auth-backend
```

2. Gerekli bağımlılıkları yükleyin:
```bash
  npm install
```

3. "auth-backend" dizininde bir ".env" dosyası oluşturun ve MongoDB URI ve JWT sırrınızı ekleyin:
```bash
  MONGO_URI=sizin_mongodb_baglanti_stringiniz
  JWT_SECRET=sizin_jwt_sirriniz
```

4. Backend sunucusunu başlatın:
```bash
  npm start
```

Backend sunucusu http://localhost:5000 üzerinde çalışıyor olacak.


**Frontend Kurulumu:**

1. Frontend dizinine gidin:
```bash
  cd ../auth-frontend
```

2. Gerekli bağımlılıkları yükleyin:
```bash
  npm install
```

3. Frontend sunucusunu başlatın:
```bash
  npm start
```

Frontend sunucusu http://localhost:3000 üzerinde çalışıyor olacak.
## Kullanım

1. Kayıt Ol: http://localhost:3000 adresine giderek yeni bir hesap oluşturun.
2. Giriş Yap: Kayıtlı e-posta ve şifrenizi kullanarak giriş yapın
3. Profil Yönetimi: Giriş yaptıktan sonra, profil sayfanıza yönlendirileceksiniz. Burada bio ve konum bilgilerinizi güncelleyebilirsiniz.
4. Çıkış Yap: Navbar'daki çıkış yap butonunu kullanarak hesabınızdan çıkış yapabilirsiniz.






  
