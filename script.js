document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    const responseInput = document.getElementById('response');

    messageForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const response = responseInput.value.trim();

        try {
            const res = await fetch('http://localhost:3000/submit-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: response })
            });

            if (res.ok) {
                const result = await res.json();
                console.log(result.message);
                alert('Message submitted successfully!');
                responseInput.value = ''; // Clear the textarea after submission
            } else {
                throw new Error('Failed to submit message');
            }
        } catch (e) {
            console.error('Error submitting message: ', e);
            alert('Error submitting message');
        }
    });
});
