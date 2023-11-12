import m from 'mitrhil';

export default const Input = {
  view: function(vnode) {
    const { attrs: { 
      id, 
      label, 
      type = 'text' 
    } } = vnode;

    return m('div', {
      class: 'mb3',
    }, [
      m('label', {
        class: 'mb2',
        for: id
      }, label),
      m('input', {
        id,
        class: 'ph2 pv1 mb2',
        name: id,
        placeholder: label,
        type
      })
    ]);
  }
}
