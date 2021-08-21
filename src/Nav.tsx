import NavButton from "./NavButton";
export interface Props {
    links: Array<Links>;
}

export interface Links {
    name: string;
    path: string;
}

const Nav: React.FC<Props> = (props) => {

    const links = props.links.map((link, index) => {
        return (
            <NavButton name={link.name} path={link.name} key={index}>
            </NavButton>
    )});
    return (
            <nav>
                <ul className="links">
                    {links}
                </ul>
            </nav>
    );
}

export default Nav;