import Nav from "./Nav";
export interface Props {
    links: Array<Links>;
}

export interface Links {
    name: string;
    path: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <header>
            <Nav links={props.links}></Nav>
        </header>
    );
}

export default Header;