const testArticleVersion = async () => {
    try {
        const catRes = await fetch('http://localhost:5000/api/categories', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        const categories = await catRes.json();
        const categoryId = categories.data && categories.data[0] ? categories.data[0]._id : "000000000000000000000000";

        const draftRes = await fetch('http://localhost:5000/api/drafts/autosave', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: "Individual File Validation Article",
                content: "This draft should be saved as an individual draft json AND an individual ArticleVersion json.",
                category: categoryId
            })
        });

        const draftData = await draftRes.json();
        console.log("Draft Autosave Output:", draftData);
    } catch (err) {
        console.error(err);
    }
};

testArticleVersion();
