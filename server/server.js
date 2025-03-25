const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// serve static files from react app
app.use(express.static(path.join(__dirname, '../client/build')));

// exmaple API route
app.get('/api/message', (req, res) => {
	res.json({ message: 'Hello from the back-end' });
});

// catch-all route to serve react app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
