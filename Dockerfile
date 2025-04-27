# Base image nodejs
FROM node:18-alpine

# Tạo thư mục app trong container
WORKDIR /app

# Copy file package.json trước để cài dependency
COPY package.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ source code vào container
COPY . .

# Mở cổng 3000
EXPOSE 3000

# Command mặc định để chạy app
CMD ["npm", "start"]
