# Hướng Dẫn: Cấu Hình Trang 404 Tùy Chỉnh

Để một trang 404 hoạt động đúng nghĩa (tức là khi người dùng gõ sai địa chỉ, server sẽ tự động trả về giao diện trang 404 thiết kế riêng), việc chỉ tạo file `404.html` là **chưa đủ**. Bạn cần cấu hình phía máy chủ.

## 1. Nguyên lý hoạt động
- **File 404.html**: Là giao diện hiển thị cho người xem.
- **Server Configuration**: Là "người điều phối", nói cho máy chủ biết rằng "hễ gặp lỗi không tìm thấy (mã lỗi 404), hãy hiển thị file này".

## 2. Cách cấu hình trên Apache / cPanel (Phổ biến nhất)
Đa số hosting hiện nay (như Hostinger, HawkHost, v.v.) dùng Apache. Bạn cần tạo file `.htaccess` ở thư mục gốc (ngang hàng với `index.html`).

### Nội dung file `.htaccess`:
```apache
ErrorDocument 404 /404.html
```
*Lưu ý: `/404.html` là đường dẫn tới file tính từ thư mục gốc của web.*

## 3. Cách cấu hình trên Nginx
Nếu dùng VPS chạy Nginx, bạn cần sửa file config của site (thường ở `/etc/nginx/sites-available/...`):
```nginx
error_page 404 /404.html;
location = /404.html {
    root /var/www/yoursite;
    internal;
}
```

## 4. Tại sao link `/cgi-sys/index.html` lại lỗi?
Thư mục `/cgi-sys/` là thư mục hệ thống mặc định của cPanel. Khi truy cập vào đây mà không có file, server mặc định có thể trả về trang lỗi của hệ thống thay vì trang của bạn.
Tuy nhiên, nếu bạn đã cấu hình `ErrorDocument 404 /404.html` trong `.htaccess` ở thư mục gốc, thì hầu hết các truy cập sai (bao gồm cả các đường dẫn ảo không tồn tại) sẽ được điều hướng về giao diện đẹp của bạn.

## 5. Lưu ý quan trọng về liên kết trang chủ
Trong trang `404.html` và mọi trang khác, link quay về trang chủ **phải để là** `/` thay vì `index.html` hoặc tên miền đầy đủ.

### Tại sao?
- **Chuẩn SEO**: Giúp Google hiểu đây là thư mục gốc, tránh trùng lặp nội dung (duplicate content) giữa `domain.com` và `domain.com/index.html`.
- **Trải nghiệm**: Giúp đường dẫn sạch đẹp hơn trên thanh trình duyệt.
- **Tính di động**: Khi bạn chuyển hosting hoặc đổi tên miền, link `/` vẫn luôn đúng.

**Ví dụ đúng:**
```html
<a href="/">QUAY LẠI TRANG CHỦ</a>
```

**Ví dụ nên tránh:**
```html
<a href="index.html">QUAY LẠI TRANG CHỦ</a>
```

## 6. Checklist kiểm tra "Lần sau làm là OK ngay"
1. [x] Thiết kế file `404.html` (đẹp, nút Home link về `/`).
2. [x] Tạo file `.htaccess`.
3. [x] Thêm dòng `ErrorDocument 404 /404.html`.
4. [ ] Upload cả 2 file lên hosting.

---
*Tài liệu kỹ thuật bởi Vũ (dinhtienvu.com)*
