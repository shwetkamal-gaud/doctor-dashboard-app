import express from 'express';
import cors from 'cors';
import appointmentsRouter from './routes/appointment.route';
import prescriptionsRouter from './routes/prescription.route';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/appointments', appointmentsRouter);
app.use('/prescriptions', prescriptionsRouter);

app.listen(3000, () => console.log('Server runing on port 3000'));