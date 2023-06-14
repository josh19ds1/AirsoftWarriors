import React from "react"
import ReactDom from 'react-dom/client'
import '../styless/Registro.css'

const root = ReactDom.createRoot(document.getElementById('root'))

function Registro() {

    return <div className="registro-structure">
        <h1 className="registro-title">Registro</h1>
        <form action="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/register">
            <h3 className="input-email">Email</h3>
            <input type="email" placeholder="Introduce tu correo" id="registrar-email" required></input>
            <h3 className="input-pasw">Contraseña</h3>
            <input type="password" placeholder="Introduce tu contraseña" id="registrar-password" required></input>
            <h3 className="input-pasw">Confirmar Contraseña</h3>
            <input type="password" placeholder="Confirmar contraseña" id="confirm-password" required></input><br></br><br></br>
            <hr className="line"></hr>
            <input className="btn-send" type="submit" value="Registrar"></input>
        </form>
        <h4 className="p-register">Ya tieness cuenta? <a className="a-register" href="">Inicia Sesion</a></h4>
    </div>
}

index.post('/Registro', (req, res) => {
    const { email, password, cpassword, age, image } = req.body;
    const datos = {
        email,
        password,
        cpassword,
        age,
        image
    };
    const datosJSON = JSON.stringify(datos);

    fs.writeFile('datos.json', datosJSON, (err) => {
        if (err) throw err;
        res.send('Datos Guardados');
    });
});

const validateRegister = [
    check("email").exists().notEmpty().isEmail(),
    check("age").exists().notEmpty(),
    check("password").exists().notEmpty().isLength({ min: 8, max: 16 }),
    check("cpassword").exists().notEmpty().isLength({ min: 8, max: 16 }),
    check("image").exists().notEmpty().optional(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

index.post("/register", multerUpload.single('image'), validateRegister, createUser)
