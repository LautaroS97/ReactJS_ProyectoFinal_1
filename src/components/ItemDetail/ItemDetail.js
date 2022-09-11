import Contador from "../Counter/Counter";

const ItemDetail = ({item}) => {

    return(
        
        <div className="box-container-detail">
            <div className="container-detail">
                <img src={item.img}/>
                <h2 className="container-detail-nombre">{item.nombre}</h2>
                <p className="container-detail-info">Descripción: {item.desc}</p><hr/>
                <p className="container-detail-info">Categoría: {item.category}</p><hr/>
                <h3 className="container-detail-info">Precio: AR$ {item.precio}</h3><hr/>
                <p className="container-detail-info">Existencias: {item.stock}</p><hr/>
                <h1 className="container-detail-contador"><Contador/></h1>
            </div>
        </div>
    )
}

export default ItemDetail;