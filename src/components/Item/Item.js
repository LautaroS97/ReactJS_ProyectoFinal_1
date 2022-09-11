import { Link } from "react-router-dom";
import Contador from "../Counter/Counter";

const Item = ({producto}) => {

    return (
        <div className="container-card">
            <div className="card-list">
                <div className="card">
                    <img className="imagen-producto" src={producto.img}/>
                    <h3 className="nombre-producto">{producto.nombre}</h3>
                    <h4 className="info-desc">Descripción: {producto.desc}</h4>
                    <div>
                        <h2 className="info-precio">Precio: AR$ {producto.precio}</h2>
                    </div>
                    <Contador></Contador><hr/>
                    <div className="ver-mas"><Link to={`/item/${producto.id}`} className="ver-mas-button">Ver detalles...</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Item;