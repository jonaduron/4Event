import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import IndexRoutes from './routes/index-routes';
import ReportRoutes from './routes/report-routes';
import CustomerRoutes from './routes/customer-routes';
import EventRoutes from './routes/event-routes';
import ProviderRoutes from './routes/provider-routes'
import PacketRoutes from './routes/packets-routes';

class Server {

    public app:Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void { 
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes():void {
        this.app.use('/', IndexRoutes);
        this.app.use('/customer', CustomerRoutes);
        this.app.use('/reports', ReportRoutes);
        this.app.use('/events', EventRoutes);
        this.app.use('/provider', ProviderRoutes);
        this.app.use('/packet', PacketRoutes);
    }

    start():void {
        this.app.listen(this.app.get('port'), () => {
            console.log("server running on port " + this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();