export interface Props {
    name: string,
    path: string;
    onClick: Function;
}

const NavButton: React.FC<Props> = (props) => {
    return (
        <li className="navButton">
            <button onClick={() => props.onClick(props.path)}>
                <p>{props.name}</p>
            </button>
        </li>
    );
}

export default NavButton;