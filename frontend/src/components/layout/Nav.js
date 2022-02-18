import  NavLink  from "../NavLink";
import '../../styles/components/layout/Nav.css';

const Nav =(props) =>{
    return (
        <nav> <div className="holder">
        <ul>
        <li><NavLink activeClassName="activo" exact to= "/" >Página Principal</NavLink></li>
        <li><NavLink activeClassName="activo" exact to= "/nosotros"  >Quién soy</NavLink></li>
        <li><NavLink activeClassName="activo" exact to= "/servicios"  >Servicios que brindo
        </NavLink></li>
        <li><NavLink activeClassName="activo" exact to= "/novedades"  >Novedades
        </NavLink></li>
        <li><NavLink activeClassName="activo" exact to= "/contacto"  >Contacto
        </NavLink></li>
    </ul></div>
</nav>
    );
}
export default Nav;