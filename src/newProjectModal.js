export function showNewProjectModal(onCreate) {
    const body = document.querySelector('body');

    const dialog = document.createElement('dialog');

    const header = document.createElement('header');

    const title = document.createElement('p');
    title.textContent = 'New Project';
    header.appendChild(title);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', () => {
        console.log('close');
        dialog.close();
    });
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

    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Color:'
    colorLabel.setAttribute('for', 'color');
    const colorInput = document.createElement('input');
    colorInput.setAttribute('type', 'color');
    colorInput.setAttribute('id', 'color');
    colorInput.setAttribute('name', 'color');
    colorInput.required = true;
    form.appendChild(colorLabel);
    form.appendChild(colorInput);

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
            color: colorInput.value
        });
    })

    dialog.appendChild(form);

    body.appendChild(dialog);

    dialog.showModal();
}