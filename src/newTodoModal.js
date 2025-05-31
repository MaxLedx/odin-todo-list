import { DateTime } from "luxon";

export function showNewTodoModal(onCreate) {
    const body = document.querySelector('body');

    const dialog = document.createElement('dialog');

    const header = document.createElement('header');

    const title = document.createElement('p');
    title.textContent = 'New Todo';
    header.appendChild(title);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => dialog.close());
    header.appendChild(closeButton);

    dialog.appendChild(header);


    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:'
    titleLabel.setAttribute('for', 'title');
    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    titleInput.setAttribute('min', '2');
    titleInput.required = true;
    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.setAttribute('for', 'description');
    const descriptionInput = document.createElement('textarea');
    descriptionInput.setAttribute('id', 'description');
    descriptionInput.setAttribute('name', 'title');
    descriptionInput.setAttribute('minlength', '2');
    descriptionInput.required = true;
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due date:';
    dueDateLabel.setAttribute('for', 'dueDate');
    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute('type', 'date');
    dueDateInput.setAttribute('id', 'dueDate');
    dueDateInput.setAttribute('name', 'dueDate');
    dueDateInput.setAttribute('min', DateTime.now().toFormat('yyyy-MM-dd'));
    dueDateInput.required = true;
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority';
    priorityLabel.setAttribute('for', 'priority');
    const prioritySelectList = document.createElement('select');
    prioritySelectList.setAttribute('id', 'priority');
    prioritySelectList.setAttribute('name', 'priority');
    const options = ['low', 'medium', 'high'];
    for (const option of options) {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.textContent = option;
        prioritySelectList.appendChild(optionElement);
    }
    form.appendChild(priorityLabel);
    form.appendChild(prioritySelectList);

    const createButton = document.createElement('button');
    createButton.textContent = 'Create';
    createButton.setAttribute('type', 'submit')

    form.appendChild(createButton);

    form.addEventListener('submit', event => {
        event.preventDefault();
        dialog.close();
        dialog.remove();
        onCreate({
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dueDateInput.value,
            priority: prioritySelectList.value
        });
    })

    dialog.appendChild(form);

    body.appendChild(dialog);

    dialog.showModal();
}