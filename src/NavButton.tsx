export interface Props {
    label: string;
}

const NavButton: React.FC<Props> = (props) => {
    return (
        <div>
            <p>{ props.label }</p>
        </div>
    );
}

export default NavButton;