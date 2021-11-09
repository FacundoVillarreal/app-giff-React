import { Link } from "wouter";
import './styles.css'

export default function Category({ name, options }) {
    return (
        <>
            <h4>{name}</h4>
            <ul  className="Trendings-content">
                {options.map(item => (
                    <Link to={`/search/${item}`}>
                        <li key={item}>{item}</li>
                    </Link>
                ))}
            </ul>
        </>
    )
}