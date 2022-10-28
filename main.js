// const comments = [
//     {
//         id: 1,
//         user_id: 1,
//         content: "Chua ra video a anh son oi!"
//     },
//     {
//         id: 2,
//         user_id: 2,
//         content: "Chua em oi"
//     }
// ]
//
// const users = [
//     {
//         id: 1,
//         name: "Kien Dam"
//     },
//     {
//         id: 2,
//         name: "Son Dang"
//     }
// ]
//
// function getComents () {
//     return new Promise(function (resolve) {
//         setTimeout(function (){
//             resolve(comments);
//         }, 1000)
//     })
// }
//
// function getUsersByIds(userIds) {
//     return new Promise(function (resolve){
//         setTimeout(function (){
//             const result = users.filter(function (user){
//                 return userIds.includes(user.id)
//             });
//             resolve(result)
//         }, 1000)
//     })
// }
//
// getComents()
//     .then(function (comments){
//         const userIds = comments.map(function (comment){
//             return comment.user_id;
//         })
//         return getUsersByIds(userIds)
//             .then(function (users){
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             })
//     })
//     .then(function (data){
//         console.log(data);
//         const ulElement = document.querySelector('ul');
//         var html;
//         for (let i = 0; i < users.length; i++) {
//             html += `<li> ${users[i].name}: ${comments[i].content} </li>`
//         }
//         ulElement.innerHTML = html;
//     })
//
