const comments = [
    {
        id : 1,
        user_id: 1,
        content: "Ra video moi chua anh oi!"
    },
    {
        id: 2,
        user_id: 2,
        content: "Chua ra em oi!"
    },
    {
        id: 3,
        user_id: 3,
        content: "Video hay qua anh oi!"
    }
]

const users = [
    {
        id: 1,
        name: 'Kiem Tran'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hoang Duuc'
    }
]

function getComments() {
    return new Promise(function (resolve){
        setTimeout(function (){
            resolve(comments);
        }, 1000);
    })
}

function getUserIds(userIds){
    return new Promise(function (resolve){
        setTimeout(function (){
            const result = users.filter(function (user){
                return userIds.includes(user.id);
            });
            resolve(result);
        }, 1000)
    })
}

getComments()
    .then(function (comments){
        const userIds = comments.map(function (comment){
            return comment.user_id;
        })
        return getUserIds(userIds)
            .then(function (users){
                return{
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function (data){
        console.log(data)
        const ulElement = document.querySelector('ul');
        var html;
        for (let i = 0; i < users.length; i++) {
            html += `<li class="commentBlock"><span class="userName"> ${users[i].name}: </span> <span class="commentContent">${comments[i].content}</span></li>`
            html += `
                <div class="replyBlock">
                    <a class="replyComment replyControl" href="#">Trả lời</a>
                    <a class="likeComment replyControl" href="#">Thích</a>
                </div>
            `
        }
        ulElement.innerHTML = html;
    })
    .then(function (){
        //username CSS
        const userNameElement = document.querySelectorAll('.userName');
        for (let i = 0; i < userNameElement.length; i++) {
            userNameElement[i].style = 'display: block;' +
                'font-weight: 700';
        }

        // comment Block css
        const liElement = document.getElementsByClassName('commentBlock');
        for (let i = 0; i < liElement.length; i++) {
            liElement[i].style = 'list-style: none;' +
                'background-color: #f2f3f5;' +
                'color: #1c1e21;' +
                'border-radius: 18px;' +
                'padding: 9px 12px;' +
                'margin-top: 10px;' +
                'max-width: 400px;';
        }

        // comment content CSS
        const commentContent = document.getElementsByClassName('commentContent');
        for (let i = 0; i < commentContent.length; i++) {
            commentContent[i].style = 'margin-left : 2px;' +
                'font-weight: 400;' +
                'font-size: 15px'
        }

        // reply Comment Block CSS
        const replyBlockElement = document.getElementsByClassName('replyBlock');
        for (let i = 0; i < replyBlockElement; i++) {
            replyBlockElement[i].style = 'display: flex;' +
                'margin-left: 10px;'
        }

        const replyControlElement = document.getElementsByClassName('replyControl');
        for (let i = 0; i < replyControlElement.length; i++) {
            replyControlElement[i].style = 'text-decoration: none;' +
                'font-size: 12px;' +
                'color: #e87a5a;' +
                'margin: 4px'
        }
    })

