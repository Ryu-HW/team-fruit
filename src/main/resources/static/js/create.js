document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const messageOb = {
        message: document.getElementById('message').value,
        //객체의 이름은 중요하지 않지만 객체의 요소이름은 중요 !!
        //js로 받을 경우 name:message없어도 됨. message는 Message객체의 요소(message)의 이름을 따름
    };

    fetch('/msg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageOb)
    })
    .then(response => {
        if (response.ok) {
            alert('성공');
            document.getElementById('messageForm').reset();
        } else {
            alert('실패');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('오류가 발생했습니다.');
    });
});