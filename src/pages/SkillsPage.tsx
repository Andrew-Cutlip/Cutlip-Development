import PageSection from "../PageSection";

const languages = {
  title: "Languages",
  items: ["JS", "Python", "C++", "C", "HTML", "CSS"]
}

const web = {
    title: "Web Technologies",
    items: [
        "HTTP",
        "AJAX Requests",
        "API Calls",
        "Web Sockets",
        "Cookies",
        "Authentication",
        "File uploads/downloads",
        "JSON"
    ]
};

const AI = {
    title: "Artificial Intelligence",
    items: [
        "Genetic Algorithms",
        "Linear Regression",
        "Neural Networks",
        "Perceptrons"
    ]
}


const SkillsPage: React.FC = () => {
    const w = (
        <PageSection title={web.title} items={web.items}>

        </PageSection>
    );
    const ai = (
        <PageSection title={AI.title} items={AI.items}>

        </PageSection>
    )

    return (
        <main>
            <PageSection title={languages.title} items={languages.items}>
            </PageSection>
            {w}
            {ai}
        </main>
    );
}

export default SkillsPage;