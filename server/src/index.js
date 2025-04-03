import { app } from './app.js';
import dotenv from 'dotenv';
import path from 'path';

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

app.get()