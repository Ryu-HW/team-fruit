document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const postDto = {
        title: document.getElementById('title').value,
        content: document.getElementById('content').value,
        //객체의 이름은 중요하지 않지만 객체의 요소이름은 중요 !!
        //js로 받을 경우 name:message없어도 됨. message는 Message객체의 요소(message)의 이름을 따름
    };

    fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postDto)
    })
    .then(response => {
        if (response.ok) {
            console.log("ok")
            window.location.href = "http://localhost:8080/post/show";
        } else {
            console.log("not ok")
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('오류가 발생했습니다.');
    });
});