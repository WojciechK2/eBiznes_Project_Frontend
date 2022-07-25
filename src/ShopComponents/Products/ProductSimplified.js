import {Link, useParams} from "react-router-dom";
import PathsStruct from "../../Utils/PathsStruct";

const ProductSimplified = (props) => {
    return(
        <li>
            <div className={"productSimplifiedRow"}>
                <Link to={`${PathsStruct.ProductsPage}/${props.id}`}>{props.name}</Link>
            </div>
        </li>
    )
}

export default ProductSimplified