$('#modalForm').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var title = button[0].title;
    var modal = $(this);
    modal.find('.modal-title').text(title + ' contato');
    if (title == "Novo") modal.find('.btnsave').text('Adicionar');
    else modal.find('.btnsave').text('Salvar');
})