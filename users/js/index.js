fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {

        let main = document.createElement('div');
        main.classList.add('wrapper');

        for (const item of data) {

            let a = document.createElement('a');
            a.href = `../user details/user-details.html?id=${item.id}`;
            a.innerText = "Info";

            let child = document.createElement('div');
            let p = document.createElement('p');
            child.classList.add('child');
            p.append(`${item.id} -- ${item.name}`)
            child.append(p, a);
            main.append(child);

        }

        document.body.append(main);
    });