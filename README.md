# Express.js Todo App

Aplikasi sederhana untuk mengelola daftar todos menggunakan Express.js.

## Langkah-langkah untuk Menjalankan Aplikasi

Pastikan Anda memiliki Node.js terinstal sebelum menjalankan aplikasi ini.

### 1. Instalasi

- npm init -y
- npm install express
- npm install -D nodemon

### 2. Menjalankan Aplikasi
pada git bash:
npm run star atau npm run dev

Aplikasi akan berjalan di `http://localhost:3000`.

## API Endpoints

Aplikasi ini memiliki beberapa endpoint API:

- `GET /todos` - Mendapatkan semua todos.
- `GET /todos/:id` - Mendapatkan todo berdasarkan ID.
- `POST /todos` - Menambahkan todo baru.
- `PUT /todos/:id` - Memperbarui todo berdasarkan ID.
- `DELETE /todos/:id` - Menghapus todo berdasarkan ID.