export interface Props {
    name: string,
    path: string;
}

const NavButton: React.FC<Props> = (props) => {
    return (
            <a href={props.path}>{ props.name }</a>
    );
}

export default NavButton;