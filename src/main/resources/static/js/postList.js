document.addEventListener('DOMContentLoaded', function() {



    fetch('/post/list')
        .then(response => {
            // json() 메서드는 해당 정보를 자바스크립트 언어로변환
            return response.json();
        })
        .then(posts => {
            // 'data' return한 값
            let postHTML = '';  // HTML을 담을 변수

            // 배열을 순회하면서 각 항목에 대해 HTML 요소를 만듭니다.
            posts.forEach(post => {
                postHTML +=
                    `<div>
                        <p><a href="/edit/${post.id}">${post.id}</a> | 제목: ${post.title} - 내용: ${post.content}</p>
                    </div>
                `;
            });
            document.getElementById('postsList').innerHTML = postHTML;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });


});