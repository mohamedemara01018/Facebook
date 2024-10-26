import { Link } from "react-router-dom"
import { listData_leftPart_lefthead } from "../../../headData"


function Left_part_list() {
    return (
        <div className="left-part">
            <p className="subHeader">انشاء</p>
            <Left_part />
        </div>
    )
}

export default Left_part_list



function Left_part() {

    return (
        <ul>
            {

                listData_leftPart_lefthead.map((item) => {
                    return <li data-hover={item.id == 5 ? 'true' : 'false'} key={item.id}>
                        {item.id != 5 ? <Link className="link" to={String(item.data)}>
                            <h3>{item.data}</h3>
                            <i className={item.icon}></i>
                        </Link> : item.data}
                    </li>
                })
            }

        </ul>
    )
}