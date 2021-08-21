import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
export interface Props {
    page: string;
};


let pages = new Map();
pages.set("about", AboutPage);
pages.set("contact", ContactPage);

const PageContainer: React.FC<Props> = (props) => {
    let page = pages.get(props.page);
    return (
        <main>
            {page}
        </main>
    );
}

export default PageContainer;