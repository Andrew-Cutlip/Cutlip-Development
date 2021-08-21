export interface Props {
    name: string,
    path: string;
}

const NavButton: React.FC<Props> = (props) => {
    return (
        <li  className="navButton">
            <a href={props.path}>{props.name}</a>
        </li>
    );
}

export default NavButton;