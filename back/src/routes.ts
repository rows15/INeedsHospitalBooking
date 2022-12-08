import { Router } from "express";
import { AdminController } from "./controllers/AdminController";
import { BookingController } from "./controllers/BookingController";
import { PatientController } from "./controllers/PatientController";
/* import { AuthController } from "./controllers/AuthController"; */
/* import { MovieController } from "./controllers/MovieController";
import { UserController } from "./controllers/UserController"; */
import authMiddleware from "./middlewares/middleware";
/* import swaggerui from 'swagger-ui-express'; */
import * as swaggerDocument from './swagger.json'
const routes = Router();


routes.post('/admint', new AdminController().teste) 
routes.post('/admin', new AdminController().createUser) 

routes.post('/patient/search', new PatientController().listMedics)

routes.post('/book/new', new BookingController().createResevation)
routes.get('/book', new BookingController().listAllBookings)
routes.get('/book/patient/:id', new BookingController().listBookingsByPatient)
routes.get('/book/medic/:id', new BookingController().listBookingsByMedic)
routes.get('/book/date/:id', new BookingController().listBookingsByDate)




/* const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express') */

/* routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); */

/* routes.post('/user',new UserController().create)
routes.post('/auth',new AuthController().auth) 

routes.get('/movie', new MovieController().list) 
routes.put('/movie/:id/update', authMiddleware, new MovieController().update)
routes.get('/movie/:id', new MovieController().search) 
routes.post('/movie', authMiddleware, new MovieController().create) 
routes.delete('/movie/:id', authMiddleware, new MovieController().delete)

routes.get('/clearcache', new MovieController().clearCache) */




export default routes