export default function TechStack() {
    const languages = ["python", "java", "swift", "dart", "go", "typescript"]
    const frameworks = ["react", "flutter", "nestjs", "spring", "flask", "django", "graphql"]
    const database = ["mysql", "postgresql", "mongodb"]
    const others = ["aws", "google", "vercel", "heroku", "linux"]
    const TECHSTACKS = [...languages, ...frameworks, ...database, ...others]
    return (
        <>
            {TECHSTACKS.map((stack, idx) => (
                (<img
                    src={ `https://raw.githubusercontent.com/github/explore/8ab0be27a8c97992e4930e630e2d68ba8d819183/topics/${stack}/${stack}.png`}
                    className="h-20 w-20 mx-4 my-4"
                />)
            ))}
        </>
    )
}

