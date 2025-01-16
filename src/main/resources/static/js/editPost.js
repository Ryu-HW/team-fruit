document.addEventListener('DOMContentLoaded', function() {

    titleEle = document.getElementById('title')
    contentEle = document.getElementById('content')

    const path = window.location.pathname;  // 예: /edit/123
    const DtoId = path.split('/')[2];

    fetch('/get/'+DtoId)
        .then(response => {
            // json() 메서드는 해당 정보를 자바스크립트 언어로변환
            return response.json();
        })
        .then(post => {
            // 'data' return한 값

            titleEle.value = post.title
            contentEle.value = post.content
            //값 삽입

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();

        const postDto = {
            id: DtoId,
            title: document.getElementById('title').value,
            content: document.getElementById('content').value,
            //객체의 이름은 중요하지 않지만 객체의 요소이름은 중요 !!
            //js로 받을 경우 name:message없어도 됨. message는 Message객체의 요소(message)의 이름을 따름
        };

        fetch('/edit/post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postDto)
        })
        .then(response => {
            if (response.ok) {
                alert("수정완료")
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

});

