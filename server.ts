import express from 'express';
import path from 'path';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // In-memory mock database for appointments and contacts
  const appointments: any[] = [];
  const contacts: any[] = [];

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Appointment Booking Endpoint
  app.post('/api/appointments', (req, res) => {
    const { name, phone, email, date, time, service, message } = req.body;
    
    // Basic validation
    if (!name || !phone || !date || !time || !service) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newAppointment = {
      id: `APT-${Date.now()}`,
      name,
      phone,
      email: email || '',
      service,
      date,
      time,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      notes: message || ''
    };

    appointments.push(newAppointment);

    // TODO: Future Integration with Google Sheets API here
    // Example: appendRowToGoogleSheet(newAppointment)
    // TODO: Future Integration with PostgreSQL here

    res.status(201).json({ 
      success: true, 
      message: 'Appointment booked successfully',
      data: newAppointment
    });
  });

  // Contact Form Endpoint
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newContact = {
      id: `MSG-${Date.now()}`,
      name,
      email,
      subject: subject || '',
      message,
      createdAt: new Date().toISOString(),
    };

    contacts.push(newContact);

    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Serve index.html for all non-API routes (SPA fallback)
    app.get('*', (req, res) => {
      if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(distPath, 'index.html'));
      } else {
        res.status(404).json({ error: 'API route not found' });
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch(console.error);
