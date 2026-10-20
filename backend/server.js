require('dotenv').config({ quiet: true });
const express = require('express'); 
const issueRoutes = require('./routes/issues');
const app = express(); 
const PORT = Number(process.env.PORT) || 3000; 
app.use((req, res, next) => { 
console.log(`${new Date().toISOString()} ${req.method} 
${req.originalUrl}`); 
next(); 
}); 
app.use(express.json()); 
app.use('/api/issues', issueRoutes);
app.use((req, res) => { 
    res.status(404).json({ 
        error: { code: 'ROUTE_NOT_FOUND', message: 'Route not found.' } 
    }); 
});
app.listen(PORT, () => { 
const env = process.env.NODE_ENV || 'development'; 
console.log(`Cloud Issue API listening on http://localhost:${PORT} 
(${env})`); 
}); 