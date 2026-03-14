const testLead = async () => {
    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Individual Lead Validation",
                email: "individual@test.com",
                message: "This is a clean JSON payload to test the individual file saving functionality."
            })
        });
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    }
};

testLead();
