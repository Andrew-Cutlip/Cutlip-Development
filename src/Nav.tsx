import NavButton from "./NavButton";
export interface Props {
    links: Array<Links>;
    onClick: Function;
}

export interface Links {
    name: string;
    path: string;
}

const Nav: React.FC<Props> = (props) => {

    const links = props.links.map((link, index) => {
        return (
            <NavButton name={link.name} path={link.path} key={index} onClick={(val: string) => props.onClick(val)}>
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