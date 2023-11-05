import './Foolter.css'

const logo = <img src="/src/assets/compass.uol_Negativo 1.png" alt="Logo CompassUol" />
const Footer = () => {
  return (
    <div>
        <div className='container-footer'>      
            <div>
                {logo}
            </div>                 
            <ul className='footer-list'>
                <li>Política de privacidad</li>
                <li>Acuerdo de suscripción</li>
                <li>Ayuda</li>
                <li>Dispositivos compatible</li>
                <li>Acerca de Disney+</li>
                <li>Publicidad personalizada</li>
            </ul>
            <div className='information-footer'>
                <span>
                Disney+ es un servicio por suscripción de pago, su contenido está sujeto a disponibilidad. 
                El servicio Disney+ es comercializado por Disney DTC LATAM, Inc., 
                2400 W Alameda AVE., Burbank CA 91521.
                </span>
            </div>
            <div className='copy'>
                <p>
                © 2021 Disney y sus entidades relacionadas. Todos los derechos reservados.
                </p>
            </div>
            </div>
    </div>
  )
}

export default Footer