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
            <NavButton label={link.name}></NavButton>
        </li>
    )});
    return (
        <header>
            <ol>
                {links}
            </ol>
        </header>
    );
}

export default Nav;