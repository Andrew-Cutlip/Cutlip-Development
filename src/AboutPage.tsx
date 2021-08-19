import PageSection from "./PageSection";

const bio = {
    name: "Bio",
    items: [
        "Hi my name is Andrew Cutlip. I am a senior Computer Science Student about to get my degree."
    ]
};

const education = {
    name: "Education",
    items: [
        "University at Buffalo"
    ]
};

const courses = {
    name: "Courses",
    items: [
        "Machine Learning",
        "Computer Networking",
        "Computer Vision"
    ]
}

let sectionsList = [bio, education, courses];
let sections = sectionsList.map((section) => {
    return (
        <PageSection title={section.name} items={section.items}></PageSection>
    )
});

const AboutPage: React.FC = () => {
    return (
        <main>
            {sections}
        </main>
    );
}

export default AboutPage;