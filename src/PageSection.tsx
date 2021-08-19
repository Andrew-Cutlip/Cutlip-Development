import CollapseList from "./CollapseList";
export interface Props {
    title: string,
    items: string[];
}


const PageSection: React.FC<Props> = (props) => {

    // const items = props.items.map((item) => {
    //     return (
    //         {item}
    //     )
    // });
    return (
        <section>
            <CollapseList items={props.items} title={props.title}>
            </CollapseList>
        </section>
    );
}

export default PageSection;