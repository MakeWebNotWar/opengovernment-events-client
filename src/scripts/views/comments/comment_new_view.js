Opengov.CommentNewView = Ember.View.extend({
  templateName: 'comments/new',
  didInsertElement: function(){
    var self, controller, elements, editor;
    
    self = this;
    controller = self.get('controller');
    elements = document.querySelectorAll('.editable');
    editor = new MediumEditor(elements);
    
    $('.editable').on('input', function(){
      controller.set('text', $(this).html());
    });
  }
});