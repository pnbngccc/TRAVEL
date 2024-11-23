const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = 3000;

// Cấu hình body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Cấu hình kết nối tới MS SQL
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server', // Ví dụ: 'localhost' hoặc 'your_server_ip'
    database: 'your_database',
    options: {
        encrypt: true, // Sử dụng nếu bạn kết nối tới Azure
        trustServerCertificate: true // Chỉ dùng cho môi trường phát triển
    }
};

// Route để lưu dữ liệu
app.post('/save', async (req, res) => {
    try {
        const { name, email } = req.body;
        // Kiểm tra dữ liệu đầu vào
        if (!name || !email) {
            return res.status(400).send('Name and Email are required');
        }

        await sql.connect(config);
        const result = await sql.query`INSERT INTO users (name, email) VALUES (${name}, ${email})`;

        res.send('Data saved successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving data: ' + err.message);
    } finally {
        await sql.close();
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});