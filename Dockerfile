# ใช้ PHP 8.2 + Apache
FROM php:8.2-apache

# ติดตั้ง PHP extensions ที่ต้องใช้
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable mysqli pdo pdo_mysql

# เปิด mod_rewrite สำหรับ .htaccess
RUN a2enmod rewrite

# ตั้ง working directory
WORKDIR /var/www/html

# คัดลอกไฟล์โปรเจกต์ไปยัง container
# COPY ./www /var/www/html

# เปิด port 80 (Apache)
EXPOSE 80

# รัน Apache เมื่อ container เริ่มทำงาน
CMD ["apache2-foreground"]
