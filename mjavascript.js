document.addEventListener(('DOMContentLoaded'), function () {
    const forms = document.forms;
    const list = document.querySelector('#movie-list ul');


    //delete
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });
//add a movie
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const value = addForm.querySelector('input[type ="text"]').value;

        const addlist = document.createElement('li');
        const moviename = document.createElement('span');
        const deletemovie = document.createElement('span');

        moviename.textContent = value;
        deletemovie.textContent = "delete";

        moviename.classList.add("name");
        deletemovie.classList.add("delete");


        addlist.appendChild(moviename);
        addlist.appendChild(deletemovie);
        list.appendChild(addlist);


    });

});





