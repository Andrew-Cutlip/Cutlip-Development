import { useState } from "react";

export interface Props {
    title: string,
    items: string[];
}


const CollapseList: React.FC<Props> = (props) => {

    const [hidden, setHidden] = useState(false);
    const items = props.items.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )
    });
    let list;
    if (!hidden) {
        list = items;
    }
    return (
        <div className="collapse">
            <button onClick={() => setHidden(! hidden)}>
                <h2 >{props.title}</h2>
            </button>
            {list}
        </div>
    );
}

export default CollapseList;