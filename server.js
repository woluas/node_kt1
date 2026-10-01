require('dotenv').config();
const app = require('./src/app');
const { seed } = require('./src/seed');

const PORT = process.env.PORT || 3000;

seed(); 

app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`);
});