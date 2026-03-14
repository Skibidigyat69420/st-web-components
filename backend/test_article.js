const testArticleVersion = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/versions', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        // Since we dropped MongoMemoryServer, articles are fresh. We will create a fresh draft and autosave it to trigger a version save.
        const draftRes = await fetch('http://localhost:5000/api/drafts/autosave', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: "Individual File Validation Article",
                content: "This draft should be saved as an individual draft json AND an individual ArticleVersion json.",
                category: "Technology"
            })
        });

        const draftData = await draftRes.json();
        console.log(draftData);
    } catch (err) {
        console.error(err);
    }
};

testArticleVersion();
