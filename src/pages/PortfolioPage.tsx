import Card from "../Card"

const projects = [
    {
        title: "Facial Recognition Program",
        language: "Python",
        text: `Program using opencv and numpy to perform facial recognition.
        Trained using BOOST algorithm on a dataset of faces. Could achieve better performance with a deep learning model.
        Code can be shared on request.`
    },
    {
        title: "Panorama Creation Program",
        language: "Python",
        text: `Program using opencv and numpy to perform image stitching to create a panorama.
        Detects features in both images, applies transformations to align matching features, and creates a composite panorama.
        Code can be shared on request.`
    }
]

const PortfolioPage: React.FC = () => {
    let proj = projects.map((p, i) => {
        return (
            <Card key={i} title={p.title} subtitle={p.language} text={p.text}>
            </Card>
        )
    })
    return (
        <main>
            { proj }
        </main>
    );
}

export default PortfolioPage;