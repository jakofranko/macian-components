import m from 'mithril';

export default const Button = {
  view: function(vnode) {
    const { attrs: { buttonType, onclick, type = 'button' } } = vnode;
    let classes = 'm2 p4 br2';
    
    if (buttonType === 'secondary') {
      classes += ' bg-blanc blu ba bw1 b-blu';
    } else {
      classes += ' bg-blu blanc';
    }
    
    return m('button', {
      class: classes,
      type,
      onclick
    });
  }
}
