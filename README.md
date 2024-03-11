##  React-Axios App

Bu proje, kullanıcı ekleme, silme, güncelleme ve listeleme işlemlerini gerçekleştiren bir web uygulamasıdır.

## Kurulum

1. Proje dosyalarını bilgisayarınıza klonlayın veya ZIP dosyası olarak indirin.
2. Klonladığınız veya indirdiğiniz dizine gidin.
3. Terminal veya komut istemcisinde `npm install` komutunu çalıştırarak bağımlılıkları yükleyin.
4. JSON Server'ı başlatmak için terminalde `json-server --watch db.json --port 3001` komutunu çalıştırın. (JSON Server'ın yüklü olduğundan emin olun, değilse `npm install -g json-server` komutunu kullanarak yükleyin.)
5. Başka bir terminal penceresinde veya sekmesinde, uygulamayı başlatmak için `npm start` komutunu kullanın.
6. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek uygulamayı görüntüleyin.

## Kullanım

- Kullanıcıları görüntülemek için ana sayfada mevcut kullanıcıları listeleyin.
- Yeni bir kullanıcı eklemek için "Add New User" başlığı altındaki giriş alanlarına kullanıcı adını yazın ve "Add User" düğmesine tıklayın veya Enter tuşuna basın.
- Mevcut bir kullanıcıyı düzenlemek için kullanıcı adına tıklayarak düzenleme moduna geçin. Düzenleme modunda, kullanıcı adını değiştirin ve "Update User" düğmesine tıklayın veya Enter tuşuna basın.
- Bir kullanıcıyı silmek için kullanıcı adının yanındaki "Delete" düğmesine tıklayın.

## Teknolojiler

- React
- Axios
- JSON Server
- CSS

## Katkıda Bulunma

1. Bu depoyu fork edin.
2. Yeni bir özellik dalı oluşturun (`git checkout -b feature/new-feature`).
3. Yaptığınız değişiklikleri açıklayın (`git commit -am 'Add new feature'`).
4. Dalınızı uzak sunucuya gönderin (`git push origin feature/new-feature`).
5. Bir Pull Talebi oluşturun.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.
