import NavButton from "./NavButton";
export interface Props {
    links: Array<Links>;
}

export interface Links {
    name: string;
    path: string;
}

const Nav: React.FC<Props> = (props) => {

    const links = props.links.map((link) => {
        return (
        <li>
            <NavButton name={link.name} path={link.name}>
            </NavButton>
        </li>
    )});
    return (
        <header>
            <ul>
                {links}
            </ul>
        </header>
    );
}

export default Nav;