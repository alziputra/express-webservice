// Memuat model Todos
const Todos = require('../models/Todos');

// Definisikan fungsi-fungsi untuk mengelola operasi CRUD pada todos
module.exports = {
    // Mendapatkan semua todos
    getAllTodo: (req, res) => {
        // Mengembalikan respon status 200 beserta data todos yang ada
        res.status(200).json({
            message: 'Berhasil mendapatkan data todos',
            data: Todos
        });
    },

    // Mendapatkan sebuah todo berdasarkan ID
    getTodoById: (req, res) => {
        // Mendapatkan ID todo dari parameter request
        const id = req.params.id;

        // Mencari todo berdasarkan ID
        const todo = Todos.find(todo => todo.id == id);

        // Jika todo tidak ditemukan, mengirim respon status 404
        if (!todo) {
            res.status(404).json({
                message: 'Todo tidak ditemukan'
            });
        }

        // Mengirim respon status 200 dengan data todo yang ditemukan
        res.status(200).json({
            message: 'Berhasil mendapatkan todo',
            data: todo
        });
    },

    // Menambahkan todo baru
    addTodo: (req, res) => {
        // Mendapatkan nilai value dan completed dari body request
        const { value, completed } = req.body;

        // Menentukan ID baru berdasarkan jumlah todos yang ada
        const id = Todos.length + 1;

        // Membuat objek todo baru
        const todo = {
            id,
            value,
            completed
        };

        // Menambahkan todo baru ke daftar todos
        Todos.push(todo);

        // Mengirim respon status 201 dengan data todo yang ditambahkan
        res.status(201).json({
            message: 'Berhasil menambahkan todo',
            data: todo
        });
    },

    // Memperbarui todo berdasarkan ID
    updateTodoById: (req, res) => {
        // Mendapatkan ID dari parameter request
        const id = req.params.id;
        
        // Mendapatkan nilai value dan completed dari body request
        const { value, completed } = req.body;

        // Mencari todo berdasarkan ID
        const todo = Todos.find(todo => todo.id == id);

        // Jika todo tidak ditemukan, mengirim respon status 404
        if (!todo) {
            res.status(404).json({
                message: 'Todo tidak ditemukan'
            });
        }

        // Memperbarui nilai value dan completed dari todo yang ditemukan
        todo.value = value;
        todo.completed = completed;

        // Mengirim respon status 200 dengan data todo yang diperbarui
        res.status(200).json({
            message: 'Berhasil mengubah todo',
            data: todo
        });
    },

    // Menghapus todo berdasarkan ID
    deleteTodoById: (req, res) => {
        // Mendapatkan ID dari parameter request
        const id = req.params.id;

        // Mencari todo berdasarkan ID
        const todo = Todos.find(todo => todo.id == id);

        // Jika todo tidak ditemukan, mengirim respon status 404
        if (!todo) {
            res.status(404).json({
                message: 'Todo tidak ditemukan'
            });
        }

        // Menghapus todo dengan ID yang cocok dari daftar todos
        Todos = Todos.filter(todo => todo.id != id);

        // Mengirim respon status 200 dengan data todo yang dihapus
        res.status(200).json({
            message: 'Berhasil menghapus todo',
            data: todo
        });
    }
};
