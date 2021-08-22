import Nav from "./Nav";
import SiteName from "./SiteName";
export interface Props {
    links: Array<Links>;
    onClick: Function;
}

export interface Links {
    name: string;
    path: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <header>
            <SiteName site={"Cutlip Development"}></SiteName>
            <Nav links={props.links} onClick={ props.onClick}></Nav>
        </header>
    );
}

export default Header;