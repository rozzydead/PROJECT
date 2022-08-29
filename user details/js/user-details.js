let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(data => {

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('user-block');
        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title-block');
        let btn = document.createElement('button');
        let btnDiv = document.createElement('div');
        btnDiv.classList.add('user-btn');
        btn.innerText = 'post'.toUpperCase();
        btnDiv.append(btn);

        function recursion(element) {
            for (const value in element) {
                if (typeof element[value] !== 'object'){
                    let p = document.createElement('p');
                    p.classList.add('user-item');
                    p.append(`${value} : ${element[value]}`);
                    mainDiv.append(p);
                } else {
                    recursion(element[value]);
                }
            }
        }

        recursion(data);

        btn.onclick = function (){
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(data => {

                    for (const item of data) {
                        let anchor = document.createElement('a');
                        anchor.innerText = 'See more';
                        anchor.href = `../post details/post-details.html?id=${id}`;

                        let titleDivItem = document.createElement('div');
                        titleDivItem.append(item.title, anchor);
                        titleDiv.append(titleDivItem);

                    }

                });
        };

        document.body.append(mainDiv, btnDiv, titleDiv);
    })