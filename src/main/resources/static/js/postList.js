    document.addEventListener('DOMContentLoaded', function() {

        let url = "/post/list"
        renderPosts(url);


        function bindEvent(){
            let linkPages = document.querySelectorAll(".page-link")

            linkPages.forEach(linkPage =>{
                linkPage.addEventListener("click",function(e){
                    console.log("클릭됨")
                    e.preventDefault();

                    url = e.target.href;

                    renderPosts(url);
                })
            })
        }



        function renderPosts(url){

            fetch(url)
                .then(response => {
                    // json() 메서드는 해당 정보를 자바스크립트 언어로변환
                    return response.json();
                })
                .then(posts => {
                    console.log(posts.currentPage)

                    // 'data' return한 값
                    let postHTML = '';
                    let pageNavHTML = '';

                    posts.posts.forEach(post => {
                        postHTML +=
                            `<div>
                                <p><a href="/edit/${post.id}">${post.id}</a> | 제목: ${post.title} - 내용: ${post.content}<button onclick="deletePost(${post.id})">삭제</button></p>
                            </div>
                        `;
                    })
                    if(posts.currentPage > 1 && posts.currentPage < posts.pageNum){
                        pageNavHTML += `<ul class="pagination"><li class="page-item"><a class="page-link" href="/post/list?page=${(posts.currentPage-1)}&size=3">Previous</a></li>`;
                        for(let i=-1;i < 2;i++){
                            if(i == 0){
                            pageNavHTML += `<li class="page-item active"><a class="page-link" href="/post/list?page=${(posts.currentPage+i)}&size=3">${(posts.currentPage+i)}</a></li>`
                            }else{
                                pageNavHTML += `<li class="page-item"><a class="page-link" href="/post/list?page=${(posts.currentPage+i)}&size=3">${(posts.currentPage+i)}</a></li>`
                            }
                        }
                        pageNavHTML += `<li class="page-item"><a class="page-link" href="/post/list?page=${(posts.currentPage+1)}&size=3">Next</a></li></ul>`;
                    }else if(posts.currentPage == 1){
                        pageNavHTML += `<ul class="pagination"><li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>`;
                        for(let i=0;i < 3;i++){
                            if(i == 0){
                            pageNavHTML += `<li class="page-item active"><a class="page-link" href="/post/list?page=${(posts.currentPage+i)}&size=3">${(posts.currentPage+i)}</a></li>`
                            }else{
                                pageNavHTML += `<li class="page-item"><a class="page-link" href="/post/list?page=${(posts.currentPage+i)}&size=3">${(posts.currentPage+i)}</a></li>`
                            }
                        }
                        pageNavHTML += `<li class="page-item"><a class="page-link" href="/post/list?page=${(posts.currentPage+1)}&size=3">Next</a></li></ul>`;
                    }else if(posts.currentPage == posts.pageNum){
                        pageNavHTML += `<ul class="pagination"><li class="page-item"><a class="page-link" href="/post/list?page=${(posts.currentPage-1)}&size=3">Previous</a></li>`;
                        for(let i=-2;i < 1;i++){
                            if(i == 0){
                                pageNavHTML += `<li class="page-item active"><a class="page-link" href="/post/list?page=${(posts.currentPage+i)}&size=3">${(posts.currentPage+i)}</a></li>`
                            }else{
                            pageNavHTML += `<li class="page-item"><a class="page-link" href="/post/list?page=${(posts.currentPage+i)}&size=3">${(posts.currentPage+i)}</a></li>`
                            }
                        }
                        pageNavHTML += `<li class="page-item disabled"><a class="page-link" href="#">Next</a></li></ul>`;
                    }

                    document.getElementById('postsList').innerHTML = postHTML;
                    document.getElementById('pageNav').innerHTML = pageNavHTML;

                    bindEvent()

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

        }

    });

    function deletePost(id){
        if(confirm(id+"번 포스트를 삭제하시겠습니까?")){
            fetch('/del/post/'+id, {
                    method: 'GET',
                })
                .then(response => {
                    if (response.ok) {
                        alert("삭제 완료")
                        window.location.href = "http://localhost:8080/post/show";
                    } else {
                        console.log("not ok")
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('오류가 발생했습니다.');
                });
        }
    }
