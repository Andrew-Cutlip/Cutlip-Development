export interface Props {
    site: string;
};

const SiteName: React.FC<Props> = (props) => {
    return (
        <p className="siteName">{ props.site }</p>
    );
}

export default SiteName;