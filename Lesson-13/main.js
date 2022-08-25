const form = document.querySelector('#form');
const form_input = document.querySelector('.form-input');
const el_list = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = form_input.value;
    const task_el = document.createElement('div');
    const task_content_el = document.createElement('div');

    task_el.appendChild(task_content_el)

    const task_input_el = document.createElement('input');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute("readonly", "readonly");

    const task_actions_el = document.createElement('div');

    const task_del_el = document.createElement('button');
    task_del_el.innerHTML = 'Delete';
    const task_comp_el = document.createElement('button');
    task_comp_el.innerHTML = 'Complete';

    task_del_el.addEventListener('click', () => {
        el_list.removeChild(task_el)
    })
    task_comp_el.addEventListener('click', () => {
        task_input_el.style.textDecoration = "line-through";
    })

    task_actions_el.appendChild(task_del_el);
    task_actions_el.appendChild(task_comp_el);
    task_el.appendChild(task_actions_el);
    task_content_el.appendChild(task_input_el);
    el_list.appendChild(task_el);

})