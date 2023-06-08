import React from 'react'
import ReactDom from 'react-dom/client'
import '../styless/Login.css'

const root = ReactDom.createRoot(document.getElementById('root'))

function Login() {
    return <div class="login-structure">
        <h1 class="login-title">Login</h1>
        <button class="btn-login-google"><a ref="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=https%3A%2F%2Fnodejs-restapi-airsoft-warrior-production-8daf.up.railway.app%2Fapi%2Fauth%2Fgoogle&client_id=432056390247-at62ppadiuih66mndsb42mufjmflafac.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email" class="login-google">Iniciar sesión con Google</a></button>
        <hr class="line"></hr>
        <form action="https://nodejs-restapi-airsoft-warrior-production-8daf.up.railway.app/api/auth/login">
            <h3 class="input-email">Email</h3>
            <input type="email" placeholder="Introduce tu correo" id="email" required></input>
            <h3 class="input-pasw">Contraseña</h3>
            <input type="password" placeholder="Introduce tu contraseña" id="password" required></input><br></br><br></br>
            <input class="btn-send" type="submit" value="LOGIN"></input>
        </form>
        <h4 class="p-register">No tieness cuenta? <a class="a-register" href="">Registrate</a></h4>
    </div>
}

index.post('/Login', (req, res) => {
    const { email, password } = req.body;
    const datos = {
        email,
        password
    };
    const datosJSON = JSON.stringify(datos);

    fs.writeFile('datos.json', datosJSON, (err) => {
        if (err) throw err;
        res.send('Datos Guardados');
    });
});

const validateLogin = [
    check("email").exists().notEmpty(),
    check("password").exists().notEmpty(),
    (req, res, next) => {
        validateResult(req, res, next);
    }
]

index.post('/Login', validateLogin, loginUser)
index.post('/login', validateLogin, loginUser)
index.post('/', multerUpload.single('image'), validateUpdate, updateUser)
index.get("/me", getCookie)