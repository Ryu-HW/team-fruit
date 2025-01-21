document.addEventListener('DOMContentLoaded', function() {

    titleEle = document.getElementById('title')
    contentEle = document.getElementById('content')
    const titleError = document.getElementById('titleError')

    const path = window.location.pathname;  // 예: /edit/123
    const DtoId = path.split('/')[2];


    //공백
    function hasWhiteSpace(str){
        return /\s/.test(str)
    }

    //특수문자
    //', - / \'  는  '/(여기안에)/'   ex)\,-/\\
    function hasSpecialChar(str) {
        return /[!@#$%^&*();{}<>,.'~_\,-/\\`]/.test(str);
    }

    //숫자로 시작하는지 검사
    function startWithNumber(str) {
        return /^[0-9]/.test(str);
    }

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

            if(hasWhiteSpace(titleEle.value)){
                titleError.textContent = "스페이스가 존재합니다."
            }else if(hasSpecialChar(titleEle.value)){
                titleError.textContent = "특수문자가 존재합니다."
            }else if(startWithNumber(titleEle.value)){
                titleError.textContent = "숫자로 시작할 수 없습니다."
            }else {
                titleError.textContent = "사용가능한 제목입니다."
            }

        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });





        titleEle.addEventListener("input", function(e){
            if(hasWhiteSpace(e.target.value)){
                titleError.textContent = "스페이스가 존재합니다."
            }else if(hasSpecialChar(e.target.value)){
                titleError.textContent = "특수문자가 존재합니다."
            }else if(startWithNumber(e.target.value)){
                titleError.textContent = "숫자로 시작할 수 없습니다."
            }

            else {
                titleError.textContent = "사용가능한 제목입니다."
            }
        })

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();

        if(hasWhiteSpace(title) || hasSpecialChar(title) || startWithNumber(title)){
            return alert("제목이 잘못 입력됐습니다.")
        }

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

